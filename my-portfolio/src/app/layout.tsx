// app/layout.tsx
import React from "react";
import { geistSans, geistMono, novaMono } from "./fonts";
import "./globals.css";
import defaultMetadata from "./metadata";
import ScrollToTopButton from "./components/ScrollToTopButton";

export const metadata = defaultMetadata;

// Layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans} ${geistMono} ${novaMono} antialiased`}
      >
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
