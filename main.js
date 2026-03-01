// ArexaHolidays - Main Application Logic
// ========================================

// Global State
let currentCurrency = 'USD';
let filteredHotels = [...hotelsDatabase];
let currentFilters = {
    zones: ['Grand Baie', 'Balaclava', 'Bel Ombre'],
    minPrice: 0,
    maxPrice: 2000,
    beachDistance: 3000,
    amenities: [],
    ecoCertified: false,
    ecoAll: false,
    minRating: 0
};

// DOM Elements
const currencySelector = document.getElementById('currency-selector');
const hotelsContainer = document.getElementById('hotels-container');
const resultsCount = document.getElementById('results-count');
const loadingState = document.getElementById('loading-state');
const noResults = document.getElementById('no-results');
const sortSelect = document.getElementById('sort-select');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    initializeCurrencySelector();
    updateZoneCounts();
    renderHotels();
    hideLoading();
});

// Currency Management
function initializeCurrencySelector() {
    currencySelector.addEventListener('change', (e) => {
        currentCurrency = e.target.value;
        renderHotels();
        // Keep vehicles prices in sync
        if (typeof renderVehicles === 'function') {
            renderVehicles();
        }
    });
}

function formatPrice(hotel) {
    const symbol = currencySymbols[currentCurrency];
    let price;
    
    switch(currentCurrency) {
        case 'EUR':
            price = hotel.price_eur;
            break;
        case 'MUR':
            price = hotel.price_mur;
            break;
        default:
            price = hotel.price_usd;
    }
    
    return { symbol, price: price.toLocaleString() };
}

function convertPrice(priceUsd) {
    const rate = currencyRates[currentCurrency];
    return Math.round(priceUsd / rate);
}

// Filter Initialization
function initializeFilters() {
    // Zone filters
    document.querySelectorAll('.zone-filter').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateZoneFilters();
            applyFilters();
        });
    });
    
    // Price range filters
    const minPriceSlider = document.getElementById('min-price');
    const maxPriceSlider = document.getElementById('max-price');
    const minPriceDisplay = document.getElementById('min-price-display');
    const maxPriceDisplay = document.getElementById('max-price-display');
    
    minPriceSlider.addEventListener('input', (e) => {
        currentFilters.minPrice = parseInt(e.target.value);
        updatePriceDisplay();
        applyFilters();
    });
    
    maxPriceSlider.addEventListener('input', (e) => {
        currentFilters.maxPrice = parseInt(e.target.value);
        updatePriceDisplay();
        applyFilters();
    });
    
    function updatePriceDisplay() {
        const symbol = currencySymbols[currentCurrency];
        const min = convertPrice(currentFilters.minPrice);
        const max = convertPrice(currentFilters.maxPrice);
        minPriceDisplay.textContent = `${symbol}${min}`;
        maxPriceDisplay.textContent = `${symbol}${max >= 2000 ? max + '+' : max}`;
    }
    
    // Beach distance filter
    const beachDistanceSlider = document.getElementById('beach-distance');
    const beachDistanceDisplay = document.getElementById('beach-distance-display');
    
    beachDistanceSlider.addEventListener('input', (e) => {
        currentFilters.beachDistance = parseInt(e.target.value);
        beachDistanceDisplay.textContent = `0 - ${currentFilters.beachDistance}m`;
        applyFilters();
    });
    
    // Amenities filters
    document.querySelectorAll('.amenity-filter').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateAmenitiesFilters();
            applyFilters();
        });
    });
    
    // Eco filters
    document.getElementById('eco-certified').addEventListener('change', (e) => {
        currentFilters.ecoCertified = e.target.checked;
        applyFilters();
    });
    
    document.getElementById('eco-all').addEventListener('change', (e) => {
        currentFilters.ecoAll = e.target.checked;
        applyFilters();
    });
    
    // Rating filters
    document.querySelectorAll('.rating-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilters.minRating = parseFloat(e.target.dataset.rating);
            applyFilters();
        });
    });
    
    // Sort selector
    sortSelect.addEventListener('change', () => {
        sortHotels();
        renderHotels();
    });
}

