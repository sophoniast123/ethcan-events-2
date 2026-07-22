import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ETHCAN Events | World Tourism Day 2026 · Addis Ababa, Ethiopia",
  description:
    "ETHCAN Events — Ethiopia's premium events company. Host of the World Tourism Day 2026 Celebration in Addis Ababa: Digital Agenda and Artificial Intelligence to Redesign Tourism.",
  keywords: [
    "ETHCAN Events",
    "World Tourism Day 2026",
    "Addis Ababa",
    "Ethiopia",
    "conferences",
    "tourism",
    "AI tourism summit",
  ],
  openGraph: {
    title: "ETHCAN Events | World Tourism Day 2026 · Addis Ababa",
    description:
      "Digital Agenda and Artificial Intelligence to Redesign Tourism — September 2026, Addis Ababa, Ethiopia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
