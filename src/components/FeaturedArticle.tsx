import React from 'react';
import { Clock, User } from 'lucide-react';
import type { Article } from '../types';

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden mb-12 group">
      <div className="absolute inset-0">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <span className="inline-block px-3 py-1 bg-indigo-600 rounded-full text-sm font-medium mb-4">
          {article.category}
        </span>
        <h1 className="text-4xl font-bold mb-4 leading-tight">{article.title}</h1>
        <p className="text-lg text-gray-200 mb-4 max-w-3xl">{article.summary}</p>
        <div className="flex items-center gap-6 text-gray-300">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}