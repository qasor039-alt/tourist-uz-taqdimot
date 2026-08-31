import React, { useState } from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { X, Copy, Check, Printer, Download, Sparkles, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  onPrint
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateMarkdownSummary = () => {
    let md = `# Tourest.uz — Taqdimot va Pitch Deck Hujjati\n\n`;
    md += `O'zbekiston Turizm Sanoatining Yagona Raqamli Ekotizimi va Mobil Ilovasi\n\n`;
    md += `--------------------------------------------------\n\n`;

    SLIDES_DATA.forEach((s) => {
      md += `## Slayd ${s.id}: ${s.title}\n`;
      md += `*${s.subtitle}* (${s.category})\n\n`;
      md += `### Asosiy Fikrlar:\n`;
      s.keyPoints.forEach((kp) => {
        md += `- ${kp}\n`;
      });
      md += `\n**Spiker Tushuntirishi:**\n> "${s.speakerNotes}"\n\n`;
      md += `--------------------------------------------------\n\n`;
    });

    return md;
  };

  const handleCopy = () => {
    const text = generateMarkdownSummary();
    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const text = generateMarkdownSummary();
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Tourest_uz_Taqdimot_Fayli.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-2xl p-6 space-y-5 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-400 flex items-center justify-center text-white font-black shadow-md shadow-blue-500/25">
              T
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Taqdimot Faylini Eksport Qilish</h3>
              <p className="text-xs text-slate-400">PDF, Markdown yoki Matn formatida</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {/* Action 1: Print / PDF */}
          <button
            onClick={() => {
              onClose();
              onPrint();
            }}
            className="w-full p-4 rounded-2xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 hover:border-blue-500/40 flex items-center justify-between text-left transition-all group backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">PDF / Chop Etish (Print)</p>
                <p className="text-xs text-slate-400">Brauzer orqali to'g'ridan-to'g'ri PDF formatda saqlash</p>
              </div>
            </div>
            <Sparkles className="w-4 h-4 text-blue-400" />
          </button>

          {/* Action 2: Download Markdown/TXT File */}
          <button
            onClick={handleDownloadTxt}
            className="w-full p-4 rounded-2xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 hover:border-emerald-500/40 flex items-center justify-between text-left transition-all group backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Markdown Faylini Yuklab Olish (.md)</p>
                <p className="text-xs text-slate-400">Barcha 14 ta slayd matni va statistikasi</p>
              </div>
            </div>
          </button>

          {/* Action 3: Copy to Clipboard */}
          <button
            onClick={handleCopy}
            className="w-full p-4 rounded-2xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 hover:border-indigo-500/40 flex items-center justify-between text-left transition-all group backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  {copied ? "Nusxalandi! ✅" : "Taqdimot Matnini Nusxalash"}
                </p>
                <p className="text-xs text-slate-400">Xotiraga (Clipboard) nusxa olish</p>
              </div>
            </div>
          </button>
        </div>

        <div className="pt-2 text-center text-xs text-slate-500">
          Tourest.uz © 2025 • O'zbekiston Turizm Ekotizimi
        </div>
      </div>
    </div>
  );
};
