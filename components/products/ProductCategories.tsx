'use client';

import { useState } from 'react';

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Dashboards', 'E-Commerce', 'Portfolios', 'SaaS', 'Corporate', 'Blogs'];

  return (
    <section className="pb-12 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}