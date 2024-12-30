import React from 'react';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { CategoryForm } from '../../components/admin/CategoryForm';
import { ArticleForm } from '../../components/admin/ArticleForm';
import { mockCategories } from '../../data/mockData';
import type { Article, Category } from '../../types';

export function AdminDashboard() {
  const handleCategorySubmit = (category: Omit<Category, 'id'>) => {
    // TODO: Implement API call to save category
    console.log('New category:', category);
  };

  const handleArticleSubmit = (article: Omit<Article, 'id' | 'publishedAt'>) => {
    // TODO: Implement API call to save article
    console.log('New article:', article);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
            <CategoryForm onSubmit={handleCategorySubmit} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add New Article</h2>
            <ArticleForm 
              categories={mockCategories} 
              onSubmit={handleArticleSubmit} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}