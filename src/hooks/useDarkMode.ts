import { useState, useEffect } from 'react';

export function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      try {
        return JSON.parse(saved);
      } catch {
        // If parsing fails, fall back to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    }
    // If no saved preference, use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleDark = () => setIsDark(prev => !prev);

  return [isDark, toggleDark];
}