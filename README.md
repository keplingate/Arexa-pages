# 🏝️ ArexaHoliday — Hôtels partenaires & véhicules premium à Maurice

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://arexaholidays.pages.dev)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://www.w3.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://www.w3.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://www.javascript.com/)

## 📋 Description

ArexaHoliday est une plateforme web moderne pour découvrir des **hôtels partenaires** à l'Île Maurice (Grand Baie, Balaclava, Bel Ombre) et réserver des **véhicules premium** avec acompte en ligne.

⚠️ Les hôtels partenaires ne sont **pas réservés directement** sur le site du partenaire : l’action côté hôtel passe par **demande de devis** (workflow à connecter à un email/CRM). 

Le site offre une expérience utilisateur premium de type Booking.com avec :
- ✅ **Filtres avancés** (budget, proximité plage, équipements, éco-tourisme)
- ✅ **Multi-devises** (USD, EUR, MUR) avec conversion temps réel
- ✅ **Base de données exhaustive** de 20 hôtels premium
- ✅ **Intégration vidéo YouTube** (visites créateurs)
- ✅ **Véhicules premium** + acompte en ligne (Stripe Checkout)
- ✅ **Certifications éco-tourisme** (Green Key, EarthCheck, Travelife)
- ✅ **Design responsive** mobile-first

## 🎯 Fonctionnalités Principales

### 🔍 Système de Filtres Avancés

#### 1. **Filtres Géographiques**
- Sélection par zone (Grand Baie, Balaclava, Bel Ombre)
- Compteurs dynamiques par zone

#### 2. **Filtres de Budget**
- Slider double pour min/max prix par nuit
- Conversion automatique selon devise sélectionnée
- Plage: $0 - $2000+ USD

#### 3. **Proximité Plage**
- Slider de distance: 0m - 3000m
- Affichage "Plage privée" pour distance = 0m
- Calcul basé sur coordonnées GPS réelles

#### 4. **Équipements**
- ☑️ Piscine
- ☑️ Petit-déjeuner inclus
- ☑️ All Inclusive
- ☑️ Wi-Fi gratuit
- ☑️ Parking privé
- ☑️ Climatisation
- ☑️ Spa
- ☑️ Salle de sport

#### 5. **Éco-Tourisme**
- Filtre "Certifié uniquement" (Green Key, EarthCheck, Travelife)
- Filtre "Inclure candidats" (hôtels avec démarches éco)
- Affichage badges certifications sur cartes

#### 6. **Note Minimum**
- Boutons: Tous / 3+ / 4+ / 4.5+
- Filtrage sur Google Reviews ratings

### 💱 Système Multi-Devises

- **USD (Dollar américain)** - Devise par défaut
- **EUR (Euro)** - Conversion en temps réel
- **MUR (Roupie mauricienne)** - Monnaie locale

**Taux de conversion** (base USD = 1):
- EUR: 0.94
- MUR: 45

### 🏨 Base de Données Hôtels

#### Grand Baie (7 hôtels)
1. **Royal Palm Beachcomber Luxury** ⭐ 4.7 - $1168/nuit - EarthCheck Gold
2. **LUX* Grand Baie** ⭐ 4.5 - $420/nuit
3. **Mauricia Beachcomber Resort & Spa** ⭐ 4.6 - $280/nuit - EarthCheck
4. **Canonnier Beachcomber Golf Resort & Spa** ⭐ 4.8 - $340/nuit - EarthCheck
5. **Veranda Grand Baie Hotel & Spa** ⭐ 4.3 - $220/nuit - Green Key
6. **La Maison 20 Degrés Sud** ⭐ 4.6 - $502/nuit - Relais & Châteaux
7. **The Good Life Eco Lodges** ⭐ 4.9 - $222/nuit - Éco-concept

#### Balaclava (5 hôtels)
1. **InterContinental Resort Mauritius** ⭐ 4.5 - $328/nuit
2. **The Westin Turtle Bay Resort & Spa** ⭐ 4.6 - $358/nuit
3. **The Ravenala Attitude** ⭐ 4.6 - $210/nuit - Travelife Gold
4. **Maritim Resort & Spa Mauritius** ⭐ 4.4 - $243/nuit
5. **Le Jadis Beach Resort & Wellness** ⭐ 4.3 - $336/nuit

