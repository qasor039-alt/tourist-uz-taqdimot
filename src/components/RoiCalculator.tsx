import React, { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Percent,
  Sparkles,
  PieChart,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  // Input parameters with sensible defaults
  const [annualTourists, setAnnualTourists] = useState<number>(150000);
  const [avgBookingSpend, setAvgBookingSpend] = useState<number>(75);
  const [commissionRate, setCommissionRate] = useState<number>(10);
  const [passSubscribers, setPassSubscribers] = useState<number>(35000);
  const [passPrice, setPassPrice] = useState<number>(18);

  // Calculations
  const gmv = annualTourists * avgBookingSpend;
  const bookingCommissionRevenue = gmv * (commissionRate / 100);
  const passRevenue = passSubscribers * passPrice;
  const totalAnnualRevenue = bookingCommissionRevenue + passRevenue;
  const estimatedOperatingCost = totalAnnualRevenue * 0.45; // 45% operating expenses
  const estimatedNetProfit = totalAnnualRevenue - estimatedOperatingCost;
  const netMargin = ((estimatedNetProfit / totalAnnualRevenue) * 100).toFixed(1);

  // 10% Investor Share in $250K Seed
  const investorAnnualDividends = estimatedNetProfit * 0.10;
  const paybackYears = (250000 / (investorAnnualDividends || 1)).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-950/50 via-slate-900/90 to-slate-900/90 border border-blue-500/30 mb-6 backdrop-blur-xl shadow-xl">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <span className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-400 text-white shadow-md shadow-blue-500/25">
              <Calculator className="w-4 h-4 font-bold" />
            </span>
            <h2 className="text-lg font-extrabold text-white">
              Tourest.uz — Investor & Biznes ROI Simulyatori
            </h2>
          </div>
          <p className="text-xs text-slate-300">
            Foydalanuvchilar oqimi, o'rtacha chek va komissiya stavkalarini o'zgartirib, yillik daromad va rentabellikni hisoblang.
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-blue-400 font-bold backdrop-blur-md">
          Seed Baholash: $2.5M | Ulush: 10%
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Input Sliders & Parameters (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5 backdrop-blur-xl shadow-xl">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 pb-2 border-b border-slate-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>O'sish Parametrlari (Model Drivers)</span>
          </h3>

          {/* Slider 1: Annual App Users / Bookers */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Yillik Faol Sayyohlar (Buyurtmachilar):</span>
              <span className="font-mono font-bold text-white">{annualTourists.toLocaleString()} kishi</span>
            </div>
            <input
              type="range"
              min="20000"
              max="500000"
              step="10000"
              value={annualTourists}
              onChange={(e) => setAnnualTourists(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>20K (1-yil)</span>
              <span>150K (2-yil)</span>
              <span>500K (3-yil)</span>
            </div>
          </div>

          {/* Slider 2: Average Booking Spend */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">O'rtacha Bron Cheki (Gid, Transport, Turlar):</span>
              <span className="font-mono font-bold text-emerald-400">${avgBookingSpend}</span>
            </div>
            <input
              type="range"
              min="20"
              max="250"
              step="5"
              value={avgBookingSpend}
              onChange={(e) => setAvgBookingSpend(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
          </div>

          {/* Slider 3: Commission Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Platforma Komissiya Stavkasi:</span>
              <span className="font-mono font-bold text-blue-400">{commissionRate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              step="1"
              value={commissionRate}
              onChange={(e) => setCommissionRate(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          {/* Slider 4: Tourest Pass Users */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Tourest Pass Xaridorlari (Muzeylar QR):</span>
              <span className="font-mono font-bold text-white">{passSubscribers.toLocaleString()} kishi</span>
            </div>
            <input
              type="range"
              min="5000"
              max="200000"
              step="5000"
              value={passSubscribers}
              onChange={(e) => setPassSubscribers(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          {/* Slider 5: Pass Price */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">O'rtacha Pass Narxi (Muzeylar paketi):</span>
              <span className="font-mono font-bold text-amber-400">${passPrice}</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="2"
              value={passPrice}
              onChange={(e) => setPassPrice(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Projected Financial Outcome & Investor ROI (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Main Big Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-lg">
              <p className="text-xs text-slate-400 font-medium">Platforma Aylanmasi (GMV)</p>
              <p className="text-2xl sm:text-3xl font-black text-white font-mono mt-1">
                ${(gmv / 1000000).toFixed(2)} Million
              </p>
              <p className="text-[11px] text-slate-500 mt-1">Sayyohlarning jami sarflagan xarajati</p>
            </div>

            <div className="p-5 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 backdrop-blur-xl shadow-lg shadow-emerald-500/5">
              <p className="text-xs text-emerald-400 font-medium">Yillik Yalpi Daromad (Revenue)</p>
              <p className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono mt-1">
                ${(totalAnnualRevenue / 1000).toFixed(0)} Ming ($
                {(totalAnnualRevenue / 1000000).toFixed(2)}M)
              </p>
              <p className="text-[11px] text-slate-300 mt-1">Komissiyalar + Pass sotuvlari</p>
            </div>

            <div className="p-5 rounded-3xl bg-blue-950/30 border border-blue-500/30 backdrop-blur-xl shadow-lg shadow-blue-500/5">
              <p className="text-xs text-blue-400 font-medium">Taxminiy Yillik Sof Foyda</p>
              <p className="text-2xl sm:text-3xl font-black text-blue-300 font-mono mt-1">
                ${(estimatedNetProfit / 1000).toFixed(0)} Ming
              </p>
              <p className="text-[11px] text-slate-300 mt-1">Sof Rentabellik: ~{netMargin}%</p>
            </div>

            <div className="p-5 rounded-3xl bg-amber-950/30 border border-amber-500/30 backdrop-blur-xl shadow-lg shadow-amber-500/5">
              <p className="text-xs text-amber-400 font-medium">10% Investor Ulushiga Yillik Tushum</p>
              <p className="text-2xl sm:text-3xl font-black text-amber-300 font-mono mt-1">
                ${(investorAnnualDividends / 1000).toFixed(1)} Ming/yil
              </p>
              <p className="text-[11px] text-slate-300 mt-1">Investitsiyani qoplash: ~{paybackYears} yil</p>
            </div>
          </div>

          {/* Breakdown Card */}
          <div className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3 backdrop-blur-xl shadow-lg">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Daromad Tuzilmasi (Revenue Breakdown)
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-slate-300">Gidlar va turlardan komissiya ({commissionRate}%):</span>
                <span className="font-mono font-bold text-emerald-400">${(bookingCommissionRevenue / 1000).toFixed(1)}k</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-slate-300">Tourest Pass to'plamlari sotuvi:</span>
                <span className="font-mono font-bold text-amber-400">${(passRevenue / 1000).toFixed(1)}k</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-slate-300">Operatsion va server xarajatlari (45%):</span>
                <span className="font-mono font-bold text-rose-400">-${(estimatedOperatingCost / 1000).toFixed(1)}k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
