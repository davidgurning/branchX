// ============================================================
// SALES PERFORMANCE PAGE - Analisis performa sales detail
// ============================================================
import { useState } from "react";
import { MONTHLY_TARGET, getRankedSales } from "../data/salesData";

// ── Progress bar ──
const ProgressBar = ({ value, max, colorClass, label }) => {
  const pct = Math.min(Math.round((value / max) * 100), 100);
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-slate-400">{label}</span>
        <span className="text-slate-300 font-semibold">{value} / {max} ({pct}%)</span>
      </div>
      <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${colorClass} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

// ── Kartu profil sales ──
const SalesCard = ({ sales, rank, targetLvm, targetEdc }) => {
  const perLvm = Math.round(targetLvm / 5);
  const perEdc = Math.round(targetEdc / 5);
  const lvmPct = Math.min(Math.round((sales.lvm / perLvm) * 100), 100);
  const edcPct = Math.min(Math.round((sales.edc / perEdc) * 100), 100);
  const avgPct = Math.round((lvmPct + edcPct) / 2);

  const rankConfig = {
    1: { ring: "ring-amber-400/50", badge: "bg-amber-400/20 text-amber-300 border border-amber-400/30", label: "🥇 #1" },
    2: { ring: "ring-slate-400/50", badge: "bg-slate-500/20 text-slate-300 border border-slate-400/30", label: "🥈 #2" },
    3: { ring: "ring-orange-600/50", badge: "bg-orange-700/20 text-orange-300 border border-orange-600/30", label: "🥉 #3" },
  };
  const cfg = rankConfig[rank] || { ring: "ring-slate-700/50", badge: "bg-slate-700/30 text-slate-400 border border-slate-600/30", label: `#${rank}` };

  return (
    <div className="bg-slate-800 border border-slate-700/60 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 animate-fadeInUp">
      {/* Header kartu */}
      <div className="flex items-center gap-4 mb-5">
        <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${sales.color} flex items-center justify-center text-white font-black text-base ring-2 ${cfg.ring} shadow-lg flex-shrink-0`}>
          {sales.avatar}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center">
            <span className="text-[9px] font-bold text-slate-300">{rank}</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-white font-bold text-sm truncate">{sales.name}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full font-bold flex-shrink-0 ${cfg.badge}`}>{cfg.label}</span>
          </div>
          <p className="text-slate-400 text-xs font-mono mt-0.5">{sales.nip}</p>
          {sales.joinDate && (
            <p className="text-slate-500 text-xs mt-0.5">
              Bergabung {new Date(sales.joinDate).toLocaleDateString("id-ID", { year: "numeric", month: "short" })}
            </p>
          )}
        </div>
        {/* Persentase rata-rata */}
        <div className="text-right flex-shrink-0">
          <p className="text-2xl font-black" style={{ color: avgPct >= 80 ? "#34d399" : avgPct >= 60 ? "#fbbf24" : "#f87171" }}>
            {avgPct}%
          </p>
          <p className="text-slate-500 text-xs">Capaian</p>
        </div>
      </div>

      {/* Stats LVM & EDC */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center">
          <p className="text-blue-300 font-black text-2xl">{sales.lvm}</p>
          <p className="text-blue-400/70 text-xs font-semibold">LVM</p>
        </div>
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 text-center">
          <p className="text-purple-300 font-black text-2xl">{sales.edc}</p>
          <p className="text-purple-400/70 text-xs font-semibold">EDC</p>
        </div>
      </div>

      {/* Progress bars */}
      <div className="space-y-3">
        <ProgressBar
          value={sales.lvm}
          max={perLvm}
          colorClass="bg-gradient-to-r from-blue-500 to-cyan-400"
          label="Target LVM"
        />
        <ProgressBar
          value={sales.edc}
          max={perEdc}
          colorClass="bg-gradient-to-r from-purple-500 to-pink-400"
          label="Target EDC"
        />
      </div>

      {/* Status */}
      {sales.phone && (
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">📞 {sales.phone}</span>
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
            sales.status === "Aktif" ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" : "bg-slate-700 text-slate-400"
          }`}>
            {sales.status}
          </span>
        </div>
      )}
    </div>
  );
};

// ── Komponen utama Sales Performance ──
const SalesPerformancePage = () => {
  const [sortBy, setSortBy] = useState("rank");
  const ranked = getRankedSales();

  const sorted = [...ranked].sort((a, b) => {
    if (sortBy === "lvm") return b.lvm - a.lvm;
    if (sortBy === "edc") return b.edc - a.edc;
    return b.score - a.score;
  });

  const totalLvm = ranked.reduce((s, x) => s + x.lvm, 0);
  const totalEdc = ranked.reduce((s, x) => s + x.edc, 0);
  const avgLvmPct = Math.round((totalLvm / MONTHLY_TARGET.lvm) * 100);
  const avgEdcPct = Math.round((totalEdc / MONTHLY_TARGET.edc) * 100);

  return (
    <div className="space-y-6">
      {/* ── Header Halaman ── */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-white font-black text-xl">Kinerja Karyawan</h2>
          <p className="text-slate-400 text-sm mt-0.5">Analisis performa individu karyawan bulan April 2026</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-800 border border-slate-700/60 rounded-xl p-1">
          {[
            { key: "rank", label: "Ranking" },
            { key: "lvm", label: "LVM" },
            { key: "edc", label: "EDC" },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSortBy(opt.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                sortBy === opt.key
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Summary bar ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-800 border border-slate-700/60 rounded-xl p-4 animate-fadeInUp">
          <p className="text-slate-400 text-xs">Total LVM</p>
          <p className="text-blue-300 font-black text-2xl mt-1">{totalLvm}</p>
          <p className="text-slate-500 text-xs">dari {MONTHLY_TARGET.lvm} target</p>
        </div>
        <div className="bg-slate-800 border border-slate-700/60 rounded-xl p-4 animate-fadeInUp">
          <p className="text-slate-400 text-xs">Total EDC</p>
          <p className="text-purple-300 font-black text-2xl mt-1">{totalEdc}</p>
          <p className="text-slate-500 text-xs">dari {MONTHLY_TARGET.edc} target</p>
        </div>
        <div className="bg-slate-800 border border-slate-700/60 rounded-xl p-4 animate-fadeInUp">
          <p className="text-slate-400 text-xs">Capaian LVM</p>
          <p className="font-black text-2xl mt-1" style={{ color: avgLvmPct >= 80 ? "#34d399" : "#fbbf24" }}>
            {avgLvmPct}%
          </p>
          <p className="text-slate-500 text-xs">dari target bulan ini</p>
        </div>
        <div className="bg-slate-800 border border-slate-700/60 rounded-xl p-4 animate-fadeInUp">
          <p className="text-slate-400 text-xs">Capaian EDC</p>
          <p className="font-black text-2xl mt-1" style={{ color: avgEdcPct >= 80 ? "#34d399" : "#fbbf24" }}>
            {avgEdcPct}%
          </p>
          <p className="text-slate-500 text-xs">dari target bulan ini</p>
        </div>
      </div>

      {/* ── Grid kartu sales ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {sorted.map((sales) => {
          const originalRank = ranked.findIndex((r) => r.id === sales.id) + 1;
          return (
            <SalesCard
              key={sales.id}
              sales={sales}
              rank={originalRank}
              targetLvm={MONTHLY_TARGET.lvm}
              targetEdc={MONTHLY_TARGET.edc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SalesPerformancePage;
