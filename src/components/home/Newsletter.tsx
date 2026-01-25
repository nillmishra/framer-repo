'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight mb-4">
              Businesses Need Big Ideas.
              <br />
              <span className="text-lime-dark">Join Our Newsletter.</span>
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 rounded-full px-6 bg-muted border-border"
                required
              />
              <Button type="submit" variant="hero" size="lg" className="rounded-full">
                Subscribe
              </Button>
            </form>
          </motion.div>

          {/* Right Content - Logo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-12 h-12 text-lime" />
              <span className="text-5xl lg:text-6xl font-serif font-bold text-foreground">
                Marqo
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
