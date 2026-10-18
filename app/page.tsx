import Link from "next/link";
import { Screenshot } from "@/components/screenshot";
import { APP_URL, CONTACT_EMAIL } from "@/lib";

const STEPS = [
  {
    title: "A parent creates an account",
    body: "With their own email and password. Nothing school-related is needed for the parent.",
  },
  {
    title: "The student's school Google account connects once",
    body: "Through Google's standard sign-in and consent screen, granting read-only access to Google Classroom.",
  },
  {
    title: "Everything shows up in one place",
    body: "Every active class, every assignment, and what's missing, across all of a family's children.",
  },
];

const FEATURES = [
  {
    title: "One dashboard across every class",
    body: "Assignments from every Google Classroom course are merged into a single view instead of one page per class.",
  },
  {
    title: "Missing and due-soon work, called out",
    body: "Each assignment shows its status — missing, late, due soon, turned in, or returned with a score — so nothing slips through.",
  },
  {
    title: "Class pages",
    body: "Per-class view with the teacher's name, the latest announcement, and that class's assignments.",
  },
  {
    title: "Multiple children",
    body: "Families can connect more than one student and switch between them.",
  },
];

const SCOPES = [
  ["Classes", "The student's active Google Classroom courses"],
  ["Assignments", "Published coursework and due dates in those courses"],
  ["The student's own submissions", "Turned-in / missing / late status and any score the teacher returned"],
  ["Announcements", "The latest class announcement, shown on class pages"],
  ["Teacher names", "Who teaches each class (via the course roster)"],
];

