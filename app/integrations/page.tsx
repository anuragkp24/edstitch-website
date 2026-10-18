import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Integrations",
  description: "How Parent Connector connects to the tools your child's school uses, starting with Google Classroom.",
};

export default function IntegrationsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-24">
      <PageHeader
        title="Integrations"
        intro="Parent Connector connects to the tools your child's school already uses."
      />

      <section className="mt-6 rounded-3xl border border-border-warm bg-surface p-7 sm:p-9">
        <h2 className="font-display text-2xl font-medium text-ink">Google Classroom</h2>
        <p className="mt-3 text-lg leading-relaxed text-muted-warm">
          Parent Connector connects to Google Classroom through the Google Classroom API to show a child&apos;s
          classes, assignments, and whether work is turned in. It only reads this information and never
          changes anything in Classroom. Your school approves Parent Connector before families can connect.
        </p>
      </section>
    </div>
  );
}
