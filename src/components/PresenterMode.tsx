import React, { useState, useEffect } from 'react';
import { SlideData } from '../types';
import {
  Mic,
  Clock,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MessageSquare,
  Eye,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Award
} from 'lucide-react';

interface PresenterModeProps {
  slides: SlideData[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onClosePresenter: () => void;
}

export const PresenterMode: React.FC<PresenterModeProps> = ({
  slides,
  currentSlideIndex,
  onSelectSlide,
  onClosePresenter
}) => {
  const currentSlide = slides[currentSlideIndex];
  const nextSlide = slides[currentSlideIndex + 1];

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResetTimer = () => {
    setSeconds(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Top Cockpit Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-slate-900/90 border border-blue-500/30 backdrop-blur-xl mb-6 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>Spiker & Taqdimotchi Paneli</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Jonli Rejim
              </span>
            </h2>
            <p className="text-xs text-slate-400">Nutq matni, vaqt hisobi va keyingi slayd ma'lumotlari</p>
          </div>
        </div>

        {/* Stopwatch Timer */}
        <div className="flex items-center gap-3 bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 backdrop-blur-md">
          <Clock className="w-4 h-4 text-blue-400" />
          <span className="text-xl font-bold font-mono text-white tracking-widest min-w-[70px]">
            {formatTime(seconds)}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title={isRunning ? "To'xtatish" : "Davom ettirish"}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={handleResetTimer}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Vaqtni yangilash"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectSlide(Math.max(0, currentSlideIndex - 1))}
            disabled={currentSlideIndex === 0}
            className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold flex items-center gap-1 border border-slate-700 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Oldingi</span>
          </button>
          <span className="text-xs font-mono font-bold text-slate-300 px-2">
            {currentSlideIndex + 1} / {slides.length}
          </span>
          <button
            onClick={() => onSelectSlide(Math.min(slides.length - 1, currentSlideIndex + 1))}
            disabled={currentSlideIndex === slides.length - 1}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-40 text-white text-xs font-bold flex items-center gap-1 shadow-md shadow-blue-600/30 transition-all"
          >
            <span>Keyingi</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Dual Cockpit Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Speaker Notes & Speech Script (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Speech Script Card */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-blue-400">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Spiker Nutq Matni (Speaker Script)
                </span>
              </div>
              <span className="text-xs font-medium text-slate-400">
                O'zbek tilida
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm sm:text-base leading-relaxed">
              "{currentSlide.speakerNotes}"
            </div>

            {/* Crucial Talking Points */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Aytilishi Kerak Bo'lgan Muhim Nuqtalar (Key Talking Points)
              </h4>
              <div className="space-y-2">
                {currentSlide.keyPoints.map((kp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{kp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Jump Slide Selector */}
          <div className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl space-y-3 shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Barcha Slaydlar Ro'yxati (Tezkor o'tish)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => onSelectSlide(idx)}
                  className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                    idx === currentSlideIndex
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 font-bold shadow-md shadow-blue-500/20'
                      : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <p className="text-[10px] font-mono opacity-80">Slayd {s.id}</p>
                  <p className="truncate font-semibold mt-0.5">{s.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Current & Next Slide Preview (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Current Slide Thumbnail Card */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                Hozirgi Slayd #{currentSlide.id}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {currentSlide.category}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white">{currentSlide.title}</h3>
              <p className="text-xs text-slate-400">{currentSlide.subtitle}</p>
              {currentSlide.tagline && (
                <p className="text-xs text-emerald-400 font-medium">✨ {currentSlide.tagline}</p>
              )}
            </div>
          </div>

          {/* Next Slide Sneak Peek */}
          {nextSlide ? (
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Keyingi Slayd #{nextSlide.id}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {nextSlide.category}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                <h4 className="text-sm font-bold text-slate-200">{nextSlide.title}</h4>
                <p className="text-xs text-slate-400">{nextSlide.subtitle}</p>
                <button
                  onClick={() => onSelectSlide(currentSlideIndex + 1)}
                  className="mt-2 text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Keyingi slaydga o'tish</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-3xl bg-blue-950/20 border border-blue-500/30 text-center text-xs text-blue-300 backdrop-blur-md">
              🎉 Taqdimotning oxirgi slaydi! Savol-javob bosqichiga o'tishingiz mumkin.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
