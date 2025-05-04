import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francisco Solla – Software Engineer & Web3 Explorer",
  description:
    "Personal portfolio of Francisco Solla – Senior Software Engineer focused on performance, UX, and the future of Web3.",
  metadataBase: new URL("https://solla.dev"),
  openGraph: {
    title: "Francisco Solla – Software Engineer & Web3 Explorer",
    description:
      "Building fast, accessible, and scalable software — now exploring decentralized apps and crypto-native tools.",
    url: "https://solla.dev",
    siteName: "solla.dev",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Francisco Solla Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Solla – Software Engineer & Web3 Explorer",
    description:
      "Personal portfolio showcasing experience in frontend engineering and transition into Web3.",
    images: ["/og.png"],
    creator: "@franciscosolla", // optional, update if you have a handle
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
