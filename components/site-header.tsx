import Link from "next/link";
import { APP_URL } from "@/lib";

const NAV = [
  { href: "/parent-connector", label: "Parent Connector" },
  { href: "/parent-connector/google-classroom", label: "Classroom integration" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-brand font-display text-lg font-semibold text-white">
            E
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">EdStitch</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-6 text-sm font-medium text-ink-2 md:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={APP_URL}
            className="flex h-9 items-center rounded-full bg-ink px-4 text-sm font-semibold text-background hover:bg-ink-2"
          >
            Try the app
          </a>
        </div>
      </div>
    </header>
  );
}
