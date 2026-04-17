import type { Metadata } from "next";
import { Outfit, Space_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

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
    url: "https://deepthimayi-portfolio.vercel.app",
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

// Inline script prevents flash of wrong theme on load
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = stored || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${playfair.variable} ${outfit.variable} ${spaceMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
