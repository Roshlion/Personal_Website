import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roshen Jegajeevan — Portfolio",
  description:
    "Portfolio of Roshen Jegajeevan — Analyst at Capital One; M.S. CS (Georgia Tech); projects in analytics, ML, and backtesting.",
  openGraph: {
    title: "Roshen Jegajeevan — Portfolio",
    description:
      "Portfolio of Roshen Jegajeevan — Analyst at Capital One; M.S. CS (Georgia Tech); projects in analytics, ML, and backtesting.",
    images: ["/opengraph-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshen Jegajeevan — Portfolio",
    description:
      "Portfolio of Roshen Jegajeevan — Analyst at Capital One; M.S. CS (Georgia Tech); projects in analytics, ML, and backtesting.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950 text-neutral-100`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
