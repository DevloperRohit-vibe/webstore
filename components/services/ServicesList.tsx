import { Palette, Code, Smartphone, Search, Wrench, Rocket } from 'lucide-react';

export default function ServicesList() {
  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'UI/UX Design',
      description: 'Create intuitive and beautiful user experiences that engage and delight your customers. Our design process focuses on user research, wireframing, prototyping, and visual design to ensure your product stands out.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Design Systems']
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Web Development',
      description: 'Build robust, scalable web applications with modern frameworks and best practices. From simple landing pages to complex web platforms, we deliver clean code and exceptional performance.',
      features: ['Custom Development', 'CMS Integration', 'API Development', 'Database Design', 'Cloud Deployment']
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that provide seamless experiences on iOS and Android. We build apps that users love with intuitive interfaces and powerful functionality.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'App Store Launch']
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO services. We optimize every aspect of your site for maximum visibility and conversion.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy', 'Analytics & Reporting']
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Maintenance & Support',
      description: 'Keep your website running smoothly with our ongoing maintenance and support services. We handle updates, security, backups, and technical issues so you can focus on your business.',
      features: ['Regular Updates', 'Security Monitoring', 'Performance Optimization', 'Bug Fixes', '24/7 Support']
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'Digital Strategy',
      description: 'Develop a comprehensive digital strategy that aligns with your business goals. We help you identify opportunities, define objectives, and create a roadmap for digital success.',
      features: ['Market Analysis', 'Competitor Research', 'Growth Strategy', 'Brand Development', 'Marketing Plans']
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">What We Offer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your digital needs
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}