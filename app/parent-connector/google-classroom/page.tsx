import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { CONTACT_EMAIL } from "@/lib";

export const metadata: Metadata = {
  title: "Google Classroom integration",
  description:
    "How Parent Connector integrates with the Google Classroom API: OAuth scopes, API calls, data storage, and district allowlisting.",
};

const SCOPES: { scope: string; use: string }[] = [
  { scope: "openid", use: "Standard sign-in. Identifies which Google account was connected." },
  { scope: "https://www.googleapis.com/auth/userinfo.email", use: "The student's school email, so the parent can see which account is connected." },
  { scope: "https://www.googleapis.com/auth/userinfo.profile", use: "The student's display name, shown to the parent." },
  { scope: "https://www.googleapis.com/auth/classroom.courses.readonly", use: "List the student's active courses." },
  { scope: "https://www.googleapis.com/auth/classroom.coursework.me.readonly", use: "Read published coursework in those courses and the student's own submissions." },
  { scope: "https://www.googleapis.com/auth/classroom.student-submissions.me.readonly", use: "Read the student's own submission state and any score the teacher returned." },
  { scope: "https://www.googleapis.com/auth/classroom.announcements.readonly", use: "Show the latest class announcement on a class page." },
  { scope: "https://www.googleapis.com/auth/classroom.rosters.readonly", use: "Show the teacher's name on a class page (courses.teachers.list)." },
  { scope: "https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly", use: "Requested but not currently used by any feature." },
  { scope: "https://www.googleapis.com/auth/classroom.topics.readonly", use: "Requested but not currently used by any feature." },
];

const CALLS: { call: string; purpose: string }[] = [
  { call: "GET /v1/courses?studentId=me&courseStates=ACTIVE", purpose: "The student's active classes" },
  { call: "GET /v1/courses/{courseId}/courseWork?courseWorkStates=PUBLISHED", purpose: "Assignments in each class" },
  { call: "GET /v1/courses/{courseId}/courseWork/-/studentSubmissions?userId=me", purpose: "The student's own submission status for each assignment" },
  { call: "GET /v1/courses/{courseId}  ·  /courseWork/{id}  ·  /studentSubmissions?userId=me", purpose: "A single assignment's detail page" },
  { call: "GET /v1/courses/{courseId}/teachers", purpose: "Teacher name on the class page" },
  { call: "GET /v1/courses/{courseId}/announcements?announcementStates=PUBLISHED", purpose: "Latest announcement on the class page" },
];

export default function ClassroomIntegrationPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-20">
      <PageHeader
        eyebrow="Reference"
        title="How Parent Connector integrates with Google Classroom"
        intro="A technical overview for school IT administrators and reviewers: what Parent Connector requests, what it reads, what it stores, and how a district approves it."
      />

      <div className="prose-warm">
        <h2>Summary</h2>
        <ul>
          <li>Parent Connector is a web app (Next.js, hosted on Vercel, with a Supabase Postgres database).</li>
          <li>It uses the <strong>Google Classroom API v1</strong> through <strong>OAuth 2.0</strong> (web-server flow, offline access).</li>
          <li>Every Classroom scope it requests is <strong>read-only</strong>. It never creates, modifies, submits, or deletes anything in Classroom.</li>
          <li>It only reads data the authorizing student can already see about themselves: their courses, coursework, and their own submissions.</li>
        </ul>

        <h2>Authorization flow</h2>
        <ol>
          <li>A parent signs in to their Parent Connector account (email and password, separate from Google).</li>
          <li>The parent chooses &ldquo;Connect a child.&rdquo; Parent Connector redirects to Google&apos;s OAuth consent screen with the scopes listed below.</li>
          <li>The student signs in with their school Google account and approves access on Google&apos;s screen.</li>
          <li>Google redirects back with an authorization code. The server exchanges it for an access token and a refresh token, then reads the student&apos;s email and name from Google&apos;s OpenID Connect userinfo endpoint.</li>
          <li>The tokens are stored server-side, tied to the parent&apos;s account. The browser never receives them.</li>
        </ol>

        <h2>OAuth scopes requested</h2>
        <table>
          <thead>
            <tr><th>Scope</th><th>Why</th></tr>
          </thead>
          <tbody>
            {SCOPES.map((s) => (
              <tr key={s.scope}>
                <td><code>{s.scope}</code></td>
                <td>{s.use}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Classroom API calls</h2>
        <p>All calls are <code>GET</code> requests against <code>https://classroom.googleapis.com</code>, made from the server with the student&apos;s access token.</p>
        <table>
          <thead>
            <tr><th>Call</th><th>Used for</th></tr>
          </thead>
          <tbody>
            {CALLS.map((c) => (
              <tr key={c.call}>
                <td><code>{c.call}</code></td>
                <td>{c.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>What is stored, and what isn&apos;t</h2>
        <h3>Stored (per connected student)</h3>
        <ul>
          <li>The parent&apos;s account ID it belongs to</li>
          <li>The student&apos;s Google account email and display name</li>
          <li>The Google OAuth access token, refresh token, expiry time, and connection status</li>
        </ul>
        <h3>Not stored</h3>
        <ul>
          <li>Classroom content — courses, assignments, submissions, scores, announcements, and teacher names are fetched live from the Classroom API each time a page is viewed and aren&apos;t written to our database.</li>
          <li>Student files, private comments, or messages — these aren&apos;t requested at all.</li>
        </ul>
        <p>
          Database access is protected by row-level security, so a parent can only read the connections that
          belong to their own account.
        </p>

        <h3>Disconnecting</h3>
        <p>
          A parent can disconnect a student at any time from Settings, which deletes that student&apos;s stored
          record and tokens. The student or their school can also revoke access at any time from the Google
          Account &ldquo;Third-party apps &amp; services&rdquo; page or the Google Admin console.
        </p>

        <h2>District allowlisting</h2>
        <p>
          Google Workspace for Education requires admins to approve third-party apps before users under 18 can
          authorize them. To let families in a district use Parent Connector, an admin:
        </p>
        <ol>
          <li>Opens the Google Admin console → <strong>Security → Access and data control → API controls → Manage Third-Party App Access</strong>.</li>
          <li>Adds Parent Connector by its OAuth client ID (we provide it on request).</li>
          <li>Sets it to <strong>Trusted</strong> or <strong>Limited</strong> for the relevant student organizational units.</li>
        </ol>
        <p>
          Districts interested in a pilot can reach us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Why we&apos;re requesting a Google Workspace for Education demo domain</h2>
        <p>
          Parent Connector is currently tested against a single test Classroom account. A demo domain would
          let us build and test against realistic Classroom data — many courses, multiple teachers, and
          assignments in every state (missing, late, turned in, returned with a score) — and to test the
          admin allowlisting flow end to end, all without touching any real student&apos;s data.
        </p>

        <h2>Related</h2>
        <ul>
          <li><Link href="/parent-connector">Parent Connector product overview</Link></li>
          <li><Link href="/privacy">Privacy policy</Link> (including our Google API Services User Data Policy disclosure)</li>
          <li><Link href="/terms">Terms of service</Link></li>
        </ul>
      </div>
    </div>
  );
}
