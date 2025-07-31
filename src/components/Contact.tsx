import { useState } from 'react';
import { Mail, Instagram, MapPin, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    message: '',
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_zsn04tu',      // 🔁 Replace with your actual EmailJS service ID
      'template_8qi0pdg',     // 🔁 Replace with your EmailJS template ID
      formData,
      'DPyHlIw4-8d0uSozv'       // 🔁 Replace with your EmailJS public key
    )
    .then(() => {
      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out! I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', eventType: '', message: '' });
    })
    .catch((error) => {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
      });
      console.error('EmailJS Error:', error);
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to capture your next show, celebration, or special moment? I'd love to hear about your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blush-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blush-500 focus:border-transparent transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blush-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select an event type</option>
                  <option value="concert">Concert/Music Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="family">Family Session</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blush-500 focus:border-transparent transition-colors"
                  placeholder="Tell me about your event..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up order-first lg:order-last">
            <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl h-full">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="h-6 w-6 text-blush-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Email</h4>
                    <p className="text-gray-600">captured.by.chrissy.13@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Instagram className="h-6 w-6 text-blush-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/captured_bychrissy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blush-500 transition-colors"
                    >
                      @captured_bychrissy
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="h-6 w-6 text-blush-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Location</h4>
                    <p className="text-gray-600">Toronto, CA</p>
                    <p className="text-gray-600 mt-1">Available for worldwide travel</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Calendar className="h-6 w-6 text-blush-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Booking</h4>
                    <p className="text-gray-600">Currently booking for 2026</p>
                    <p className="text-gray-600 mt-1">Limited availability for 2025</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-gray-200 pt-8">
                <blockquote className="text-gray-600 italic">
                  "Every image has a story to tell – I'm here to help you tell yours."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
