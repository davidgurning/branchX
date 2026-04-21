// ============================================================
// LEADERBOARD PAGE - Halaman full leaderboard semua karyawan
// ============================================================
import { getRankedSales, BRANCH_INFO, MONTHLY_TARGET } from "../data/salesData";

const CrownIcon = () => (
  <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3a1 1 0 01-1 1H6a1 1 0 010-2h12a1 1 0 011 1z" />
  </svg>
);

const medalConfig = {
  1: { emoji: "🥇", ring: "ring-amber-400/60", glow: "shadow-amber-500/30", bg: "from-amber-500/15 via-yellow-500/10 to-transparent", border: "border-amber-500/40", badge: "bg-amber-400 text-slate-900", label: "Juara 1", rankText: "text-amber-300" },
  2: { emoji: "🥈", ring: "ring-slate-400/60", glow: "shadow-slate-500/20", bg: "from-slate-500/15 via-slate-600/10 to-transparent", border: "border-slate-400/30", badge: "bg-slate-300 text-slate-900", label: "Juara 2", rankText: "text-slate-300" },
  3: { emoji: "🥉", ring: "ring-orange-600/60", glow: "shadow-orange-700/20", bg: "from-orange-700/15 via-orange-800/10 to-transparent", border: "border-orange-600/30", badge: "bg-orange-700 text-white", label: "Juara 3", rankText: "text-orange-300" },
};

const defaultConfig = { emoji: null, ring: "ring-slate-700/40", glow: "", bg: "from-slate-800/50 to-transparent", border: "border-slate-700/50", badge: "bg-slate-700 text-slate-300", label: "", rankText: "text-slate-400" };

const LeaderRow = ({ sales, rank }) => {
  const cfg = medalConfig[rank] || defaultConfig;
  const totalTarget = MONTHLY_TARGET.lvm / 5 + MONTHLY_TARGET.edc / 5;
  const totalAchieve = sales.lvm + sales.edc;
  const pct = Math.min(Math.round((totalAchieve / totalTarget) * 100), 100);

  return (
    <div className={`relative flex items-center gap-4 px-5 py-4 rounded-2xl border bg-gradient-to-r ${cfg.bg} ${cfg.border} shadow-lg ${cfg.glow} transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${rank === 1 ? "py-6" : ""}`}>
      {rank === 1 && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2"><CrownIcon /></div>
      )}
      <div className={`text-3xl font-black w-10 text-center flex-shrink-0 ${cfg.rankText}`}>
        {cfg.emoji || `#${rank}`}
      </div>
      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${sales.color} flex items-center justify-center text-white font-black text-sm ring-2 ${cfg.ring} shadow-xl flex-shrink-0 ${rank === 1 ? "w-14 h-14 text-base" : ""}`}>
        {sales.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className={`text-white font-bold truncate ${rank === 1 ? "text-lg" : "text-sm"}`}>{sales.name}</p>
          {cfg.label && <span className={`px-2 py-0.5 rounded-full text-xs font-bold flex-shrink-0 ${cfg.badge}`}>{cfg.label}</span>}
        </div>
        <p className="text-slate-400 text-xs font-mono">{sales.nip}</p>
        <div className="mt-2 h-1.5 bg-slate-700/60 rounded-full overflow-hidden w-full max-w-xs">
          <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-700" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
        <div className="text-center">
          <p className="text-blue-300 font-black text-xl">{sales.lvm}</p>
          <p className="text-blue-400/70 text-xs">LVM</p>
        </div>
        <div className="w-px h-8 bg-slate-700" />
        <div className="text-center">
          <p className="text-purple-300 font-black text-xl">{sales.edc}</p>
          <p className="text-purple-400/70 text-xs">EDC</p>
        </div>
        <div className="w-px h-8 bg-slate-700" />
        <div className="text-center">
          <p className="text-amber-300 font-black text-xl">{sales.score?.toFixed(1)}</p>
          <p className="text-amber-400/70 text-xs">Skor</p>
        </div>
      </div>
      <div className="sm:hidden text-right flex-shrink-0">
        <p className="text-amber-300 font-black text-lg">{sales.score?.toFixed(1)}</p>
        <p className="text-slate-500 text-xs">Skor</p>
      </div>
    </div>
  );
};

const LeaderboardPage = () => {
  const rankedSales = getRankedSales();

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30">
            <svg className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3a1 1 0 01-1 1H6a1 1 0 010-2h12a1 1 0 011 1z" />
            </svg>
          </div>
        </div>
        <h2 className="text-white font-black text-2xl">Leaderboard Karyawan</h2>
        <p className="text-slate-400 text-sm mt-1">Peringkat berdasarkan skor gabungan LVM (60%) + EDC (40%) — April 2026</p>
      </div>

      {/* Podium Top 3 */}
      <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
        {[rankedSales[1], rankedSales[0], rankedSales[2]].map((s, i) => {
          const realRank = i === 0 ? 2 : i === 1 ? 1 : 3;
          const heights = ["h-20", "h-28", "h-16"];
          const borders = ["border-b-4 border-slate-400/30", "border-b-4 border-amber-400/40", "border-b-4 border-orange-600/30"];
          return (
            <div key={s.id} className={`flex flex-col items-center justify-end ${heights[i]} ${borders[i]} rounded-t-xl px-2`}>
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-bold text-xs mb-1 shadow-lg`}>{s.avatar}</div>
              <p className="text-xs font-bold text-white text-center truncate w-full">{s.name.split(" ")[0]}</p>
              <p className="text-xs text-slate-400 mb-1">#{realRank}</p>
            </div>
          );
        })}
      </div>

      {/* Daftar lengkap */}
      <div className="space-y-3 pt-4">
        {rankedSales.map((sales, idx) => (
          <LeaderRow key={sales.id} sales={sales} rank={idx + 1} />
        ))}
      </div>

      {/* Footer reward */}
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/30 flex-shrink-0">
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div>
            <p className="text-amber-300 font-bold text-sm">Penghargaan Bulanan</p>
            <p className="text-slate-400 text-sm mt-1">
              Top 3 karyawan akan mendapatkan penghargaan dari <span className="text-slate-200 font-semibold">{BRANCH_INFO.bmName}</span> (Branch Manager) pada sesi briefing akhir bulan April 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
