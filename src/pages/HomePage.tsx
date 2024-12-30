import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/layout/Sidebar';
import { FeaturedArticle } from '../components/FeaturedArticle';
import { ArticleCard } from '../components/ArticleCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { TrendingArticles } from '../components/trending/TrendingArticles';
import { useNavigate } from 'react-router-dom';
import { mockArticles, mockCategories } from '../data/mockData';
import type { Article } from '../types';

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const featuredArticle = mockArticles[0];
  const remainingArticles = mockArticles.slice(1);

  const filteredArticles = selectedCategory
    ? remainingArticles.filter(article => article.category === selectedCategory)
    : remainingArticles;

  const handleReadMore = (article: Article) => {
    navigate(`/article/${article.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            <div>
              <FeaturedArticle article={featuredArticle} />
              <CategoryFilter
                categories={mockCategories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map(article => (
                  <ArticleCard 
                    key={article.id} 
                    article={article}
                    onReadMore={handleReadMore}
                  />
                ))}
              </div>
            </div>
            
            <aside>
              <TrendingArticles articles={mockArticles} />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}