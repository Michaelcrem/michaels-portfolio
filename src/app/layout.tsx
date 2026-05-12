import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteFooter from "@/components/SiteFooter";
import {
  getProductionSiteUrl,
  SOCIAL_PREVIEW_IMAGE_PATH,
} from "@/lib/site";

const siteUrl = getProductionSiteUrl();
const ogImageUrl = `${siteUrl}${SOCIAL_PREVIEW_IMAGE_PATH}`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Michael Cremonini | Portfolio",
    template: "%s | Michael Cremonini",
  },
  description:
    "Digital portfolio for Michael Cremonini featuring selected projects, experience, and contact information.",
  keywords: [
    "Michael Cremonini",
    "portfolio",
    "web developer",
    "UI designer",
    "frontend",
  ],
  authors: [{ name: "Michael Cremonini" }],
  creator: "Michael Cremonini",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Michael Cremonini | Portfolio",
    description:
      "Digital portfolio featuring selected projects, experience, and contact information.",
    url: "/",
    siteName: "Michael Cremonini Portfolio",
    images: [
      {
        url: ogImageUrl,
        width: 1024,
        height: 544,
        alt: "Michael Cremonini Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Cremonini | Portfolio",
    description:
      "Digital portfolio featuring selected projects, experience, and contact information.",
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
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
        <SiteFooter />
      </body>
    </html>
  );
}
