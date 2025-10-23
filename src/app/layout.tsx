import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import { DynamicFavicon } from "@/components/dynamic-favicon";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishaan Gupta",
  description: "Portfolio of Ishaan Gupta",
  icons: {
    icon: "/user_light.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="next-ui-theme">
          <DynamicFavicon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
