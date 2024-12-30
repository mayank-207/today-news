import React, { useState } from 'react';
import type { Category, FormErrors } from '../../types';

interface CategoryFormProps {
  onSubmit: (category: Omit<Category, 'id'>) => void;
}

export function CategoryForm({ onSubmit }: CategoryFormProps) {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Category name is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const slug = name.toLowerCase().replace(/\s+/g, '-');
    onSubmit({ name, slug });
    setName('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Category Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        Add Category
      </button>
    </form>
  );
}