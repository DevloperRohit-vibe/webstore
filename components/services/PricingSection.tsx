import { Check } from 'lucide-react';
import Link from 'next/link';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-page website',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        '1 month support',
        'Source code included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      description: 'Ideal for growing businesses',
      features: [
        '10-page website',
        'Custom design',
        'Advanced SEO',
        'CMS integration',
        'E-commerce ready',
        '3 months support',
        'Analytics setup',
        'Training included'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale projects',
      features: [
        'Unlimited pages',
        'Custom features',
        'Full SEO service',
        'Multi-language',
        'API integration',
        '12 months support',
        'Dedicated team',
        'Priority support'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our quality guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-green-600 to-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-gradient-to-br from-slate-50 to-white shadow-lg'
              } transition-all hover:shadow-2xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && <span className={plan.popular ? 'text-white/80' : 'text-gray-600'}>/project</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className={`flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-600'}`}
                      size={20}
                    />
                    <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center py-4 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-green-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}