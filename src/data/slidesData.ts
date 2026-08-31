import { SlideData } from '../types';

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    title: "Tourest.uz",
    subtitle: "O'zbekiston Turizm Sanoatining Yagona Raqamli Ekotizimi",
    category: "Muqaddima & Vizyon",
    tagline: "O'zbekistonni kashf eting — Bir teginishda!",
    speakerNotes: "Assalomu alaykum hurmatli hakamlar va investorlar! Bugun sizga O'zbekistonda jadal rivojlanayotgan turizm sohasini raqamlashtirishga qaratilgan 'Tourest.uz' SuperApp platformasi taqdimotini o'tkazmoqchiman. Bizning asosiy missiyamiz — xorijiy va mahalliy sayyohlarga O'zbekiston bo'ylab xavfsiz, qulay, shaffof va unutilmas sayohat tajribasini taqdim etishdir.",
    keyPoints: [
      "Turizm sohasidagi birinchi milliy All-in-One SuperApp",
      "Xorijiy va ichki sayyohlar uchun 5 tilda to'liq xizmat",
      "AI asosidagi individual marshrut va ovozli gidlar",
      "Bozor hajmi: 2025-yilda $1.8 milliarddan ortiq potensial"
    ],
    metrics: [
      { label: "O'zbekistonga Keluvchilar", value: "7.1M+", change: "+24% yiliga", desc: "2024-yil yakuni bo'yicha" },
      { label: "Ichki Sayohatlar", value: "21M+", change: "+35% o'sish", desc: "Mahalliy sayohatlar soni" },
      { label: "2030 Maqsad", value: "15M+", change: "Davlat strategiyasi", desc: "Xalqaro sayyohlar oqimi" }
    ],
    content: {
      type: 'hero',
      heading: "Tourest.uz — Silk Road Raqamli Darvozasi",
      punchline: "Sayyohning barcha ehtiyojlarini (gid, transport, mehmonxona, chipta, SOS, ovqatlanish va marshrut) yagona ilovada jamlagan innovatsion platforma.",
      badges: ["AI Marshrutlash", "24/7 SOS & Sug'urta", "Verifikatsiyalangan Gidlar", "Silk Road Pass", "Oflayn Xaritalar"],
      ctaText: "Taqdimotni Boshlash"
    }
  },
  {
    id: 2,
    title: "Bozordagi Asosiy Muammolar",
    subtitle: "Sayyohlar va Mahalliy Xizmat Ko'rsatuvchilar Duch Kelayotgan 4 Asosiy To'siq",
    category: "Muammo (Problem)",
    speakerNotes: "O'zbekistonga kelayotgan xorijiy sayyoh yoki Toshkentdan Samarqandga borayotgan oila qator to'siqlarga duch keladi: narxlarning shaffof emasligi, taksi va gidlarning aldamchiligi, transport chiptalarini oldindan topa olmaslik va favqulodda vaziyatlarda til bilmaslik. Xizmat ko'rsatuvchilar esa o'z mijozlarini faqat ko'chada kutishga majbur.",
    keyPoints: [
      "Tarqoq xizmatlar: Chipta boshqa joyda, gid boshqa joyda, mehmonxona alohida",
      "Narxlar noaniqligi va vositachilarning 30-50% ustamalari",
      "Til to'sig'i va noqonuniy, noaniq malakali gidlar xavfi",
      "Favqulodda vaziyatlarda (SOS, tibbiy yordam, politsiya) tezkor yo'naltirish yo'qligi"
    ],
    metrics: [
      { label: "Sayyohlarning Shikoyati", value: "68%", desc: "Narxlar shaffof emasligidan qiynaladi" },
      { label: "Vaqt Yo'qotilishi", value: "4.5 soat", desc: "Har bir sayohatni rejalashtirishga ketadi" },
      { label: "Xavfsizlik Xavotiri", value: "54%", desc: "Birinchi marta kelayotgan sayyohlarda" }
    ],
    content: {
      type: 'problem',
      problems: [
        {
          icon: "ShieldAlert",
          title: "Narxlardagi Aldov va Shaffoflik Yo'qligi",
          desc: "Taksi, suvenir va norasmiy gidlar xorijliklarga narxni 3-5 barobar qimmat aytishadi. Rasmiy tariflar katalogi yo'q.",
          stat: "68% norozilik"
        },
        {
          icon: "Layers",
          title: "Xizmatlarning Tarqoqligi (Fragmented UX)",
          desc: "Sayyoh Afrosiyob poyezdini bir saytdan, muzey chiptasini kassadan, mehmonxonani boshqa joydan izlashga majbur.",
          stat: "5+ xil sayt/ilova"
        },
        {
          icon: "Languages",
          title: "Til To'sig'i va Madaniy Noqulaylik",
          desc: "Mahalliy xalq ko'p tilli bo'lsa-da, chuqur tarixiy va maishiy tushuntirish beruvchi audio-gidlar yetishmaydi.",
          stat: "42% sayyoh tushunmaydi"
        },
        {
          icon: "HelpCircle",
          title: "Favqulodda Aloqa & Sug'urta Yetishmasligi",
          desc: "Sayyoh pasportini yo'qotsa yoki tibbiy yordam kerak bo'lsa, kimga murojaat qilishni bilmaydi.",
          stat: "0 ta markazlashgan SOS"
        }
      ]
    }
  },
  {
    id: 3,
    title: "Bizning Yechim: Tourest.uz",
    subtitle: "Sayyohlikning Barcha Bosqichlarini Qamrab Oluvchi Smart Ekotizim",
    category: "Yechim (Solution)",
    speakerNotes: "Tourest.uz — bu oddiy katalog emas. Bu sayohatning g'oyasidan tortib uyga qaytgunga qadar bo'lgan har bir daqiqani avtomatlashtiruvchi, xavfsiz qiluvchi va arzonlashtiruvchi intellektual yordamchi.",
    keyPoints: [
      "Bir joyda: Marshrut + Gid + Bronlash + Transport + Audio-ekskursiya + SOS",
      "Kafolatlangan va shaffof narxlar, milliy va xalqaro to'lovlar (Visa, MC, Payme, Click)",
      "AR & AI quvvatlangan interaktiv tarixiy obidalar tahlili",
      "Turizm politsiyasi va elchixonalar bilan to'g'ridan-to'g'ri integratsiya"
    ],
    content: {
      type: 'solution',
      pillars: [
        {
          icon: "Compass",
          title: "AI Smart Itinerary Planner",
          desc: "Sayyoh o'z byudjeti, qiziqishlari (tarix, oshxona, ekologiya) va kunlar sonini kiritadi — ilova 10 soniyada optimallashtirilgan soatbay reja tuzadi.",
          benefit: "Rejalashtirish vaqti 4 soatdan 1 daqiqaga qisqaradi"
        },
        {
          icon: "BadgeCheck",
          title: "Verifikatsiyalangan Gidlar & Xizmatlar",
          desc: "Faqat davlat sertifikatiga ega, sinovdan o'tgan gidlar, rasmiy haydovchilar va restoranlar real sharhlar bilan.",
          benefit: "100% ishonchli va shaffof narxlar kafolati"
        },
        {
          icon: "Headphones",
          title: "Ko'p Tilli AI Audio-Gid & AR",
          desc: "Tarixiy obidaga yaqinlashganda avtomatik ishga tushuvchi 8 tildagi qiziqarli audio-hikoyalar va 3D modellar.",
          benefit: "Qimmat gidlarsiz ham to'liq tarixiy bilim olish"
        },
        {
          icon: "CreditCard",
          title: "Yagona 'Silk Road Pass' & Chiptalar",
          desc: "Barcha muzeylar, madaniy obidalar va Afrosiyob poyezdlariga navbatsiz QR-kod orqali kirish imkoniyati.",
          benefit: "Kassadagi uzun navbatlarsiz vaqtni tejash"
        }
      ]
    }
  },
  {
    id: 4,
    title: "Ilovaning Asosiy Funksionalligi",
    subtitle: "Tourest.uz Qanday Texnologik Imkoniyatlarga Ega?",
    category: "Mahsulot (Product Features)",
    speakerNotes: "Ilovamiz 6 ta tayanch modulga bo'lingan. Har biri sayyohning alohida ehtiyojini qondiradi va o'zaro uzviy bog'langan.",
    keyPoints: [
      "1. Aqlli Marshrutlovchi (Byudjet va qiziqishga mos avto-generatsiya)",
      "2. Silk Road Pass (Muzeylar, Registon, Ichan Qal'a uchun yagona QR)",
      "3. Gidlar Birjasi (Reyting, til bilishi va audio-namunalar bilan)",
      "4. Gastro-Gid (Milliy taomlar xaritasi, somsa, palov, manti tayyorlash master-klasslari)",
      "5. Interaktiv Oflayn Xarita (Internet bo'lmaganda ham ishlaydi)",
      "6. 24/7 SOS & Valyuta Kalkulyatori (Real kurs va favqulodda yordam)"
    ],
    content: {
      type: 'features',
      coreFeatures: [
        {
          id: "itinerary",
          name: "Smart Marshrut Tuzuvchi",
          tag: "AI Powered",
          desc: "Shaxsiy qiziqishlarga qarab (masalan: 3 kun Samarqand-Buxoro, $200 byudjet) eng qulay marshrutni xaritalab beradi.",
          details: ["Tirbandliksiz transport vaqti", "Tushlik va kechki ovqat nuqtalari", "Chiptalar narxi hisob-kitobi"],
          icon: "MapPin",
          highlight: "98% foydalanuvchi qoniqishi"
        },
        {
          id: "audio_ar",
          name: "Geo-Audio & AR Gid",
          tag: "8 Tilda",
          desc: "GPS orqali sayyoh Registon yoki Ark darvozasiga kelganda smartfon avtomatik ravishda tarixiy audioga ulanadi.",
          details: ["O'zbek, Ingliz, Rus, Nemis, Xitoy, Fransuz, Yapon, Koreys", "3D obidalar rekonstruksiyasi", "Oflayn yuklab olish"],
          icon: "Headphones",
          highlight: "500+ tarixiy obida bazasi"
        },
        {
          id: "booking",
          name: "Gid & Transport Bron Qilish",
          tag: "100% Verifikatsiya",
          desc: "Reytingli mahalliy gidlar, transfer xizmatlari va milliy uylarni to'g'ridan-to'g'ri ortiqcha foizsiz bronlash.",
          details: ["Video-vizitkalar", "Kunlik/soatbay band qilish", "Kafolatlangan qaytarish tizimi"],
          icon: "Users",
          highlight: "1,200+ ro'yxatdan o'tgan gid"
        },
        {
          id: "gastro",
          name: "Gastro-Turizm & Masterklass",
          tag: "Milliy Oshxona",
          desc: "Eng mazali palovxona, somsaxona va tandir joylari. Kulolchilik va ipak to'qish mahorat darslariga yozilish.",
          details: ["Halol/Vegetarian filtrlari", "Taom tarkibi va tavsiyalar", "Mahalliy usta-hunarmandlar darslari"],
          icon: "Utensils",
          highlight: "350+ saralangan restoran"
        },
        {
          id: "silk_pass",
          name: "Tourest Pass (QR Chiptalar)",
          tag: "Tezkor Kirish",
          desc: "Shahar bo'yicha yagona chipta. 1 ta QR kod orqali barcha davlat va xususiy muzeylarga navbatsiz kirish.",
          details: ["24 soatlik, 48 soatlik va 7 kunlik paketlar", "15% gacha chegirma", "Kassadagi navbatdan xalos bo'lish"],
          icon: "QrCode",
          highlight: "45 ta asosiy muzey hamkor"
        },
        {
          id: "sos_safe",
          name: "24/7 SOS & Xavfsizlik",
          tag: "Xavfsiz Sayohat",
          desc: "Bitta tugma bilan 112, Turizm Politsiyasi va sayyohning elchixonasiga joriy geolokatsiyani yuborish.",
          details: ["O'zbekiston sug'urta kompaniyalari bilan integratsiya", "Valyuta konvertori (real bank kursi)", "Yaqindagi dorixonalar"],
          icon: "ShieldCheck",
          highlight: "< 3 daqiqa javob vaqti"
        }
      ]
    }
  },
  {
    id: 5,
    title: "Mahsulot Arxitekturasi va Foydalanuvchi Yo'li (UX)",
    subtitle: "Sayyohning Ilovadagi Qadamma-Qadam Tajribasi",
    category: "Foydalanuvchi Tajribasi (UX)",
    speakerNotes: "Bizning arxitekturamiz maksimal darajada tezkor, kam internet sarflaydigan va oflayn sharoitda ham ishlay oladigan zamonaviy microservices va PWA/Native texnologiyalariga asoslangan.",
    keyPoints: [
      "Bosqich 1: Rejalashtirish — Shaharlar, marshrut, byudjet kalkulyatori",
      "Bosqich 2: Tayyorgarlik — Chiptalar, poyezd, mehmonxona va gid band qilish",
      "Bosqich 3: Joyida — GPS audio-ekskursiya, milliy ovqatlar, QR orqali kirish",
      "Bosqich 4: Sayohatdan so'ng — Xotiralar, sharhlar va sodiqlik bonuslari"
    ],
    content: {
      type: 'architecture',
      modules: [
        {
          title: "1. Smart Discovery & Rejalashtirish",
          tech: "AI Recommendation Engine",
          items: ["Interaktiv 3D O'zbekiston xaritasi", "Mavsumiy to'plamlar (Navro'z, Ipak Yo'li festivallari)", "Shaxsiy byudjet va kunlar filtri"]
        },
        {
          title: "2. Tranzaksiya & Bron Qilish",
          tech: "Payment Gateway & Booking Engine",
          items: ["Stripe, Visa, MasterCard, Payme, Click", "Afrosiyob & Uzbekistan Airways integratsiyasi", "Elektron vaucherlar va avtomatik bildirishnomalar"]
        },
        {
          title: "3. Jonli Navigatsiya & Audio-Gid",
          tech: "Offline MapBox & Geofencing",
          items: ["Oflayn rejim (xaritalarni oldindan yuklash)", "Geo-triggellar orqali audio hikoya boshlanishi", "Gastro-tavsiyalar va yaqin oradagi qulayliklar"]
        },
        {
          title: "4. Xavfsizlik & Feedback",
          tech: "Cloud SOS & Blockchain Reviews",
          items: ["1-touch Favqulodda yordam signali", "Soxtalashtirilmagan haqiqiy mijoz sharhlari", "Keshbek va hamkorlik ballari"]
        }
      ]
    }
  },
  {
    id: 6,
    title: "Bozor Hajmi va Imkoniyatlar (TAM / SAM / SOM)",
    subtitle: "O'zbekiston va Markaziy Osiyo Turizm Bozorining Shiddatli O'sishi",
    category: "Bozor Tahlili (Market)",
    speakerNotes: "O'zbekistonda turizm davlat darajasidagi ustuvor soha etib belgilangan. 2024-yilda 7 milliondan ortiq xorijiy sayyoh kelgan bo'lsa, 2030-yilga kelib bu raqam 15 millionga yetkazilishi rejalashtirilgan. Umumiy bozor aylanmasi milliardlab dollarni tashkil etadi.",
    keyPoints: [
      "TAM ($1.8B): O'zbekistondagi umumiy turizm xizmatlari va xaridlar hajmi",
      "SAM ($380M): Raqamli bronlash, gidlar, ekskursiyalar va suvenirlar bozori",
      "SOM ($42M): 3 yillik davrda Tourest.uz egallashi kutilayotgan maqsadli hajm",
      "O'rtacha bitta xorijiy sayyoh sarfi: $450 - $1,100"
    ],
    content: {
      type: 'market',
      tam: "$1.8 Milliard",
      sam: "$380 Million",
      som: "$42 Million",
      growthRate: "+28% Yillik O'sish (CAGR)",
      stats: [
        { title: "Xorijiy Sayyohlar Oqimi", value: "7.1 Million", note: "2024-yil ko'rsatkichi (+24% o'sish)" },
        { title: "Ichki Sayyohlar Qatnovi", value: "21.5 Million", note: "Mahalliy sayohatlar faolligi" },
        { title: "O'rtacha Qolish Muddati", value: "4.8 Kun", note: "Har bir sayyohning mamlakatdagi vaqti" },
        { title: "Raqamli Xizmatlardan Foydalanish", value: "62%", note: "Smartfon orqali xizmat izlovchilar ulushi" }
      ]
    }
  },
  {
    id: 7,
    title: "Biznes Model va Daromad Manbalari",
    subtitle: "Tourest.uz Qanday Qilib Pul Ishlaydi? Barqaror Monetizatsiya Strategiyasi",
    category: "Biznes Model (Revenue)",
    speakerNotes: "Biz diversifikatsiyalangan biznes modelga egamiz: xizmat ko'rsatuvchilardan olinadigan komissiyalar, sayyohlarga to'g'ridan-to'g'ri pullik xizmatlar (Pass va audio paketlar) hamda B2B hamkorliklar orqali barqaror daromad shakllanadi.",
    keyPoints: [
      "1. B2C Komissiya: Gidlar va transferlardan 8-12% vositachilik haqi",
      "2. Tourest Pass Obunalari: Shahar muzeylariga paketli sotuvlar",
      "3. Premium Audio-Gidlar: Shaxsiy ekskursiya to'plamlari ($2 - $8)",
      "4. B2B Reklama & Hamkorlik: Mehmonxona, restoran va brendlar joylashuvi"
    ],
    content: {
      type: 'business_model',
      streams: [
        {
          name: "Bronlash Komissiyasi",
          type: "B2C / Marketplace",
          share: "45%",
          desc: "Gidlar, hunarmandlar master-klasslari va mahalliy turlardan 8-12% marja.",
          example: "$100 lik turdan $10 platforma daromadi"
        },
        {
          name: "Tourest Pass & QR Chiptalar",
          type: "Direct Sales",
          share: "25%",
          desc: "Muzey va obidalar uchun 1, 3 va 7 kunlik yagona chiptalardan ulush.",
          example: "$25 lik Pass dan $4 marja"
        },
        {
          name: "Premium Audio & AR Ekskursiyalar",
          type: "Digital Content",
          share: "18%",
          desc: "Eksklyuziv ovozli hikoyalar, professional diktorlar va tarixchilar tahlillari.",
          example: "Shaharlar to'plami $5.99"
        },
        {
          name: "B2B Promoted Listing & PRO Akkaunt",
          type: "SaaS & Ads",
          share: "12%",
          desc: "Restoran, kafe, suvenir do'konlari uchun xaritada birinchi bo'lib ko'rinish va analitika.",
          example: "Oylik $29 - $99 obuna"
        }
      ],
      unitEconomics: {
        cac: "$4.20",
        ltv: "$28.50",
        aov: "$48.00",
        payback: "1.4 oy"
      }
    }
  },
  {
    id: 8,
    title: "Maqsadli Auditoriya va Mijoz Portretlari",
    subtitle: "Biz Kimlar Uchun Xizmat Ko'rsatamiz?",
    category: "Auditoriya (Target Personas)",
    speakerNotes: "Mijozlarimiz faqat xorijliklar emas. Biz ichki turizmning ulkan salohiyatidan ham unumli foydalanamiz. Yoshlar, oilalar va madaniy sayohatchilar asosiy segmentimizdir.",
    keyPoints: [
      "1. Mustaqil Sayohat Qiluvchi Xorijliklar (Solo Backpackers & Digital Nomads)",
      "2. Madaniy va Tarixiy Sayyohlar (Oila va Katta Yoshlilar)",
      "3. Mahalliy Yoshlar va Oilaviy Sayyohlar (Weekend Travelers)",
      "4. MICE va Biznes Sayohatlar (Konferensiya ishtirokchilari)"
    ],
    content: {
      type: 'target_audience',
      personas: [
        {
          role: "Solo Xorijiy Sayyoh (22-38 yosh)",
          profile: "Yevropa, AQSh, Osiyo. Ingliz tilida so'zlashadi. Smartfonga tayanadi.",
          painPoint: "Arzon va ishonchli marshrut topish, aldanib qolmaslik, oflayn navigatsiya.",
          solution: "AI Itinerary + Oflayn GPS Audio-Gid + SOS xavfsizlik tugmasi.",
          share: "35%"
        },
        {
          role: "Madaniy Sayyohlar Guruh / Oila (35-65 yosh)",
          profile: "Tarix, me'morchilik va gastronomiyaga qiziqadi. Qulaylik muhim.",
          painPoint: "Sertifikatlangan professional gid topish, qulay transport va toza joylar.",
          solution: "Reytingli gidlar bronlash + Tourest Pass + Premium VIP transport.",
          share: "30%"
        },
        {
          role: "Mahalliy Ichki Sayyoh (18-45 yosh)",
          profile: "Dam olish kunlari Toshkentdan Zomin, Samarqand, Bo'stonliqqa boruvchilar.",
          painPoint: "Yangi noodatiy joylar, milliy oshxonaning eng zo'r nuqtalarini topish.",
          solution: "Gastro-xarita + Dam olish kunlari marshruti + Mahalliy arzon turlar.",
          share: "25%"
        },
        {
          role: "Biznes & MICE Sayyohlari",
          profile: "Xalqaro forum, ko'rgazma va biznes safarga kelgan mehmonlar.",
          painPoint: "Vaqt kamligi, 1 kun ichida eng muhim joylarni ko'rib ulgurish zarurati.",
          solution: "Ekspress 4-soatlik turlar + Transfer + Suvenir yetkazib berish.",
          share: "10%"
        }
      ]
    }
  },
  {
    id: 9,
    title: "Raqobat Tahlili va Bizning Ustunligimiz",
    subtitle: "Nega Aynan Tourest.uz Bozor Yetakchisiga Aylanadi?",
    category: "Raqobat (Competitive Edge)",
    speakerNotes: "Booking.com faqat mehmonxonalarni beradi, TripAdvisor faqat sharh beradi, GetYourGuide esa O'zbekistonning mahalliy nozikliklarini bilmaydi va yuqori 25-30% komissiya oladi. Tourest.uz — mahalliy to'lovlar, davlat sertifikati va 100% integratsiyalashgan ekotizim bilan yutadi.",
    keyPoints: [
      "Xalqaro gigantlar O'zbekiston ichki logistikasi va to'lov tizimlariga (Payme/Click) ega emas",
      "Mahalliy agentliklar onlayn emas va faqat oflayn ishlaydi",
      "Tourest.uz: Arzon komissiya, davlat tashkilotlari bilan to'g'ridan-to'g'ri integratsiya va AI",
      "Oflayn ishlay oluvchi yagona milliy audio-ekotizim"
    ],
    content: {
      type: 'competition',
      competitors: [
        {
          name: "Booking / Airbnb",
          type: "Xalqaro Gigant",
          pros: "Katta mehmonxonalar bazasi",
          cons: "Gidlar, transport, muzey chiptalari va SOS tizimi yo'q",
          tourestEdge: "To'liq sayohat sikli (Gid + Chipta + Transport + Taom)"
        },
        {
          name: "TripAdvisor / GetYourGuide",
          type: "Xalqaro Turlar",
          pros: "Global brend tanilishi",
          cons: "25-30% yuqori komissiya, O'zbekiston bo'yicha cheklangan kontent",
          tourestEdge: "8-12% arzon komissiya, mahalliy tilda jonli qo'llab-quvvatlash"
        },
        {
          name: "An'anaviy Tur-Agentliklar",
          type: "Oflayn Kompaniyalar",
          pros: "Shaxsiy muloqot",
          cons: "Qimmat paketlar, sekin reaktivlik, mobil ilova yo'qligi",
          tourestEdge: "10 soniyada onlayn bronlash va moslashuvchan reja"
        }
      ],
      matrix: [
        { feature: "Mahalliy To'lovlar (Payme, Click, Uzum, Visa)", tourest: true, booking: false, tripadvisor: false, localAgencies: true },
        { feature: "AI Shaxsiy Marshrut Generator", tourest: true, booking: false, tripadvisor: false, localAgencies: false },
        { feature: "8 Tilda Geo-Audio Gid & AR", tourest: true, booking: false, tripadvisor: false, localAgencies: false },
        { feature: "Muzeylarga Yagona QR Pass (Navbatsiz)", tourest: true, booking: false, tripadvisor: false, localAgencies: false },
        { feature: "24/7 SOS va Turizm Politsiyasi Aloqasi", tourest: true, booking: false, tripadvisor: false, localAgencies: false },
        { feature: "Arzon Komissiya (<12%)", tourest: true, booking: false, tripadvisor: false, localAgencies: false }
      ]
    }
  },
  {
    id: 10,
    title: "Rivojlanish Yo'l Xaritasi (Roadmap)",
    subtitle: "2025 - 2027 Yillar Uchun Strategik Rivojlanish Rejasi",
    category: "Yo'l Xaritasi (Roadmap)",
    speakerNotes: "Biz loyihani 3 ta asosiy bosqichda amalga oshiramiz. Birinchi yil O'zbekistonning Oltin Halqasi (Toshkent-Samarqand-Buxoro-Xiva), so'ngra barcha viloyatlar va 2027-yilda butun Buyuk Ipak Yo'li mamlakatlari integratsiyasi.",
    keyPoints: [
      "2025 Q1-Q2: MVP ishga tushirish, 4 asosiy shahar, 500+ gidlar bazasi",
      "2025 Q3-Q4: Tourest Pass, Oflayn Audio-gid va Gastro-modul",
      "2026: Farg'ona vodiysi, Zomin, Mo'ynoq, Orol dengizi + AI ovozli tarjimon",
      "2027: Markaziy Osiyo (Silk Road Regional Pass) — Qozog'iston, Qirg'iziston, Tojikiston"
    ],
    content: {
      type: 'roadmap',
      phases: [
        {
          period: "2025 Q1 — Q2",
          title: "MVP & Oltin Halqa (Launch)",
          status: "completed",
          deliverables: [
            "iOS & Android mobil ilovasi (Toshkent, Samarqand, Buxoro, Xiva)",
            "Gidlar va haydovchilar verifikatsiya tizimi",
            "Stripe & Payme to'lov integratsiyasi",
            "Dastlabki 10,000 yuklab olish"
          ]
        },
        {
          period: "2025 Q3 — Q4",
          title: "Ekotizim & Tourest Pass",
          status: "current",
          deliverables: [
            "Muzeylar uchun yagona Tourest Pass QR tizimi",
            "8 tilda GPS Geo-Audio Gid va oflayn xaritalar",
            "Turizm qo'mitasi va elchixonalar bilan hamkorlik",
            "50,000+ oylik faol foydalanuvchilar (MAU)"
          ]
        },
        {
          period: "2026",
          title: "Butun O'zbekiston & Eko-Turizm",
          status: "planned",
          deliverables: [
            "Zomin, Bo'stonliq, Mo'ynoq, Farg'ona vodiysi, Surxondaryo qamrovi",
            "AI jonli ovozli tarjimon (Sayyoh va mahalliy aholi o'rtasida)",
            "Gastro-turizm va hunarmandchilik birjasi",
            "Yillik daromad $1.5M+ marrasiga chiqish"
          ]
        },
        {
          period: "2027",
          title: "Silk Road Regional Hub",
          status: "planned",
          deliverables: [
            "Markaziy Osiyo (Qozog'iston, Qirg'iziston, Tojikiston) yagona vizasi va turizmi",
            "3D Virtual Reality & Metaverse sayohatlar",
            "Regional turizm platformasida 500K+ yillik sayyoh"
          ]
        }
      ]
    }
  },
  {
    id: 11,
    title: "Moliyaviy Reja va Prognozlar",
    subtitle: "3 Yillik Moliyaviy Ko'rsatkichlar va Rentabellik Dinamikasi",
    category: "Moliya (Financials)",
    speakerNotes: "Bizning moliyaviy modelimiz tejamkor va yuqori rentabelli. 2-yilning o'rtalaridayoq operatsion zararsizlik (Break-even) nuqtasiga chiqish va 3-yilda $4.2 million yalpi daromad olishni maqsad qilganmiz.",
    keyPoints: [
      "1-Yil: 80,000 foydalanuvchi, $380,000 tushum (Bozorga kirish va sinov)",
      "2-Yil: 280,000 foydalanuvchi, $1,650,000 tushum (Operatsion foyda boshlanishi)",
      "3-Yil: 750,000 foydalanuvchi, $4,200,000 tushum, $1.85M sof foyda",
      "Yuqori sof foyda marjasi: 35-44%"
    ],
    content: {
      type: 'financials',
      years: [
        { year: "2025 (1-yil)", users: "80,000", bookings: "35,000", revenue: "$380,000", netProfit: "-$45,000 (R&D)" },
        { year: "2026 (2-yil)", users: "280,000", bookings: "140,000", revenue: "$1,650,000", netProfit: "+$420,000" },
        { year: "2027 (3-yil)", users: "750,000", bookings: "420,000", revenue: "$4,200,000", netProfit: "+$1,850,000" }
      ],
      milestones: [
        "18-oyda to'liq o'zini-o'zi qoplash (Break-even) holati",
        "O'rtacha foydalanuvchi jalb qilish narxi (CAC): $4.20",
        "Mijozning umrboqiy qiymati (LTV): $28.50 (LTV / CAC nisbati: 6.8x)",
        "3-yilda 44% sof operatsion marja"
      ]
    }
  },
  {
    id: 12,
    title: "Professional Jamoa",
    subtitle: "Loyihani Muvaffaqiyatli Amalga Oshiruvchi Tajribali Mutaxassislar",
    category: "Jamoa (Team)",
    speakerNotes: "Bizning jamoamiz turizm sohasi mutaxassislari, IT dasturchilar, mahsulot boshqaruvchilari va xalqaro marketing ekspertlaridan iborat.",
    keyPoints: [
      "Turizm va IT sohasida 7+ yillik tajribaga ega rahbarlar",
      "Fintech va Marketplace platformalarini yaratgan arxitektorlar",
      "Madaniyat va Turizm vazirligi bilan tajribali aloqalar"
    ],
    content: {
      type: 'team',
      members: [
        {
          name: "Azizbek Rahimov",
          role: "Bosh Ijrochi Direktor (CEO & Co-founder)",
          bio: "7 yillik turizm va startap tajribasi. 10,000+ sayyohga xizmat ko'rsatgan tur-operator asoschisi.",
          prevExp: "Sobiq SilkRoad Travel rahbari, MBA",
          iconBg: "from-blue-600 to-cyan-600"
        },
        {
          name: "Jamshid Qodirov",
          role: "Bosh Texnik Direktor (CTO & Co-founder)",
          bio: "Fintech va geolokatsiya tizimlarida 8 yillik arxitektor. Yuqori yuklamali ilovalar yaratuvchisi.",
          prevExp: "Senior Backend Engineer (Ex-EPAM, Payme)",
          iconBg: "from-emerald-600 to-teal-600"
        },
        {
          name: "Madinabonu Karimova",
          role: "Bosh Mahsulot Dizayneri (Head of Product & UX)",
          bio: "Foydalanuvchi tajribasi bo'yicha xalqaro mutaxassis. Ko'p tilli interfeyslar arxitektori.",
          prevExp: "Lead Product Designer (Ex-SuperApp UI)",
          iconBg: "from-purple-600 to-pink-600"
        },
        {
          name: "Sardor Aliyev",
          role: "Marketing va Xalqaro Aloqalar (Head of Growth)",
          bio: "Xalqaro turizm ko'rgazmalari (ITB Berlin, WTM London) va digital marketing bo'yicha ekspert.",
          prevExp: "Growth Lead, 500K+ sayyoh jalb qilish kampaniyalari",
          iconBg: "from-amber-600 to-orange-600"
        }
      ]
    }
  },
  {
    id: 13,
    title: "Investitsiya Taklifi (The Ask)",
    subtitle: "O'sishni Tezlashtirish Uchun $250,000 Seed Bosqichi",
    category: "Investitsiya (The Ask)",
    speakerNotes: "Biz platformani O'zbekiston bo'ylab to'liq ishga tushirish, AI audio-gid texnologiyalarini rivojlantirish va xalqaro bozorlarda (Yevropa, Osiyo, MDH) sayyohlarni jalb qilish marketingi uchun $250,000 investitsiya jalb qilmoqchimiz.",
    keyPoints: [
      "Talab qilinayotgan summa: $250,000",
      "Kompaniya bahosi: $2.5 Million (Pre-money)",
      "Taklif etilayotgan ulush: 10% Equity",
      "Mablag' yetarliligi: 18 oylik intensiv o'sish (Runway)"
    ],
    content: {
      type: 'investment',
      askAmount: "$250,000",
      equity: "10%",
      runway: "18 Oy",
      allocation: [
        {
          category: "Dasturiy Ta'minot & AI R&D",
          percent: 40,
          amount: "$100,000",
          desc: "AI audio-gidlar, AR modellashtirish, oflayn xaritalar va xavfsizlik infratuzilmasi."
        },
        {
          category: "Xalqaro & Mahalliy Marketing",
          percent: 35,
          amount: "$87,500",
          desc: "Google/Meta Ads, aeroportlarda promo-stendlar, xalqaro travel-blogerlar va PR."
        },
        {
          category: "Gidlar va Hamkorlar Bazasini Kengaytirish",
          percent: 15,
          amount: "$37,500",
          desc: "Hududlarda gidlarni o'qitish, sertifikatlash va muzeylar bilan to'g'ridan-to'g'ri integratsiya."
        },
        {
          category: "Yuridik, Litsenziya & Zaxira",
          percent: 10,
          amount: "$25,000",
          desc: "Xalqaro litsenziyalar, xavfsizlik auditi va kutilmagan operatsion xarajatlar."
        }
      ]
    }
  },
  {
    id: 14,
    title: "Xulosa va Hamkorlikka Taklif",
    subtitle: "O'zbekiston Turizmining Yangi Davrini Birgalikda Yaratamiz!",
    category: "Aloqa & Xulosa",
    tagline: "Tourest.uz — Sizning Aqlli Yo'l Ko'rsatuvchingiz!",
    speakerNotes: "E'tiboringiz uchun katta rahmat! Tourest.uz — bu nafaqat biznes, balki O'zbekistonning boy madaniy merosini butun dunyoga eng zamonaviy texnologiyalar orqali namoyish etuvchi strategik loyihadir. Sizni hamkorlikka va ushbu yuksak o'sishga ega bozorga birga kirishga taklif qilamiz. Savollaringizga mamnuniyat bilan javob beraman!",
    keyPoints: [
      "Tayyor MVP va sinovdan o'tgan biznes model",
      "Yillik 28% ga o'sayotgan ulkan bozor imkoniyati",
      "Kuchli va o'z ishiga sadoqatli jamoa",
      "O'zbekistonni raqamli turizm markaziga aylantirish missiyasi"
    ],
    content: {
      type: 'conclusion',
      summaryPoints: [
        "Turizm sohasidagi birinchi to'liq milliy SuperApp",
        "Sayyohning barcha muammolariga yagona yechim",
        "3 yilda $4.2M daromad va $1.85M sof foyda potensiali",
        "Investitsiya: $250,000 (10% ulush uchun)"
      ],
      contacts: {
        email: "invest@tourest.uz",
        phone: "+998 (71) 200-88-99",
        web: "www.tourest.uz",
        address: "Toshkent shahri, IT Park Uzbekistan, Blok C",
        telegram: "@tourest_uz_official"
      }
    }
  }
];
