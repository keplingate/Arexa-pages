// Cloudflare Pages Function: Create Stripe Checkout Session (deposit only)
// Route: POST /api/create-checkout-session
// IMPORTANT: Set STRIPE_SECRET_KEY in Cloudflare Pages project environment variables.

export async function onRequestPost(context) {
  try {
    const req = context.request;
    const { vehicleId, days, mode, currency } = await req.json();

    if (!vehicleId || !days || !mode || !currency) {
      return json({ error: 'Missing required fields' }, 400);
    }

    // Basic allowlist
    const cur = String(currency).toUpperCase();
    if (!['EUR', 'USD', 'MUR'].includes(cur)) {
      return json({ error: 'Unsupported currency' }, 400);
    }

    const d = Math.max(1, parseInt(days, 10) || 1);
    const m = String(mode);
    if (!['with_driver', 'without_driver'].includes(m)) {
      return json({ error: 'Unsupported mode' }, 400);
    }

    // Vehicles pricing table (MUR) — must match js/vehicles-data.js
    const vehicles = VEHICLES_MUR;
    const v = vehicles.find(x => x.id === vehicleId);
    if (!v) return json({ error: 'Vehicle not found' }, 404);

    const dailyMur = m === 'with_driver' ? v.with_driver_mur : v.without_driver_mur;
    if (dailyMur == null) return json({ error: 'Unavailable for selected mode' }, 409);

    const totalMur = dailyMur * d;
    const depositMur = Math.round(totalMur * 0.20);

    // Currency rates (base USD) — must match js/hotels-data.js
    const currencyRates = { USD: 1, EUR: 0.94, MUR: 45 };

    const usd = depositMur / currencyRates.MUR;
    const deposit = usd * currencyRates[cur];

    const stripeCurrency = cur.toLowerCase();
    const unitAmount = toMinorUnit(deposit, stripeCurrency);

    const host = req.headers.get('host');
    const proto = req.headers.get('x-forwarded-proto') || 'https';
    const baseUrl = host ? `${proto}://${host}` : 'https://arexaholidays.pages.dev';

    const productName = `Arexa Holidays — Acompte 20% • ${v.name} • ${m === 'with_driver' ? 'Avec chauffeur' : 'Sans chauffeur'} • ${d} jour${d > 1 ? 's' : ''}`;

    const stripeSecret = context.env.STRIPE_SECRET_KEY;
    if (!stripeSecret) {
      return json({ error: 'Stripe secret key not configured (STRIPE_SECRET_KEY)' }, 500);
    }

    const sessionParams = new URLSearchParams();
    sessionParams.set('mode', 'payment');
    sessionParams.set('success_url', `${baseUrl}/?stripe=success&session_id={CHECKOUT_SESSION_ID}`);
    sessionParams.set('cancel_url', `${baseUrl}/?stripe=cancel`);

    sessionParams.set('line_items[0][price_data][currency]', stripeCurrency);
    sessionParams.set('line_items[0][price_data][product_data][name]', productName);
    sessionParams.set('line_items[0][price_data][unit_amount]', String(unitAmount));
    sessionParams.set('line_items[0][quantity]', '1');

    // Metadata (useful for reconciliation)
    sessionParams.set('metadata[vehicle_id]', vehicleId);
    sessionParams.set('metadata[vehicle_name]', v.name);
    sessionParams.set('metadata[days]', String(d));
    sessionParams.set('metadata[mode]', m);
    sessionParams.set('metadata[deposit_mur]', String(depositMur));

    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeSecret}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: sessionParams.toString()
    });

    const stripeJson = await stripeRes.json();
    if (!stripeRes.ok) {
      return json({ error: 'Stripe error', details: stripeJson }, 500);
    }

    return json({ id: stripeJson.id, url: stripeJson.url });
  } catch (e) {
    return json({ error: 'Server error', message: String(e) }, 500);
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}

function toMinorUnit(amount, currency) {
  // Stripe expects integer in the smallest currency unit.
  // EUR/USD/MUR are 2-decimal currencies.
  const factor = 100;
  return Math.max(1, Math.round((Number(amount) || 0) * factor));
}

const VEHICLES_MUR = [
  { id: 'veh-ref-1-bmw-218i', name: 'White BMW 2‑Series 218i', with_driver_mur: 12000, without_driver_mur: 8500 },
  { id: 'veh-ref-2-bmw-x4', name: 'White BMW X4', with_driver_mur: 12000, without_driver_mur: 9500 },
  { id: 'veh-ref-3-bmw-x5-40e', name: 'BMW X5 40E', with_driver_mur: 13000, without_driver_mur: 10500 },
  { id: 'veh-ref-5-mercedes-c200', name: 'Red Mercedes C 200', with_driver_mur: 13000, without_driver_mur: null },
  { id: 'veh-ref-6-bmw-x5', name: 'White BMW X5', with_driver_mur: 14000, without_driver_mur: null },
  { id: 'veh-ref-7-bmw-530e', name: 'White BMW 5‑Series 530E', with_driver_mur: 14000, without_driver_mur: null },
  { id: 'veh-ref-8-bmw-740ld', name: 'White BMW 7‑Series 740LD', with_driver_mur: 15000, without_driver_mur: null },
  { id: 'veh-ref-9-evoque', name: 'White Range Rover Evoque', with_driver_mur: 13000, without_driver_mur: null },
  { id: 'veh-ref-10-macan', name: 'White Porsche Macan', with_driver_mur: 16000, without_driver_mur: null },
  { id: 'veh-ref-11-velar', name: 'Range Rover Velar', with_driver_mur: 15000, without_driver_mur: 16000 },
  { id: 'veh-ref-12-velar-rdynamic', name: 'Grey Metallic Range Rover Velar R‑Dynamic', with_driver_mur: 15000, without_driver_mur: null },
  { id: 'veh-ref-13-velar-gold', name: 'Gold Range Rover Velar', with_driver_mur: 15000, without_driver_mur: null },
  { id: 'veh-ref-14-range-rover-sport', name: 'White Range Rover Sport', with_driver_mur: 17500, without_driver_mur: null },
  { id: 'veh-ref-15-bmw-7series', name: 'BMW 7‑Series', with_driver_mur: 16500, without_driver_mur: null },
  { id: 'veh-ref-16-macan-s', name: 'Grey Porsche Macan S', with_driver_mur: 16000, without_driver_mur: null },
  { id: 'veh-ref-17-cayenne', name: 'Black Porsche Cayenne', with_driver_mur: 16000, without_driver_mur: null },
  { id: 'veh-ref-18-panamera', name: 'Black Porsche Panamera', with_driver_mur: 16500, without_driver_mur: null }
];
