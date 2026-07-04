import type { Metadata } from "next";
import {
  UnifrakturCook,
  Almendra,
  IM_Fell_French_Canon_SC,
} from "next/font/google";
import ThemeProvider from "../providers/ThemeProvider";
import "./globals.css";

const almendra = Almendra({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-almendra",
});

const imFellFrenchCanonSC = IM_Fell_French_Canon_SC({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-im-fell-french-canon-sc",
});
export const metadata: Metadata = {
  title: "Long Phuoc Tran",
  description: "Long Phuoc Tran, software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const savedTheme = localStorage.getItem('theme');
              const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = savedTheme || (isDark ? 'dark' : 'light');
              document.documentElement.classList.toggle('dark', theme === 'dark');
            })();
          `
        }} />
      </head>
      <body
        className={`${almendra.variable} ${imFellFrenchCanonSC.variable} h-[150vh]`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
