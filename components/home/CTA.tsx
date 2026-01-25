import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-12 opacity-90">
          Join thousands of businesses who have already transformed their digital presence with webkitstore.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2"
          >
            Get Started Today <ArrowRight size={20} />
          </Link>
          <Link
            href="/products"
            className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}