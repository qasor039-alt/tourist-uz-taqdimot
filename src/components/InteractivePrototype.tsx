import React, { useState } from 'react';
import { CITIES_DATA, TOUR_GUIDES, AUDIO_SAMPLES } from '../data/prototypeData';
import {
  Smartphone,
  MapPin,
  Headphones,
  Compass,
  Users,
  ShieldCheck,
  CreditCard,
  Play,
  Pause,
  Volume2,
  Sparkles,
  Search,
  CheckCircle2,
  PhoneCall,
  Clock,
  DollarSign,
  Calendar,
  Languages,
  ArrowRight,
  RefreshCw,
  QrCode
} from 'lucide-react';

export const InteractivePrototype: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'explore' | 'planner' | 'audio' | 'guides' | 'sos'>('explore');
  const [selectedCity, setSelectedCity] = useState(CITIES_DATA[0]);

  // Itinerary Planner state
  const [planCity, setPlanCity] = useState('samarkand');
  const [planDays, setPlanDays] = useState(3);
  const [planStyle, setPlanStyle] = useState('culture');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);

  // Audio Guide Player state
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [audioLang, setAudioLang] = useState('O\'zbekcha');

  // Currency Converter state
  const [usdAmount, setUsdAmount] = useState<number>(100);
  const exchangeRate = 12850; // 1 USD = 12,850 UZS

  // Guide booking simulation
  const [bookedGuide, setBookedGuide] = useState<string | null>(null);

  const handleGeneratePlan = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedPlan({
        city: planCity === 'samarkand' ? 'Samarqand' : planCity === 'bukhara' ? 'Buxoro' : 'Toshkent',
        days: planDays,
        estimatedCost: planDays * (planStyle === 'budget' ? 35 : planStyle === 'luxury' ? 120 : 65),
        schedule: [
          {
            day: 1,
            title: "Qadimiy Markaz & Me'moriy Durdonalar",
            spots: [
              { time: "09:00", spot: "Registon Maydoni (3 Madrasa)", cost: "65,000 UZS", tip: "Audio-gidni yoqing" },
              { time: "12:30", spot: "Milliy Osh Markazi (Samarqandcha Palov)", cost: "45,000 UZS", tip: "Ziravorli choy bilan" },
              { time: "14:30", spot: "Go'ri Amir Maqbarasi", cost: "50,000 UZS", tip: "Temuriylar daxmasi" },
              { time: "17:00", spot: "Siyob Bozori (Halva & Quruq mevalar)", cost: "Erkin xarid", tip: "Savdolashing" }
            ]
          },
          {
            day: 2,
            title: "Afsonaviy Ziyoratgohlar va Astronomiya",
            spots: [
              { time: "09:30", spot: "Shohi Zinda Moviy Majmuasi", cost: "60,000 UZS", tip: "Eng chiroyli koshinlar" },
              { time: "12:00", spot: "Bibixonim Masjidi", cost: "40,000 UZS", tip: "Tarixiy ulug'vorlik" },
              { time: "15:00", spot: "Mirzo Ulug'bek Rasadxonasi & Muzey", cost: "45,000 UZS", tip: "Qadimiy sekstant" }
            ]
          },
          ...(planDays >= 3 ? [{
            day: 3,
            title: "Hunarmandchilik & Zamonaviy Ekoturizm",
            spots: [
              { time: "10:00", spot: "Konigil Qog'oz Fabrikasi (Ipak qog'oz)", cost: "35,000 UZS", tip: "Masterklassda qatnashing" },
              { time: "13:30", spot: "Tog' yonbag'rida tushlik (Shashlik & Qaymoq)", cost: "80,000 UZS", tip: "Manzarali panorama" },
              { time: "16:30", spot: "Afrosiyob poyezdiga transfer", cost: "40,000 UZS", tip: "Tourest Pass orqali" }
            ]
          }] : [])
        ]
      });
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-slate-900/90 border border-blue-500/30 mb-6 backdrop-blur-xl shadow-xl">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <span className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-400 text-white shadow-md shadow-blue-500/30">
              <Smartphone className="w-4 h-4 font-bold" />
            </span>
            <h2 className="text-lg font-extrabold text-white">
              Tourest.uz Mobil Ilovasi — Interaktiv Jonli Prototip
            </h2>
          </div>
          <p className="text-xs text-slate-300">
            Haqiqiy ilova qanday ishlashini quyidagi interfaol modulda to'liq sinab ko'ring:
          </p>
        </div>

        {/* Prototype Navigation Buttons */}
        <div className="flex flex-wrap gap-1.5 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 text-xs backdrop-blur-md">
          <button
            onClick={() => setActiveTab('explore')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'explore'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Shaharlar & Obidalar</span>
          </button>

          <button
            onClick={() => setActiveTab('planner')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'planner'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>AI Marshrutlovchi</span>
          </button>

          <button
            onClick={() => setActiveTab('audio')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'audio'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>Geo Audio-Gid</span>
          </button>

          <button
            onClick={() => setActiveTab('guides')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'guides'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Gidlar & Xizmatlar</span>
          </button>

          <button
            onClick={() => setActiveTab('sos')}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'sos'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SOS & Valyuta</span>
          </button>
        </div>
      </div>

      {/* Main Prototype View Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* TAB 1: EXPLORE CITIES */}
        {activeTab === 'explore' && (
          <div className="lg:col-span-12 space-y-6">
            {/* City Selector Pills */}
            <div className="flex overflow-x-auto gap-2.5 pb-2">
              {CITIES_DATA.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCity(c)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 border transition-all flex items-center gap-2 ${
                    selectedCity.id === c.id
                      ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-900/40'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{c.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 opacity-90">
                    ★ {c.rating}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected City Hero Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
              <div className="md:col-span-6 rounded-2xl overflow-hidden aspect-video md:aspect-auto relative border border-slate-800">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-blue-400 text-xs font-bold border border-blue-500/30">
                    {selectedCity.badge}
                  </span>
                </div>
              </div>

              <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-white">{selectedCity.name}</h3>
                    <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-800">
                      {selectedCity.attractionsCount}+ obida
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">{selectedCity.region}</p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {selectedCity.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Mashhur Tarixiy Qadamjolar:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCity.popularSpots.map((spot, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 text-xs text-slate-200 border border-slate-800 flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setPlanCity(selectedCity.id);
                      setActiveTab('planner');
                    }}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-blue-600/30 flex items-center gap-1.5 transition-all"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>{selectedCity.name} uchun Marshrut Tuzish</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('audio')}
                    className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-all"
                  >
                    <Headphones className="w-3.5 h-3.5 text-blue-400" />
                    <span>Audio-Gid Tinglash</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AI ITINERARY PLANNER */}
        {activeTab === 'planner' && (
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Planner Controls Form (4 cols) */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-emerald-400">
                <Compass className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Aqlli Marshrut Parametrlari
                </h3>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Qaysi Shaharga Borasiz?
                </label>
                <select
                  value={planCity}
                  onChange={(e) => setPlanCity(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="samarkand">Samarqand (Oltin Halqa)</option>
                  <option value="bukhara">Buxoro (Sharq Ertagi)</option>
                  <option value="khiva">Xiva (Ichan Qal'a)</option>
                  <option value="tashkent">Toshkent (Megapolis)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Sayohat Davomiyligi (Kun)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((d) => (
                    <button
                      key={d}
                      onClick={() => setPlanDays(d)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        planDays === d
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      {d} Kun
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Sayohat Uslubi / Qiziqish
                </label>
                <div className="space-y-1.5">
                  {[
                    { id: 'culture', label: "🏛️ Madaniy & Tarixiy" },
                    { id: 'gastro', label: "🍜 Gastronomik & Oshxona" },
                    { id: 'budget', label: "💰 Byudjetbop & Erkin" }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setPlanStyle(s.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                        planStyle === s.id
                          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/50'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGeneratePlan}
                disabled={isGenerating}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>AI Marshrut Generatsiya Qilmoqda...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Smart Rejani Hisoblash</span>
                  </>
                )}
              </button>
            </div>

            {/* Generated Plan Timeline (8 cols) */}
            <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-900 border border-slate-800">
              {generatedPlan ? (
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {generatedPlan.city} — {generatedPlan.days} Kunlik AI Marshrut
                      </h3>
                      <p className="text-xs text-slate-400">
                        Taxminiy o'rtacha xarajat: <span className="text-emerald-400 font-bold font-mono">${generatedPlan.estimatedCost}</span> (Barcha chiptalar va tushlik bilan)
                      </p>
                    </div>
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold">
                      Optimallashtirilgan
                    </span>
                  </div>

                  <div className="space-y-4">
                    {generatedPlan.schedule.map((dayPlan: any) => (
                      <div key={dayPlan.day} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 text-[11px] font-extrabold font-mono">
                            KUN 0{dayPlan.day}
                          </span>
                          <h4 className="text-xs font-bold text-slate-200">{dayPlan.title}</h4>
                        </div>

                        <div className="space-y-2">
                          {dayPlan.spots.map((item: any, i: number) => (
                            <div key={i} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-emerald-400 text-[11px] min-w-[45px]">{item.time}</span>
                                <div>
                                  <p className="font-bold text-slate-200">{item.spot}</p>
                                  <p className="text-[10px] text-slate-400">Maslahat: {item.tip}</p>
                                </div>
                              </div>
                              <span className="text-[11px] font-mono font-semibold text-slate-300">{item.cost}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 text-slate-400 space-y-3">
                  <Compass className="w-12 h-12 text-slate-600" />
                  <p className="text-sm font-semibold text-slate-300">
                    Chap tomondan shahar va kunlarni tanlang hamda "Smart Rejani Hisoblash" tugmasini bosing!
                  </p>
                  <p className="text-xs text-slate-500 max-w-md">
                    Tourest.uz sun'iy intellekti barcha tarixiy obidalar, muzeylar, milliy ovqatlanish joylari va transportni eng qulay tartibda taqsimlab beradi.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: AUDIO-GUIDE PLAYER */}
        {activeTab === 'audio' && (
          <div className="lg:col-span-12 space-y-6">
            {/* Language Selector */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <Languages className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white">Audio Gid Tili:</span>
              <div className="flex flex-wrap gap-1.5 ml-2">
                {["O'zbekcha", "English", "Русский", "Deutsch", "Français", "中文", "日本語"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setAudioLang(lang)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      audioLang === lang
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Audio Track Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {AUDIO_SAMPLES.map((track) => {
                const isPlaying = playingAudioId === track.id;
                return (
                  <div
                    key={track.id}
                    className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                      isPlaying
                        ? 'bg-emerald-950/40 border-emerald-500/60 shadow-xl'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">
                          {track.monument}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {track.duration}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-white mb-2">
                        {track.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4 italic">
                        "{track.audioExcerpt}"
                      </p>

                      {/* Animated Sound Wave if playing */}
                      {isPlaying && (
                        <div className="flex items-center justify-center gap-1 my-3 h-6">
                          {[12, 24, 18, 28, 14, 26, 20, 30, 16, 22].map((h, i) => (
                            <div
                              key={i}
                              className="w-1 bg-emerald-400 rounded-full animate-pulse"
                              style={{ height: `${h}px`, animationDelay: `${i * 100}ms` }}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                      <button
                        onClick={() => setPlayingAudioId(isPlaying ? null : track.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 ${
                          isPlaying
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                        }`}
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isPlaying ? "To'xtatish" : "Tinglash"}</span>
                      </button>

                      <span className="text-[11px] text-slate-400">
                        {audioLang}da
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: VERIFIED TOUR GUIDES */}
        {activeTab === 'guides' && (
          <div className="lg:col-span-12 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TOUR_GUIDES.map((g) => (
                <div
                  key={g.id}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center font-bold text-white text-lg">
                        {g.name.charAt(0)}
                      </div>
                      <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                        ★ {g.rating}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white">{g.name}</h3>
                    <p className="text-xs text-slate-400 mb-2">{g.city} • {g.experienceYears} yil tajriba</p>
                    <p className="text-xs text-slate-300 mb-3">{g.specialty}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {g.languages.map((l, i) => (
                        <span key={i} className="text-[10px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400">Narxi:</p>
                      <p className="text-xs font-bold text-emerald-400 font-mono">{g.hourlyRate}</p>
                    </div>

                    <button
                      onClick={() => setBookedGuide(g.name)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                    >
                      Band Qilish
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {bookedGuide && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 flex items-center justify-between">
                <span>
                  ✅ <strong>{bookedGuide}</strong> bilan aloqa o'rnatish so'rovi muvaffaqiyatli yuborildi!
                </span>
                <button
                  onClick={() => setBookedGuide(null)}
                  className="text-slate-400 hover:text-white underline ml-4"
                >
                  Yopish
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 5: SOS & CURRENCY */}
        {activeTab === 'sos' && (
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SOS Safety Box */}
            <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-base font-bold">24/7 Tezkor Yordam & SOS</h3>
              </div>
              <p className="text-xs text-slate-300">
                Favqulodda holat yuz berganda bitta tugma orqali Turizm Politsiyasi va tezkor xizmatlarga GPS koordinatalaringiz yuboriladi.
              </p>

              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-rose-900/40 text-center">
                  <p className="text-lg font-black text-rose-400 font-mono">1173</p>
                  <p className="text-[10px] text-slate-400">Turizm Politsiyasi</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-rose-900/40 text-center">
                  <p className="text-lg font-black text-rose-400 font-mono">112</p>
                  <p className="text-[10px] text-slate-400">Yagona Qutqaruv</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-rose-900/40 text-center">
                  <p className="text-lg font-black text-rose-400 font-mono">103</p>
                  <p className="text-[10px] text-slate-400">Tez Tibbiy Yordam</p>
                </div>
              </div>
            </div>

            {/* Currency Converter */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <DollarSign className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">Valyuta Kalkulyatori (Real Kurs)</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Xorijiy Valyuta (USD $):</label>
                  <input
                    type="number"
                    value={usdAmount}
                    onChange={(e) => setUsdAmount(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-mono"
                  />
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-xs text-slate-400">O'zbekiston So'mida (UZS):</span>
                  <span className="text-lg font-black text-emerald-400 font-mono">
                    {(usdAmount * exchangeRate).toLocaleString()} UZS
                  </span>
                </div>

                <p className="text-[10px] text-slate-500 text-right">
                  * Markaziy Bankning joriy kursi bo'yicha hisoblanadi (1 USD = 12,850 UZS)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
