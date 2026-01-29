'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Quote, Sparkles, Plane } from 'lucide-react';
import testimonial1 from '@/src/app/assets/testimonial-1.jpg';
import testimonial2 from '@/src/app/assets/testimonial-2.jpg';
import testimonial3 from '@/src/app/assets/testimonial-3.jpg';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sophie Nguyen',
    role: 'Frequent Traveler',
    image: testimonial1,
    title: 'Best Flight Deals Ever',
    quote: 'I saved over $500 on my last trip to Europe. The price comparison feature is incredible and found deals I never would have discovered on my own.',
    featured: true,
  },
  {
    name: 'Isha Greenwood',
    role: 'Travel Blogger',
    image: testimonial3,
    title: 'My Go-To Travel App',
    quote: 'As someone who travels monthly, this platform has become essential. The hotel recommendations are spot-on and always within my budget.',
    featured: true,
  },
  {
    name: 'Enola Linsten',
    role: 'Business Traveler',
    image: testimonial2,
    title: 'Perfect for Business Trips',
    quote: 'Managing corporate travel has never been easier. The booking process is seamless and the 24/7 support has saved me multiple times.',
    featured: true,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border border-blue-200"
            style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%)' }}
          >
            <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
            <span 
              className="text-sm font-semibold bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
            >
              Traveler Stories
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Loved By{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
            >
              2M+ Travelers
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Join millions of happy travelers who found their perfect trips at unbeatable prices.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Image with Name Overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.4) 50%, transparent 100%)' }}
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-gray-900 font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
                <div 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                >
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-lg font-semibold mb-3 bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                >
                  {testimonial.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            className="rounded-full text-white font-semibold border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
          >
            <Plane className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;