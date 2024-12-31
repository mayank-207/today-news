import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Newspaper, Sun, Moon } from 'lucide-react';

interface MobileHeaderProps {
  isDark: boolean;
  toggleDark: () => void;
  toggleSidebar: () => void;
}

export function MobileHeader({ isDark, toggleDark, toggleSidebar }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm lg:hidden">
      <div className="px-4 h-16 flex items-center justify-between">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        >
          <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>
        
        <Link to="/" className="flex items-center">
          <Newspaper className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">TechNews</span>
        </Link>

        <button 
          onClick={toggleDark}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </header>
  );
}