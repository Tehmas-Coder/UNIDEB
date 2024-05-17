import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import ScrollToTop from "@/components/scrolltotop/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "University of Debrecen South Asia Regional Office",
  description:
    "The University of Debrecen is the second best university in Hungary, offering more than 90 programs taught fully in English to students around the globe. Its regional Office is located in Dubai.",
  keywords:
    "University of Debrecen, Hungary, English-taught programs, global education, University, Education, Hungary, Global Programs",
  robots: "index, follow",
  formatDetection: { telephone: false },
  viewport:
    "initial-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width",
  authors: [
    {
      name: " University of Debrecen Southasia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "https://www.facebook.com/UODHROSA/",
};

interface RootLayoutProps {
  children: React.ReactNode;
  loading: boolean; // Explicitly type the loading prop
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        />
        <link rel="icon" href="/deb-logo-png.png" sizes="any" />
      </head>
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <main className={inter.className} style={{ flex: "1" }}>
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
