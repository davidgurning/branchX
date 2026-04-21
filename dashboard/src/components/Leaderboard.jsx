// ============================================================
// LEADERBOARD COMPONENT - Top 3 Sales Terbaik
// Untuk pemberian reward oleh Branch Manager
// ============================================================

// Ikon mahkota untuk posisi pertama
const CrownIcon = () => (
  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3a1 1 0 01-1 1H6a1 1 0 010-2h12a1 1 0 011 1z" />
  </svg>
);

// Medal icons berdasarkan peringkat
const medalConfig = {
  1: {
    emoji: "🥇",
    ring: "ring-amber-400/60",
    bg: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
    badge: "bg-amber-400 text-slate-900",
    label: "Juara 1",
    glow: "shadow-amber-500/20",
  },
  2: {
    emoji: "🥈",
    ring: "ring-slate-400/60",
    bg: "from-slate-500/20 to-slate-600/10",
    border: "border-slate-500/30",
    badge: "bg-slate-300 text-slate-900",
    label: "Juara 2",
    glow: "shadow-slate-500/20",
  },
  3: {
    emoji: "🥉",
    ring: "ring-orange-700/60",
    bg: "from-orange-700/20 to-orange-800/10",
    border: "border-orange-700/30",
    badge: "bg-orange-700 text-white",
    label: "Juara 3",
    glow: "shadow-orange-700/20",
  },
};

/**
 * Satu item leaderboard
 */
const LeaderItem = ({ sales, rank, isFirst }) => {
  const config = medalConfig[rank];

  return (
    <div
      className={`
        relative flex items-center gap-4 p-4 rounded-xl border
        bg-gradient-to-r ${config.bg} ${config.border}
        shadow-lg ${config.glow}
        transition-all duration-300 hover:scale-[1.02]
        ${isFirst ? "py-5" : ""}
      `}
    >
      {/* Mahkota untuk juara 1 */}
      {isFirst && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <CrownIcon />
        </div>
      )}

      {/* Avatar */}
      <div
        className={`
          relative w-12 h-12 rounded-full bg-gradient-to-br ${sales.color}
          flex items-center justify-center text-white font-black text-sm
          ring-2 ${config.ring} shadow-xl flex-shrink-0
          ${isFirst ? "w-14 h-14 text-base" : ""}
        `}
      >
        {sales.avatar}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <p className={`text-white font-bold truncate ${isFirst ? "text-base" : "text-sm"}`}>
            {sales.name}
          </p>
          <span className={`px-1.5 py-0.5 rounded text-xs font-bold flex-shrink-0 ${config.badge}`}>
            {config.label}
          </span>
        </div>
        <p className="text-slate-400 text-xs font-mono truncate">{sales.nip}</p>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-xs text-slate-300">
            <span className="text-blue-400 font-bold">{sales.lvm}</span>
            <span className="text-slate-500 ml-0.5">LVM</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs text-slate-300">
            <span className="text-purple-400 font-bold">{sales.edc}</span>
            <span className="text-slate-500 ml-0.5">EDC</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs text-slate-300">
            Skor: <span className="text-amber-400 font-bold">{sales.score?.toFixed(1)}</span>
          </span>
        </div>
      </div>

      {/* Nomor rank besar */}
      <span className="text-4xl flex-shrink-0 opacity-80">{config.emoji}</span>
    </div>
  );
};

/**
 * Komponen utama leaderboard
 * @param {Array} rankedSales - Top 3 dari getRankedSales()
 * @param {string} bmName     - Nama Branch Manager
 */
const Leaderboard = ({ rankedSales, bmName }) => {
  const top3 = rankedSales.slice(0, 3);

  return (
    <div className="bg-slate-800 border border-slate-700/60 rounded-2xl p-6 animate-fadeInUp">
      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/30">
          <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3a1 1 0 01-1 1H6a1 1 0 010-2h12a1 1 0 011 1z" />
          </svg>
        </div>
        <div>
          <h2 className="text-white font-bold text-base">Top Sales Bulan Ini</h2>
          <p className="text-slate-400 text-xs">Kandidat reward dari Branch Manager</p>
        </div>
      </div>

      {/* ── Daftar Top 3 ── */}
      <div className="space-y-3">
        {top3.map((sales, idx) => (
          <LeaderItem
            key={sales.id}
            sales={sales}
            rank={idx + 1}
            isFirst={idx === 0}
          />
        ))}
      </div>

      {/* ── Footer / Pesan BM ── */}
      <div className="mt-5 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <div>
            <p className="text-amber-300 text-xs font-semibold">Disetujui untuk Reward</p>
            <p className="text-slate-400 text-xs mt-0.5">
              Penghargaan akan diberikan oleh <span className="text-slate-200 font-medium">{bmName}</span> pada akhir bulan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
