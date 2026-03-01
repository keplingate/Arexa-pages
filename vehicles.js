// ArexaHoliday - Vehicles UI + Stripe deposit simulation (20%)

function murToCurrency(murAmount, currency) {
  const usd = murAmount / currencyRates.MUR; // currencyRates are base USD
  return usd * currencyRates[currency];
}

function formatMoney(amount, currency) {
  const symbol = currencySymbols[currency] || '';
  const rounded = currency === 'MUR' ? Math.round(amount) : Math.round(amount * 100) / 100;
  return `${symbol}${rounded.toLocaleString('fr-FR')}`;
}

function getVehicleDailyRateMur(vehicle, mode) {
  if (mode === 'with_driver') return vehicle.pricing.with_driver_mur;
  return vehicle.pricing.without_driver_mur;
}

function renderVehicles() {
  const container = document.getElementById('vehicles-container');
  if (!container || typeof vehiclesDatabase === 'undefined') return;

  const daysInput = document.getElementById('vehicle-days');
  const modeSelect = document.getElementById('vehicle-mode');

  const days = Math.max(1, parseInt(daysInput?.value || '1', 10));
  const mode = modeSelect?.value || 'with_driver';

  container.innerHTML = '';

  vehiclesDatabase.forEach(v => {
    const dailyMur = getVehicleDailyRateMur(v, mode);
    const isUnavailable = dailyMur == null;

    const totalMur = isUnavailable ? null : (dailyMur * days);
    const depositMur = totalMur == null ? null : Math.round(totalMur * VEHICLE_DEPOSIT_RATE);

    const dailyInCurrency = dailyMur == null ? null : murToCurrency(dailyMur, currentCurrency);
    const totalInCurrency = totalMur == null ? null : murToCurrency(totalMur, currentCurrency);
    const depositInCurrency = depositMur == null ? null : murToCurrency(depositMur, currentCurrency);

    const card = document.createElement('div');
    card.className = 'vehicle-card';

    const notes = (v.notes || []).slice(0, 3).map(n => `<span class="amenity-tag">${n}</span>`).join('');

    card.innerHTML = `
      <div class="vehicle-media">
        <div class="vehicle-media-placeholder">
          <i class="fas fa-car-side"></i>
          <div class="vehicle-media-text">Aperçu (survol vidéo à venir)</div>
        </div>
      </div>

      <div class="vehicle-info">
        <div class="vehicle-header">
          <div>
            <div class="vehicle-title">${v.name}</div>
            <div class="vehicle-subtitle">Ref ${v.ref}${v.year ? ` • ${v.year}` : ''} • ${v.category}</div>
          </div>
          <div class="vehicle-price">
            ${dailyMur == null ? `<span class="badge badge-muted">Indispo sans chauffeur</span>` : `
              <div class="price-amount">${formatMoney(dailyInCurrency, currentCurrency)}<span class="price-night"> / jour</span></div>
              <div class="price-night">(${formatMoney(dailyMur, 'MUR')} / jour)</div>
            `}
          </div>
        </div>

        <div class="vehicle-notes">${notes}</div>

        <div class="vehicle-booking">
          <div class="vehicle-booking-summary">
            ${totalMur == null ? `<div class="muted">Choisis “Avec chauffeur” pour ce véhicule.</div>` : `
              <div><strong>Total</strong> (${days} jour${days > 1 ? 's' : ''}) : ${formatMoney(totalInCurrency, currentCurrency)} <span class="muted">(${formatMoney(totalMur, 'MUR')})</span></div>
              <div><strong>Acompte 20%</strong> : ${formatMoney(depositInCurrency, currentCurrency)} <span class="muted">(${formatMoney(depositMur, 'MUR')})</span></div>
              <div class="muted">Solde à régler : ${formatMoney(murToCurrency(totalMur - depositMur, currentCurrency), currentCurrency)}</div>
            `}
          </div>

          <button class="btn-primary" ${totalMur == null ? 'disabled' : ''} data-veh="${v.id}" onclick="openVehiclePaymentModal('${v.id}')">
            Simuler paiement acompte (Stripe)
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function openVehiclePaymentModal(vehicleId) {
  const modal = document.getElementById('vehicle-payment-modal');
  const modalBody = document.getElementById('vehicle-payment-body');
  if (!modal || !modalBody) return;

  const v = vehiclesDatabase.find(x => x.id === vehicleId);
  if (!v) return;

  const days = Math.max(1, parseInt(document.getElementById('vehicle-days')?.value || '1', 10));
  const mode = document.getElementById('vehicle-mode')?.value || 'with_driver';
  const dailyMur = getVehicleDailyRateMur(v, mode);
  if (dailyMur == null) return;

  const totalMur = dailyMur * days;
  const depositMur = Math.round(totalMur * VEHICLE_DEPOSIT_RATE);
  const total = murToCurrency(totalMur, currentCurrency);
  const deposit = murToCurrency(depositMur, currentCurrency);

  modalBody.innerHTML = `
    <div class="pay-row"><div>Véhicule</div><div><strong>${v.name}</strong></div></div>
    <div class="pay-row"><div>Option</div><div>${mode === 'with_driver' ? 'Avec chauffeur' : 'Sans chauffeur'}</div></div>
    <div class="pay-row"><div>Durée</div><div>${days} jour${days > 1 ? 's' : ''}</div></div>
    <hr />
    <div class="pay-row"><div>Total</div><div>${formatMoney(total, currentCurrency)} <span class="muted">(${formatMoney(totalMur, 'MUR')})</span></div></div>
    <div class="pay-row"><div>Acompte (20%)</div><div class="pay-strong">${formatMoney(deposit, currentCurrency)} <span class="muted">(${formatMoney(depositMur, 'MUR')})</span></div></div>
    <div class="pay-row"><div>Solde</div><div>${formatMoney(murToCurrency(totalMur - depositMur, currentCurrency), currentCurrency)}</div></div>
    <div class="pay-note">
      Mode démo : cette simulation reproduit la logique “Stripe Checkout acompte 20%”.
      Le paiement réel nécessitera vos clés Stripe et une Function côté Cloudflare.
    </div>
  `;

  modal.classList.add('open');

  const payBtn = document.getElementById('vehicle-pay-btn');
  payBtn.onclick = () => simulateStripePayment({ vehicleId, days, mode, depositMur });
}

function closeVehiclePaymentModal() {
  const modal = document.getElementById('vehicle-payment-modal');
  modal?.classList.remove('open');
}

async function simulateStripePayment(order) {
  // Real Stripe (TEST MODE) — creates a Checkout Session via Cloudflare Pages Function
  const status = document.getElementById('vehicle-payment-status');
  const payBtn = document.getElementById('vehicle-pay-btn');
  if (!status || !payBtn) return;

  payBtn.disabled = true;
  status.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Création de la session Stripe…';

  try {
    const payload = {
      vehicleId: order.vehicleId,
      days: order.days,
      mode: order.mode,
      currency: currentCurrency
    };

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (!res.ok || !data.url) {
      throw new Error(data?.error || 'Stripe session error');
    }

    status.innerHTML = '<i class="fas fa-check-circle"></i> Redirection vers Stripe…';
    window.location.href = data.url;
  } catch (e) {
    status.innerHTML = `<i class="fas fa-triangle-exclamation"></i> Erreur : ${String(e.message || e)}`;
    payBtn.disabled = false;
  }
}

// Wiring
document.addEventListener('DOMContentLoaded', () => {
  const daysInput = document.getElementById('vehicle-days');
  const modeSelect = document.getElementById('vehicle-mode');

  daysInput?.addEventListener('input', renderVehicles);
  modeSelect?.addEventListener('change', renderVehicles);

  // Close modal
  document.getElementById('vehicle-payment-close')?.addEventListener('click', closeVehiclePaymentModal);
  document.getElementById('vehicle-payment-overlay')?.addEventListener('click', closeVehiclePaymentModal);

  renderVehicles();
});
