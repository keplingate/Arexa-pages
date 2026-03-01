// Base de données complète des hôtels de Maurice
const hotelsDatabase = [
    // GRAND BAIE
    {
        id: "royal-palm-beachcomber",
        name: "Royal Palm Beachcomber Luxury",
        zone: "Grand Baie",
        lat: -20.0065419,
        lng: 57.5789142,
        price_usd: 1168,
        price_eur: 1095,
        price_mur: 52500,
        rating: 4.7,
        reviews: 498,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: true,
            certifications: ["EarthCheck Gold"],
            notes: "Part of Beachcomber Hotels with EarthCheck Gold certification",
            sources: ["https://corporate.beachcomber.com/en/about/newsroom/2023/beachcomber-celebrates-earthcheck-gold-certification/"]
        },
        room_types: ["Suite Ocean View", "Junior Suite", "Palm Suite"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoido2vURdUjo5XNwo42kowGRg_tvignDyF6TBI9nugik3k80l5P-vfuloZgjrXuHo6K_10SMm6op1qnofzZN5Uii2Db-pnjx-neVVbkHEQ9XpggvCW-ZNIpfyibxITjQRD-ZKD4Q=w466-h298-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=u80dkpK_JsA",
                "https://www.youtube.com/watch?v=MzU4strjHkw"
            ]
        },
        website: "https://www.beachcomber-hotels.com/en/hotel/royal-palm-beachcomber-luxury",
        phone: "+230 209 8300",
        description: "Hôtel 5 étoiles de luxe avec spa de renommée mondiale, restaurants gastronomiques et plage privée."
    },
    {
        id: "lux-grand-baie",
        name: "LUX* Grand Baie",
        zone: "Grand Baie",
        lat: -20.0007578,
        lng: 57.583014299999995,
        price_usd: 420,
        price_eur: 395,
        price_mur: 18900,
        rating: 4.5,
        reviews: 1288,
        distance_beach_m: 50,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: true,
            certifications: [],
            notes: "Membre du groupe LUX* avec initiatives durables",
            sources: []
        },
        room_types: ["Deluxe Room", "Junior Suite", "Penthouse"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/gps-proxy/ALd4DhHJCxq3ZEF6Yqrm6S2FeVsY9GSuhSfgg6PGpkB8KQuVcrHhuQELwpMKOCSZWVMnvNqfcFOJAO0eQMbTbaKy3w1zLD0w7UYQ_IbYDg7pRytUUbFh8uOz1yO1W5fqlpiBMCLfhlZhrOwFuOrIeQCCzZM6wPKIFbUJlg5iZ3u-glX6ZjOr5EO0f6NT=w138-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=bG9MsOcYvMo",
                "https://www.youtube.com/watch?v=LE5_H9MVi18"
            ]
        },
        website: "https://www.luxresorts.com/en/mauritius/hotel/luxgrandbaie",
        phone: "+230 209 2200",
        description: "Resort moderne et élégant avec design contemporain, restaurants variés et ambiance cosmopolite."
    },
    {
        id: "mauricia-beachcomber",
        name: "Mauricia Beachcomber Resort & Spa",
        zone: "Grand Baie",
        lat: -20.0094967,
        lng: 57.5799471,
        price_usd: 280,
        price_eur: 265,
        price_mur: 12600,
        rating: 4.6,
        reviews: 3368,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: true,
            certifications: ["EarthCheck Certified"],
            notes: "Beachcomber Hotels group with EarthCheck certification",
            sources: ["https://corporate.beachcomber.com/"]
        },
        room_types: ["Superior Room", "Deluxe Room", "Family Suite"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/gps-proxy/ALd4DhHQFwqW12xivrGCOvKjgwgiNW09SIFv11fXVWYt84hoowJuKR9_CWL7l8VgDkg3Eu_8kKJhDAjDxMn5QnnDt3pfvbiOYAXreln1h2xIMv13WjRnkIOhxNSiWGYWLcqtjstlOfiL8k61vhkG_KhM1VJQeUMT1YUJhkMB1qnVvgJQVwOxduP4dwEJ=w163-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=MYz12jKHWTI",
                "https://www.youtube.com/watch?v=cLGZoClLLnY"
            ]
        },
        website: "https://www.beachcomber-hotels.com/en/hotel/mauricia-beachcomber",
        phone: "+230 209 1100",
        description: "Resort familial chaleureux sur la plage de Grand Baie avec activités nautiques variées."
    },
    {
        id: "canonnier-beachcomber",
        name: "Canonnier Beachcomber Golf Resort & Spa",
        zone: "Grand Baie",
        lat: -20.0013684,
        lng: 57.5521696,
        price_usd: 340,
        price_eur: 320,
        price_mur: 15300,
        rating: 4.8,
        reviews: 186,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: true,
            certifications: ["EarthCheck Certified"],
            notes: "Part of Beachcomber group with environmental programs",
            sources: []
        },
        room_types: ["Superior Room", "Prestige Room", "Suite"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqxmpxMewrkiHVIsx0BeNE0f3E5MVSZyHvDAUtfrm7LUCS21hb1Sy6MWMMJ54QTeDZ1TVqhAe6OJ_-UWG6nl4SUOYCMQyZJ21L_binhlY5ZaDiAICcilE4UeCrvslmLaeNvEnid=w80-h106-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=xRU_8c9p0Bo",
                "https://www.youtube.com/watch?v=jM54Pt3--Rk"
            ]
        },
        website: "https://www.beachcomber-hotels.com/fr/hotel/canonnier-beachcomber",
        phone: "+230 263 6726",
        description: "Resort avec golf 18 trous, spa luxueux et plage privée sur la pointe aux Canonniers."
    },
    {
        id: "veranda-grand-baie",
        name: "Veranda Grand Baie Hotel & Spa",
        zone: "Grand Baie",
        lat: -20.0084159,
        lng: 57.578802599999996,
        price_usd: 220,
        price_eur: 205,
        price_mur: 9900,
        rating: 4.3,
        reviews: 1596,
        distance_beach_m: 100,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: true,
            certifications: ["Green Key"],
            notes: "Veranda Resorts are Green Key certified",
            sources: ["https://www.greenkey.global/stories-news-1/2022/6/30/mauritius-resorts-receive-the-green-key-certification-for-the-first-time"]
        },
        room_types: ["Superior Room", "Deluxe Room", "Family Room"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqZHYhHUlS8WfHI52HbyRrARB6YCccGXVTUzq8ABrHakwollpo-tq-6rJR0lbf77ZIMfcj1zMZ_nWehTc7JJq9CUGC2_7iLwvAibtOZAt14eUOhidCe_gZI94N1FiCL05AMfOoa=w120-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=2pzGwk492Bc",
                "https://www.youtube.com/watch?v=UZrpKeqN-qo"
            ]
        },
        website: "https://veranda-resorts.com/en/mauritius-hotel-veranda-grand-baie",
        phone: "+230 209 8000",
        description: "Hôtel moderne et coloré avec spa Seven Colours, piscine et accès direct à la plage."
    },
    {
        id: "la-maison-20-degres-sud",
        name: "La Maison 20 Degrés Sud",
        zone: "Grand Baie",
        lat: -20.005403299999998,
        lng: 57.570736999999994,
        price_usd: 502,
        price_eur: 472,
        price_mur: 22600,
        rating: 4.6,
        reviews: 548,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: false,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: false,
            beach_access: true
        },
        eco: {
            is_candidate: false,
            certifications: [],
            notes: "Boutique hotel with focus on authenticity",
            sources: []
        },
        room_types: ["Garden Room", "Beach Room", "Suite"],
        max_guests: 2,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepUDkbHdBRIbhkUdT77u2vx_VGMNC8qEKyIdw3co-0achEf8uemwwIR9qPorXbMoslHc4O5_vuFR0np1tVJVsOLkMnKr9y1tgMNR_0dqSxNKZ0CQovp4qw9AHWSLfF5jHBtQbR0ktPBBwjb=w138-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=Ldcc2eJLJys",
                "https://www.youtube.com/watch?v=BKW62MqJeI8"
            ]
        },
        website: "https://www.20degressud.com/",
        phone: "+230 263 5000",
        description: "Boutique hotel de charme Relais & Châteaux sur plage privée avec décoration raffinée."
    },
    {
        id: "the-good-life",
        name: "The Good Life Eco Lodges",
        zone: "Grand Baie",
        lat: -19.986964699999998,
        lng: 57.626362699999994,
        price_usd: 222,
        price_eur: 208,
        price_mur: 10000,
        rating: 4.9,
        reviews: 218,
        distance_beach_m: 150,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: false,
            gym: false,
            beach_access: true
        },
        eco: {
            is_candidate: true,
            certifications: [],
            notes: "Eco-lodge concept with sustainable practices",
            sources: ["https://www.thegoodlifemauritius.com/"]
        },
        room_types: ["Eco Lodge", "Deluxe Lodge"],
        max_guests: 2,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep1Jr2fCgsSgIJ5d_A9-qn3ZFmd93gwtHSZvFCoC6cx6abHuZ4K17XiYOjt08CwXirDWNKU_pPsGpEDTsHeY4SJRwXH6Quk76FcMCspah81RUzIe54EyCf4C9zpbAjx9dJ6uHgw=w122-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=0lw-7KGWQis"
            ]
        },
        website: "https://www.thegoodlifemauritius.com/",
        phone: "+230 5489 2663",
        description: "Eco-lodge authentique avec chambres éco-conçues, restaurant bio et ambiance zen à Cap Malheureux."
    },

    // BALACLAVA
    {
        id: "intercontinental-mauritius",
        name: "InterContinental Resort Mauritius",
        zone: "Balaclava",
        lat: -20.0936363,
        lng: 57.5089896,
        price_usd: 328,
        price_eur: 308,
        price_mur: 14750,
        rating: 4.5,
        reviews: 3315,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: false,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: false,
            certifications: [],
            notes: "Part of IHG group with corporate sustainability programs",
            sources: []
        },
        room_types: ["Deluxe Room", "Junior Suite", "Ocean Suite"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/p/AF1QipPHNpUn90Y0W5T8aSMSqqaeBzXeFcXMHpvWRkH-=w141-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=1_er5J3J-bI",
                "https://www.youtube.com/watch?v=w3cj4Gg7lxM"
            ]
        },
        website: "https://www.ihg.com/intercontinental/hotels/gb/en/balaclava/mruma/hoteldetail",
        phone: "+230 261 1200",
        description: "Resort de luxe avec architecture contemporaine, infinity pool et restaurants raffinés."
    },
    {
        id: "westin-turtle-bay",
        name: "The Westin Turtle Bay Resort & Spa",
        zone: "Balaclava",
        lat: -20.090677,
        lng: 57.510438,
        price_usd: 358,
        price_eur: 336,
        price_mur: 16100,
        rating: 4.6,
        reviews: 2350,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: false,
            certifications: [],
            notes: "Marriott group sustainability programs",
            sources: []
        },
        room_types: ["Deluxe Room", "Ocean View Room", "Suite"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/p/AF1QipOvDsQx4xD3Lo7_IutKOssowWDXQ5Nx5Sz9QJ5u=w138-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=pUTY1O-93ZI",
                "https://www.youtube.com/watch?v=5l8fird_aA0"
            ]
        },
        website: "https://www.marriott.com/en-us/hotels/mrutb-the-westin-turtle-bay-resort-and-spa-mauritius/overview",
        phone: "+230 204 1400",
        description: "Resort élégant dans la baie aux Tortues avec 2 piscines, plage privée et Heavenly Spa."
    },
    {
        id: "ravenala-attitude",
        name: "The Ravenala Attitude",
        zone: "Balaclava",
        lat: -20.0835127,
        lng: 57.5170296,
        price_usd: 210,
        price_eur: 197,
        price_mur: 9450,
        rating: 4.6,
        reviews: 7102,
        distance_beach_m: 50,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: true,
            certifications: ["Travelife Gold"],
            notes: "Attitude Hotels are Travelife Gold certified",
            sources: ["https://hotels-attitude.com/en/the-ravenala-attitude"]
        },
        room_types: ["Superior Room", "Deluxe Room", "Family Suite"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/gps-proxy/ALd4DhFIDCBizCzvOJp_pRjc5NxSDhwQ1MIt4zAEP9Gf-8QZJSaWmraOUd3Dwm5YnpPONK-zrKUkxsj7dkLkmZCR94x1Wo5AZbmdVvryffXJ76_KzzT6V8MM5MCZ17xuemOaxJHs50axrBX4xdKRRj59tN0q6Y5jBOXc4_LPWh5Q0dXhNwtTBWCFZhc=w131-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=iNuV7OELHtU",
                "https://www.youtube.com/watch?v=tMRNkZsV96E"
            ]
        },
        website: "https://hotels-attitude.com/en/the-ravenala-attitude",
        phone: "+230 204 3000",
        description: "Resort convivial Travelife Gold avec activités nautiques, spa et cuisine locale authentique."
    },
    {
        id: "maritim-resort",
        name: "Maritim Resort & Spa Mauritius",
        zone: "Balaclava",
        lat: -20.0874333,
        lng: 57.5164669,
        price_usd: 243,
        price_eur: 228,
        price_mur: 10950,
        rating: 4.4,
        reviews: 2599,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: false,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: false,
            certifications: [],
            notes: "German hotel group with quality standards",
            sources: []
        },
        room_types: ["Standard Room", "Superior Room", "Junior Suite"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/p/AF1QipMrtLrLXBKOD-87x5eHY6GZonlM-t-j9taPhg4O=w137-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=ujzQAFBUmys",
                "https://www.youtube.com/watch?v=Z59sr1YhILg"
            ]
        },
        website: "https://www.maritim.de/de/hotels/mauritius/hotel-mauritius/unser-hotel",
        phone: "+230 204 1000",
        description: "Resort familial avec architecture mauricienne, 5 restaurants et Tropical Flower Spa."
    },
    {
        id: "le-jadis",
        name: "Le Jadis Beach Resort & Wellness",
        zone: "Balaclava",
        lat: -20.1000883,
        lng: 57.5135158,
        price_usd: 336,
        price_eur: 315,
        price_mur: 15120,
        rating: 4.3,
        reviews: 1088,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: false,
            certifications: [],
            notes: "Wellness-focused resort",
            sources: []
        },
        room_types: ["Deluxe Room", "Junior Suite", "Wellness Suite"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/p/AF1QipOgFXSytJtF3s6VRgPteAU8Rtf45Y9rDotBAqUX=w137-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=A4YzTbPOBmA",
                "https://www.youtube.com/watch?v=iKkLL62MMxs"
            ]
        },
        website: "https://www.lejadis.com/",
        phone: "+230 204 1888",
        description: "Resort wellness de charme avec plage privée, 2 piscines et spa holistique."
    },

    // BEL OMBRE
    {
        id: "heritage-le-telfair",
        name: "Heritage Le Telfair Golf & Wellness Resort",
        zone: "Bel Ombre",
        lat: -20.5064401,
        lng: 57.409737199999995,
        price_usd: 647,
        price_eur: 607,
        price_mur: 29150,
        rating: 4.6,
        reviews: 2415,
        distance_beach_m: 200,
        amenities: {
            pool: true,
            breakfast: false,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: true,
            certifications: ["Green Key"],
            notes: "First Green Key certified hotel in Mauritius",
            sources: ["https://www.greenkey.global/stories-news-1/2017/1/6/green-key-awarded-to-first-two-establishments-in-mauritius"]
        },
        room_types: ["Deluxe Room", "Junior Suite", "Telfair Suite", "Villa"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/p/AF1QipNFK6vHopnjicDBYU0EJpyTwtTBn3NOq10aJccl=w163-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=F657BaJtMBg",
                "https://www.youtube.com/watch?v=Xdg8Xh9wV2k"
            ]
        },
        website: "https://heritageresorts.mu/hotels-mauritius/le-telfair",
        phone: "+230 601 5500",
        description: "Resort de luxe Green Key avec golf 18 trous, Seven Colours Wellness Spa et restaurants gastronomiques."
    },
    {
        id: "heritage-awali",
        name: "Heritage Awali Golf & Spa Resort",
        zone: "Bel Ombre",
        lat: -20.5080444,
        lng: 57.412658199999996,
        price_usd: 521,
        price_eur: 489,
        price_mur: 23450,
        rating: 4.6,
        reviews: 2512,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: true,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: true,
            certifications: ["Green Key"],
            notes: "Green Key certified with all-inclusive eco-conscious approach",
            sources: ["https://www.greenkey.global/stories-news-1/2017/1/6/green-key-awarded-to-first-two-establishments-in-mauritius"]
        },
        room_types: ["Superior Room", "Deluxe Room", "Family Suite", "Villa"],
        max_guests: 5,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/p/AF1QipPmq2yyrrJidbtrxqQC-0iZ8G05B6er7epDFf8q=w92-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=_fqMTx-bQz0",
                "https://www.youtube.com/watch?v=rD5K6LYFs0M"
            ]
        },
        website: "https://heritageresorts.mu/hotels-mauritius/awali-all-inclusive",
        phone: "+230 601 1500",
        description: "Resort all-inclusive Green Key avec tennis, golf et spa dans le domaine de Bel Ombre."
    },
    {
        id: "tamassa-bel-ombre",
        name: "Tamassa Bel Ombre",
        zone: "Bel Ombre",
        lat: -20.5087846,
        lng: 57.416025299999994,
        price_usd: 138,
        price_eur: 130,
        price_mur: 6210,
        rating: 4.5,
        reviews: 3577,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: true,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: false,
            certifications: [],
            notes: "Eco-friendly all-inclusive concept",
            sources: []
        },
        room_types: ["Standard Room", "Superior Room", "Family Room"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/p/AF1QipMCFVD-bx9efX0f7qxtHemJYA7KAnmiCTbw0H8t=w138-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=8IVnyzfp3KU",
                "https://www.youtube.com/watch?v=UxK63DJKEak"
            ]
        },
        website: "https://www.tamassaresorts.com/",
        phone: "+230 603 7300",
        description: "Resort all-inclusive moderne et décontracté avec ambiance festive et plage de sable blanc."
    },
    {
        id: "outrigger-mauritius",
        name: "OUTRIGGER Mauritius Beach Resort",
        zone: "Bel Ombre",
        lat: -20.5108919,
        lng: 57.417056599999995,
        price_usd: 199,
        price_eur: 187,
        price_mur: 8955,
        rating: 4.2,
        reviews: 2781,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: false,
            certifications: [],
            notes: "OUTRIGGER ZONE - eco-conscious brand values",
            sources: []
        },
        room_types: ["Deluxe Room", "Ocean View Room", "Suite"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/p/AF1QipMPMPzzex8PNTd2Sf8eT7oDnkCh73mpeH32Ez9h=w163-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=HkwiBqT16yA",
                "https://www.youtube.com/watch?v=iRBKYnvxwGI"
            ]
        },
        website: "https://www.outrigger.com/mauritius/outrigger-mauritius-beach-resort",
        phone: "+230 623 5000",
        description: "Resort élégant avec architecture contemporaine, piscines à débordement et spa Navasana."
    },
    {
        id: "so-sofitel",
        name: "SO Sofitel Mauritius",
        zone: "Bel Ombre",
        lat: -20.509352699999997,
        lng: 57.4357638,
        price_usd: 323,
        price_eur: 303,
        price_mur: 14540,
        rating: 4.2,
        reviews: 1342,
        distance_beach_m: 100,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: false,
            certifications: [],
            notes: "Accor group sustainability programs",
            sources: []
        },
        room_types: ["So Cosy Room", "So Nature Room", "So Loft", "Villa"],
        max_guests: 4,
        media: {
            thumbnail: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer-_M1ap9B0WLxG4SzgVOs_tllwaqw4NOmzeq2_jjB4_bFTOJ4vw2_9RYJM3-diEc6cmRA56tf7Fh6UhWV8NpsB6t8wJeDc6_wQoNtgICNgn6WzJBwhKo0p042_8xf9TC6-95tZxw=w122-h92-k-no",
            youtube_videos: [
                "https://www.youtube.com/watch?v=_rKFN7djcYI",
                "https://www.youtube.com/watch?v=F87PzE-ojlM"
            ]
        },
        website: "http://sofitel.accor.com/hotels/6707",
        phone: "+230 605 5800",
        description: "Resort design ultra-moderne avec golf, vues océan et gastronomie fusion signature."
    },
    {
        id: "shanti-maurice",
        name: "Shanti Maurice Resort & Spa",
        zone: "Bel Ombre",
        lat: -20.500,
        lng: 57.412,
        price_usd: 580,
        price_eur: 544,
        price_mur: 26100,
        rating: 4.7,
        reviews: 892,
        distance_beach_m: 0,
        amenities: {
            pool: true,
            breakfast: true,
            all_inclusive: false,
            wifi: true,
            parking: true,
            ac: true,
            spa: true,
            gym: true,
            beach_access: true
        },
        eco: {
            is_candidate: false,
            certifications: [],
            notes: "Wellness resort with natural approach",
            sources: []
        },
        room_types: ["Junior Suite", "Villa with Pool", "Suites"],
        max_guests: 4,
        media: {
            thumbnail: "https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Shanti+Maurice",
            youtube_videos: [
                "https://www.youtube.com/watch?v=cfc4GMhdj8w",
                "https://www.youtube.com/watch?v=frCLYP4p770"
            ]
        },
        website: "https://www.shantimaurice.com/",
        phone: "+230 603 7200",
        description: "Resort wellness de luxe avec villas à piscine privée, cuisine ayurvédique et Nira Spa."
    }
];

// Taux de conversion des devises (base USD)
const currencyRates = {
    USD: 1,
    EUR: 0.94,
    MUR: 45
};

// Symboles des devises
const currencySymbols = {
    USD: '$',
    EUR: '€',
    MUR: 'Rs'
};
