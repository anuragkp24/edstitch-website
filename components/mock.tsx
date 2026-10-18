// Small shared pieces for the homepage illustrations. All data shown in
// these mockups is made up — never real student data.

export type Status = "missing" | "soon" | "done";

const PILL: Record<Status, { label: string; className: string }> = {
  missing: { label: "Missing", className: "bg-[#fbe3e1] text-[#9f1d1d]" },
  soon: { label: "Due soon", className: "bg-[#fbebdd] text-[#8a3d14]" },
  done: { label: "Turned in", className: "bg-[#e3f0e7] text-[#1f5a38]" },
};

export const CLASS_COLORS = {
  biology: "#2f6b5b",
  algebra: "#4b3fb8",
  english: "#b45309",
  history: "#1c4f8f",
  spanish: "#9d174d",
  art: "#0e7490",
};

export function Pill({ status }: { status: Status }) {
  const p = PILL[status];
  return (
    <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${p.className}`}>{p.label}</span>
  );
}

export function Row({
  color,
  title,
  meta,
  status,
}: {
  color: string;
  title: string;
  meta: string;
  status?: Status;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border-warm bg-surface px-3 py-2.5">
      <span className="h-8 w-1 shrink-0 rounded-full" style={{ background: color }} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{title}</p>
        <p className="truncate text-xs text-subtle-warm">{meta}</p>
      </div>
      {status && <Pill status={status} />}
    </div>
  );
}