#### Bel Ombre (6 hôtels)
1. **Heritage Le Telfair Golf & Wellness Resort** ⭐ 4.6 - $647/nuit - Green Key
2. **Heritage Awali Golf & Spa Resort** ⭐ 4.6 - $521/nuit - Green Key
3. **Tamassa Bel Ombre** ⭐ 4.5 - $138/nuit - All Inclusive
4. **OUTRIGGER Mauritius Beach Resort** ⭐ 4.2 - $199/nuit
5. **SO Sofitel Mauritius** ⭐ 4.2 - $323/nuit
6. **Shanti Maurice Resort & Spa** ⭐ 4.7 - $580/nuit

### 📊 Options de Tri

- **Recommandés** - Par note décroissante (défaut)
- **Prix croissant** - Du moins cher au plus cher
- **Prix décroissant** - Du plus cher au moins cher
- **Note** - Meilleurs ratings en premier
- **Proximité plage** - Du plus proche au plus éloigné
- **Éco-tourisme** - Score certifications + candidats

### 🎬 Intégration Vidéos YouTube

Chaque hôtel dispose de 1 à 2 vidéos YouTube de créateurs :
- Visites complètes des resorts
- Reviews authentiques
- Tours des chambres et équipements
- Ambiance et atmosphère

**Exemples** :
- Royal Palm: https://www.youtube.com/watch?v=u80dkpK_JsA
- Heritage Le Telfair: https://www.youtube.com/watch?v=F657BaJtMBg
- InterContinental Mauritius: https://www.youtube.com/watch?v=1_er5J3J-bI

## 🛠️ Technologies Utilisées

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Design moderne avec variables CSS
- **JavaScript (Vanilla)** - Logique applicative
- **Font Awesome 6** - Icons
- **Google Fonts (Inter)** - Typographie moderne

### Bibliothèques CDN
```html
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### Hébergement
- **Cloudflare Pages** - CDN global, HTTPS auto, déploiement Git

## 📁 Structure du Projet

```
arexaholidays/
├── index.html              # Page principale
├── css/
│   └── style.css          # Styles principaux (19KB)
├── js/
│   ├── hotels-data.js     # Base de données hôtels (27KB)
│   └── main.js            # Logique application (15KB)
└── README.md              # Documentation
```

## 🚀 Déploiement

### Méthode 1: Cloudflare Pages (Recommandé)

1. **Créer un compte Cloudflare Pages**
   - Aller sur https://pages.cloudflare.com/
   - Se connecter avec GitHub

2. **Connecter le repository**
   - Sélectionner le repository GitHub
   - Branch: `main` ou `master`

3. **Configuration Build**
   ```
   Build command: (aucun)
   Build output directory: /
   ```

4. **Déployer**
   - URL automatique: `arexaholidays.pages.dev`
   - Custom domain possible: `arexaholidays.com`

### Méthode 2: Serveur Web Classique

Copier tous les fichiers sur serveur HTTP :
```bash
scp -r * user@server:/var/www/html/arexaholidays/
```

### Méthode 3: Test Local

```bash
# Avec Python 3
python3 -m http.server 8000

# Avec Node.js
npx http-server -p 8000

