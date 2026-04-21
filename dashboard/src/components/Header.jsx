// ============================================================
// HEADER COMPONENT - Bar atas dengan info cabang & waktu
// ============================================================
import { useState, useEffect } from "react";

const Header = ({ branchInfo }) => {
  // State untuk jam real-time
  const [now, setNow] = useState(new Date());

  // Update jam setiap detik
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format tanggal Indonesia
  const dateStr = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Format jam
  const timeStr = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between gap-4">
        {/* ── Judul Halaman ── */}
        <div>
          <h1 className="text-white font-bold text-lg leading-tight">
            Dashboard Monitoring Sales
          </h1>
          <p className="text-slate-400 text-sm">
            {branchInfo.branch} — {branchInfo.month}
          </p>
        </div>

        {/* ── Info kanan: waktu & BM ── */}
        <div className="flex items-center gap-4">
          {/* Jam & Tanggal */}
          <div className="hidden md:flex flex-col items-end">
            <span className="text-white font-mono font-bold text-base tabular-nums tracking-wide">
              {timeStr}
            </span>
            <span className="text-slate-400 text-xs">{dateStr}</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-slate-700" />

          {/* Profil BM */}
          <div className="flex items-center gap-2.5">
            <div className="flex flex-col items-end">
              <span className="text-white text-sm font-semibold leading-tight">
                {branchInfo.bmName}
              </span>
              <span className="text-amber-400 text-xs">Branch Manager</span>
            </div>
            {/* Avatar BM */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 font-black text-xs shadow-lg shadow-amber-500/30 flex-shrink-0">
              BM
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
