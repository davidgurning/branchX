// ============================================================
// UPLOAD EXCEL COMPONENT - Area drag-and-drop upload file
// UI only – tidak ada logika upload nyata
// ============================================================
import { useState } from "react";

const UploadExcel = () => {
  // State untuk mengelola tampilan drag-over
  const [isDragging, setIsDragging] = useState(false);
  // State untuk menyimulasikan file yang "diunggah"
  const [uploadedFile, setUploadedFile] = useState(null);
  // State untuk status unggah (idle / uploading / success)
  const [uploadStatus, setUploadStatus] = useState("idle");

  /* ── Handler drag-and-drop ── */
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) simulateUpload(file);
  };

  /* ── Handler klik input ── */
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) simulateUpload(file);
  };

  /* ── Simulasi proses upload (animasi loading) ── */
  const simulateUpload = (file) => {
    setUploadedFile(file);
    setUploadStatus("uploading");
    // Simulasi delay 1.8 detik
    setTimeout(() => setUploadStatus("success"), 1800);
  };

  const handleReset = () => {
    setUploadedFile(null);
    setUploadStatus("idle");
  };

  return (
    <div className="bg-slate-800 border border-slate-700/60 rounded-2xl p-6 animate-fadeInUp">
      {/* ── Judul ── */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30">
          <svg
            className="w-5 h-5 text-emerald-400"
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
        </div>
        <div>
          <h2 className="text-white font-bold text-base">Upload Data Excel</h2>
          <p className="text-slate-400 text-xs">
            Format: .xlsx / .xls — Maks. 10 MB
          </p>
        </div>
      </div>

      {/* ── Area Drop ── */}
      {uploadStatus === "idle" && (
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            relative flex flex-col items-center justify-center gap-3
            border-2 border-dashed rounded-xl py-10 px-6 cursor-pointer
            transition-all duration-300
            ${
              isDragging
                ? "border-amber-400 bg-amber-500/10 scale-[1.01]"
                : "border-slate-600 hover:border-amber-500/60 hover:bg-slate-700/30"
            }
          `}
        >
          <input
            type="file"
            accept=".xlsx,.xls,.csv"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileInput}
          />

          {/* Ikon unggah */}
          <div
            className={`p-4 rounded-full transition-all duration-300 ${isDragging ? "bg-amber-500/20" : "bg-slate-700"}`}
          >
            <svg
              className={`w-8 h-8 transition-colors duration-300 ${isDragging ? "text-amber-400" : "text-slate-400"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>

          <div className="text-center">
            <p
              className={`font-semibold text-sm transition-colors duration-300 ${isDragging ? "text-amber-300" : "text-slate-300"}`}
            >
              {isDragging
                ? "Lepaskan file di sini!"
                : "Seret & lepas file Excel Anda"}
            </p>
            <p className="text-slate-500 text-xs mt-1">
              atau{" "}
              <span className="text-amber-400 underline underline-offset-2">
                klik untuk memilih file
              </span>
            </p>
          </div>

          {/* Petunjuk template */}
          <div className="flex items-center gap-2 mt-1 px-3 py-1.5 rounded-lg bg-slate-700/50 border border-slate-600/50">
            <svg
              className="w-3.5 h-3.5 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-slate-400 text-xs">
              Gunakan template resmi Mandiri untuk format yang benar
            </span>
          </div>
        </label>
      )}

      {/* ── Status: Loading ── */}
      {uploadStatus === "uploading" && (
        <div className="flex flex-col items-center justify-center py-10 gap-4 border-2 border-dashed border-blue-500/40 rounded-xl bg-blue-500/5">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-4 border-slate-600 border-t-blue-400 animate-spin" />
          </div>
          <div className="text-center">
            <p className="text-blue-300 font-semibold text-sm">
              Memproses file...
            </p>
            <p className="text-slate-500 text-xs mt-0.5 truncate max-w-[220px]">
              {uploadedFile?.name}
            </p>
          </div>
        </div>
      )}

      {/* ── Status: Sukses ── */}
      {uploadStatus === "success" && (
        <div className="flex flex-col items-center justify-center py-8 gap-3 border-2 border-dashed border-emerald-500/40 rounded-xl bg-emerald-500/5">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
            <svg
              className="w-6 h-6 text-emerald-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-emerald-300 font-semibold text-sm">
              Berhasil diunggah!
            </p>
            <p className="text-slate-400 text-xs mt-0.5 truncate max-w-[220px]">
              {uploadedFile?.name}
            </p>
          </div>
          <button
            onClick={handleReset}
            className="mt-1 px-4 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-medium transition-colors duration-200"
          >
            Upload File Lain
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadExcel;
