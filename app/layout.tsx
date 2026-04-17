import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepthimayi Pesala — Software Engineer",
  description:
    "Software Engineer specializing in scalable distributed systems, cloud infrastructure, and microservices. Based in Santa Clara, CA.",
  openGraph: {
    title: "Deepthimayi Pesala — Software Engineer",
    description: "Building systems that scale. Writing code that endures.",
    url: "https://deepthimayi.vercel.app",
    type: "website",
    siteName: "Deepthimayi Pesala",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepthimayi Pesala — Software Engineer",
    description: "Building systems that scale. Writing code that endures.",
  },
  keywords: [
    "Software Engineer",
    "Java",
    "Python",
    "AWS",
    "Microservices",
    "Distributed Systems",
    "Santa Clara",
    "Deepthimayi Pesala",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceMono.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