export default function Home() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 pb-14 pt-16 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          Educational software for K-12 families
        </p>
        <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
          EdStitch builds Parent Connector: one view of a student&apos;s Google Classroom work, for their parents.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-warm">
          Parent Connector is a read-only web app that connects to a student&apos;s Google Classroom
          account through the Google Classroom API and shows their parent every class, every
          assignment, what&apos;s missing, and what&apos;s due next — in one dashboard.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/parent-connector/google-classroom"
            className="flex h-11 items-center justify-center rounded-xl bg-ink px-5 text-sm font-semibold text-background"
          >
            How it integrates with Google Classroom
          </Link>
          <Link
            href="/parent-connector"
            className="flex h-11 items-center justify-center rounded-xl border border-border-warm px-5 text-sm font-semibold text-ink-2 hover:border-ink/30"
          >
            About Parent Connector
          </Link>
        </div>
      </section>

      <section className="border-t border-border-warm bg-surface-soft py-14">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-medium text-ink">The problem</h2>
            <p className="leading-relaxed text-muted-warm">
              Students in Google Classroom have a separate stream for every class. Parents who want
              to know what&apos;s due, what&apos;s missing, or how a week is going have to check class by
              class — and Classroom has no single cross-class view built for families.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-medium text-ink">What Parent Connector does</h2>
            <p className="leading-relaxed text-muted-warm">
              It reads the student&apos;s classes, assignments, and submission status from Google
              Classroom and presents them as one dashboard for the parent. It never posts, edits,
              or submits anything in Classroom.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto w-full max-w-5xl px-4">
          <h2 className="font-display text-2xl font-medium text-ink">How it works</h2>
          <ol className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-2">
                <span className="font-display text-3xl font-medium text-subtle-warm">{i + 1}</span>
                <p className="font-semibold text-ink">{step.title}</p>
                <p className="text-sm leading-relaxed text-muted-warm">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border-warm bg-surface-soft py-14">
        <div className="mx-auto w-full max-w-5xl px-4">
          <h2 className="font-display text-2xl font-medium text-ink">What parents see</h2>
          <p className="mt-2 text-sm text-subtle-warm">Screenshots use fictional demo data — no real students.</p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Screenshot
              src="/screenshots/home.png"
              alt="Parent Connector home dashboard showing a fictional student's missing and upcoming assignments"
              caption="Home: what's missing and what's coming up, across every class."
            />
            <Screenshot
              src="/screenshots/class.png"
              alt="A Parent Connector class page with teacher name, announcements, and assignments"
              caption="Class page: teacher, latest announcement, and that class's assignments."
            />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col gap-2 rounded-2xl border border-border-warm bg-surface p-5">
                <p className="font-semibold text-ink">{f.title}</p>
                <p className="text-sm leading-relaxed text-muted-warm">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto w-full max-w-5xl px-4">
          <h2 className="font-display text-2xl font-medium text-ink">How it integrates with Google Classroom</h2>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-4 leading-relaxed text-muted-warm">
              <p>
                Parent Connector uses the <strong className="text-ink">Google Classroom API</strong> with
                OAuth 2.0. The student signs in with their school Google account on Google&apos;s own
                consent screen and grants <strong className="text-ink">read-only</strong> access. Parent
                Connector then calls the Classroom API on the student&apos;s behalf to read their courses,
                coursework, and their own submissions.
              </p>
              <p>
                Because students under 18 can only authorize apps their school has approved, a district&apos;s
                Google Workspace admin allowlists Parent Connector in the Admin console before families in
                that district can connect.
              </p>
              <p>
                <Link href="/parent-connector/google-classroom" className="font-semibold text-brand underline underline-offset-2">
                  Read the full integration overview →
                </Link>{" "}
                (every OAuth scope, every API call, and what data is stored).
              </p>
            </div>
            <div className="rounded-2xl border border-border-warm bg-surface p-5">
              <p className="font-semibold text-ink">What it reads (read-only)</p>
              <ul className="mt-3 flex flex-col gap-3">
                {SCOPES.map(([name, desc]) => (
                  <li key={name} className="text-sm leading-relaxed">
                    <span className="font-medium text-ink">{name}</span>
                    <span className="text-muted-warm"> — {desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-subtle-warm">
                It never creates, edits, submits, or deletes anything in Google Classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border-warm bg-surface-soft py-14">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-medium text-ink">Privacy and student data</h2>
            <ul className="flex list-disc flex-col gap-2 pl-5 leading-relaxed text-muted-warm">
              <li>Read-only access, limited to the student&apos;s own Classroom work.</li>
              <li>Classroom content is fetched live to render the dashboard and isn&apos;t copied into our database.</li>
              <li>No ads, no selling of data, and Google user data isn&apos;t used to train AI models.</li>
              <li>A parent can disconnect a student at any time, which deletes the stored Google tokens.</li>
              <li>Supports a parent&apos;s right to see their child&apos;s education records under FERPA.</li>
            </ul>
            <p>
              <Link href="/privacy" className="font-semibold text-brand underline underline-offset-2">Privacy policy →</Link>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-medium text-ink">About EdStitch</h2>
            <p className="leading-relaxed text-muted-warm">
              EdStitch is an independent EdTech studio founded by Raj Pandey, a former classroom teacher
              turned product manager, based in New Jersey. Parent Connector is being built in 2026 as part of
              the Assembly Code incubator for public-interest education software, and is preparing for
              pilots with public school districts.
            </p>
            <p className="leading-relaxed text-muted-warm">
              Contact:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto w-full max-w-5xl px-4">
          <h2 className="font-display text-2xl font-medium text-ink">References</h2>
          <ul className="mt-4 flex flex-col gap-2 text-muted-warm">
            <li>
              <Link href="/parent-connector" className="text-brand underline underline-offset-2">Parent Connector product overview</Link>
            </li>
            <li>
              <Link href="/parent-connector/google-classroom" className="text-brand underline underline-offset-2">
                Google Classroom integration overview (scopes, API calls, data handling)
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-brand underline underline-offset-2">Privacy policy</Link> and{" "}
              <Link href="/terms" className="text-brand underline underline-offset-2">Terms of service</Link>
            </li>
            <li>
              <a href={APP_URL} className="text-brand underline underline-offset-2">The Parent Connector web app</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
