import Link from "next/link";

const NAV = [
  { href: "/parent-connector", label: "Parent Connector" },
  { href: "/parent-connector/google-classroom", label: "Classroom integration" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border-warm bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-brand font-display text-lg font-semibold text-white">
            E
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">EdStitch</span>
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-ink-2">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
