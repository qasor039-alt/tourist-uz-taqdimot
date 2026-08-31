import React, { useState } from 'react';
import { SlideData } from '../types';
import { LayoutGrid, Search, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

interface SlideGridProps {
  slides: SlideData[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideGrid: React.FC<SlideGridProps> = ({
  slides,
  currentSlideIndex,
  onSelectSlide
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSlides = slides.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header & Search */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-emerald-500 text-slate-950">
              <LayoutGrid className="w-4 h-4 font-bold" />
            </span>
            <h2 className="text-lg font-extrabold text-white">
              Taqdimot Slaydlari Katalogi ({slides.length} ta Slayd)
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Istalgan slayd ustiga bosib, to'g'ridan-to'g'ri unga o'tishingiz mumkin.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Slaydlarni qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Grid of Slide Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSlides.map((slide, idx) => {
          const originalIndex = slides.findIndex((s) => s.id === slide.id);
          const isSelected = originalIndex === currentSlideIndex;

          return (
            <div
              key={slide.id}
              onClick={() => onSelectSlide(originalIndex)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group hover:scale-[1.02] ${
                isSelected
                  ? 'bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/20 shadow-lg shadow-emerald-950/50'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 text-emerald-400 border border-slate-800">
                    Slayd #{slide.id}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 truncate max-w-[120px]">
                    {slide.category}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mb-1">
                  {slide.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                  {slide.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {slide.keyPoints.length} ta muhim nuqta
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Ochish</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
