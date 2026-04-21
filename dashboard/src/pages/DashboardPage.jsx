// ============================================================
// DASHBOARD PAGE - Halaman utama ringkasan performa
// ============================================================
import StatCard from "../components/StatCard";
import MiniCard from "../components/MiniCard";
import SalesTable from "../components/SalesTable";
import Leaderboard from "../components/Leaderboard";
import UploadExcel from "../components/UploadExcel";
import { BRANCH_INFO, MONTHLY_TARGET, getTotals, getRankedSales, downloadTemplate, getRemainingWorkdays } from "../data/salesData";

const LvmIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const EdcIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const DashboardPage = () => {
  const totals = getTotals();
  const rankedSales = getRankedSales();
  const remainingWorkdays = getRemainingWorkdays();

  return (
    <div className="space-y-6">
      {/* ── Mini Info Bar ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <MiniCard label="Total Karyawan Aktif" value="20 Orang" icon="👥" trend="neutral" />
        <MiniCard label="Rata-rata LVM/Karyawan" value={(totals.lvm / 20).toFixed(1)} icon="💳" trend="up" trendVal="+8%" />
        <MiniCard label="Rata-rata EDC/Karyawan" value={(totals.edc / 20).toFixed(1)} icon="📱" trend="up" trendVal="+5%" />
        <MiniCard label="Hari Kerja Sisa" value={`${remainingWorkdays} Hari`} icon="📅" trend="neutral" />
      </div>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <StatCard
          title="Total Akuisisi LVM Bulan Ini"
          value={totals.lvm}
          target={MONTHLY_TARGET.lvm}
          gradient="from-blue-600 to-cyan-500"
          icon={<LvmIcon />}
          suffix="unit"
        />
        <StatCard
          title="Total Akuisisi EDC Bulan Ini"
          value={totals.edc}
          target={MONTHLY_TARGET.edc}
          gradient="from-purple-600 to-pink-500"
          icon={<EdcIcon />}
          suffix="unit"
        />
      </div>

      {/* ── Tabel + Leaderboard ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2">
          <SalesTable salesData={rankedSales} />
        </div>
        <div className="xl:col-span-1">
          <Leaderboard rankedSales={rankedSales} bmName={BRANCH_INFO.bmName} />
        </div>
      </div>

      {/* ── Upload ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <UploadExcel />
        <div className="bg-slate-800 border border-slate-700/60 rounded-2xl p-6 animate-fadeInUp">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/15 border border-blue-500/30">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-base">Panduan Upload Data</h2>
          </div>
          <ol className="space-y-3">
            {[
              { step: "1", text: "Unduh template Excel resmi dari sistem Mandiri." },
              { step: "2", text: "Isi data akuisisi LVM dan EDC per karyawan secara lengkap." },
              { step: "3", text: "Seret file ke area upload atau klik tombol pilih file." },
              { step: "4", text: "Verifikasi data yang tampil di dashboard setelah upload." },
            ].map((item) => (
              <li key={item.step} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center border border-blue-500/30">
                  {item.step}
                </span>
                <span className="text-slate-400 text-sm leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ol>
          <button 
            onClick={downloadTemplate}
            className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-sm font-medium transition-all duration-200 hover:scale-[1.01]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Unduh Template Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
