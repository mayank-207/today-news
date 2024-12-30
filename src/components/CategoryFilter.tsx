import React from 'react';
import { Hash } from 'lucide-react';
import type { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <Hash className="text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
              : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
          }`}
        >
          All Articles
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.slug
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}