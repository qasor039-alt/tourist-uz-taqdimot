import React from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { FileText, Printer, CheckCircle2, Globe, Mail, PhoneCall, Building, Sparkles } from 'lucide-react';

interface DocumentViewProps {
  onPrint: () => void;
}

export const DocumentView: React.FC<DocumentViewProps> = ({ onPrint }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl no-print shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">Tourest.uz — To'liq Taqdimot Hujjati (Whitepaper)</h2>
            <p className="text-xs text-slate-400">PDF chop etish yoki o'qish uchun optimallashtirilgan format</p>
          </div>
        </div>

        <button
          onClick={onPrint}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
        >
          <Printer className="w-4 h-4" />
          <span>PDF / Chop Etish</span>
        </button>
      </div>

      {/* Document Body (Printable container) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl space-y-10 shadow-2xl text-slate-200 printable-document">
        {/* Cover Header */}
        <div className="border-b border-slate-800 pb-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-400 mx-auto flex items-center justify-center text-white font-extrabold text-2xl shadow-xl shadow-blue-500/25">
            T
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tourest.uz — Rasmiy Taqdimot Hujjati
          </h1>
          <p className="text-base sm:text-lg bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-semibold max-w-2xl mx-auto">
            O'zbekiston Turizm Sanoatining Yagona Raqamli Ekotizimi va Mobil Ilovasi
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs font-mono text-slate-400">
            <span>Sana: 2025</span> • <span>Bosqich: Seed Round ($250K)</span> • <span>Til: O'zbekcha</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3 backdrop-blur-md">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Ijroiya Xulosasi (Executive Summary)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong>Tourest.uz</strong> — O'zbekistonga tashrif buyuruvchi 7+ million xorijiy va 21+ million mahalliy sayyohlarning barcha ehtiyojlarini (aqlli marshrut, litsenziyaga ega gidlar, barcha muzeylarga yagona Tourest Pass QR chiptasi, 8 tildagi GPS audio-gid, transport, milliy gastro-xarita va 24/7 SOS favqulodda yordam) yagona SuperApp platformasida birlashtiruvchi innovatsion loyihadir.
          </p>
        </div>

        {/* Section by Section slides breakdown */}
        <div className="space-y-8 divide-y divide-slate-800/80">
          {SLIDES_DATA.map((slide) => (
            <div key={slide.id} className="pt-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-800/60">
                  Bo'lim 0{slide.id} — {slide.category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.subtitle}</p>

              {/* Key points in doc format */}
              <div className="space-y-2">
                {slide.keyPoints.map((kp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{kp}</span>
                  </div>
                ))}
              </div>

              {/* Speaker Notes snippet */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs text-slate-400 italic">
                <span className="font-semibold text-slate-300 not-italic block mb-0.5">Tushuntirish:</span>
                "{slide.speakerNotes}"
              </div>
            </div>
          ))}
        </div>

        {/* Document Footer Contacts */}
        <div className="border-t border-slate-800 pt-8 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            <p className="font-bold text-white">Tourest.uz MChJ</p>
            <p>Toshkent shahri, IT Park Uzbekistan</p>
          </div>
          <div className="text-right space-y-0.5">
            <p>invest@tourest.uz | +998 (71) 200-88-99</p>
            <p className="text-emerald-400 font-mono">www.tourest.uz</p>
          </div>
        </div>
      </div>
    </div>
  );
};
