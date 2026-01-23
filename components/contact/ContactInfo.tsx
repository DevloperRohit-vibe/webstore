import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'hello@designstore.com',
      link: 'mailto:hello@designstore.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      content: '123 Design Street, San Francisco, CA 94102',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      content: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
      link: null
    }
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
      <p className="text-gray-600 mb-12 text-lg leading-relaxed">
        We're here to answer your questions and discuss how we can help your business grow. 
        Reach out through any of these channels, and we'll get back to you within 24 hours.
      </p>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
              {detail.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{detail.title}</h3>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                  target={detail.link.startsWith('http') ? '_blank' : undefined}
                  rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {detail.content}
                </a>
              ) : (
                <p className="text-gray-600">{detail.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl text-white">
        <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
        <p className="mb-6 opacity-90">
          Not sure where to start? Book a free 30-minute consultation with our experts. 
          We'll discuss your goals and provide recommendations tailored to your needs.
        </p>
        <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
          Schedule Consultation
        </button>
      </div>
    </div>
  );
}