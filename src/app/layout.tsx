import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Color Master Pro - Web Color Extraction Tool",
  description:
    "Professional color extraction Chrome extension for designers and developers. Extract colors from any website with ease.",
  keywords:
    "color extraction, web design, chrome extension, color palette, design tools",
  openGraph: {
    title: "Color Master Pro - Web Color Extraction Tool",
    description:
      "Professional color extraction Chrome extension for designers and developers",
    images: ["/og-image.png"],
    url: "https://colormasterpro.com",
    siteName: "Color Master Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Master Pro - Web Color Extraction Tool",
    description:
      "Professional color extraction Chrome extension for designers and developers",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <main className="relative">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