// Filter Update Functions
function updateZoneFilters() {
    currentFilters.zones = Array.from(document.querySelectorAll('.zone-filter:checked'))
        .map(checkbox => checkbox.value);
}

function updateAmenitiesFilters() {
    currentFilters.amenities = Array.from(document.querySelectorAll('.amenity-filter:checked'))
        .map(checkbox => checkbox.value);
}

function updateZoneCounts() {
    const counts = {
        'Grand Baie': 0,
        'Balaclava': 0,
        'Bel Ombre': 0
    };
    
    hotelsDatabase.forEach(hotel => {
        counts[hotel.zone]++;
    });
    
    document.getElementById('count-grand-baie').textContent = `(${counts['Grand Baie']})`;
    document.getElementById('count-balaclava').textContent = `(${counts['Balaclava']})`;
    document.getElementById('count-bel-ombre').textContent = `(${counts['Bel Ombre']})`;
}

// Apply Filters
function applyFilters() {
    filteredHotels = hotelsDatabase.filter(hotel => {
        // Zone filter
        if (!currentFilters.zones.includes(hotel.zone)) return false;
        
        // Price filter
        if (hotel.price_usd < currentFilters.minPrice || hotel.price_usd > currentFilters.maxPrice) return false;
        
        // Beach distance filter
        if (hotel.distance_beach_m > currentFilters.beachDistance) return false;
        
        // Amenities filter
        if (currentFilters.amenities.length > 0) {
            const hasAllAmenities = currentFilters.amenities.every(amenity => 
                hotel.amenities[amenity] === true
            );
            if (!hasAllAmenities) return false;
        }
        
        // Eco filters
        if (currentFilters.ecoCertified) {
            if (hotel.eco.certifications.length === 0) return false;
        }
        
        if (currentFilters.ecoAll && !currentFilters.ecoCertified) {
            if (!hotel.eco.is_candidate) return false;
        }
        
        // Rating filter
        if (hotel.rating < currentFilters.minRating) return false;
        
        return true;
    });
    
    sortHotels();
    renderHotels();
}

// Sort Hotels
function sortHotels() {
    const sortBy = sortSelect.value;
    
    filteredHotels.sort((a, b) => {
        switch(sortBy) {
            case 'price-asc':
                return a.price_usd - b.price_usd;
            case 'price-desc':
                return b.price_usd - a.price_usd;
            case 'rating':
                return b.rating - a.rating;
            case 'beach':
                return a.distance_beach_m - b.distance_beach_m;
            case 'eco':
                const aScore = (a.eco.certifications.length * 2) + (a.eco.is_candidate ? 1 : 0);
                const bScore = (b.eco.certifications.length * 2) + (b.eco.is_candidate ? 1 : 0);
                return bScore - aScore;
            default: // recommended
                return b.rating - a.rating;
        }
    });
}

