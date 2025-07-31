
import { Instagram, Mail, ChevronUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-8 bg-gray-50">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Branding */}
          <div className="animate-fade-in">
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
              Chrissy Lingenberg
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Concert & live event photographer capturing authentic moments and powerful emotions through my lens.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-blush-500 hover:bg-blush-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@chrissylingenberg.com"
                className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-blush-500 hover:bg-blush-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 animate-fade-in">
            <div>
              <h4 className="font-playfair font-medium text-gray-900 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${item.toLowerCase()}`);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-600 hover:text-blush-500 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-medium text-gray-900 mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {['Concert Coverage', 'Tour Documentation', 'Artist Portraits', 'Weddings & Family'].map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => {
                        const element = document.querySelector('#services');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-600 hover:text-blush-500 transition-colors"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Chrissy Lingenberg Photography. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-600 hover:text-blush-500 transition-colors"
          >
            <span className="mr-2">Back to Top</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
