// components/Header.tsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll as EventListener);
    });

    // Nettoyage des écouteurs d'événements
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="#intro" className="nav-link">
            KYLIAN GACHET
          </Link>
        </div>
        <div className="space-x-10">
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
