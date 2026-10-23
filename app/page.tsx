import { BeforeAfter } from "@/components/before-after";
import { HomeMockup } from "@/components/home-mockup";
import { MonthMockup } from "@/components/month-mockup";
import { Faq } from "@/components/faq";
import { FeatureCards } from "@/components/feature-cards";
import { APP_URL, ASSEMBLY_CODE_URL, CONTACT_EMAIL } from "@/lib";

const PROBLEMS = [
  {
    title: "You find out about missing work weeks too late.",
    body: "By the time it shows up on a report card, it's hard to catch up.",
  },
  {
    title: "You check every class, one by one.",
    body: "Six classes means six separate pages to look through, every week.",
  },
  {
    title: "You're keeping track of more than one kid.",
    body: "Each child has their own classes and deadlines, and nothing shows them together.",
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
    title: "Connect their school account",
    body: "Your child signs in once with their school account.",
    icon: (
      <>
        <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
        <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
      </>
    ),
  },
  {
    title: "See every class and every kid",
    body: "What's due, what's missing, and what's done, all in one place.",
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
              A weekly check-in for K-12 families
            </p>
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Know what to ask your kid about this week.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-warm sm:text-xl">
              Parent Connector reads your child&apos;s Google Classroom and gives you one calm weekly
              check-in: what&apos;s missing, what&apos;s due, and the one thing worth a conversation.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#how-it-works"
                className="flex h-12 items-center rounded-full bg-brand px-6 text-sm font-semibold text-white hover:opacity-90"
              >
                See how it works
              </a>
              <a
                href={APP_URL}
                className="flex h-12 items-center rounded-full border border-ink/15 bg-surface px-6 text-sm font-semibold text-ink hover:border-ink/40"
              >
                Try the app
              </a>
            </div>
          </div>
          <HomeMockup />
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Keeping up with school shouldn&apos;t take six tabs.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="flex flex-col gap-3 rounded-3xl bg-background p-7">
                <p className="font-display text-xl font-medium leading-snug text-ink">
                  {p.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-warm">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 rounded-3xl bg-background p-6 sm:p-10">
            <BeforeAfter />
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">What parents see</h2>
          <p className="mt-3 max-w-xl text-lg text-muted-warm">Everything you need to stay in the loop, nothing you don&apos;t.</p>
          <div className="mt-12">
            <FeatureCards />
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              The whole month, at a glance.
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-muted-warm">
              Every day is the same size, with what&apos;s due on it, and a check mark once it&apos;s turned in.
              Tap a day to see everything due, or page forward and back to plan ahead and look back.
            </p>
          </div>
          <MonthMockup />
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-4 bg-background py-24">
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

      <section className="bg-surface py-24">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-8 px-4 sm:px-6 md:grid-cols-[1fr_1.4fr]">
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">For schools</h2>
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-warm">
            <p>
              Parent Connector works once your school approves it. The school&apos;s IT team adds it to the
              list of apps students can use, and then any family in the school can connect.
            </p>
            <p>Teachers don&apos;t need to do anything.</p>
            <p className="text-base">
              Want it at your school?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">Questions parents ask</h2>
          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">Free for families.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-warm">
            Parent Connector is an Assembly Code project, built with support from{" "}
            <a href={ASSEMBLY_CODE_URL} className="font-semibold text-brand underline underline-offset-4">
              Assembly Code
            </a>
            , a nonprofit incubator for public-benefit software. Code will be released as open source.
          </p>
        </div>
      </section>

      <section className="bg-brand py-24">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl font-medium leading-tight text-white sm:text-5xl">
            Know what&apos;s due before it&apos;s late.
          </h2>
          <a
            href={APP_URL}
            className="flex h-12 items-center rounded-full bg-white px-7 text-sm font-semibold text-ink hover:bg-background"
          >
            Try the app
          </a>
        </div>
      </section>
    </>
  );
}
