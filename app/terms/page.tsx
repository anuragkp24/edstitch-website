import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { CONTACT_EMAIL } from "@/lib";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms of service for Parent Connector by EdStitch.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-20">
      <PageHeader title="Terms of service" intro="Effective October 17, 2026" />

      <div className="prose-warm">
        <p>
          These terms cover your use of Parent Connector, a service provided by EdStitch. By creating an account,
          you agree to them.
        </p>

        <h2>Who can use it</h2>
        <p>
          Parent Connector is for parents and legal guardians who are 18 or older. You may only connect the
          Google Classroom account of a student you are the parent or legal guardian of, and only with that
          student&apos;s participation in the Google sign-in.
        </p>

        <h2>What the service does</h2>
        <p>
          Parent Connector displays a read-only view of a student&apos;s Google Classroom courses, assignments,
          and submission status. It is not an official record: grades, deadlines, and statuses come from Google
          Classroom and the student&apos;s teachers, and the school&apos;s own systems are the source of truth.
        </p>

        <h2>Your account</h2>
        <ul>
          <li>Keep your password secure and tell us if you think your account has been accessed without permission.</li>
          <li>Don&apos;t misuse the service, try to access data you aren&apos;t entitled to, or interfere with its operation.</li>
          <li>You can disconnect a student or ask us to delete your account at any time.</li>
        </ul>

        <h2>Availability</h2>
        <p>
          Parent Connector is in active development and is provided &ldquo;as is.&rdquo; It depends on Google
          Classroom and on your school allowing the app, and features may change or be unavailable at times.
          To the extent permitted by law, EdStitch isn&apos;t liable for indirect or consequential damages from
          using the service.
        </p>

        <h2>Privacy</h2>
        <p>
          Our <Link href="/privacy">privacy policy</Link> explains what data we collect and how we use it.
        </p>

        <h2>Changes and contact</h2>
        <p>
          We may update these terms and will note the effective date above. Questions:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </div>
  );
}
