import React from 'react';
import { categories } from '../data/tsaItems';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          selectedCategory === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All Items
      </button>
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onCategoryChange(category.name)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
            selectedCategory === category.name
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>{category.icon}</span>
          {category.name}
          <span className="text-xs opacity-75">({category.items})</span>
        </button>
      ))}
    </div>
  );
};