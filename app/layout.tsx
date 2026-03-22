TSX
Copy

import type { Metadata } from "next";
import "./globals.css";
 
export const metadata: Metadata = {
  title: "ClearNote Medical | Virtual Sick Notes & Disability Forms in Ontario",
  description:
    "ClearNote Medical provides virtual sick notes, work accommodation letters, disability forms, and DTC paperwork for Ontario patients — no family doctor required. Same-day appointments available.",
  keywords: [
    "virtual sick note Ontario",
    "online sick note Ontario",
    "disability form Ontario",
    "DTC form Ontario",
    "work accommodation letter Ontario",
    "no family doctor Ontario",
    "virtual GP Ontario",
    "OHIP virtual clinic",
    "ClearNote Medical",
  ],
  authors: [{ name: "Dr. J M Abraham" }],
  metadataBase: new URL("https://clearnotemedical.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ClearNote Medical | Virtual Sick Notes & Disability Forms in Ontario",
    description:
      "Virtual medical documentation for Ontario patients. Sick notes, disability forms, DTC paperwork — no family doctor required. Same-day appointments.",
    url: "https://clearnotemedical.ca",
    siteName: "ClearNote Medical",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ClearNote Medical | Virtual Sick Notes & Disability Forms in Ontario",
    description:
      "Virtual medical documentation for Ontario patients. Sick notes, disability forms, DTC paperwork — no family doctor required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
 
