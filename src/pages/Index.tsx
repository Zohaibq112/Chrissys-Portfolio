
import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { Services } from '@/components/Services';
import { BehindTheLens } from '@/components/BehindTheLens';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <BehindTheLens />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
