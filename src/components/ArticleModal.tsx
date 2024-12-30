import React from 'react';
import { X, Clock, User, Tag } from 'lucide-react';
import type { Article } from '../types';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="relative h-[400px]">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span className="text-indigo-600 font-medium">{article.category}</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">{article.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}