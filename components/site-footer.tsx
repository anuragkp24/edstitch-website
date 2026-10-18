import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-warm py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 text-sm text-subtle-warm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 EdStitch · Educational software for K-12 families and schools</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/parent-connector" className="hover:text-ink">Parent Connector</Link>
          <Link href="/parent-connector/google-classroom" className="hover:text-ink">Classroom integration</Link>
          <Link href="/privacy" className="hover:text-ink">Privacy</Link>
          <Link href="/terms" className="hover:text-ink">Terms</Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink">{CONTACT_EMAIL}</a>
        </nav>
      </div>
    </footer>
  );
}
