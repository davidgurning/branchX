// ============================================================
// DATA DUMMY - Karyawan Bank Mandiri Cabang Landmark Tower
// ============================================================

export const BRANCH_INFO = {
  name: "Bank Mandiri",
  branch: "Cabang Landmark Tower",
  month: "April 2026",
  bmName: "Ferdy Agusta Utama",
};

// Target bulan ini
export const MONTHLY_TARGET = {
  lvm: 500,
  edc: 250,
};

// Data 20 Karyawan dengan info tambahan
export const SALES_DATA = [
  { id: 1, name: "Rizky Pratama", nip: "14500001", lvm: 8, edc: 3, avatar: "RP", color: "from-blue-500 to-cyan-400", joinDate: "2021-03-15", phone: "0812-3456-7890", status: "Aktif" },
  { id: 2, name: "Sari Dewi Ningrum", nip: "14500002", lvm: 7, edc: 2, avatar: "SD", color: "from-purple-500 to-pink-400", joinDate: "2020-07-01", phone: "0821-9876-5432", status: "Aktif" },
  { id: 3, name: "Budi Santoso", nip: "14500003", lvm: 7, edc: 2, avatar: "BS", color: "from-amber-500 to-orange-400", joinDate: "2022-01-10", phone: "0857-1122-3344", status: "Aktif" },
  { id: 4, name: "Mega Lestari", nip: "14500004", lvm: 6, edc: 2, avatar: "ML", color: "from-emerald-500 to-teal-400", joinDate: "2019-11-20", phone: "0878-5566-7788", status: "Aktif" },
  { id: 5, name: "Doni Firmansyah", nip: "14500005", lvm: 6, edc: 2, avatar: "DF", color: "from-rose-500 to-red-400", joinDate: "2023-05-08", phone: "0831-9900-1122", status: "Aktif" },
  { id: 6, name: "Siti Aminah", nip: "14500006", lvm: 6, edc: 1, avatar: "SA", color: "from-indigo-500 to-blue-400", joinDate: "2021-08-22", phone: "0811-2233-4455", status: "Aktif" },
  { id: 7, name: "Ahmad Faisal", nip: "14500007", lvm: 5, edc: 1, avatar: "AF", color: "from-teal-500 to-emerald-400", joinDate: "2020-02-14", phone: "0813-5566-7788", status: "Aktif" },
  { id: 8, name: "Nina Marlina", nip: "14500008", lvm: 5, edc: 1, avatar: "NM", color: "from-fuchsia-500 to-pink-400", joinDate: "2022-11-01", phone: "0822-3344-5566", status: "Aktif" },
  { id: 9, name: "Hendra Wijaya", nip: "14500009", lvm: 5, edc: 1, avatar: "HW", color: "from-orange-500 to-amber-400", joinDate: "2023-01-15", phone: "0852-1122-3344", status: "Aktif" },
  { id: 10, name: "Dewi Kirana", nip: "14500010", lvm: 4, edc: 1, avatar: "DK", color: "from-cyan-500 to-blue-400", joinDate: "2019-05-10", phone: "0877-9988-7766", status: "Aktif" },
  { id: 11, name: "Eko Prasetyo", nip: "14500011", lvm: 4, edc: 1, avatar: "EP", color: "from-red-500 to-rose-400", joinDate: "2018-09-20", phone: "0819-4455-6677", status: "Aktif" },
  { id: 12, name: "Rina Nose", nip: "14500012", lvm: 4, edc: 1, avatar: "RN", color: "from-pink-500 to-rose-400", joinDate: "2021-12-05", phone: "0818-2233-4455", status: "Aktif" },
  { id: 13, name: "Joko Susilo", nip: "14500013", lvm: 4, edc: 1, avatar: "JS", color: "from-slate-500 to-gray-400", joinDate: "2023-07-11", phone: "0821-1122-3344", status: "Aktif" },
  { id: 14, name: "Anita Rahman", nip: "14500014", lvm: 3, edc: 1, avatar: "AR", color: "from-violet-500 to-purple-400", joinDate: "2020-04-18", phone: "0812-9988-7766", status: "Aktif" },
  { id: 15, name: "Tono Surtono", nip: "14500015", lvm: 3, edc: 0, avatar: "TS", color: "from-lime-500 to-green-400", joinDate: "2022-03-25", phone: "0813-4455-6677", status: "Aktif" },
  { id: 16, name: "Lia Anugerah", nip: "14500016", lvm: 3, edc: 0, avatar: "LA", color: "from-yellow-500 to-amber-400", joinDate: "2019-08-30", phone: "0852-9988-7766", status: "Aktif" },
  { id: 17, name: "Deni Sumargo", nip: "14500017", lvm: 3, edc: 0, avatar: "DS", color: "from-sky-500 to-blue-400", joinDate: "2021-06-12", phone: "0811-3344-5566", status: "Aktif" },
  { id: 18, name: "Vina Panduwinata", nip: "14500018", lvm: 3, edc: 0, avatar: "VP", color: "from-rose-500 to-pink-400", joinDate: "2023-02-28", phone: "0822-1122-3344", status: "Aktif" },
  { id: 19, name: "Andre Taulany", nip: "14500019", lvm: 2, edc: 0, avatar: "AT", color: "from-emerald-500 to-green-400", joinDate: "2020-10-15", phone: "0813-2233-4455", status: "Aktif" },
  { id: 20, name: "Sule Prikitiew", nip: "14500020", lvm: 2, edc: 0, avatar: "SP", color: "from-blue-500 to-indigo-400", joinDate: "2022-05-20", phone: "0812-5566-7788", status: "Aktif" },
];

