// Illustrated Home screen for the homepage hero, modelled on the app's weekly
// check-in. Every name, class and assignment here is made up: never real
// student data.

const WEEKS = [
  { day: "5", state: "done" },
  { day: "12", state: "done" },
  { day: "19", state: "open" },
  { day: "26", state: "later" },
] as const;

export function HomeMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="absolute -inset-4 rounded-[2rem] bg-brand-soft sm:-inset-6" />

      <div className="relative rounded-3xl border border-border-warm bg-surface p-5 shadow-[0_20px_50px_-20px_rgba(27,29,34,0.25)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-2 rounded-full bg-ink py-1 pl-1 pr-3 text-sm font-semibold text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d9c7e8] text-xs text-ink">S</span>
            Sam
            <span className="rounded-full bg-[#fbe3e1] px-2 py-0.5 text-[11px] font-semibold text-[#9f1d1d]">Check in</span>
          </span>
          <span className="flex items-center gap-2 rounded-full border border-border-warm py-1 pl-1 pr-3 text-sm font-semibold text-ink-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f2d9b8] text-xs text-ink">J</span>
            Jordan
            <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-brand">Doing okay</span>
          </span>
        </div>

        <p className="mt-5 font-display text-[28px] font-medium leading-[1.1] tracking-tight text-ink">
          Sam needs a check-in.
        </p>

        <div className="mt-4 rounded-2xl bg-background p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-subtle-warm">Ask Sam about</p>
          <p className="mt-1 font-display text-xl leading-tight text-ink">Cell Structure Lab Report</p>
          <p className="mt-1 text-xs text-muted-warm">
            Biology · Was due Tue · <span className="font-semibold text-[#9f1d1d]">2 days late</span>
          </p>
          <div className="mt-3 flex h-10 items-center justify-center gap-2 rounded-xl bg-brand text-sm font-semibold text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            I checked in with Sam
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-surface-muted p-4">
          <p className="text-sm font-semibold text-ink">Sam&apos;s check-ins</p>
          <p className="mt-1 text-xs text-muted-warm">October</p>
          <ul className="mt-3 flex gap-3">
            {WEEKS.map((week) => (
              <li key={week.day} className="flex flex-col items-center gap-1">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                    week.state === "done"
                      ? "border-brand bg-brand text-white"
                      : week.state === "open"
                        ? "border-dashed border-subtle-warm bg-white"
                        : "border-dashed border-border-warm bg-white"
                  }`}
                >
                  {week.state === "done" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  )}
                </span>
                <span className="text-xs text-subtle-warm">{week.day}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute -bottom-14 -left-2 hidden w-56 rounded-2xl border border-border-warm bg-surface p-3 shadow-[0_12px_30px_-12px_rgba(27,29,34,0.3)] sm:block lg:-left-12">
        <div className="h-20 overflow-hidden rounded-lg border border-border-warm bg-background p-2">
          <div className="h-1.5 w-1/2 rounded-full bg-ink/20" />
          <div className="mt-1.5 h-1.5 w-full rounded-full bg-ink/10" />
          <div className="mt-1.5 h-1.5 w-5/6 rounded-full bg-ink/10" />
          <div className="mt-1.5 h-1.5 w-full rounded-full bg-ink/10" />
          <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-ink/10" />
        </div>
        <p className="mt-2 text-sm font-semibold text-ink">Plant cell diagram</p>
        <p className="text-xs text-subtle-warm">
          Science · Turned in Thu · <span className="font-semibold text-brand">On time</span>
        </p>
      </div>
    </div>
  );
}
