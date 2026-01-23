'use client';

import { useEffect, useState } from 'react';

export default function Stats() {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, countries: 0, satisfaction: 0 });

  useEffect(() => {
    const targets = { projects: 500, clients: 200, countries: 50, satisfaction: 99 };
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        projects: Math.floor((targets.projects / steps) * step),
        clients: Math.floor((targets.clients / steps) * step),
        countries: Math.floor((targets.countries / steps) * step),
        satisfaction: Math.floor((targets.satisfaction / steps) * step)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Projects Delivered', value: `${counters.projects}+`, color: 'from-purple-600 to-pink-600' },
    { label: 'Happy Clients', value: `${counters.clients}+`, color: 'from-blue-600 to-cyan-600' },
    { label: 'Countries Served', value: `${counters.countries}+`, color: 'from-green-600 to-emerald-600' },
    { label: 'Satisfaction Rate', value: `${counters.satisfaction}%`, color: 'from-orange-600 to-red-600' }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building trust through excellence and delivering results that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20">
              <div className={`text-6xl font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}