import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import "./globals.css";
import { DATA } from "../lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const { about } = DATA;

export const metadata: Metadata = {
  metadataBase: new URL(about.url || "https://ishaangupta.me"),
  title: {
    default: about.name,
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
    url: about.url,
    siteName: about.name,
    type: "website",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: "/user_dark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link id="favicon" rel="icon" href="/user_dark.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="next-ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
