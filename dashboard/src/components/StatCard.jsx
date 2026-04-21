// ============================================================
// STAT CARD COMPONENT - Kartu statistik utama
// Menampilkan total akuisisi LVM / EDC bulan ini
// ============================================================

/**
 * @param {string} title       - Judul kartu
 * @param {number} value       - Nilai saat ini
 * @param {number} target      - Target bulan ini
 * @param {string} gradient    - Kelas Tailwind untuk gradient ikon
 * @param {React.ReactNode} icon - Ikon SVG
 * @param {string} suffix      - Satuan (opsional)
 * @param {boolean} animated   - Aktifkan animasi masuk
 */
const StatCard = ({ title, value, target, gradient, icon, suffix = "", animated = true }) => {
  const percentage = Math.min(Math.round((value / target) * 100), 100);

  // Warna progress bar berdasarkan persentase pencapaian
  const progressColor =
    percentage >= 80
      ? "from-emerald-500 to-teal-400"
      : percentage >= 50
      ? "from-amber-500 to-yellow-400"
      : "from-rose-500 to-red-400";

  return (
    <div
      className={`
        relative bg-slate-800 border border-slate-700/60 rounded-2xl p-6
        hover:border-slate-600 hover:shadow-2xl hover:shadow-slate-900/50
        transition-all duration-300 group overflow-hidden
        ${animated ? "animate-fadeInUp" : ""}
      `}
    >
      {/* Efek glow latar belakang saat hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

      {/* ── Baris atas: ikon + label ── */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">
            {title}
          </p>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-black text-white tabular-nums">{value}</span>
            {suffix && <span className="text-slate-400 text-sm mb-1">{suffix}</span>}
          </div>
        </div>
        {/* Ikon */}
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg flex-shrink-0`}>
          {icon}
        </div>
      </div>

      {/* ── Target info ── */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
        <span>Target: <strong className="text-slate-200">{target}</strong></span>
        <span className={`font-bold ${percentage >= 80 ? "text-emerald-400" : percentage >= 50 ? "text-amber-400" : "text-rose-400"}`}>
          {percentage}%
        </span>
      </div>

      {/* ── Progress bar ── */}
      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${progressColor} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Label status */}
      <p className="mt-2 text-xs text-slate-500">
        Sisa target:{" "}
        <span className="text-slate-300 font-semibold">{Math.max(target - value, 0)}</span>
      </p>
    </div>
  );
};

export default StatCard;
