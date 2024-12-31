import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Article } from '../../types';

interface HeroSliderProps {
  articles: Article[];
}

export function HeroSlider({ articles }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [articles.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % articles.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);

  return (
    <div className="relative h-[300px] md:h-[500px] mb-8 rounded-xl overflow-hidden">
      {articles.map((article, index) => (
        <div
          key={article.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
            <span className="inline-block px-3 py-1 bg-indigo-600 text-white rounded-full text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-gray-200 mb-4 line-clamp-2 md:line-clamp-none">
              {article.summary}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}