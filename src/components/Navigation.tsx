
import { useState } from 'react';
import { Menu, X, Instagram, Mail } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

export const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-soft shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#hero')}
            className="font-playfair text-xl lg:text-2xl font-semibold text-gray-900 hover:text-blush-500 transition-colors"
          >
            Chrissy Lingenberg
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blush-500 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blush-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-gray-600 hover:text-blush-500 transition-colors"
                aria-label="Contact"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 hover:text-blush-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-blush-500 transition-colors font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blush-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-600 hover:text-blush-500 transition-colors"
                  aria-label="Contact"
                >
                  <Mail size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
