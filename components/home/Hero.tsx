import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-semibold animate-float">
            ✨ Premium Design Solutions
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Build brilliant digital
            <br />experiences, fast.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your vision into stunning websites with our premium design templates. 
            Crafted for perfection, optimized for performance, and trusted by industry leaders worldwide.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/products" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2">
              Explore Designs <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="px-8 py-4 border-2 border-gray-300 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all">
              View Services
            </Link>
          </div>
        </div>

        {/* 3D Visual Element */}
        <div className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-2xl animate-float">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 opacity-80"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-300 to-blue-300 opacity-60"></div>
            <div className="absolute inset-12 rounded-full bg-white/50 backdrop-blur-xl flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">DS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}