import { Check } from 'lucide-react';

export default function ProductFeatures() {
  const features = [
    'Fully responsive design for all devices',
    'Clean, maintainable code structure',
    'Comprehensive documentation included',
    'Free lifetime updates',
    '24/7 premium support',
    'Easy customization options',
    'SEO optimized out of the box',
    'Cross-browser compatibility'
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Every Product Includes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium features and support to ensure your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-white" size={18} />
              </div>
              <span className="font-semibold text-gray-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}