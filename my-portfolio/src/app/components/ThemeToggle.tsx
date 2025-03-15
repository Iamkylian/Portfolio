'use client';

import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label={theme === 'light' ? 'Passer au mode sombre' : 'Passer au mode clair'}
    >
      {theme === 'light' ? (
        <FaMoon className="text-gray-700 text-xl" />
      ) : (
        <FaSun className="text-yellow-400 text-xl" />
      )}
    </button>
  );
}
