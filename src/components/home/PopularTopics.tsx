import React from 'react';
import { TrendingUp } from 'lucide-react';
import type { Category } from '../../types';

interface PopularTopicsProps {
  categories: Category[];
}

export function PopularTopics({ categories }: PopularTopicsProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Popular Topics
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              {category.name}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {Math.floor(Math.random() * 100)} articles
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}