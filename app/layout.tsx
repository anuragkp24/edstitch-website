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
    default: "EdStitch — Parent Connector: every class, every kid, one place",
    template: "%s — EdStitch",
  },
  description:
    "Parent Connector by EdStitch shows K-12 parents every class and every kid in one place: what's due, what's missing, and what's done.",
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
