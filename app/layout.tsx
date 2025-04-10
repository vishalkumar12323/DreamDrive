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
  title: "dream-drive / For users finding their dream car",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:text-white text-black min-h-screen bg-amber-50 dark:bg-gradient-to-r dark:from-gray-950 dark:to-gray-950 flex flex-col`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
