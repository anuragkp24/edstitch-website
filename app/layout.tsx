import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edstitch.com"),
  title: {
    default: "EdStitch — Parent Connector for Google Classroom",
    template: "%s — EdStitch",
  },
  description:
    "EdStitch builds Parent Connector, a read-only dashboard that shows K-12 parents their child's Google Classroom assignments, missing work, and deadlines across every class.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${newsreader.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-background font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
