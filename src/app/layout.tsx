import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
// @ts-ignore - allow side-effect global CSS import without module typings
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishaan Gupta",
  description: "Portfolio of Ishaan Gupta",
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
