export interface Article {
  id: string;
  title: string;
  content: string;
  summary: string;
  imageUrl: string;
  category: string;
  publishedAt: string;
  author: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface FormErrors {
  [key: string]: string;
}