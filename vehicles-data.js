// ArexaHoliday - Luxury Fleet (extracted from Executive Cars PDF)
// Note: Prices are in MUR (Rs).

const vehiclesDatabase = [
  {
    id: 'veh-ref-1-bmw-218i',
    ref: 1,
    name: 'White BMW 2‑Series 218i',
    year: 2020,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 12000,
      without_driver_mur: 8500
    },
    notes: ['All Inclusive'],
    media: {
      image: null,
      video: null
    }
  },
  {
    id: 'veh-ref-2-bmw-x4',
    ref: 2,
    name: 'White BMW X4',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 12000,
      without_driver_mur: 9500
    },
    notes: ['All Inclusive'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-3-bmw-x5-40e',
    ref: 3,
    name: 'BMW X5 40E',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 13000,
      without_driver_mur: 10500
    },
    notes: ['All Inclusive Package', 'Panoramic sunroof', 'Harman Kardon'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-5-mercedes-c200',
    ref: 5,
    name: 'Red Mercedes C 200',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 13000,
      without_driver_mur: null
    },
    notes: ['With driver only', 'All Inclusive Package'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-6-bmw-x5',
    ref: 6,
    name: 'White BMW X5',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 14000,
      without_driver_mur: null
    },
    notes: ['With driver only', 'All Inclusive Package'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-7-bmw-530e',
    ref: 7,
    name: 'White BMW 5‑Series 530E',
    year: 2025,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 14000,
      without_driver_mur: null
    },
    notes: ['All Inclusive Package'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-8-bmw-740ld',
    ref: 8,
    name: 'White BMW 7‑Series 740LD',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 15000,
      without_driver_mur: null
    },
    notes: ['With driver only', 'All Inclusive Package'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-9-evoque',
    ref: 9,
    name: 'White Range Rover Evoque',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 13000,
      without_driver_mur: null
    },
    notes: ['All Inclusive Package'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-10-macan',
    ref: 10,
    name: 'White Porsche Macan',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 16000,
      without_driver_mur: null
    },
    notes: ['All Inclusive Package'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-11-velar',
    ref: 11,
    name: 'Range Rover Velar',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 15000,
      without_driver_mur: 16000
    },
    notes: ['All Inclusive package (with driver)', 'Security deposit: Rs 10,000 (without driver)'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-12-velar-rdynamic',
    ref: 12,
    name: 'Grey Metallic Range Rover Velar R‑Dynamic',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 15000,
      without_driver_mur: null
    },
    notes: ['All Inclusive Package'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-13-velar-gold',
    ref: 13,
    name: 'Gold Range Rover Velar',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 15000,
      without_driver_mur: null
    },
    notes: ['With driver only', 'All Inclusive Package'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-14-range-rover-sport',
    ref: 14,
    name: 'White Range Rover Sport',
    year: 2025,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 17500,
      without_driver_mur: null
    },
    notes: ['All Inclusive Package', 'Year: July 2025'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-15-bmw-7series',
    ref: 15,
    name: 'BMW 7‑Series',
    year: 2025,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 16500,
      without_driver_mur: null
    },
    notes: ['All Inclusive Package', 'Year: June 2025'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-16-macan-s',
    ref: 16,
    name: 'Grey Porsche Macan S',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 16000,
      without_driver_mur: null
    },
    notes: ['With driver only', 'All Inclusive Package', 'V6 3000cc'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-17-cayenne',
    ref: 17,
    name: 'Black Porsche Cayenne',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 16000,
      without_driver_mur: null
    },
    notes: ['With driver only', 'All Inclusive Package', 'V6 3000cc'],
    media: { image: null, video: null }
  },
  {
    id: 'veh-ref-18-panamera',
    ref: 18,
    name: 'Black Porsche Panamera',
    year: null,
    category: 'Luxury',
    pricing: {
      with_driver_mur: 16500,
      without_driver_mur: null
    },
    notes: ['All Inclusive Package'],
    media: { image: null, video: null }
  }
];

const VEHICLE_DEPOSIT_RATE = 0.20; // 20% deposit requested by user
