import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Screenshot } from "@/components/screenshot";
import { APP_URL, CONTACT_EMAIL } from "@/lib";

export const metadata: Metadata = {
  title: "Parent Connector",
  description:
    "Parent Connector gives K-12 parents a single read-only dashboard of their child's Google Classroom assignments, missing work, and deadlines.",
};

export default function ParentConnectorPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-20">
      <PageHeader
        eyebrow="Product"
        title="Parent Connector"
        intro="A read-only web dashboard that shows parents their child's Google Classroom assignments, missing work, and upcoming deadlines across every class."
      />

      <div className="prose-warm">
        <h2>Who it&apos;s for</h2>
        <p>
          Parents and guardians of middle and high school students whose schools use Google Classroom.
          A typical student has six or more classes, each with its own Classroom stream; Parent Connector
          puts all of them in one place for the family.
        </p>

        <h2>What it does</h2>
        <ul>
          <li><strong>Home dashboard</strong> — what&apos;s missing, what&apos;s due soon, and recent activity across every class, per child.</li>
          <li><strong>Assignment status</strong> — each assignment is labeled missing, late, due soon, upcoming, turned in, or returned with the score the teacher entered in Classroom.</li>
          <li><strong>Class pages</strong> — the teacher&apos;s name, the latest class announcement, and that class&apos;s assignments.</li>
          <li><strong>Assignment detail</strong> — the assignment&apos;s title, description, due date, and the student&apos;s submission status.</li>
          <li><strong>Quick questions</strong> — parents can ask &ldquo;What&apos;s missing?&rdquo; or &ldquo;What&apos;s due this week?&rdquo; and get an answer drawn from their child&apos;s Classroom data.</li>
          <li><strong>Multiple children</strong> — connect more than one student and switch between them.</li>
        </ul>
      </div>

      <div className="my-10 grid grid-cols-1 gap-8">
        <Screenshot
          src="/screenshots/home.png"
          alt="Parent Connector home dashboard with fictional demo data"
          caption="Home dashboard (fictional demo data)."
        />
        <Screenshot
          src="/screenshots/assignments.png"
          alt="Parent Connector assignments list filtered by status, with fictional demo data"
          caption="All assignments across classes, filterable by status (fictional demo data)."
        />
      </div>

      <div className="prose-warm">
        <h2>How a family gets started</h2>
        <ol>
          <li>The parent creates a Parent Connector account with their own email and password.</li>
          <li>The parent hands the device to their student, who signs in with their school Google account and approves read-only access on Google&apos;s consent screen.</li>
          <li>The dashboard loads with the student&apos;s current classes and assignments.</li>
        </ol>
        <p>
          Students under 18 can only authorize third-party apps their school has approved, so a district
          admin allowlists Parent Connector first. See the{" "}
          <Link href="/parent-connector/google-classroom">Google Classroom integration overview</Link> for details.
        </p>

        <h2>What it doesn&apos;t do</h2>
        <ul>
          <li>It never posts, edits, submits, or deletes anything in Google Classroom.</li>
          <li>It doesn&apos;t show official report-card grades — those live in the district&apos;s student information system, not Classroom.</li>
          <li>It doesn&apos;t read student files, private comments, or messages.</li>
        </ul>

        <h2>Status</h2>
        <p>
          Parent Connector is a working web app in active development, built in 2026 as part of the
          Assembly Code incubator for public-interest education software. We&apos;re preparing pilots with
          public school districts.
        </p>
        <p>
          <a href={APP_URL}>Open the web app</a> · Questions or district pilot interest:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </div>
  );
}
