import React from 'react';
import { SlideData } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  MapPin,
  Headphones,
  Users,
  Utensils,
  QrCode,
  ShieldCheck,
  ShieldAlert,
  Layers,
  Languages,
  HelpCircle,
  CreditCard,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  Award,
  Sparkles,
  Globe,
  Calendar,
  DollarSign,
  Building,
  PhoneCall,
  Mail,
  Send,
  Check,
  ChevronRight,
  Info,
  Smartphone,
  Star
} from 'lucide-react';

interface SlideViewerProps {
  slide: SlideData;
  slideIndex: number;
  totalSlides: number;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onSwitchToPrototype: () => void;
  onSwitchToCalculator: () => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-rose-400" />;
    case 'Layers': return <Layers className="w-5 h-5 text-amber-400" />;
    case 'Languages': return <Languages className="w-5 h-5 text-indigo-400" />;
    case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-blue-400" />;
    case 'Compass': return <Compass className="w-6 h-6 text-blue-400" />;
    case 'BadgeCheck': return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
    case 'Headphones': return <Headphones className="w-6 h-6 text-indigo-400" />;
    case 'CreditCard': return <CreditCard className="w-6 h-6 text-amber-400" />;
    case 'MapPin': return <MapPin className="w-5 h-5 text-blue-400" />;
    case 'Users': return <Users className="w-5 h-5 text-emerald-400" />;
    case 'Utensils': return <Utensils className="w-5 h-5 text-orange-400" />;
    case 'QrCode': return <QrCode className="w-5 h-5 text-purple-400" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    default: return <Sparkles className="w-5 h-5 text-blue-400" />;
  }
};

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  slideIndex,
  totalSlides,
  onNextSlide,
  onPrevSlide,
  onSwitchToPrototype,
  onSwitchToCalculator
}) => {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between py-6 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Slide Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 15, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.99 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="flex-1 flex flex-col justify-between"
        >
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {slide.category}
                </span>
                <span className="text-xs font-mono text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-800">
                  Slayd #{slide.id} / {totalSlides}
                </span>
              </div>
              {slide.tagline && (
                <span className="text-xs font-medium text-slate-300 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800/80 flex items-center gap-1.5 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {slide.tagline}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-1.5 max-w-3xl leading-relaxed">
              {slide.subtitle}
            </p>
          </div>

          {/* Dynamic Content Area Based on Slide Type */}
          <div className="my-auto py-2">
            {/* HERO SLIDE */}
            {slide.content.type === 'hero' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase italic">
                    <Globe className="w-4 h-4 text-blue-400 animate-spin-slow" />
                    <span>Yangi Avlod Sayohat Ilovasi</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                    O'zbekistonni <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500">
                      Yangi Rakursda
                    </span> <br />
                    Kashf Eting
                  </h2>

                  <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                    {slide.content.punchline}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {slide.content.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-2 shadow-sm backdrop-blur-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={onNextSlide}
                      className="bg-white hover:bg-slate-200 text-slate-950 px-8 py-3.5 rounded-xl font-bold flex items-center gap-3 shadow-xl shadow-white/5 cursor-pointer transition-all hover:scale-[1.02] text-sm"
                    >
                      <span>Taqdimotni Ko'rish</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onSwitchToPrototype}
                      className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-white px-7 py-3.5 rounded-xl font-bold flex items-center gap-3 backdrop-blur-sm cursor-pointer transition-all text-sm"
                    >
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                      <span>Ilova Prototipi</span>
                    </button>
                  </div>
                </div>

                {/* Hero Visual Mockup Preview - Immersive Style */}
                <div className="lg:col-span-5 relative flex justify-center">
                  <div className="w-72 sm:w-80 h-[460px] bg-slate-900 border-[6px] border-slate-800 rounded-[40px] relative shadow-2xl shadow-blue-500/20 overflow-hidden">
                    {/* Top notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-800 rounded-b-2xl z-20"></div>

                    <div className="p-5 pt-8 flex flex-col gap-3.5 h-full justify-between">
                      {/* Featured Recommendation */}
                      <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-4 flex flex-col justify-end relative overflow-hidden shadow-lg">
                        <img
                          src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=800&auto=format&fit=crop"
                          alt="Registon"
                          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                        />
                        <div className="relative z-10">
                          <p className="text-[10px] uppercase font-bold text-blue-200">Bugun tavsiya etiladi</p>
                          <p className="font-extrabold text-white text-base">Registon Maydoni</p>
                          <p className="text-[10px] text-emerald-300">🎧 8 tildagi GPS audio-gid faol</p>
                        </div>
                      </div>

                      {/* Fast Action Grid */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                          <div className="w-7 h-7 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center mb-1.5">
                            <Compass className="w-4 h-4" />
                          </div>
                          <p className="text-[11px] font-bold text-white">Smart Marshrut</p>
                          <p className="text-[9px] text-slate-400">3 Kunlik Oltin Halqa</p>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                          <div className="w-7 h-7 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-1.5">
                            <QrCode className="w-4 h-4" />
                          </div>
                          <p className="text-[11px] font-bold text-white">Tourest Pass</p>
                          <p className="text-[9px] text-slate-400">QR Chipta Faol</p>
                        </div>
                      </div>

                      {/* City highlights preview */}
                      <div>
                        <p className="text-xs font-bold mb-2 text-slate-400">Ommabop Shaharlar</p>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50 border border-slate-700/40 text-xs">
                            <span className="font-semibold text-slate-200">Samarqand</span>
                            <span className="text-[10px] font-mono text-emerald-400">★ 4.9 (45+ obida)</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50 border border-slate-700/40 text-xs">
                            <span className="font-semibold text-slate-200">Buxoro</span>
                            <span className="text-[10px] font-mono text-emerald-400">★ 4.9 (60+ obida)</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom navigation bar */}
                      <div className="w-full h-11 bg-slate-800/80 backdrop-blur-md rounded-xl flex justify-around items-center px-2">
                        <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-600 opacity-60"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-600 opacity-60"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-600 opacity-60"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge bubbles */}
                  <div className="absolute -right-2 top-1/3 flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40 text-white font-black text-lg">
                      T
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/40 text-white text-sm">
                      ★
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROBLEM SLIDE */}
            {slide.content.type === 'problem' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {slide.content.problems.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-rose-500/40 transition-all duration-300 shadow-md backdrop-blur-md group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 group-hover:scale-105 transition-transform">
                        {getIcon(p.icon)}
                      </div>
                      <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        {p.stat}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-rose-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* SOLUTION SLIDE */}
            {slide.content.type === 'solution' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {slide.content.pillars.map((pil, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-md backdrop-blur-md group"
                  >
                    <div className="p-2.5 w-fit rounded-xl bg-blue-500/10 border border-blue-500/20 mb-3 group-hover:scale-105 transition-transform">
                      {getIcon(pil.icon)}
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                      {pil.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      {pil.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{pil.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FEATURES SLIDE */}
            {slide.content.type === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {slide.content.coreFeatures.map((f) => (
                  <div
                    key={f.id}
                    className="p-4.5 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between backdrop-blur-md hover:shadow-lg hover:shadow-blue-500/5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                          {getIcon(f.icon)}
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {f.tag}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1">
                        {f.name}
                      </h3>
                      <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                        {f.desc}
                      </p>
                      <ul className="space-y-1.5 mb-3">
                        {f.details.map((d, i) => (
                          <li key={i} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2.5 border-t border-slate-800/80 text-[11px] font-semibold text-emerald-400 flex items-center justify-between">
                      <span className="text-slate-400 font-normal">Natija:</span>
                      <span>{f.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ARCHITECTURE / UX SLIDE */}
            {slide.content.type === 'architecture' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {slide.content.modules.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-2xl bg-slate-900/70 border border-slate-800/90 relative overflow-hidden backdrop-blur-md"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500" />
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase">
                      Bosqich 0{idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-2 mb-1">
                      {m.title}
                    </h3>
                    <p className="text-[11px] font-mono text-blue-400 mb-3">
                      {m.tech}
                    </p>
                    <ul className="space-y-2">
                      {m.items.map((it, i) => (
                        <li key={i} className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* MARKET SIZE SLIDE */}
            {slide.content.type === 'market' && (
              <div className="space-y-6">
                {/* TAM SAM SOM Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-center backdrop-blur-md">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">TAM (Umumiy Bozor)</span>
                    <p className="text-3xl font-black text-white mt-2 font-mono">{slide.content.tam}</p>
                    <p className="text-xs text-slate-400 mt-1">O'zbekiston bo'yicha jami turizm xarajatlari</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-950/40 to-slate-950 border border-blue-500/30 text-center backdrop-blur-md shadow-lg shadow-blue-500/5">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400">SAM (Servis Bozori)</span>
                    <p className="text-3xl font-black text-blue-300 mt-2 font-mono">{slide.content.sam}</p>
                    <p className="text-xs text-slate-300 mt-1">Raqamli bronlash, gidlar va ekskursiyalar</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/40 to-slate-950 border border-emerald-500/30 text-center backdrop-blur-md shadow-lg shadow-emerald-500/5">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">SOM (3 Yillik Maqsad)</span>
                    <p className="text-3xl font-black text-emerald-300 mt-2 font-mono">{slide.content.som}</p>
                    <p className="text-xs text-slate-300 mt-1">Tourest.uz egallashi rejalashtirilgan ulush</p>
                  </div>
                </div>

                {/* Key Market Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {slide.content.stats.map((s, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      <p className="text-xs text-slate-400">{s.title}</p>
                      <p className="text-xl font-extrabold text-white mt-1 font-mono">{s.value}</p>
                      <p className="text-[11px] text-blue-400 mt-0.5">{s.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BUSINESS MODEL SLIDE */}
            {slide.content.type === 'business_model' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {slide.content.streams.map((st, idx) => (
                    <div
                      key={idx}
                      className="p-4.5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between backdrop-blur-md"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                            {st.type}
                          </span>
                          <span className="text-xs font-bold text-blue-400 font-mono">
                            {st.share}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-white mb-1.5">
                          {st.name}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed mb-3">
                          {st.desc}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-800 text-[11px] text-amber-300/90 font-medium">
                        Misol: {st.example}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Unit Economics Bar */}
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 flex flex-wrap items-center justify-around gap-4 text-center backdrop-blur-md">
                  <div>
                    <p className="text-xs text-slate-400">CAC (Jalb Qilish Xarajati)</p>
                    <p className="text-lg font-bold text-white font-mono mt-0.5">{slide.content.unitEconomics.cac}</p>
                  </div>
                  <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                  <div>
                    <p className="text-xs text-slate-400">LTV (Mijoz Qiymati)</p>
                    <p className="text-lg font-bold text-emerald-400 font-mono mt-0.5">{slide.content.unitEconomics.ltv}</p>
                  </div>
                  <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                  <div>
                    <p className="text-xs text-slate-400">AOV (O'rtacha Chek)</p>
                    <p className="text-lg font-bold text-white font-mono mt-0.5">{slide.content.unitEconomics.aov}</p>
                  </div>
                  <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                  <div>
                    <p className="text-xs text-slate-400">Qoplash Muddati</p>
                    <p className="text-lg font-bold text-blue-400 font-mono mt-0.5">{slide.content.unitEconomics.payback}</p>
                  </div>
                </div>
              </div>
            )}

            {/* TARGET AUDIENCE SLIDE */}
            {slide.content.type === 'target_audience' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {slide.content.personas.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between backdrop-blur-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-blue-400 font-mono">
                          Ulush: {p.share}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white mb-2">
                        {p.role}
                      </h3>
                      <p className="text-xs text-slate-400 mb-3">
                        {p.profile}
                      </p>
                      <div className="p-2.5 rounded-xl bg-rose-950/20 border border-rose-900/30 text-xs text-rose-300 mb-2">
                        <span className="font-bold text-rose-400 block text-[10px] uppercase">Muammo:</span>
                        {p.painPoint}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-xs text-emerald-300">
                      <span className="font-bold text-emerald-400 block text-[10px] uppercase">Bizning Yechim:</span>
                      {p.solution}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* COMPETITION SLIDE */}
            {slide.content.type === 'competition' && (
              <div className="space-y-5">
                {/* Feature Comparison Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400">
                        <th className="p-3.5 font-semibold">Funksionallik & Imkoniyat</th>
                        <th className="p-3.5 font-bold text-blue-400 bg-blue-950/30">Tourest.uz</th>
                        <th className="p-3.5 font-semibold">Booking.com</th>
                        <th className="p-3.5 font-semibold">TripAdvisor</th>
                        <th className="p-3.5 font-semibold">Oflayn Tur-agentlik</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {slide.content.matrix.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40">
                          <td className="p-3.5 text-slate-200 font-medium">{row.feature}</td>
                          <td className="p-3.5 bg-blue-950/20">
                            {row.tourest ? (
                              <CheckCircle2 className="w-4 h-4 text-blue-400" />
                            ) : (
                              <XCircle className="w-4 h-4 text-slate-600" />
                            )}
                          </td>
                          <td className="p-3.5">
                            {row.booking ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-500/70" />
                            )}
                          </td>
                          <td className="p-3.5">
                            {row.tripadvisor ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-500/70" />
                            )}
                          </td>
                          <td className="p-3.5">
                            {row.localAgencies ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-500/70" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Key Competitive Advantages summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {slide.content.competitors.map((c, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                      <p className="font-bold text-white">{c.name} ({c.type})</p>
                      <p className="text-rose-400 text-[11px] mt-1">Kamchiligi: {c.cons}</p>
                      <p className="text-blue-400 font-medium text-[11px] mt-1">Bizning ustunlik: {c.tourestEdge}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ROADMAP SLIDE */}
            {slide.content.type === 'roadmap' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {slide.content.phases.map((ph, idx) => (
                  <div
                    key={idx}
                    className={`p-4.5 rounded-2xl border transition-all flex flex-col justify-between backdrop-blur-md ${
                      ph.status === 'current'
                        ? 'bg-blue-950/30 border-blue-500/50 shadow-lg shadow-blue-950/50'
                        : ph.status === 'completed'
                        ? 'bg-slate-900/90 border-emerald-800/60'
                        : 'bg-slate-900/60 border-slate-800 opacity-90'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-blue-400">
                          {ph.period}
                        </span>
                        <span
                          className={`text-[9px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                            ph.status === 'completed'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : ph.status === 'current'
                              ? 'bg-blue-500 text-slate-950 font-black'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {ph.status === 'completed'
                            ? 'Bajarildi'
                            : ph.status === 'current'
                            ? 'Hozirgi Bosqich'
                            : 'Rejalashtirilgan'}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-white mb-3">
                        {ph.title}
                      </h3>

                      <ul className="space-y-2">
                        {ph.deliverables.map((d, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FINANCIALS SLIDE */}
            {slide.content.type === 'financials' && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {slide.content.years.map((y, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 text-center relative overflow-hidden backdrop-blur-md"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500" />
                      <span className="text-xs font-bold text-blue-400 font-mono">{y.year}</span>
                      <p className="text-2xl font-black text-white mt-2 font-mono">{y.revenue}</p>
                      <p className="text-xs text-slate-400">Yalpi Daromad</p>
                      <div className="mt-4 pt-3 border-t border-slate-800 space-y-1.5 text-xs text-left">
                        <div className="flex justify-between text-slate-300">
                          <span>Foydalanuvchilar:</span>
                          <span className="font-bold text-white font-mono">{y.users}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Bronlar soni:</span>
                          <span className="font-bold text-white font-mono">{y.bookings}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Sof Foyda:</span>
                          <span className="font-bold text-emerald-400 font-mono">{y.netProfit}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-white">Moliyaviy Ko'rsatkichlar & Marja:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {slide.content.milestones.map((m, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700">
                        {m}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={onSwitchToCalculator}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 ml-auto"
                  >
                    <span>Interaktiv ROI Simulyatorini Ochish</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* TEAM SLIDE */}
            {slide.content.type === 'team' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {slide.content.members.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all text-center flex flex-col justify-between backdrop-blur-md"
                  >
                    <div>
                      <div className={`w-14 h-14 rounded-2xl mx-auto bg-gradient-to-br ${m.iconBg} flex items-center justify-center text-white font-extrabold text-xl shadow-lg mb-3`}>
                        {m.name.charAt(0)}
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {m.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-400 mt-0.5 mb-2">
                        {m.role}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        {m.bio}
                      </p>
                    </div>
                    <div className="pt-2.5 border-t border-slate-800 text-[11px] text-slate-400 font-medium">
                      {m.prevExp}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* INVESTMENT ASK SLIDE */}
            {slide.content.type === 'investment' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-500/40 backdrop-blur-md shadow-lg shadow-blue-500/5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Talab Qilinayotgan Summa</span>
                    <p className="text-3xl sm:text-4xl font-black text-blue-400 font-mono mt-1">{slide.content.askAmount}</p>
                    <p className="text-xs text-slate-300 mt-1">Seed Round Investitsiya</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Taklif Etilayotgan Ulush</span>
                    <p className="text-3xl sm:text-4xl font-black text-white font-mono mt-1">{slide.content.equity}</p>
                    <p className="text-xs text-slate-300 mt-1">$2.5M Pre-money baholash</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mablag' Yetarliligi</span>
                    <p className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1">{slide.content.runway}</p>
                    <p className="text-xs text-slate-300 mt-1">Break-even holatigacha</p>
                  </div>
                </div>

                {/* Fund Allocation Bars */}
                <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 backdrop-blur-md">
                  <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    Mablag'larning Taqsimlanishi (Use of Funds)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {slide.content.allocation.map((al, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="font-bold text-white">{al.category}</span>
                          <span className="font-mono text-blue-400 font-bold">{al.percent}% ({al.amount})</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-1.5">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" style={{ width: `${al.percent}%` }} />
                        </div>
                        <p className="text-[11px] text-slate-400">{al.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CONCLUSION / CONTACT SLIDE */}
            {slide.content.type === 'conclusion' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                    Tourest.uz bilan O'zbekiston Turizm Kelajagiga Hissa Qo'shing!
                  </h2>
                  <div className="space-y-2.5">
                    {slide.content.summaryPoints.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex flex-wrap gap-3">
                    <button
                      onClick={onSwitchToPrototype}
                      className="bg-white hover:bg-slate-200 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-xl shadow-white/5 flex items-center gap-2 text-xs cursor-pointer transition-all hover:scale-[1.02]"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Mobil Ilovani Sinab Ko'rish</span>
                    </button>
                    <button
                      onClick={onSwitchToCalculator}
                      className="bg-slate-800/60 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl border border-slate-700 backdrop-blur-sm flex items-center gap-2 text-xs cursor-pointer transition-all"
                    >
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      <span>Investitsion ROI Hisoblash</span>
                    </button>
                  </div>
                </div>

                {/* Contacts Box */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/80 border border-blue-500/30 shadow-2xl backdrop-blur-xl space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center text-white font-black text-lg">
                      T
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Tourest.uz Jamoasi</p>
                      <p className="text-xs text-blue-400 font-mono">invest@tourest.uz</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{slide.content.contacts.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <PhoneCall className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{slide.content.contacts.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{slide.content.contacts.web}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Send className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Telegram: {slide.content.contacts.telegram}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Building className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{slide.content.contacts.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Immersive Footer Bar (Design Theme Inspired) */}
          <div className="pt-4 border-t border-white/5 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/80 backdrop-blur-xl">
              {/* Speaker Talking Points / Key Highlights */}
              <div className="lg:col-span-8 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1 mr-1">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Asosiy Nuqtalar:
                </span>
                {slide.keyPoints.slice(0, 3).map((kp, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-900/90 text-slate-300 px-3 py-1 rounded-xl border border-slate-800 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span className="truncate max-w-[280px] sm:max-w-none">{kp}</span>
                  </span>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="lg:col-span-4 flex items-center justify-end gap-2.5">
                <button
                  onClick={onPrevSlide}
                  disabled={slideIndex === 0}
                  className="px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 disabled:opacity-30 transition-all hover:border-slate-700"
                >
                  Orqaga
                </button>
                <button
                  onClick={onNextSlide}
                  disabled={slideIndex === totalSlides - 1}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 disabled:opacity-30 flex items-center gap-1.5 transition-all hover:scale-[1.02]"
                >
                  <span>Keyingi Slayd</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
