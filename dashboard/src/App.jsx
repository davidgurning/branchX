// ============================================================
// APP.JSX - Root komponen Dashboard Monitoring Sales
// Bank Mandiri Cabang Landmark Tower
// ============================================================
import { useState, useEffect } from "react";

// Komponen layout
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// Pages
import DashboardPage from "./pages/DashboardPage";
import SalesPerformancePage from "./pages/SalesPerformancePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import UploadDataPage from "./pages/UploadDataPage";
import LaporanPage from "./pages/LaporanPage";
import LoginPage from "./pages/LoginPage";

// Data
import { BRANCH_INFO } from "./data/salesData";

function App() {
  // State login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State navigasi sidebar yang aktif
  const [activeNav, setActiveNav] = useState("dashboard");

  // State animasi masuk halaman
  const [mounted, setMounted] = useState(false);

  // State untuk animasi transisi antar halaman
  const [pageVisible, setPageVisible] = useState(true);

  // Trigger animasi masuk setelah mount
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Transisi halus saat ganti halaman
  const handleNavChange = (navId) => {
    if (navId === activeNav) return;
    setPageVisible(false);
    setTimeout(() => {
      setActiveNav(navId);
      setPageVisible(true);
    }, 150);
  };

  // Handler Login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Jika belum login, tampilkan halaman login
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Render halaman berdasarkan navigasi aktif
  const renderPage = () => {
    switch (activeNav) {
      case "dashboard":
        return <DashboardPage />;
      case "sales":
        return <SalesPerformancePage />;
      case "leaderboard":
        return <LeaderboardPage />;
      case "upload":
        return <UploadDataPage />;
      case "report":
        return <LaporanPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    // Wrapper utama: dark mode, background slate-950
    <div className="flex min-h-screen bg-slate-950 font-sans">
      {/* ══ SIDEBAR ══ */}
      <Sidebar 
        activeNav={activeNav} 
        onNavChange={handleNavChange} 
        onLogout={() => setIsLoggedIn(false)}
      />

      {/* ══ KONTEN UTAMA ══ */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header sticky */}
        <Header branchInfo={BRANCH_INFO} />

        {/* ── Area scroll konten ── */}
        <main
          className={`
            flex-1 overflow-y-auto p-6
            transition-all duration-300
            ${mounted ? "opacity-100" : "opacity-0"}
            ${pageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
        >
          {renderPage()}

          {/* ── Footer ── */}
          <footer className="text-center py-4 mt-6">
            <p className="text-slate-600 text-xs">
              © 2026 Bank Mandiri — Cabang Landmark Tower. Dashboard Monitoring Sales Internal.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
