
import { Camera, Users, Heart, Star, Music, Image } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Music,
      title: 'Live Concert Coverage',
      description: 'Professional photography for concerts, festivals, and live music events. Capturing the energy and emotion of live performances.',
      features: ['Stage photography', 'Crowd shots', 'Artist portraits', 'Behind-the-scenes']
    },
    {
      icon: Camera,
      title: 'Tour Documentation',
      description: 'Comprehensive coverage of music tours, from rehearsals to final shows. Creating a visual story of your musical journey.',
      features: ['Multi-show packages', 'Travel coverage', 'Team portraits', 'Documentary style']
    },
    {
      icon: Star,
      title: 'Artist Portraits',
      description: 'Professional headshots and artistic portraits for musicians, bands, and entertainment industry professionals.',
      features: ['Studio sessions', 'On-location shoots', 'Creative concepts', 'Album artwork']
    },
    {
      icon: Image,
      title: 'Promo/Event Shoots',
      description: 'Marketing and promotional photography for venues, festivals, and music industry events.',
      features: ['Event coverage', 'Brand photography', 'Social media content', 'Press releases']
    },
    {
      icon: Heart,
      title: 'Weddings & Family Sessions',
      description: 'Intimate and artistic photography for life\'s most precious moments, bringing the same passion as concert photography.',
      features: ['Wedding day coverage', 'Engagement sessions', 'Family portraits', 'Special events']
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Professional event photography for corporate functions, conferences, and business gatherings.',
      features: ['Event documentation', 'Team photos', 'Networking events', 'Award ceremonies']
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional photography services tailored to capture your unique moments with artistic vision and technical excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blush-100 rounded-2xl flex items-center justify-center group-hover:bg-blush-500 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blush-500 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blush-300 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-gray-600 mb-8">
            Ready to discuss your next project?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-blush-500 text-white font-medium rounded-full hover:bg-blush-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Let's Talk About Your Show
          </button>
        </div>
      </div>
    </section>
  );
};
