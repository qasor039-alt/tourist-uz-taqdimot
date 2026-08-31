import { CityGuide, TourGuideProfile } from '../types';

export const CITIES_DATA: CityGuide[] = [
  {
    id: "samarkand",
    name: "Samarqand",
    region: "Samarqand viloyati",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=800&auto=format&fit=crop",
    badge: "O'zbekiston Gavhari",
    rating: 4.9,
    attractionsCount: 42,
    description: "2750 yillik qadimiy poytaxt, Registon maydoni, Go'ri Amir, Shohi Zinda va Bibixonim majmualari bilan dunyoga mashhur.",
    popularSpots: ["Registon Maydoni", "Shohi Zinda", "Go'ri Amir", "Siypb Bozori", "Ulug'bek Rasadxonasi"]
  },
  {
    id: "bukhara",
    name: "Buxoro",
    region: "Buxoro viloyati",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop",
    badge: "Sharq Ertagi",
    rating: 4.9,
    attractionsCount: 38,
    description: "Minorai Kalon, Ark qal'asi, Labi Hovuz va qadimiy savdo gumbazlari bilan tirik muzey shahar.",
    popularSpots: ["Minorai Kalon", "Ark Qal'asi", "Labi Hovuz", "Chor Minor", "Somoniylar Maqbarasi"]
  },
  {
    id: "khiva",
    name: "Xiva",
    region: "Xorazm viloyati",
    image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=800&auto=format&fit=crop",
    badge: "Ochiq Osmon Ostidagi Muzey",
    rating: 4.8,
    attractionsCount: 31,
    description: "UNESCO butunjahon merosi ro'yxatidagi Ichan Qal'a, Kalta Minor va Toshhovli saroyi joylashgan mo'jizaviy shahar.",
    popularSpots: ["Ichan Qal'a", "Kalta Minor", "Juma Masjidi", "Islomxo'ja Minorasi", "Toshhovli Saroyi"]
  },
  {
    id: "tashkent",
    name: "Toshkent",
    region: "Poytaxt",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop",
    badge: "Zamonaviy Megapolis & Tarix",
    rating: 4.7,
    attractionsCount: 55,
    description: "Markaziy Osiyoning eng yirik megapolisi, Chorsu bozori, Hazrati Imom (Hazrati Usmon Qur'oni), metro stansiyalari va Magic City.",
    popularSpots: ["Hazrati Imom Majmuasi", "Chorsu Bozori", "Toshkent Metropoliteni", "Amir Temur Xiyoboni", "Teleminora"]
  },
  {
    id: "zomin",
    name: "Zomin Tog'lari",
    region: "Jizzax viloyati",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    badge: "O'zbekiston Shveysariyasi",
    rating: 4.9,
    attractionsCount: 16,
    description: "Toza archazor tog' havosi, kanyonlar, sharsharalar, osma ko'prik va shifobaxsh sihatgohlar maskani.",
    popularSpots: ["Zomin Milliy Bog'i", "Osma Shisha Ko'prik", "Sherbuloq", "Boboyong'oq", "Suffa Platosi"]
  }
];

export const TOUR_GUIDES: TourGuideProfile[] = [
  {
    id: "guide-1",
    name: "Dilshod Usmonov",
    languages: ["O'zbek", "Ingliz", "Fransuz"],
    city: "Samarqand",
    experienceYears: 8,
    rating: 4.98,
    reviewsCount: 340,
    hourlyRate: "$15/soat",
    verified: true,
    specialty: "Temuriylar tarixi & Me'morchilik"
  },
  {
    id: "guide-2",
    name: "Elena Petrova",
    languages: ["Rus", "Ingliz", "Nemis"],
    city: "Buxoro",
    experienceYears: 6,
    rating: 4.95,
    reviewsCount: 285,
    hourlyRate: "$14/soat",
    verified: true,
    specialty: "Sharq donishmandligi & Savdo gumbazlari"
  },
  {
    id: "guide-3",
    name: "Bobur Xorazmiy",
    languages: ["O'zbek", "Ingliz", "Ispan"],
    city: "Xiva",
    experienceYears: 5,
    rating: 4.92,
    reviewsCount: 190,
    hourlyRate: "$12/soat",
    verified: true,
    specialty: "Xorazm xonligi & Hunarmandchilik"
  },
  {
    id: "guide-4",
    name: "Zuhra Alimova",
    languages: ["O'zbek", "Ingliz", "Yapon"],
    city: "Toshkent",
    experienceYears: 7,
    rating: 4.99,
    reviewsCount: 412,
    hourlyRate: "$18/soat",
    verified: true,
    specialty: "Gastro-turlar & Zamonaviy san'at"
  }
];

export const AUDIO_SAMPLES = [
  {
    id: "registan",
    title: "Registon Maydoni: 3 Ulug' Madrasa Hikoyasi",
    monument: "Registon, Samarqand",
    duration: "4:35",
    languagesCount: 8,
    audioExcerpt: "Registon maydoni — qadimiy Samarqandning yuragi bo'lib, uning atrofidagi Ulug'bek, Tillakori va Sherdor madrasalari dunyo me'morchiligining tengsiz durdonasi hisoblanadi...",
    tags: ["Tarix", "UNESCO", "Mirzo Ulug'bek"]
  },
  {
    id: "ark",
    title: "Buxoro Arki: Hukmdorlar Qal'asi",
    monument: "Ark, Buxoro",
    duration: "3:50",
    languagesCount: 8,
    audioExcerpt: "Ark — qadimiy Buxoroning eng qadimgi arxeologik yodgorligi. Bu qal'a bir necha asrlar davomida Buxoro amirlarining rasmiy qarorgohi bo'lib xizmat qilgan...",
    tags: ["Qal'a", "Afsonalar", "Amirlik"]
  },
  {
    id: "ichan_kala",
    title: "Ichan Qal'a: Ochiq Osmon Ostidagi Mo'jiza",
    monument: "Ichan Qal'a, Xiva",
    duration: "5:10",
    languagesCount: 8,
    audioExcerpt: "Ichan Qal'a devorlari ichida 50 dan ortiq tarixiy yodgorlik va 250 ta qadimiy xonadon saqlanib qolgan bo'lib, har bir g'isht o'ziga xos sirlarni saqlaydi...",
    tags: ["UNESCO", "Ipak Yo'li", "Gumbazlar"]
  }
];
