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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://michaels-portfolio.vercel.app"
  ),
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
        url: "/opengraph-image",
        width: 1200,
        height: 630,
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
    images: ["/twitter-image"],
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
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="border-t border-[color:var(--border)] py-4">
          <div className="mx-auto w-full max-w-5xl px-4 text-center text-xs text-[var(--muted-strong)] sm:px-8 md:px-12 lg:px-20 xl:px-24">
            © {currentYear} Michael Cremonini
          </div>
        </footer>
      </body>
    </html>
  );
}
