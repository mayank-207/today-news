import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  TrendingUp, 
  Bookmark, 
  History,
  Tag,
  Settings
} from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: TrendingUp, label: 'Trending', path: '/trending' },
    { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
    { icon: History, label: 'Reading History', path: '/history' },
    { icon: Tag, label: 'Categories', path: '/categories' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
      <div className="p-6">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}