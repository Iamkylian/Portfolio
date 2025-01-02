"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ... (votre code useEffect existant)
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3.5 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="#intro" className="nav-link">
            KYLIAN GACHET
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`md:flex items-center space-x-10 ${
            isOpen
              ? "flex flex-col absolute top-full left-0 right-0 bg-white p-4"
              : "hidden"
          }`}
        >
          <Link href="#education" className="nav-link block py-2">
            Education
          </Link>
          <Link href="#skills" className="nav-link block py-2">
            Compétences
          </Link>
          <Link href="#projects" className="nav-link block py-2">
            Projets
          </Link>
          <Link href="#contact" className="nav-link block py-2">
            Contact
          </Link>
          <div className="flex space-x-4 mt-4 md:mt-0">
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
