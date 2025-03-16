// app/layout.tsx
import React from "react";
import { geistSans, geistMono, novaMono } from "./fonts";
import "./globals.css";
import defaultMetadata from "./metadata";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

export const metadata = defaultMetadata;

// Layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans} ${geistMono} ${novaMono} antialiased bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-200`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <ScrollToTopButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
