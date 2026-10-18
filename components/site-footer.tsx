import Link from "next/link";
import { ASSEMBLY_CODE_URL, CONTACT_EMAIL } from "@/lib";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-warm bg-surface py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-subtle-warm sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-semibold text-ink">EdStitch</span> · Supported by{" "}
          <a href={ASSEMBLY_CODE_URL} className="underline underline-offset-2 hover:text-ink">
            Assembly Code
          </a>
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/parent-connector" className="hover:text-ink">Parent Connector</Link>
          <Link href="/parent-connector/google-classroom" className="hover:text-ink">Google Classroom integration</Link>
          <Link href="/privacy" className="hover:text-ink">Privacy</Link>
          <Link href="/terms" className="hover:text-ink">Terms</Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink">{CONTACT_EMAIL}</a>
        </nav>
      </div>
    </footer>
  );
}
