// components/Header.tsx
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    // ... (le reste de votre code useEffect reste inchangé)
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3.5 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="#intro" className="nav-link">
            KYLIAN GACHET
          </Link>
        </div>
        <div className="flex items-center space-x-10">
          <Link href="#cv" className="nav-link">
            CV
          </Link>
          <Link href="#formation" className="nav-link">
            Formation
          </Link>
          <Link href="#portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
          <div className="flex space-x-4 ml-auto">
            <a
              href="https://github.com/Iamkylian"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kyliangachet"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
