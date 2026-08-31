import React from 'react';
import { ViewMode } from '../types';
import {
  Presentation,
  Mic,
  LayoutGrid,
  FileText,
  Smartphone,
  Calculator,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  Share2,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentSlide: number;
  totalSlides: number;
  viewMode: ViewMode;
  onSelectViewMode: (mode: ViewMode) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onOpenExport: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSlide,
  totalSlides,
  viewMode,
  onSelectViewMode,
  onPrevSlide,
  onNextSlide,
  onOpenExport,
  isFullscreen,
  onToggleFullscreen
}) => {
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand & Title */}
        <div className="flex items-center gap-3.5 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-blue-500/25 text-white font-black text-xl">
            T
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-extrabold text-white text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                TOUREST UZ
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Pitch Deck 2025
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">O'zbekiston Turizm Ekotizimi va Mobil Ilovasi</p>
          </div>
        </div>

        {/* Mode Navigation Tabs */}
        <div className="hidden md:flex items-center bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800/90 text-xs font-semibold backdrop-blur-md">
          <button
            onClick={() => onSelectViewMode('slides')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all ${
              viewMode === 'slides'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Slaydlar</span>
          </button>

          <button
            onClick={() => onSelectViewMode('presenter')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all ${
              viewMode === 'presenter'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Spiker Rejimi</span>
          </button>

          <button
            onClick={() => onSelectViewMode('prototype')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all ${
              viewMode === 'prototype'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Ilova Prototipi</span>
            <span className="bg-emerald-500/20 text-emerald-300 text-[9px] px-1.5 py-0.5 rounded-full font-bold border border-emerald-500/30">
              Jonli
            </span>
          </button>

          <button
            onClick={() => onSelectViewMode('calculator')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all ${
              viewMode === 'calculator'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Moliyaviy ROI</span>
          </button>

          <button
            onClick={() => onSelectViewMode('overview')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all ${
              viewMode === 'overview'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Katalog</span>
          </button>

          <button
            onClick={() => onSelectViewMode('doc')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all ${
              viewMode === 'doc'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Hujjat / PDF</span>
          </button>
        </div>

        {/* Slide Controls & Actions */}
        <div className="flex items-center gap-2.5">
          {viewMode === 'slides' && (
            <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-1 rounded-xl border border-slate-800 backdrop-blur-md">
              <button
                onClick={onPrevSlide}
                disabled={currentSlide === 0}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
                title="Oldingi slayd (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-slate-200 px-2 min-w-[54px] text-center font-mono">
                {currentSlide + 1} / {totalSlides}
              </span>
              <button
                onClick={onNextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
                title="Keyingi slayd (Right Arrow yoki Space)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Export & Actions */}
          <button
            onClick={onOpenExport}
            className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-800/80 transition-all hover:border-blue-500/40"
          >
            <Share2 className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Eksport</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800/80 transition-all hover:border-blue-500/40"
            title={isFullscreen ? "To'liq ekrandan chiqish" : "To'liq ekran rejimi"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Mode Switcher Bar */}
      <div className="flex md:hidden overflow-x-auto gap-1.5 mt-2.5 pb-1 text-xs">
        <button
          onClick={() => onSelectViewMode('slides')}
          className={`px-3 py-1.5 rounded-lg shrink-0 font-medium ${viewMode === 'slides' ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-900'}`}
        >
          Slaydlar
        </button>
        <button
          onClick={() => onSelectViewMode('presenter')}
          className={`px-3 py-1.5 rounded-lg shrink-0 font-medium ${viewMode === 'presenter' ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-900'}`}
        >
          Spiker
        </button>
        <button
          onClick={() => onSelectViewMode('prototype')}
          className={`px-3 py-1.5 rounded-lg shrink-0 font-medium ${viewMode === 'prototype' ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-900'}`}
        >
          Ilova Demo
        </button>
        <button
          onClick={() => onSelectViewMode('calculator')}
          className={`px-3 py-1.5 rounded-lg shrink-0 font-medium ${viewMode === 'calculator' ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-900'}`}
        >
          ROI Kalkulyator
        </button>
        <button
          onClick={() => onSelectViewMode('overview')}
          className={`px-3 py-1.5 rounded-lg shrink-0 font-medium ${viewMode === 'overview' ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-900'}`}
        >
          Katalog
        </button>
        <button
          onClick={() => onSelectViewMode('doc')}
          className={`px-3 py-1.5 rounded-lg shrink-0 font-medium ${viewMode === 'doc' ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-900'}`}
        >
          Hujjat
        </button>
      </div>

      {/* Linear Progress Bar */}
      {viewMode === 'slides' && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-900/80 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500 transition-all duration-300 ease-out shadow-sm shadow-blue-500/50"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </header>
  );
};
