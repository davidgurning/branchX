// ============================================================
// MINI SUMMARY CARD - Kartu ringkasan kecil di bagian atas
// ============================================================

/**
 * @param {string} label    - Label kartu
 * @param {string|number} value - Nilai
 * @param {string} icon     - Emoji ikon
 * @param {string} trend    - "up" | "down" | "neutral"
 * @param {string} trendVal - Nilai perubahan (misal: "+12%")
 */
const MiniCard = ({ label, value, icon, trend = "neutral", trendVal }) => {
  const trendColor =
    trend === "up"
      ? "text-emerald-400"
      : trend === "down"
        ? "text-rose-400"
        : "text-slate-400";

  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→";

  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-slate-800 transition-colors duration-200">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-slate-400 text-xs">{label}</p>
        <p className="text-white font-bold text-base leading-tight">{value}</p>
      </div>
      {trendVal && (
        <span className={`ml-auto text-xs font-semibold ${trendColor}`}>
          {trendIcon} {trendVal}
        </span>
      )}
    </div>
  );
};

export default MiniCard;
