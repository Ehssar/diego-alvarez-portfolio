import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const pagesBasePath = process.env.GITHUB_PAGES === "true" ? "/diego-alvarez-portfolio" : "";

export const metadata: Metadata = {
  title: {
    default: "Diego Alvarez Rodriguez · Software Engineer",
    template: "%s · Diego Alvarez Rodriguez",
  },
  description: "Technical projects and writing across cybersecurity, AI/ML systems, distributed systems, and developer tooling.",
  icons: {
    icon: `${pagesBasePath}/favicon.svg`,
    shortcut: `${pagesBasePath}/favicon.svg`,
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
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
