// ============================================================
// SALES TABLE COMPONENT - Tabel performa sales
// Menampilkan Nama, NIP, LVM, EDC, dan progress target
// ============================================================
import { MONTHLY_TARGET } from "../data/salesData";

/**
 * Progress bar individual untuk kolom tabel
 */
const MiniProgressBar = ({ value, max, colorClass }) => {
  const pct = Math.min(Math.round((value / max) * 100), 100);
  return (
    <div className="flex items-center gap-2 min-w-[100px]">
      <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${colorClass} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-slate-400 w-8 text-right">{pct}%</span>
    </div>
  );
};

/**
 * Badge peringkat berdasarkan posisi
 */
const RankBadge = ({ rank }) => {
  const styles = {
    1: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    2: "bg-slate-500/20 text-slate-300 border-slate-500/40",
    3: "bg-orange-700/20 text-orange-300 border-orange-700/40",
  };
  const icons = { 1: "🥇", 2: "🥈", 3: "🥉" };

  return (
    <span
      className={`
        inline-flex items-center justify-center w-8 h-8 rounded-full text-sm
        border font-bold
        ${styles[rank] || "bg-slate-700/30 text-slate-400 border-slate-600/40"}
      `}
    >
      {icons[rank] || rank}
    </span>
  );
};

/**
 * Komponen utama tabel sales
 * @param {Array} salesData - Array data sales dari salesData.js
 */
const SalesTable = ({ salesData }) => {
  return (
    <div className="bg-slate-800 border border-slate-700/60 rounded-2xl overflow-hidden animate-fadeInUp">
      {/* ── Header tabel ── */}
      <div className="px-6 py-4 border-b border-slate-700/60 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-500/15 border border-blue-500/30">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-white font-bold text-base">Performa Sales</h2>
            <p className="text-slate-400 text-xs">Pencapaian target bulan ini</p>
          </div>
        </div>
        {/* Indikator legenda */}
        <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" /> LVM
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" /> EDC
          </span>
        </div>
      </div>

      {/* ── Tabel ── */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700/40">
              <th className="text-left px-6 py-3 text-slate-400 text-xs font-semibold uppercase tracking-wider w-10">#</th>
              <th className="text-left px-4 py-3 text-slate-400 text-xs font-semibold uppercase tracking-wider">Sales</th>
              <th className="text-left px-4 py-3 text-slate-400 text-xs font-semibold uppercase tracking-wider">NIP</th>
              <th className="text-center px-4 py-3 text-slate-400 text-xs font-semibold uppercase tracking-wider">LVM</th>
              <th className="text-center px-4 py-3 text-slate-400 text-xs font-semibold uppercase tracking-wider">EDC</th>
              <th className="text-left px-4 py-3 text-slate-400 text-xs font-semibold uppercase tracking-wider min-w-[140px]">Target LVM</th>
              <th className="text-left px-4 py-3 text-slate-400 text-xs font-semibold uppercase tracking-wider min-w-[140px]">Target EDC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/30">
            {salesData.map((sales, index) => {
              const rank = index + 1; // Data sudah diurutkan berdasarkan score
              return (
                <tr
                  key={sales.id}
                  className="hover:bg-slate-700/30 transition-colors duration-150 group"
                >
                  {/* Kolom rank */}
                  <td className="px-6 py-4">
                    <RankBadge rank={rank} />
                  </td>

                  {/* Kolom nama + avatar */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${sales.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-md`}>
                        {sales.avatar}
                      </div>
                      <span className="text-slate-200 font-medium group-hover:text-white transition-colors">{sales.name}</span>
                    </div>
                  </td>

                  {/* Kolom NIP */}
                  <td className="px-4 py-4">
                    <span className="text-slate-400 font-mono text-xs bg-slate-700/50 px-2 py-1 rounded">
                      {sales.nip}
                    </span>
                  </td>

                  {/* Kolom LVM */}
                  <td className="px-4 py-4 text-center">
                    <span className="text-blue-300 font-bold text-base">{sales.lvm}</span>
                  </td>

                  {/* Kolom EDC */}
                  <td className="px-4 py-4 text-center">
                    <span className="text-purple-300 font-bold text-base">{sales.edc}</span>
                  </td>

                  {/* Progress LVM */}
                  <td className="px-4 py-4">
                    <MiniProgressBar
                      value={sales.lvm}
                      max={MONTHLY_TARGET.lvm / 5} // Target per sales
                      colorClass="bg-gradient-to-r from-blue-500 to-cyan-400"
                    />
                  </td>

                  {/* Progress EDC */}
                  <td className="px-4 py-4">
                    <MiniProgressBar
                      value={sales.edc}
                      max={MONTHLY_TARGET.edc / 5} // Target per sales
                      colorClass="bg-gradient-to-r from-purple-500 to-pink-400"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── Footer ── */}
      <div className="px-6 py-3 border-t border-slate-700/40 flex items-center justify-between">
        <p className="text-slate-500 text-xs">
          Menampilkan {salesData.length} sales aktif
        </p>
        <p className="text-slate-500 text-xs">
          Target/orang: LVM <strong className="text-slate-300">{MONTHLY_TARGET.lvm / 5}</strong> | EDC <strong className="text-slate-300">{MONTHLY_TARGET.edc / 5}</strong>
        </p>
      </div>
    </div>
  );
};

export default SalesTable;
