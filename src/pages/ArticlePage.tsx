import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bookmark, Share2, ThumbsUp } from 'lucide-react';
import { Header } from '../components/Header';
import { TrendingArticles } from '../components/trending/TrendingArticles';
import { mockArticles } from '../data/mockData';

export function ArticlePage() {
  const { id } = useParams();
  const article = mockArticles.find(a => a.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="lg:flex-1">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-6"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-[400px] object-cover"
              />
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <ThumbsUp size={20} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Bookmark size={20} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Share2 size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                  <span>By {article.author}</span>
                  <span>•</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed">{article.content}</p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80">
            <TrendingArticles articles={mockArticles} />
          </aside>
        </div>
      </main>
    </div>
  );
}