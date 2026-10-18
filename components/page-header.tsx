export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="flex flex-col gap-4 pb-6 pt-14 sm:pt-20">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>}
      <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink">{title}</h1>
      {intro && <p className="text-lg leading-relaxed text-muted-warm">{intro}</p>}
    </div>
  );
}
