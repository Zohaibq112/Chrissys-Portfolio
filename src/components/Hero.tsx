
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToGallery = () => {
    const element = document.querySelector('#gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Concert stage with vibrant lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Capturing the
            <br />
            <span className="text-blush-500">Sound of Light</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4 font-light">
            Concert & Live Event Photography by
          </p>
          
          <p className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-12 font-medium">
            Chrissy
          </p>

          <button
            onClick={scrollToGallery}
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Portfolio
            <ChevronDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-600" />
      </div>
    </section>
  );
};