// Reset Filters
function resetFilters() {
    // Reset zone filters
    document.querySelectorAll('.zone-filter').forEach(checkbox => {
        checkbox.checked = true;
    });
    
    // Reset price filters
    document.getElementById('min-price').value = 0;
    document.getElementById('max-price').value = 2000;
    currentFilters.minPrice = 0;
    currentFilters.maxPrice = 2000;
    
    // Reset beach distance
    document.getElementById('beach-distance').value = 3000;
    currentFilters.beachDistance = 3000;
    document.getElementById('beach-distance-display').textContent = '0 - 3000m';
    
    // Reset amenities
    document.querySelectorAll('.amenity-filter').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset eco filters
    document.getElementById('eco-certified').checked = false;
    document.getElementById('eco-all').checked = false;
    
    // Reset rating
    document.querySelectorAll('.rating-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset sort
    sortSelect.value = 'recommended';
    
    // Reset state
    currentFilters = {
        zones: ['Grand Baie', 'Balaclava', 'Bel Ombre'],
        minPrice: 0,
        maxPrice: 2000,
        beachDistance: 3000,
        amenities: [],
        ecoCertified: false,
        ecoAll: false,
        minRating: 0
    };
    
    applyFilters();
}

// Render Hotels
function renderHotels() {
    hotelsContainer.innerHTML = '';
    resultsCount.textContent = filteredHotels.length;
    
    if (filteredHotels.length === 0) {
        showNoResults();
        return;
    }
    
    hideNoResults();
    
    filteredHotels.forEach(hotel => {
        const card = createHotelCard(hotel);
        hotelsContainer.appendChild(card);
    });
}

// Create Hotel Card
function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'hotel-card';
    
    const { symbol, price } = formatPrice(hotel);
    
    // Build amenities HTML
    const amenitiesHTML = [];
    if (hotel.amenities.pool) amenitiesHTML.push('<span class="amenity-tag"><i class="fas fa-swimming-pool"></i> Piscine</span>');
    if (hotel.amenities.breakfast) amenitiesHTML.push('<span class="amenity-tag"><i class="fas fa-coffee"></i> Petit-déjeuner</span>');
    if (hotel.amenities.all_inclusive) amenitiesHTML.push('<span class="amenity-tag"><i class="fas fa-infinity"></i> All Inclusive</span>');
    if (hotel.amenities.wifi) amenitiesHTML.push('<span class="amenity-tag"><i class="fas fa-wifi"></i> Wi-Fi</span>');
    if (hotel.amenities.spa) amenitiesHTML.push('<span class="amenity-tag"><i class="fas fa-spa"></i> Spa</span>');
    
    // Build badges HTML
    const badgesHTML = [];
    if (hotel.eco.certifications.length > 0) {
        badgesHTML.push(`<span class="badge badge-eco"><i class="fas fa-leaf"></i> ${hotel.eco.certifications[0]}</span>`);
    }
    
    // Build eco certifications HTML
    let ecoCertsHTML = '';
    if (hotel.eco.certifications.length > 0) {
        ecoCertsHTML = `
            <div class="eco-certifications">
                <i class="fas fa-leaf"></i>
                ${hotel.eco.certifications.join(', ')}
            </div>
        `;
    }
    
    // Build rating label
    let ratingLabel = 'Excellent';
    if (hotel.rating < 3.5) ratingLabel = 'Correct';
    else if (hotel.rating < 4) ratingLabel = 'Bien';
    else if (hotel.rating < 4.5) ratingLabel = 'Très bien';
    else if (hotel.rating >= 4.7) ratingLabel = 'Exceptionnel';
    
    // Beach distance display
    let beachText = hotel.distance_beach_m === 0 ? 'Plage privée' : `${hotel.distance_beach_m}m de la plage`;
    
    card.innerHTML = `
        <div class="hotel-image-container">
            <img src="${hotel.media.thumbnail}" alt="${hotel.name}" class="hotel-image" onerror="this.src='https://via.placeholder.com/350x280/4A90E2/FFFFFF?text=${encodeURIComponent(hotel.name)}'">
            ${badgesHTML.length > 0 ? `<div class="hotel-badges">${badgesHTML.join('')}</div>` : ''}
            ${hotel.media.youtube_videos.length > 0 ? `<div class="video-icon"><i class="fab fa-youtube"></i> ${hotel.media.youtube_videos.length} vidéo${hotel.media.youtube_videos.length > 1 ? 's' : ''}</div>` : ''}
        </div>
        
        <div class="hotel-info">
            <div class="hotel-header">
                <div>
                    <h3 class="hotel-name">${hotel.name}</h3>
                    <div class="hotel-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${hotel.zone}, Île Maurice
                    </div>
                </div>
                <div class="hotel-rating">
                    <span class="rating-badge">${hotel.rating}</span>
                    <div>
                        <div class="rating-label">${ratingLabel}</div>
                        <div class="rating-reviews">${hotel.reviews} avis</div>
                    </div>
                </div>
            </div>
            
            <p class="hotel-description">${hotel.description}</p>
            
            <div class="hotel-amenities">
                ${amenitiesHTML.slice(0, 5).join('')}
            </div>
            
            <div class="hotel-footer">
                <div class="beach-distance">
                    <i class="fas fa-water"></i>
                    ${beachText}
                </div>
                ${ecoCertsHTML}
            </div>
        </div>
        
        <div class="hotel-booking">
            <div class="price-info">
                <div class="price-label">À partir de</div>
                <div class="price-amount">
                    <span class="price-currency">${symbol}</span>${price}
                </div>
                <div class="price-night">par nuit</div>
            </div>
            <div>
                <button class="btn-primary" onclick="openInquiryModal('${hotel.id}')">
                    Demander un devis
                </button>
                ${hotel.media.youtube_videos.length > 0 ? `
                    <button class="btn-secondary" onclick="openVideoModal('${hotel.id}')">
                        <i class="fab fa-youtube"></i> Voir la visite
                    </button>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Video Modal (simplified - opens in new tab)
function openVideoModal(hotelId) {
    const hotel = hotelsDatabase.find(h => h.id === hotelId);
    if (hotel && hotel.media.youtube_videos.length > 0) {
        window.open(hotel.media.youtube_videos[0], '_blank');
    }
}

// Inquiry modal (no direct booking on partner websites)
function openInquiryModal(hotelId) {
    const modal = document.getElementById('inquiry-modal');
    const body = document.getElementById('inquiry-body');
    const status = document.getElementById('inquiry-status');
    if (!modal || !body) return;

    const hotel = hotelsDatabase.find(h => h.id === hotelId);
    if (!hotel) return;

    const guests = document.getElementById('guests-select')?.value || '2';
    const checkIn = document.getElementById('check-in')?.value || '';
    const checkOut = document.getElementById('check-out')?.value || '';

    body.innerHTML = `
      <div class="pay-row"><div>Hôtel</div><div><strong>${hotel.name}</strong></div></div>
      <div class="pay-row"><div>Zone</div><div>${hotel.zone}</div></div>
      <div class="pay-row"><div>Dates</div><div>${checkIn} → ${checkOut}</div></div>
      <div class="pay-row"><div>Hôtes</div><div>${guests}</div></div>
      <hr />
      <div class="pay-note">
        Conformément à notre politique, la réservation n’est pas effectuée sur le site partenaire.
        Nous te recontactons pour confirmer disponibilité, conditions et options de package.
      </div>
      <div class="form-row">
        <label>Ton nom</label>
        <input id="inq-name" type="text" placeholder="Nom et prénom" />
      </div>
      <div class="form-row">
        <label>Email</label>
        <input id="inq-email" type="email" placeholder="email@exemple.com" />
      </div>
      <div class="form-row">
        <label>Message</label>
        <textarea id="inq-msg" rows="4" placeholder="Préférences (vue mer, all inclusive, transfert, etc.)"></textarea>
      </div>
    `;

    if (status) status.textContent = '';
    modal.classList.add('open');

    const sendBtn = document.getElementById('inquiry-send-btn');
    if (sendBtn) {
      sendBtn.onclick = () => {
        const nm = document.getElementById('inq-name')?.value?.trim();
        const em = document.getElementById('inq-email')?.value?.trim();
        if (!nm || !em) {
          status.textContent = 'Merci de renseigner ton nom et ton email.';
          return;
        }
        status.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi de la demande (simulation)…';
        window.setTimeout(() => {
          status.innerHTML = '<i class="fas fa-check-circle"></i> Demande envoyée (simulation). Nous revenons vers toi rapidement.';
        }, 900);
      };
    }
}

function closeInquiryModal() {
    document.getElementById('inquiry-modal')?.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inquiry-close')?.addEventListener('click', closeInquiryModal);
    document.getElementById('inquiry-overlay')?.addEventListener('click', closeInquiryModal);
});

// Utility Functions
function scrollToResults() {
    document.getElementById('results-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function showLoading() {
    loadingState.style.display = 'block';
    hotelsContainer.style.display = 'none';
    noResults.style.display = 'none';
}

function hideLoading() {
    loadingState.style.display = 'none';
    hotelsContainer.style.display = 'flex';
}

function showNoResults() {
    noResults.style.display = 'block';
    hotelsContainer.style.display = 'none';
}

function hideNoResults() {
    noResults.style.display = 'none';
    hotelsContainer.style.display = 'flex';
}

// Export functions to global scope
window.resetFilters = resetFilters;
window.scrollToResults = scrollToResults;
window.openVideoModal = openVideoModal;
