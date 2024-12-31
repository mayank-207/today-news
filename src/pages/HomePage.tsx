import React, { useState } from 'react';
import { Header } from '../components/Header';
import { MobileHeader } from '../components/layout/MobileHeader';
import { Sidebar } from '../components/layout/Sidebar';
import { HeroSlider } from '../components/home/HeroSlider';
import { ArticleCard } from '../components/ArticleCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { TrendingArticles } from '../components/trending/TrendingArticles';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { PopularTopics } from '../components/home/PopularTopics';
import { useNavigate } from 'react-router-dom';
import { mockArticles, mockCategories } from '../data/mockData';
import { useDarkMode } from '../hooks/useDarkMode';
import type { Article } from '../types';

export function HomePage() {
  const [isDark, toggleDark] = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const featuredArticles = mockArticles.slice(0, 3);
  const remainingArticles = mockArticles.slice(3);

  const filteredArticles = selectedCategory
    ? remainingArticles.filter(article => article.category === selectedCategory)
    : remainingArticles;

  const handleReadMore = (article: Article) => {
    navigate(`/article/${article.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col min-h-screen">
        <MobileHeader 
          isDark={isDark}
          toggleDark={toggleDark}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <Header />
        
        <div className="flex flex-1">
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />
          
          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
              <div>
                <HeroSlider articles={featuredArticles} />
                <NewsletterSection />
                <PopularTopics categories={mockCategories} />
                
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
              
              <aside className="space-y-8 lg:block">
                <TrendingArticles articles={mockArticles} />
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}