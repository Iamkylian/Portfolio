import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <p className="mb-4">
        &copy; {new Date().getFullYear()} Kylian GACHET. All rights reserved.
      </p>
      <nav className="flex justify-center items-center space-x-4">
        <Link
          href="/more-informations"
          className="text-gray-400 hover:text-white"
        >
          À propos
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          href="/privacy-policy"
          className="text-gray-400 hover:text-white"
        >
          Politique de confidentialité
        </Link>
        <span className="text-gray-400">|</span>
        <a
          href="https://www.linkedin.com/in/votreprofil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="https://github.com/votreprofil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-300 hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub className="text-xl" />
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
