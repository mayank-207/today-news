import React from 'react';
import { Mail } from 'lucide-react';

export function NewsletterSection() {
  return (
    <section className="bg-indigo-600 dark:bg-indigo-900 rounded-xl p-6 md:p-8 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Stay Updated with Tech News
          </h2>
          <p className="text-indigo-100">
            Get the latest tech news and insights delivered to your inbox weekly.
          </p>
        </div>
        <form className="w-full md:w-auto flex gap-2">
          <div className="relative flex-1 md:w-64">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-indigo-400 focus:border-white focus:ring-2 focus:ring-white bg-indigo-700/50 text-white placeholder-indigo-300"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}