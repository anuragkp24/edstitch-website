import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { CONTACT_EMAIL } from "@/lib";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How EdStitch and Parent Connector collect, use, store, and delete data, including Google user data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-20">
      <PageHeader title="Privacy policy" intro="Effective October 17, 2026" />

      <div className="prose-warm">
        <p>
          This policy explains how EdStitch (&ldquo;we&rdquo;) handles information in Parent Connector, a
          read-only web app that shows parents their child&apos;s Google Classroom assignments. We built it to
          collect as little as possible.
        </p>

        <h2>Information we collect</h2>
        <h3>From parents</h3>
        <ul>
          <li>Email address and password (passwords are stored hashed by our authentication provider).</li>
          <li>Any setup answers you give during onboarding.</li>
        </ul>
        <h3>From a connected student&apos;s Google account</h3>
        <p>When a student authorizes Parent Connector on Google&apos;s consent screen, we receive:</p>
        <ul>
          <li>The student&apos;s Google account email address and display name.</li>
          <li>OAuth access and refresh tokens that let us read their Google Classroom data on the parent&apos;s behalf.</li>
          <li>Read-only access to the student&apos;s courses, published coursework, their own submissions (including status and any score the teacher returned), class announcements, and course teacher names.</li>
        </ul>
        <p>
          More on how Parent Connector connects to Google Classroom is on our{" "}
          <Link href="/integrations">Integrations</Link> page.
        </p>

        <h2>How we use it</h2>
        <ul>
          <li>To show the parent their child&apos;s classes, assignments, statuses, and deadlines in the Parent Connector dashboard.</li>
          <li>To keep the connection working (refreshing tokens and telling the parent if a reconnect is needed).</li>
          <li>To operate, secure, and debug the service.</li>
        </ul>
        <p>We do not use this information for advertising, and we do not sell or rent it to anyone.</p>

        <h2>Google user data and Limited Use</h2>
        <p>
          Parent Connector&apos;s use and transfer of information received from Google APIs adheres to the{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>,
          including the Limited Use requirements. Specifically:
        </p>
        <ul>
          <li>We only use Google user data to provide and improve the user-facing features described above.</li>
          <li>We do not transfer Google user data to others except as needed to run the service (our hosting and database providers), to comply with law, or with the user&apos;s consent.</li>
          <li>We do not use Google user data for advertising, and we do not sell it.</li>
          <li>We do not use Google user data to develop, improve, or train generalized AI or machine-learning models.</li>
          <li>No person at EdStitch reads Google user data except with the user&apos;s consent, for security purposes, to comply with law, or when it has been aggregated and anonymized.</li>
        </ul>

        <h2>Storage and retention</h2>
        <ul>
          <li>Classroom content (courses, assignments, submissions, scores, announcements, teacher names) is fetched live when a page is viewed and is not saved to our database.</li>
          <li>We store the connected student&apos;s email, display name, and OAuth tokens until the parent disconnects that student or deletes their account.</li>
          <li>Data is stored with our infrastructure providers (Supabase for the database and authentication, Vercel for hosting) and is encrypted in transit.</li>
        </ul>

        <h2>Deleting data and revoking access</h2>
        <ul>
          <li>A parent can disconnect a student at any time in Settings. This deletes that student&apos;s stored record and Google tokens.</li>
          <li>A student or their school can revoke Parent Connector&apos;s access from the Google Account &ldquo;Third-party apps &amp; services&rdquo; page or the Google Admin console.</li>
          <li>To delete a parent account and all associated data, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
        </ul>

        <h2>Children and students</h2>
        <p>
          Parent Connector accounts are for parents. Students don&apos;t create accounts; they only
          authorize read-only access to their own Classroom data through Google. Schools must approve Parent
          Connector before students under 18 can authorize it. Parent Connector supports a parent&apos;s right
          under FERPA to access their child&apos;s education records. If a district uses Parent Connector, we
          handle student data as directed by that district and applicable law.
        </p>

        <h2>Changes</h2>
        <p>If we change this policy, we&apos;ll update the date above and, for material changes, notify parents by email.</p>

        <h2>Contact</h2>
        <p>
          Questions or requests: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </div>
  );
}
