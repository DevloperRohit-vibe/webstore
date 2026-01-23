'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website takes 4-6 weeks, while more complex applications can take 3-6 months. We provide detailed timelines during the discovery phase and keep you updated throughout the process.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, and various cloud platforms. We choose the best stack for each project based on your specific needs and long-term goals.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! All our projects include initial support, and we offer various maintenance packages for ongoing assistance. This includes updates, security patches, performance optimization, and technical support whenever you need it.'
    },
    {
      question: 'Can you work with our existing brand?',
      answer: 'Absolutely! We can work within your existing brand guidelines or help you develop a new brand identity. Our designers are experienced in adapting to various brand styles while maintaining design excellence.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'We typically work with milestone-based payments: 30% upfront, 40% at mid-project review, and 30% upon completion. For larger projects, we can arrange custom payment schedules that work for your budget.'
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Yes, we include revisions in our process. The number varies by package, but we work collaboratively to ensure you are completely satisfied with the final product. Clear communication throughout helps minimize revisions needed.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}