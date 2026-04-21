// ============================================================
// LAPORAN PAGE - Ringkasan laporan bulanan & historis
// ============================================================
import { useState } from "react";
import { MONTHLY_HISTORY, BRANCH_INFO, MONTHLY_TARGET, getRankedSales } from "../data/salesData";

// ── Bar chart sederhana ──
const BarGroup = ({ data }) => {
  const maxVal = Math.max(...data.map((d) => Math.max(d.lvm, d.targetLvm)));

  return (
    <div className="flex items-end gap-3 h-36 pt-4">
      {data.map((d) => {
        const lvmH = Math.round((d.lvm / maxVal) * 100);
        const tgtH = Math.round((d.targetLvm / maxVal) * 100);
        const isCurrent = d.isCurrent;
        return (
          <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex items-end gap-0.5" style={{ height: "100px" }}>
              {/* Target bar */}
              <div
                className="flex-1 rounded-t-sm bg-slate-600/50 border border-slate-600/30 transition-all duration-700"
                style={{ height: `${tgtH}%` }}
                title={`Target: ${d.targetLvm}`}
              />
              {/* LVM bar */}
              <div
                className={`flex-1 rounded-t-sm transition-all duration-700 ${
                  isCurrent
                    ? "bg-gradient-to-t from-blue-600 to-cyan-400"
                    : d.lvm >= d.targetLvm
                    ? "bg-gradient-to-t from-emerald-600 to-emerald-400"
                    : "bg-gradient-to-t from-blue-700 to-blue-500"
                }`}
                style={{ height: `${lvmH}%` }}
                title={`LVM: ${d.lvm}`}
              />
            </div>
            <p className={`text-xs truncate w-full text-center ${isCurrent ? "text-amber-300 font-bold" : "text-slate-500"}`}>
              {d.month.split(" ")[0]}
            </p>
          </div>
        );
      })}
    </div>
  );
};

