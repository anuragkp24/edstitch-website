// Illustrated dashboard for the homepage hero. Every name, class, and
// assignment here is made up — never real student data.

type Status = "missing" | "soon" | "done";

const PILL: Record<Status, { label: string; className: string }> = {
  missing: { label: "Missing", className: "bg-[#fbe3e1] text-[#9f1d1d]" },
  soon: { label: "Due soon", className: "bg-[#fbebdd] text-[#8a3d14]" },
  done: { label: "Turned in", className: "bg-[#e3f0e7] text-[#1f5a38]" },
};

const ROWS: { course: string; color: string; title: string; when: string; status: Status }[] = [
  { course: "Biology", color: "#2f6b5b", title: "Cell Structure Lab Report", when: "Was due Tue", status: "missing" },
  { course: "Algebra II", color: "#4b3fb8", title: "Problem Set 4.2", when: "Due Fri", status: "soon" },
  { course: "English 10", color: "#b45309", title: "Chapter 3 Reflection", when: "Due Mon", status: "soon" },
  { course: "World History", color: "#1c4f8f", title: "Map Quiz Study Guide", when: "Turned in Wed", status: "done" },
];

function Pill({ status }: { status: Status }) {
  const p = PILL[status];
  return (
    <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${p.className}`}>{p.label}</span>
  );
}

export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="absolute -inset-4 rounded-[2rem] bg-brand-soft sm:-inset-6" />

      <div className="relative rounded-3xl border border-border-warm bg-surface p-5 shadow-[0_20px_50px_-20px_rgba(27,29,34,0.25)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4b3fb8] text-sm font-semibold text-white">
              S
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Sam&apos;s week</p>
              <p className="text-xs text-subtle-warm">6 classes</p>
            </div>
          </div>
          <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-ink-2">This week</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-[#fbe3e1] py-2.5">
            <p className="font-display text-2xl font-semibold text-[#9f1d1d]">1</p>
            <p className="text-[11px] font-medium text-[#9f1d1d]">Missing</p>
          </div>
          <div className="rounded-xl bg-[#fbebdd] py-2.5">
            <p className="font-display text-2xl font-semibold text-[#8a3d14]">2</p>
            <p className="text-[11px] font-medium text-[#8a3d14]">Due soon</p>
          </div>
          <div className="rounded-xl bg-[#e3f0e7] py-2.5">
            <p className="font-display text-2xl font-semibold text-[#1f5a38]">9</p>
            <p className="text-[11px] font-medium text-[#1f5a38]">Turned in</p>
          </div>
        </div>

        <ul className="mt-4 mb-6 flex flex-col gap-2">
          {ROWS.map((row) => (
            <li key={row.title} className="flex items-center gap-3 rounded-xl border border-border-warm px-3 py-2.5">
              <span className="h-8 w-1 shrink-0 rounded-full" style={{ background: row.color }} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">{row.title}</p>
                <p className="text-xs text-subtle-warm">
                  {row.course} · {row.when}
                </p>
              </div>
              <Pill status={row.status} />
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -bottom-16 -left-2 hidden rounded-2xl border border-border-warm bg-surface px-4 py-3 shadow-[0_12px_30px_-12px_rgba(27,29,34,0.3)] sm:block lg:-left-10">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9f1d1d]">Missing · Biology</p>
        <p className="text-sm font-semibold text-ink">Cell Structure Lab Report</p>
      </div>
    </div>
  );
}