// Data historis bulanan (6 bulan terakhir) untuk laporan
export const MONTHLY_HISTORY = [
  { month: "Nov 2025", lvm: 380, edc: 180, targetLvm: 500, targetEdc: 250 },
  { month: "Des 2025", lvm: 420, edc: 210, targetLvm: 500, targetEdc: 250 },
  { month: "Jan 2026", lvm: 450, edc: 230, targetLvm: 500, targetEdc: 250 },
  { month: "Feb 2026", lvm: 410, edc: 195, targetLvm: 500, targetEdc: 250 },
  { month: "Mar 2026", lvm: 480, edc: 240, targetLvm: 500, targetEdc: 250 },
  { month: "Apr 2026", lvm: 645, edc: 322, targetLvm: 500, targetEdc: 250, isCurrent: true },
];

// Data aktivitas terbaru (upload log)
export const RECENT_ACTIVITY = [
  { id: 1, type: "upload", message: "Data April W3 berhasil diupload", user: "Ferdy Agusta Utama", time: "Hari ini, 09:15", status: "success" },
  { id: 2, type: "update", message: "Target LVM bulan April diperbarui", user: "Ferdy Agusta Utama", time: "Kemarin, 16:42", status: "info" },
  { id: 3, type: "upload", message: "Data April W2 berhasil diupload", user: "Ferdy Agusta Utama", time: "14 Apr 2026, 10:20", status: "success" },
  { id: 4, type: "warning", message: "Progress EDC Doni Firmansyah di bawah target", user: "Sistem", time: "13 Apr 2026, 08:00", status: "warning" },
  { id: 5, type: "upload", message: "Data April W1 berhasil diupload", user: "Ferdy Agusta Utama", time: "07 Apr 2026, 11:05", status: "success" },
];

// Hitung total akuisisi bulan ini
export const getTotals = () => {
  return SALES_DATA.reduce(
    (acc, s) => ({
      lvm: acc.lvm + s.lvm,
      edc: acc.edc + s.edc,
    }),
    { lvm: 0, edc: 0 },
  );
};

// Hitung score untuk ranking (bobot: LVM 60%, EDC 40%)
export const getRankedSales = () => {
  return [...SALES_DATA]
    .map((s) => ({
      ...s,
      score:
        (s.lvm / (MONTHLY_TARGET.lvm / 20)) * 60 + (s.edc / (MONTHLY_TARGET.edc / 20)) * 40,
    }))
    .sort((a, b) => b.score - a.score);
};

export const downloadTemplate = () => {
  // Tambahkan BOM (Byte Order Mark) agar Excel bisa baca UTF-8
  const BOM = "\uFEFF";
  // Gunakan titik koma (;) sebagai delimiter agar lebih rapi di Excel bahasa Indonesia
  const headers = "NIP;Nama Karyawan;LVM;EDC";
  
  const rows = SALES_DATA.map(s => `${s.nip};${s.name};0;0`);
  const csvContent = BOM + [headers, ...rows].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "Template_Upload_Karyawan.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const getRemainingWorkdays = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  
  // Tanggal terakhir bulan ini
  const lastDay = new Date(year, month + 1, 0).getDate();
  
  let workdays = 0;
  for (let day = today.getDate(); day <= lastDay; day++) {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    // 0 = Minggu, 6 = Sabtu
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      workdays++;
    }
  }
  return workdays;
};