// ── Baris tabel laporan per sales ──
const SalesReportRow = ({ sales, targetLvm, targetEdc }) => {
  const perLvm = Math.round(targetLvm / 5);
  const perEdc = Math.round(targetEdc / 5);
  const lvmPct = Math.min(Math.round((sales.lvm / perLvm) * 100), 100);
  const edcPct = Math.min(Math.round((sales.edc / perEdc) * 100), 100);
  const status = lvmPct >= 100 && edcPct >= 100 ? "Tercapai" : lvmPct >= 60 && edcPct >= 60 ? "Progres" : "Perlu Perhatian";
  const statusColor = {
    Tercapai: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Progres: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    "Perlu Perhatian": "bg-rose-500/15 text-rose-400 border-rose-500/30",
  };

  return (
    <tr className="hover:bg-slate-700/20 transition-colors duration-150 border-b border-slate-700/30">
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${sales.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
            {sales.avatar}
          </div>
          <div>
            <p className="text-slate-200 text-sm font-medium">{sales.name}</p>
            <p className="text-slate-500 text-xs font-mono">{sales.nip}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-center">
        <p className="text-blue-300 font-bold">{sales.lvm}</p>
        <p className="text-slate-500 text-xs">/ {perLvm}</p>
      </td>
      <td className="px-4 py-4 text-center">
        <p className="text-purple-300 font-bold">{sales.edc}</p>
        <p className="text-slate-500 text-xs">/ {perEdc}</p>
      </td>
      <td className="px-4 py-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: `${lvmPct}%` }} />
            </div>
            <span className="text-xs text-slate-400 w-8 text-right">{lvmPct}%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full" style={{ width: `${edcPct}%` }} />
            </div>
            <span className="text-xs text-slate-400 w-8 text-right">{edcPct}%</span>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-center">
        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${statusColor[status]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

// ── Komponen utama ──
const LaporanPage = () => {
  const [activeSection, setActiveSection] = useState("ringkasan");
  const ranked = getRankedSales();
  const currentMonth = MONTHLY_HISTORY[MONTHLY_HISTORY.length - 1];
  const prevMonth = MONTHLY_HISTORY[MONTHLY_HISTORY.length - 2];
  const lvmGrowth = Math.round(((currentMonth.lvm - prevMonth.lvm) / prevMonth.lvm) * 100);
  const edcGrowth = Math.round(((currentMonth.edc - prevMonth.edc) / prevMonth.edc) * 100);

  return (
    <div className="space-y-6">
      {/* ── Header ── */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-white font-black text-xl">Laporan</h2>
          <p className="text-slate-400 text-sm mt-0.5">Ringkasan performa {BRANCH_INFO.branch} — {BRANCH_INFO.month}</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 text-sm font-semibold transition-all duration-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Ekspor Laporan
        </button>
      </div>

      {/* ── Tab navigasi ── */}
      <div className="flex gap-1 bg-slate-800/80 border border-slate-700/60 p-1 rounded-xl w-fit">
        {[
          { key: "ringkasan", label: "📊  Ringkasan" },
          { key: "historis", label: "📈  Historis" },
          { key: "detail", label: "📋  Detail Sales" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveSection(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeSection === tab.key
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ══ SECTION: RINGKASAN ══ */}
      {activeSection === "ringkasan" && (
        <div className="space-y-5">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Total LVM April",
                value: currentMonth.lvm,
                sub: `Target: ${currentMonth.targetLvm}`,
                pct: Math.round((currentMonth.lvm / currentMonth.targetLvm) * 100),
                color: "from-blue-600 to-cyan-500",
                icon: "💳",
              },
              {
                label: "Total EDC April",
                value: currentMonth.edc,
                sub: `Target: ${currentMonth.targetEdc}`,
                pct: Math.round((currentMonth.edc / currentMonth.targetEdc) * 100),
                color: "from-purple-600 to-pink-500",
                icon: "📱",
              },
              {
                label: "Pertumbuhan LVM",
                value: `${lvmGrowth > 0 ? "+" : ""}${lvmGrowth}%`,
                sub: `vs Maret 2026`,
                pct: null,
                color: lvmGrowth >= 0 ? "from-emerald-600 to-teal-500" : "from-rose-600 to-red-500",
                icon: lvmGrowth >= 0 ? "📈" : "📉",
              },
              {
                label: "Pertumbuhan EDC",
                value: `${edcGrowth > 0 ? "+" : ""}${edcGrowth}%`,
                sub: `vs Maret 2026`,
                pct: null,
                color: edcGrowth >= 0 ? "from-emerald-600 to-teal-500" : "from-rose-600 to-red-500",
                icon: edcGrowth >= 0 ? "📈" : "📉",
              },
            ].map((kpi, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700/60 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-slate-400 text-xs leading-relaxed">{kpi.label}</p>
                  <span className="text-lg">{kpi.icon}</span>
                </div>
                <p className="text-white font-black text-3xl">{kpi.value}</p>
                <p className="text-slate-500 text-xs mt-1">{kpi.sub}</p>
                {kpi.pct !== null && (
                  <div className="mt-3">
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${kpi.color} transition-all duration-700`}
                        style={{ width: `${kpi.pct}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{kpi.pct}% tercapai</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-slate-800 border border-slate-700/60 rounded-2xl p-5">
              <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                🏆 <span>Top Performer April 2026</span>
              </h3>
              <div className="space-y-3">
                {ranked.slice(0, 3).map((s, i) => (
                  <div key={s.id} className="flex items-center gap-3">
                    <span className="text-lg flex-shrink-0">{["🥇","🥈","🥉"][i]}</span>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                      {s.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-200 text-sm font-medium truncate">{s.name}</p>
                      <p className="text-slate-500 text-xs">Skor: {s.score?.toFixed(1)}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-blue-300 text-xs font-bold">{s.lvm} LVM</p>
                      <p className="text-purple-300 text-xs font-bold">{s.edc} EDC</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700/60 rounded-2xl p-5">
              <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                📝 <span>Catatan Branch Manager</span>
              </h3>
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "Pencapaian bulan April menunjukkan peningkatan signifikan dibanding bulan sebelumnya. Semua sales diminta untuk mempertahankan momentum ini."
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 font-black text-xs flex-shrink-0">
                    BM
                  </div>
                  <div>
                    <p className="text-amber-300 text-xs font-semibold">{BRANCH_INFO.bmName}</p>
                    <p className="text-slate-500 text-xs">Branch Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ SECTION: HISTORIS ══ */}
      {activeSection === "historis" && (
        <div className="space-y-5">
          <div className="bg-slate-800 border border-slate-700/60 rounded-2xl p-5">
            <h3 className="text-white font-bold text-sm mb-4">Tren Akuisisi LVM — 6 Bulan Terakhir</h3>
            <BarGroup data={MONTHLY_HISTORY} />
          </div>

          <div className="bg-slate-800 border border-slate-700/60 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700/40">
                    <th className="text-left px-5 py-3 text-slate-400 text-xs font-semibold uppercase">Bulan</th>
                    <th className="text-center px-4 py-3 text-slate-400 text-xs font-semibold uppercase">LVM</th>
                    <th className="text-center px-4 py-3 text-slate-400 text-xs font-semibold uppercase">Target</th>
                    <th className="text-center px-4 py-3 text-slate-400 text-xs font-semibold uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/30">
                  {[...MONTHLY_HISTORY].reverse().map((d) => (
                    <tr key={d.month} className="hover:bg-slate-700/20 transition-colors">
                      <td className="px-5 py-3 text-slate-300">{d.month}</td>
                      <td className="px-4 py-3 text-center text-blue-300 font-bold">{d.lvm}</td>
                      <td className="px-4 py-3 text-center text-slate-500">{d.targetLvm}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                          d.lvm >= d.targetLvm ? "bg-emerald-500/15 text-emerald-400" : "bg-rose-500/15 text-rose-400"
                        }`}>
                          {d.lvm >= d.targetLvm ? "Tercapai" : "Di Bawah Target"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ══ SECTION: DETAIL SALES ══ */}
      {activeSection === "detail" && (
        <div className="bg-slate-800 border border-slate-700/60 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/40">
                  <th className="text-left px-5 py-3 text-slate-400 text-xs font-semibold uppercase">Sales</th>
                  <th className="text-center px-4 py-3 text-slate-400 text-xs font-semibold uppercase">LVM</th>
                  <th className="text-center px-4 py-3 text-slate-400 text-xs font-semibold uppercase">EDC</th>
                  <th className="text-left px-4 py-3 text-slate-400 text-xs font-semibold uppercase min-w-[180px]">Progress</th>
                  <th className="text-center px-4 py-3 text-slate-400 text-xs font-semibold uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((s) => (
                  <SalesReportRow
                    key={s.id}
                    sales={s}
                    targetLvm={MONTHLY_TARGET.lvm}
                    targetEdc={MONTHLY_TARGET.edc}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaporanPage;
