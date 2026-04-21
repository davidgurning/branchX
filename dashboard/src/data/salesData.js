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
  lvm: 100,
  edc: 30,
};

// Data 20 Karyawan dengan info tambahan
export const SALES_DATA = [
  { id: 1, name: "Ferdy Agusta Utama", nip: "14500001", lvm: 8, edc: 3, avatar: "FA", color: "from-blue-500 to-cyan-400", joinDate: "2021-03-15", phone: "0812-3456-7890", status: "Aktif" },
  { id: 2, name: "Elvy Anggraini", nip: "14500002", lvm: 7, edc: 2, avatar: "EA", color: "from-purple-500 to-pink-400", joinDate: "2020-07-01", phone: "0821-9876-5432", status: "Aktif" },
  { id: 3, name: "Desy Ratna Cempaka", nip: "14500003", lvm: 7, edc: 2, avatar: "DR", color: "from-amber-500 to-orange-400", joinDate: "2022-01-10", phone: "0857-1122-3344", status: "Aktif" },
  { id: 4, name: "Alya", nip: "14500004", lvm: 6, edc: 2, avatar: "AL", color: "from-emerald-500 to-teal-400", joinDate: "2019-11-20", phone: "0878-5566-7788", status: "Aktif" },
  { id: 5, name: "Ismail Nafis", nip: "14500005", lvm: 6, edc: 2, avatar: "IN", color: "from-rose-500 to-red-400", joinDate: "2023-05-08", phone: "0831-9900-1122", status: "Aktif" },
  { id: 6, name: "Kania Ayu Ambariani", nip: "14500006", lvm: 6, edc: 1, avatar: "KA", color: "from-indigo-500 to-blue-400", joinDate: "2021-08-22", phone: "0811-2233-4455", status: "Aktif" },
  { id: 7, name: "Lisdayanti", nip: "14500007", lvm: 5, edc: 1, avatar: "LI", color: "from-teal-500 to-emerald-400", joinDate: "2020-02-14", phone: "0813-5566-7788", status: "Aktif" },
  { id: 8, name: "Alvia", nip: "14500008", lvm: 5, edc: 1, avatar: "AL", color: "from-fuchsia-500 to-pink-400", joinDate: "2022-11-01", phone: "0822-3344-5566", status: "Aktif" },
  { id: 9, name: "Nares", nip: "14500009", lvm: 5, edc: 1, avatar: "NA", color: "from-orange-500 to-amber-400", joinDate: "2023-01-15", phone: "0852-1122-3344", status: "Aktif" },
  { id: 10, name: "Dian Elona", nip: "14500010", lvm: 4, edc: 1, avatar: "DE", color: "from-cyan-500 to-blue-400", joinDate: "2019-05-10", phone: "0877-9988-7766", status: "Aktif" },
  { id: 11, name: "Hera", nip: "14500011", lvm: 4, edc: 1, avatar: "HE", color: "from-red-500 to-rose-400", joinDate: "2018-09-20", phone: "0819-4455-6677", status: "Aktif" },
  { id: 12, name: "Rizki", nip: "14500012", lvm: 4, edc: 1, avatar: "RI", color: "from-pink-500 to-rose-400", joinDate: "2021-12-05", phone: "0818-2233-4455", status: "Aktif" },
  { id: 13, name: "Putri", nip: "14500013", lvm: 4, edc: 1, avatar: "PU", color: "from-slate-500 to-gray-400", joinDate: "2023-07-11", phone: "0821-1122-3344", status: "Aktif" },
  { id: 14, name: "Nisa", nip: "14500014", lvm: 3, edc: 1, avatar: "NI", color: "from-violet-500 to-purple-400", joinDate: "2020-04-18", phone: "0812-9988-7766", status: "Aktif" },
  { id: 15, name: "Kurniadi", nip: "14500015", lvm: 3, edc: 0, avatar: "KU", color: "from-lime-500 to-green-400", joinDate: "2022-03-25", phone: "0813-4455-6677", status: "Aktif" },
  { id: 16, name: "Sigit", nip: "14500016", lvm: 3, edc: 0, avatar: "SI", color: "from-yellow-500 to-amber-400", joinDate: "2019-08-30", phone: "0852-9988-7766", status: "Aktif" },
  { id: 17, name: "Nurul", nip: "14500017", lvm: 3, edc: 0, avatar: "NU", color: "from-sky-500 to-blue-400", joinDate: "2021-06-12", phone: "0811-3344-5566", status: "Aktif" },
  { id: 18, name: "Agung", nip: "14500018", lvm: 3, edc: 0, avatar: "AG", color: "from-rose-500 to-pink-400", joinDate: "2023-02-28", phone: "0822-1122-3344", status: "Aktif" },
  { id: 19, name: "Muhidin", nip: "14500019", lvm: 2, edc: 0, avatar: "MU", color: "from-emerald-500 to-green-400", joinDate: "2020-10-15", phone: "0813-2233-4455", status: "Aktif" },
  { id: 20, name: "Tegar", nip: "14500020", lvm: 2, edc: 0, avatar: "TE", color: "from-blue-500 to-indigo-400", joinDate: "2022-05-20", phone: "0812-5566-7788", status: "Aktif" },
];

// Data historis bulanan (6 bulan terakhir) untuk laporan
export const MONTHLY_HISTORY = [
  { month: "Nov 2025", lvm: 80, edc: 24, targetLvm: 100, targetEdc: 30 },
  { month: "Des 2025", lvm: 85, edc: 26, targetLvm: 100, targetEdc: 30 },
  { month: "Jan 2026", lvm: 95, edc: 28, targetLvm: 100, targetEdc: 30 },
  { month: "Feb 2026", lvm: 88, edc: 25, targetLvm: 100, targetEdc: 30 },
  { month: "Mar 2026", lvm: 105, edc: 32, targetLvm: 100, targetEdc: 30 },
  { month: "Apr 2026", lvm: 90, edc: 20, targetLvm: 100, targetEdc: 30, isCurrent: true },
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
