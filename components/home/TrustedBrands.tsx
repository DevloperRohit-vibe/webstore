'use client';

export default function TrustedBrands() {
  const brands = [
    'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta',
    'Netflix', 'Tesla', 'Nvidia', 'Adobe', 'Salesforce',
    'Oracle', 'IBM', 'Intel', 'Cisco', 'Samsung',
    'Sony', 'Dell', 'HP', 'Spotify', 'Uber',
    'Airbnb', 'Twitter', 'LinkedIn', 'Stripe', 'Shopify'
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-center text-gray-500 text-lg mb-8">Trusted by industry leaders worldwide</h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-slide">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4 text-2xl font-bold text-gray-400 hover:text-gray-900 transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      {/* Second row - opposite direction */}
      <div className="relative mt-8">
        <div className="flex animate-slide" style={{ animationDirection: 'reverse' }}>
          {[...brands.slice().reverse(), ...brands.slice().reverse()].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4 text-2xl font-bold text-gray-400 hover:text-gray-900 transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}