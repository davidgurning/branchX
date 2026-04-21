// ============================================================
// UPLOAD DATA PAGE - Halaman upload lengkap + riwayat aktivitas
// ============================================================
import { useState } from "react";
import UploadExcel from "../components/UploadExcel";
import { RECENT_ACTIVITY, downloadTemplate } from "../data/salesData";

const StatusIcon = ({ type }) => {
  const icons = {
    upload: (
      <svg
        className="w-4 h-4 text-emerald-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
    ),
    update: (
      <svg
        className="w-4 h-4 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    warning: (
      <svg
        className="w-4 h-4 text-amber-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
  };
  const bgMap = {
    upload: "bg-emerald-500/10 border-emerald-500/20",
    update: "bg-blue-500/10 border-blue-500/20",
    warning: "bg-amber-500/10 border-amber-500/20",
  };
  return (
    <div className={`p-2 rounded-lg border flex-shrink-0 ${bgMap[type]}`}>
      {icons[type]}
    </div>
  );
};

const VALIDATION_RULES = [
  { rule: "Format file harus .xlsx atau .xls", icon: "✅" },
  { rule: "Ukuran file maksimal 10 MB", icon: "✅" },
  { rule: "Kolom: Nama, NIP, LVM, EDC wajib diisi", icon: "✅" },
  { rule: "Tidak ada baris yang kosong", icon: "✅" },
  { rule: "Gunakan template resmi dari BM", icon: "✅" },
];

const UploadDataPage = () => {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-white font-black text-xl">Upload Data</h2>
        <p className="text-slate-400 text-sm mt-0.5">
          Unggah file Excel data akuisisi karyawan bulanan
        </p>
      </div>

      <div className="flex gap-1 bg-slate-800/80 border border-slate-700/60 p-1 rounded-xl w-fit">
        {[
          { key: "upload", label: "📤  Upload File" },
          { key: "activity", label: "📋  Riwayat Aktivitas" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "upload" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <UploadExcel />
          <div className="space-y-5">
            <div className="bg-slate-800 border border-slate-700/60 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <svg
                    className="w-4 h-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm">
                  Aturan Validasi File
                </h3>
              </div>
              <ul className="space-y-2.5">
                {VALIDATION_RULES.map((r, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <span>{r.icon}</span>
                    <span className="text-slate-300">{r.rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 border border-slate-700/60 rounded-2xl p-5">
              <h3 className="text-white font-bold text-sm mb-3">
                Template Resmi
              </h3>
              <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                Gunakan template Excel resmi agar format data sesuai sistem.
              </p>
              <button 
                onClick={downloadTemplate}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-500/30 text-blue-300 text-sm font-semibold transition-all duration-200 hover:scale-[1.01]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Unduh Template Excel
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "activity" && (
        <div className="bg-slate-800 border border-slate-700/60 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-700/60 flex items-center justify-between">
            <h3 className="text-white font-bold text-sm">
              Riwayat Aktivitas Upload
            </h3>
            <span className="text-xs text-slate-500">
              {RECENT_ACTIVITY.length} aktivitas
            </span>
          </div>
          <div className="divide-y divide-slate-700/40">
            {RECENT_ACTIVITY.map((act) => (
              <div
                key={act.id}
                className="flex items-start gap-4 px-5 py-4 hover:bg-slate-700/20 transition-colors duration-150"
              >
                <StatusIcon type={act.type} />
                <div className="flex-1 min-w-0">
                  <p className="text-slate-200 text-sm font-medium">
                    {act.message}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    oleh {act.user}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-slate-400 text-xs">{act.time}</p>
                  <span
                    className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium ${
                      act.status === "success"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : act.status === "warning"
                          ? "bg-amber-500/15 text-amber-400"
                          : "bg-blue-500/15 text-blue-400"
                    }`}
                  >
                    {act.status === "success"
                      ? "Sukses"
                      : act.status === "warning"
                        ? "Peringatan"
                        : "Info"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadDataPage;
