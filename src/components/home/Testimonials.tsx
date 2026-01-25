'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import testimonial1 from '@/src/app/assets/testimonial-1.jpg';
import testimonial2 from '@/src/app/assets/testimonial-2.jpg';
import testimonial3 from '@/src/app/assets/testimonial-3.jpg';

const testimonials = [
  {
    name: 'Sophie Nguyen',
    role: 'Content Strategist at Gumper',
    image: testimonial1,
    title: 'Top Tier Content Generation',
    quote: 'We finally have authentic UGC at scale. The platform makes it easy to turn real customer videos into posts that actually convert.',
    featured: true,
  },
  {
    name: 'Isha Greenwood',
    role: 'Brand Manager at LoopWear',
    image: testimonial3,
    title: 'Useful Analytics',
    quote: 'Since using this platform, our engagement on TikTok has tripled. The AI content generator is a game-changer.',
    featured: true,
  },
  {
    name: 'Enola Linsten',
    role: 'Marketing Director at Evo',
    image: testimonial2,
    title: 'Perfect Campaign Planning',
    quote: 'We finally have authentic UGC at scale. The platform makes it easy to turn real customer videos into posts that actually convert.',
    featured: true,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Guaranteed Result For Clients
          </h2>
          <p className="text-muted-foreground text-lg">
            Brands love how our AI-powered platform automates campaigns, generates authentic content, and delivers actionable insights.
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
              className="bg-card rounded-3xl overflow-hidden shadow-card border border-border group"
            >
              {/* Image with Name Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-primary-foreground font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-primary-foreground/70 text-xs">{testimonial.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-lime-dark mb-3">{testimonial.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
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
          <Button variant="lime" size="xl" className="rounded-full bg-green-500 py-3 px-5">
            Join Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
