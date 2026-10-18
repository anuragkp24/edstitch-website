import { CLASS_COLORS, Row } from "@/components/mock";

// Generic "one page per class" windows — deliberately not modeled on any
// real product's UI.
const TABS = [
  { name: "Biology", color: CLASS_COLORS.biology },
  { name: "Algebra II", color: CLASS_COLORS.algebra },
  { name: "English 10", color: CLASS_COLORS.english },
  { name: "World History", color: CLASS_COLORS.history },
  { name: "Spanish II", color: CLASS_COLORS.spanish },
  { name: "Art", color: CLASS_COLORS.art },
];

function ClassTab({ name, color }: { name: string; color: string }) {
  return (
    <div className="rounded-xl border border-border-warm bg-surface p-3 shadow-sm">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-border-warm" />
        <span className="h-2 w-2 rounded-full bg-border-warm" />
        <span className="ml-1 truncate text-xs font-semibold text-ink-2">{name}</span>
      </div>
      <div className="mt-3 h-2 w-3/4 rounded-full" style={{ background: color, opacity: 0.35 }} />
      <div className="mt-2 h-2 w-full rounded-full bg-surface-muted" />
      <div className="mt-1.5 h-2 w-5/6 rounded-full bg-surface-muted" />
    </div>
  );
}

export function BeforeAfter() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]" aria-hidden="true">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-subtle-warm">Before</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {TABS.map((t) => (
            <ClassTab key={t.name} {...t} />
          ))}
        </div>
        <p className="text-sm text-muted-warm">Six classes, six places to check.</p>
      </div>

      <div className="flex justify-center text-subtle-warm">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 lg:rotate-0">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">After</p>
        <div className="rounded-2xl border border-border-warm bg-surface p-4 shadow-[0_16px_40px_-20px_rgba(27,29,34,0.3)]">
          <p className="text-sm font-semibold text-ink">Everything this week</p>
          <div className="mt-3 flex flex-col gap-2">
            <Row color={CLASS_COLORS.biology} title="Cell Structure Lab Report" meta="Biology · Was due Tue" status="missing" />
            <Row color={CLASS_COLORS.algebra} title="Problem Set 4.2" meta="Algebra II · Due Fri" status="soon" />
            <Row color={CLASS_COLORS.spanish} title="Vocabulary Quiz Prep" meta="Spanish II · Due Mon" status="soon" />
            <Row color={CLASS_COLORS.art} title="Still Life Sketch" meta="Art · Turned in Wed" status="done" />
          </div>
        </div>
        <p className="text-sm text-muted-warm">One place for every class.</p>
      </div>
    </div>
  );
}
