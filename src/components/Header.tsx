import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Newspaper className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">TechNews</h1>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/admin" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Admin</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}