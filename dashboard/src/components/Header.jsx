// ============================================================
// HEADER COMPONENT - Bar atas dengan info cabang & waktu
// ============================================================
import { useState, useEffect } from "react";

const Header = ({ branchInfo, setMobileMenuOpen }) => {
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
        {/* ── Hamburger & Judul Halaman ── */}
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden p-2 -ml-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight truncate max-w-[200px] sm:max-w-none">
              Dashboard Monitoring Sales
            </h1>
            <p className="text-slate-400 text-sm">
              {branchInfo.branch} — {branchInfo.month}
            </p>
          </div>
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
            <div className="hidden sm:flex flex-col items-end">
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
