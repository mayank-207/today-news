import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { HeroSlider } from '../components/home/HeroSlider';
import { ArticleCard } from '../components/ArticleCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { TrendingArticles } from '../components/trending/TrendingArticles';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { PopularTopics } from '../components/home/PopularTopics';
import { useDarkMode } from '../hooks/useDarkMode';
import { mockArticles, mockCategories } from '../data/mockData';
import type { Article } from '../types';

export function HomePage() {
  const [isDark, toggleDark] = useDarkMode();
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
      <Header isDark={isDark} toggleDark={toggleDark} />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main content area */}
          <div className="space-y-8">
            <HeroSlider articles={featuredArticles} />
            <NewsletterSection />
            <PopularTopics categories={mockCategories} />
            
            {/* Desktop layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
              {/* Main articles section */}
              <div className="space-y-8">
                <CategoryFilter
                  categories={mockCategories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map(article => (
                    <ArticleCard 
                      key={article.id} 
                      article={article}
                      onReadMore={handleReadMore}
                    />
                  ))}
                </div>
              </div>
              
              {/* Trending articles - Only visible on desktop */}
              <aside className="hidden lg:block space-y-6">
                <TrendingArticles articles={mockArticles} />
              </aside>
            </div>

            {/* Mobile/Tablet Trending Articles - Only visible below lg breakpoint */}
            <div className="lg:hidden">
              <TrendingArticles articles={mockArticles} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}