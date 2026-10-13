import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const description =
  "Roshen Jegajeevan is a Senior Associate in Auto Finance at Capital One and an M.S. Computer Science student at Georgia Tech.";

export const metadata: Metadata = {
  title: "Roshen Jegajeevan",
  description,
  openGraph: {
    title: "Roshen Jegajeevan",
    description,
    images: ["/opengraph-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshen Jegajeevan",
    description,
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
      <body className={`${inter.className} bg-neutral-950 text-neutral-100 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
