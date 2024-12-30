import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="bg-indigo-600 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <LayoutDashboard className="h-8 w-8" />
            <h1 className="ml-2 text-2xl font-bold">Admin Dashboard</h1>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              View Site
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}