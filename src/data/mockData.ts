import type { Article, Category } from '../types';

export const mockCategories: Category[] = [
  { id: '1', name: 'AI & ML', slug: 'ai-ml' },
  { id: '2', name: 'Web Development', slug: 'web-dev' },
  { id: '3', name: 'Cybersecurity', slug: 'security' },
  { id: '4', name: 'Cloud Computing', slug: 'cloud' },
  { id: '5', name: 'Mobile Development', slug: 'mobile' }
];

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'The Future of Artificial Intelligence in 2024',
    content: 'Artificial Intelligence continues to evolve at an unprecedented pace. From advanced language models to autonomous systems, the technology is reshaping how we live and work...',
    summary: 'Exploring the latest trends and innovations in AI technology and their impact on various industries.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'ai-ml',
    publishedAt: '2024-03-15T10:00:00Z',
    author: 'Sarah Johnson'
  },
  {
    id: '2',
    title: 'Modern Web Development Best Practices',
    content: 'As web technologies continue to evolve, developers need to stay updated with the latest best practices. This article covers essential patterns and techniques...',
    summary: 'A comprehensive guide to modern web development practices and tools.',
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    category: 'web-dev',
    publishedAt: '2024-03-14T15:30:00Z',
    author: 'Michael Chen'
  },
  {
    id: '3',
    title: 'Cybersecurity Threats to Watch Out For',
    content: 'In an increasingly connected world, cybersecurity threats are becoming more sophisticated. Learn about the latest security challenges and how to protect against them...',
    summary: 'Understanding modern cybersecurity threats and effective protection strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7',
    category: 'security',
    publishedAt: '2024-03-13T09:15:00Z',
    author: 'Alex Thompson'
  },
  {
    id: '4',
    title: 'Cloud Computing Trends in 2024',
    content: 'Cloud computing continues to transform business operations. This article explores the latest trends in cloud technology and their impact on enterprise architecture...',
    summary: 'Analyzing the latest trends and innovations in cloud computing.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    category: 'cloud',
    publishedAt: '2024-03-12T14:45:00Z',
    author: 'Emily Rodriguez'
  }
];