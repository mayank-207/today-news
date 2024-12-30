import React from 'react';
import { TrendingUp, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Article } from '../../types';

interface TrendingArticlesProps {
  articles: Article[];
}

export function TrendingArticles({ articles }: TrendingArticlesProps) {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="text-indigo-600" />
        <h2 className="text-xl font-semibold">Most Read Articles</h2>
      </div>
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <Link 
            key={article.id}
            to={`/article/${article.id}`}
            className="flex gap-4 group"
          >
            <span className="text-2xl font-bold text-indigo-600/20 group-hover:text-indigo-600">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>2.5k views</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}