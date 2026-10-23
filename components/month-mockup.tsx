// Illustrated monthly snapshot for the homepage, modelled on the app's.
// Every assignment here is made up: never real student data.

type Item = { title: string; done?: boolean };

// October 2026 starts on a Thursday. Days not listed have nothing due.
const DUE: Record<number, Item[]> = {
  1: [{ title: "Vocab quiz", done: true }],
  6: [{ title: "Problem set 4.1", done: true }],
  8: [{ title: "Cell lab report", done: true }, { title: "Reading log", done: true }],
  13: [{ title: "Map quiz", done: true }, { title: "Essay outline", done: true }, { title: "Sketch" }],
  15: [{ title: "Problem set 4.2", done: true }],
  19: [{ title: "Quiz prep" }],
  21: [{ title: "Reading log" }, { title: "Lab data table" }],
  22: [{ title: "Chapter 3 reflection" }],
  27: [{ title: "Unit test" }],
  29: [{ title: "Spanish vocab" }],
};

const TODAY = 19;
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Leading blanks for the Thursday start, then 31 days, then blanks to fill the last week.
const CELLS: (number | null)[] = [null, null, null, ...Array.from({ length: 31 }, (_, i) => i + 1)];
while (CELLS.length % 7 !== 0) CELLS.push(null);

function Arrow({ d }: { d: string }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-warm text-ink">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
    </span>
  );
}

export function MonthMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <div className="absolute -inset-4 rounded-[2rem] bg-brand-soft sm:-inset-6" />
      <div className="relative rounded-3xl border border-border-warm bg-surface p-4 shadow-[0_20px_50px_-20px_rgba(27,29,34,0.25)] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-display text-xl font-medium text-ink">Sam&apos;s monthly snapshot</p>
          <div className="flex items-center gap-2">
            <Arrow d="M15 6l-6 6 6 6" />
            <span className="px-1 text-sm font-semibold text-ink">October 2026</span>
            <Arrow d="M9 6l6 6-6 6" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1 sm:gap-1.5">
          {WEEKDAYS.map((d) => (
            <p key={d} className="text-center text-[10px] font-semibold text-subtle-warm">
              {d}
            </p>
          ))}
          {CELLS.map((day, i) => {
            if (day === null) return <div key={i} className="h-14 rounded-lg bg-surface-muted/50 sm:h-[76px]" />;
            const items = DUE[day] ?? [];
            const today = day === TODAY;
            return (
              <div
                key={i}
                className={`flex h-14 flex-col gap-0.5 overflow-hidden rounded-lg border-[1.5px] p-1 sm:h-[76px] sm:p-1.5 ${
                  today ? "border-brand bg-brand-soft" : items.length >= 3 ? "border-[#e8b79c] bg-surface" : "border-border-warm bg-surface"
                }`}
              >
                <span
                  className={`flex h-5 min-w-5 items-center justify-center self-start rounded-full px-1 text-[11px] font-semibold ${
                    today ? "bg-brand text-white" : "text-ink"
                  }`}
                >
                  {day}
                </span>
                {items.length > 0 && <span className="text-[10px] font-medium text-ink-2 sm:hidden">{items.length} due</span>}
                <span className="hidden flex-col sm:flex">
                  {items.slice(0, 2).map((item) => (
                    <span key={item.title} className={`truncate text-[10px] leading-snug ${item.done ? "text-subtle-warm" : "text-ink"}`}>
                      {item.done && "✓ "}
                      {item.title}
                    </span>
                  ))}
                  {items.length > 2 && <span className="text-[10px] font-medium text-subtle-warm">+{items.length - 2} more</span>}
                </span>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-[11px] text-subtle-warm">✓ means turned in.</p>
      </div>
    </div>
  );
}
