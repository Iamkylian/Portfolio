// app/layout.tsx
"use client";

import React, { useEffect, useState } from "react";
import { geistSans, geistMono, novaMono } from "./fonts";
import "./globals.css";
import { metadata } from "./metadata";
import { FaArrowCircleUp } from "react-icons/fa";

// Composant de mise en page racine
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); // Affiche le bouton si défilé de plus de 100px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans} ${geistMono} ${novaMono} antialiased`}
      >
        
        {children}

        {/* Bouton Retour en haut de page */}
        {isVisible && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 right-5 bg-gray-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out"
            title="Haut de page"
          >
            <FaArrowCircleUp className="text-xl" />
          </button>
        )}
      </body>
    </html>
  );
}
