import type { ReactNode } from "react";
import { CLASS_COLORS, Pill, Row } from "@/components/mock";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-56 flex-col justify-center gap-2 overflow-hidden rounded-2xl bg-background p-4" aria-hidden="true">
      {children}
    </div>
  );
}

function EveryClass() {
  return (
    <Frame>
      <Row color={CLASS_COLORS.biology} title="Cell Structure Lab Report" meta="Biology · Due Thu" />
      <Row color={CLASS_COLORS.english} title="Chapter 3 Reflection" meta="English 10 · Due Mon" />
      <Row color={CLASS_COLORS.history} title="Map Quiz Study Guide" meta="World History · Due Tue" />
    </Frame>
  );
}

function MissingDueSoon() {
  return (
    <Frame>
      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl bg-[#fbe3e1] py-2">
          <p className="font-display text-xl font-semibold text-[#9f1d1d]">1</p>
          <p className="text-[11px] font-medium text-[#9f1d1d]">Missing</p>
        </div>
        <div className="rounded-xl bg-[#fbebdd] py-2">
          <p className="font-display text-xl font-semibold text-[#8a3d14]">2</p>
          <p className="text-[11px] font-medium text-[#8a3d14]">Due soon</p>
        </div>
      </div>
      <Row color={CLASS_COLORS.biology} title="Cell Structure Lab Report" meta="Biology · Was due Tue" status="missing" />
      <Row color={CLASS_COLORS.algebra} title="Problem Set 4.2" meta="Algebra II · Due Fri" status="soon" />
    </Frame>
  );
}

function ClassPage() {
  return (
    <Frame>
      <div className="flex items-center gap-2.5 rounded-xl bg-surface px-3 py-2.5">
        <span className="h-8 w-1 rounded-full" style={{ background: CLASS_COLORS.biology }} />
        <div>
          <p className="text-sm font-semibold text-ink">Biology</p>
          <p className="text-xs text-subtle-warm">Ms. Rivera</p>
        </div>
      </div>
      <div className="rounded-xl border border-dashed border-border-warm bg-surface px-3 py-2.5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-subtle-warm">Latest announcement</p>
        <p className="mt-0.5 text-sm text-ink-2">Bring lab goggles on Thursday!</p>
      </div>
      <Row color={CLASS_COLORS.biology} title="Microscope Safety Quiz" meta="Due Wed" status="soon" />
    </Frame>
  );
}

function Kid({ initial, name, color, summary, active }: { initial: string; name: string; color: string; summary: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${active ? "border-2 border-brand bg-surface" : "border border-border-warm bg-surface"}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ background: color }}>
        {initial}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink">{name}</p>
        <p className="truncate text-xs text-subtle-warm">{summary}</p>
      </div>
    </div>
  );
}

function MultipleKids() {
  return (
    <Frame>
      <Kid initial="S" name="Sam" color="#4b3fb8" summary="10th grade · 6 classes" active />
      <Kid initial="J" name="Jordan" color="#b45309" summary="7th grade · 7 classes" />
      <div className="flex items-center justify-between rounded-xl bg-surface px-3 py-2.5">
        <p className="text-sm font-semibold text-ink">Sam this week</p>
        <Pill status="soon" />
      </div>
    </Frame>
  );
}

const FEATURES = [
  { title: "One dashboard, every class", body: "Assignments from all of your child's classes, together in one list.", visual: <EveryClass /> },
  { title: "All your kids, one account", body: "Connect more than one child and switch between them in a tap.", visual: <MultipleKids /> },
  { title: "Missing work, called out", body: "See what's missing and what's due soon at a glance — before it becomes a problem.", visual: <MissingDueSoon /> },
  { title: "Class pages", body: "Each class shows the teacher, the latest announcement, and what's coming up.", visual: <ClassPage /> },
];

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {FEATURES.map((f) => (
        <div key={f.title} className="flex flex-col gap-5 rounded-3xl border border-border-warm bg-surface p-6">
          {f.visual}
          <div className="flex flex-col gap-1.5">
            <p className="text-lg font-semibold text-ink">{f.title}</p>
            <p className="leading-relaxed text-muted-warm">{f.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
