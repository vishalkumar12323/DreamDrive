import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Suspense } from "react";

const poppins = Poppins({
  weight: "500",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} w-full antialiased dark:text-white text-slate-900 min-h-screen bg-gradient-to-r from-violet-50 to-purple-100 dark:bg-gradient-to-r dark:from-[#13042e] dark:via-[#12083a] dark:to-[#1f1626] flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <Navbar />
          </Suspense>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
