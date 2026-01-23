export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience. Through in-depth research and analysis, we identify opportunities and define project scope.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Based on our findings, we develop a comprehensive strategy and roadmap. This includes wireframes, user flows, and technical architecture planning.'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Our designers create beautiful, intuitive interfaces that align with your brand. We iterate based on feedback to ensure the perfect visual experience.'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our developers bring designs to life with clean, efficient code. We follow best practices and conduct regular testing to ensure quality.'
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous quality assurance across devices and browsers. We test functionality, performance, security, and user experience before launch.'
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'We handle deployment and provide ongoing support. Post-launch monitoring ensures everything runs smoothly and we are here when you need us.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}