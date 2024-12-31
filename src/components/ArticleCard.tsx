import { Clock, User, ArrowRight } from 'lucide-react';
import type { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onReadMore: (article: Article) => void;
}

export function ArticleCard({ article, onReadMore }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-white rounded-full text-sm font-medium">
          {article.category}
        </span>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.summary}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
          <button 
            onClick={() => onReadMore(article)}
            className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Read more
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}