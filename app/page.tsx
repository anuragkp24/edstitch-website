import Link from "next/link";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { APP_URL } from "@/lib";

const PROBLEMS = [
  {
    quote: "I found out about the missing assignment weeks later.",
    body: "By the time a missing grade shows up, it's hard to catch up.",
  },
  {
    quote: "I check every class, one by one.",
    body: "Six classes means six separate Google Classroom pages to look through.",
  },
  {
    quote: "I just want to know how the week is going.",
    body: "There's no single view of what's due, what's done, and what's missing.",
  },
];

const STEPS = [
  {
    title: "Create a parent account",
    body: "Just your email — nothing school-related.",
    icon: (
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
    ),
  },
  {
    title: "Connect Google Classroom",
    body: "Your child signs in once with their school account. Read-only.",
    icon: (
      <>
        <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
        <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
      </>
    ),
  },
  {
    title: "See everything in one place",
    body: "Every class, every assignment, and what's missing.",
    icon: (
      <>
        <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
        <path d="M3.5 9h17M9 9v11" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-4 pb-24 pt-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-32">
          <div className="flex flex-col gap-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Educational software for K-12 families
            </p>
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              See all of your kid&apos;s schoolwork in one place.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-warm sm:text-xl">
              Parent Connector brings your child&apos;s Google Classroom assignments, missing work, and
              deadlines from every class into one simple dashboard.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/parent-connector/google-classroom"
                className="flex h-12 items-center rounded-full bg-brand px-6 text-sm font-semibold text-white hover:opacity-90"
              >
                How it works with Google Classroom
              </Link>
              <a
                href={APP_URL}
                className="flex h-12 items-center rounded-full border border-ink/15 bg-surface px-6 text-sm font-semibold text-ink hover:border-ink/40"
              >
                Try the app
              </a>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Keeping up with school shouldn&apos;t take six tabs.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {PROBLEMS.map((p) => (
              <figure key={p.quote} className="flex flex-col gap-3 rounded-3xl bg-background p-7">
                <blockquote className="font-display text-xl font-medium leading-snug text-ink">
                  &ldquo;{p.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm leading-relaxed text-muted-warm">{p.body}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">How it works</h2>
          <ol className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </svg>
                </span>
                <p className="text-lg font-semibold text-ink">
                  <span className="mr-2 text-subtle-warm">{i + 1}.</span>
                  {step.title}
                </p>
                <p className="leading-relaxed text-muted-warm">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-col gap-3 text-base font-medium text-white sm:flex-row sm:flex-wrap sm:gap-x-8">
            {["Read-only Google Classroom access", "FERPA-aligned", "Parents can disconnect anytime"].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9fd3c3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <div className="flex gap-5 text-sm font-semibold text-[#9fd3c3]">
            <Link href="/parent-connector/google-classroom" className="underline underline-offset-4 hover:text-white">
              Integration details
            </Link>
            <Link href="/privacy" className="underline underline-offset-4 hover:text-white">
              Privacy policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
