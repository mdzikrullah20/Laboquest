import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Laboquest | Laboratory Equipment Manufacturer",
    template: "%s | Laboquest",
  },
  description:
    "Laboquest provides laboratory refrigerators, freezers, blood bank refrigerators, freeze dryers, incubators, ice makers, and scientific equipment for research and healthcare.",
  keywords: [
    "Laboratory Equipment",
    "Laboratory Refrigerator",
    "Blood Bank Refrigerator",
    "Laboratory Freezer",
    "Freeze Dryer",
    "Incubator",
    "Scientific Equipment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}