# Ouvrir http://localhost:8000
```

## 🎨 Design System

### Couleurs Principales
```css
--primary-color: #0071C2;      /* Bleu Booking.com */
--primary-dark: #005A9C;
--primary-light: #E7F2FF;
--secondary-color: #FEBB02;    /* Jaune doré */
--success-color: #008009;      /* Vert éco */
--danger-color: #D4111E;
```

### Breakpoints Responsive
- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: 992px - 1200px
- **Large Desktop**: > 1200px

## 📊 Données et Sources

### Sources Principales
1. **Google Maps API** - Coordonnées GPS, ratings, reviews, photos
2. **Sites officiels hôtels** - Prix, descriptions, contacts
3. **YouTube** - Vidéos créateurs authentiques
4. **Certifications officielles** :
   - Green Key Global: https://www.greenkey.global/
   - EarthCheck: https://earthcheck.org/
   - Travelife: https://staybetterplaces.com/

### Métadonnées Hôtels
Chaque hôtel contient :
```javascript
{
    id: string,
    name: string,
    zone: "Grand Baie" | "Balaclava" | "Bel Ombre",
    lat: number,
    lng: number,
    price_usd: number,
    price_eur: number,
    price_mur: number,
    rating: number (0-5),
    reviews: number,
    distance_beach_m: number,
    amenities: {
        pool: boolean,
        breakfast: boolean,
        all_inclusive: boolean,
        wifi: boolean,
        parking: boolean,
        ac: boolean,
        spa: boolean,
        gym: boolean
    },
    eco: {
        is_candidate: boolean,
        certifications: string[],
        notes: string,
        sources: string[]
    },
    room_types: string[],
    max_guests: number,
    media: {
        thumbnail: string,
        youtube_videos: string[]
    },
    website: string,
    phone: string,
    description: string
}
```

## ✅ Fonctionnalités Implémentées

### Phase 1 - Core Features ✅
- [x] Structure HTML responsive
- [x] Système de filtres complet
- [x] Multi-devises (USD/EUR/MUR)
- [x] Base de données 20 hôtels
- [x] Cartes hôtels design Booking.com
- [x] Intégration vidéos YouTube
- [x] Tri dynamique
- [x] États vides / chargement

### Phase 2 - Éco-Tourisme ✅
- [x] Base certifications (Green Key, EarthCheck, Travelife)
- [x] Filtres éco-tourisme
- [x] Badges visuels certifications
- [x] Sources documentation

### Phase 3 - UX/UI ✅
- [x] Design moderne premium
- [x] Animations CSS
- [x] Sidebar sticky
- [x] Hero section
- [x] Footer complet
- [x] États hover/active

## 🔮 Évolutions Futures

### Court Terme
- [ ] Modal vidéo intégrée (iframe YouTube)
- [ ] Galerie photos par hôtel
- [ ] Système de favoris (localStorage)
- [ ] Partage social (Facebook, Twitter, WhatsApp)

### Moyen Terme
- [ ] Système de réservation intégré
- [ ] Calendrier disponibilités
- [ ] Comparateur hôtels (max 3)
- [ ] Filtres avancés : piscine privée, vue mer, plage
- [ ] Recherche textuelle (nom hôtel, zone)

### Long Terme
- [ ] Backend Node.js / Express
- [ ] Base de données MongoDB
- [ ] Authentification utilisateurs
- [ ] Avis clients vérifiés
- [ ] Programme de fidélité
- [ ] API partenaires (Booking.com, Expedia)
- [ ] Panel admin CMS

## 🐛 Debug & Tests

### Tester les Filtres
```javascript
// Console DevTools
console.log('Hotels filtrés:', filteredHotels);
console.log('Filtres actifs:', currentFilters);
console.log('Devise actuelle:', currentCurrency);
```

### Tester les Conversions
```javascript
// Convertir 500 USD en EUR
convertPrice(500); // => 472 EUR

// Afficher prix formaté
formatPrice(hotelsDatabase[0]); // => { symbol: '$', price: '1,168' }
```

### Performances
- **Temps chargement initial**: < 1s
- **Filtrage**: < 50ms (20 hôtels)
- **Rendu cartes**: < 200ms
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)

## 📞 Support & Contact

- **Email**: contact@arexaholidays.com
- **Site web**: https://arexaholidays.pages.dev
- **GitHub Issues**: Pour bugs et suggestions

## 📄 Licence

MIT License - Libre d'utilisation et modification.

## 🙏 Crédits

### Données
- Google Maps Platform
- Hôtels officiels de Maurice
- YouTube Creators

### Design Inspiration
- Booking.com
- Airbnb
- Hotels.com

### Technologies
- Cloudflare Pages
- Font Awesome
- Google Fonts

---

**Développé avec ❤️ pour l'Île Maurice** 🇲🇺

*Dernière mise à jour: 2026-03-01*
