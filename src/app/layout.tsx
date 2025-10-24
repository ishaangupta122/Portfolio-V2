import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
// @ts-ignore - allow side-effect global CSS import without module typings
import "./globals.css";
import { DATA } from "../lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const { about } = DATA;

export const metadata: Metadata = {
  title: {
    default: `${about.name} | ${about.title}`,
    template: `%s | ${about.name}`,
  },
  description: about.description,
  authors: [{ name: about.name, url: about.linkedin }],
  creator: about.name,
  publisher: about.name,
  keywords: [
    "Ishaan Gupta",
    "Web Developer",
    "Portfolio",
    "MERN Stack",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: `${about.name} | ${about.title}`,
    description: about.description,
    url: "https://ishaangupta.me",
    siteName: about.name,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: about.image ?? "/user_dark.png",
        width: 800,
        height: 800,
        alt: `${about.name} - ${about.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${about.name} | ${about.title}`,
    description: about.description,
    creator: "@ishaangupta05",
    images: about.image ? [about.image] : undefined,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/user_dark.png",
  },
  metadataBase: new URL("https://ishaangupta.me"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link id="favicon" rel="icon" href="/user_light.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="next-ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
