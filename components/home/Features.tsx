import { Zap, Shield, Palette, Code, Rocket, Heart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized for performance with blazing fast load times and smooth interactions that keep users engaged.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and enterprise-grade reliability to protect your business and users.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Beautiful Design',
      description: 'Pixel-perfect interfaces crafted by world-class designers with attention to every detail and interaction.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Maintainable, scalable code following industry standards and best practices for long-term success.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Easy to Deploy',
      description: 'Seamless deployment process with comprehensive documentation to get your project live in minutes.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Dedicated Support',
      description: '24/7 expert support team ready to help you succeed with priority assistance and regular updates.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Why Choose webkitstore?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build exceptional digital experiences, all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}