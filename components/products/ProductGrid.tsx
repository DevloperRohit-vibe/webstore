import { ExternalLink } from 'lucide-react';

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      title: 'Modern Dashboard',
      category: 'Web Application',
      price: '$2,499',
      description: 'A comprehensive analytics dashboard featuring real-time data visualization, customizable widgets, and responsive design for enterprise applications.',
      features: ['Real-time Analytics', 'Custom Widgets', 'Dark Mode', 'Export Data']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      title: 'E-Commerce Platform',
      category: 'Online Store',
      price: '$3,999',
      description: 'Complete e-commerce solution with product management, secure checkout, inventory tracking, and customer analytics.',
      features: ['Payment Integration', 'Inventory Management', 'Customer Analytics', 'Mobile Optimized']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      title: 'Portfolio Showcase',
      category: 'Creative Portfolio',
      price: '$1,799',
      description: 'Stunning portfolio website for creatives with project galleries, case studies, and smooth animations.',
      features: ['Project Galleries', 'Case Studies', 'Smooth Animations', 'Contact Forms']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      title: 'SaaS Landing Page',
      category: 'Marketing Site',
      price: '$2,199',
      description: 'High-converting landing page with compelling hero sections, feature highlights, and testimonials.',
      features: ['Hero Sections', 'Pricing Tables', 'Testimonials', 'CTA Optimization']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      title: 'Corporate Website',
      category: 'Business Site',
      price: '$3,299',
      description: 'Professional corporate website with team profiles, service pages, and integrated blog.',
      features: ['Team Profiles', 'Service Pages', 'Blog Integration', 'SEO Optimized']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
      title: 'Minimal Blog',
      category: 'Content Platform',
      price: '$1,499',
      description: 'Clean blog platform focused on typography and readability with category filtering.',
      features: ['Category Filtering', 'Search Function', 'Social Sharing', 'Responsive Images']
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Preview <ExternalLink size={16} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <span className="text-xl font-bold text-blue-600">{product.price}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}