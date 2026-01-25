'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart, Linkedin, Instagram, Twitter } from 'lucide-react';
import pixelPerfectMedia from '@/src/app/assets/pixel-perfect-media.jpg';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              Your Marketing Department Just
              <br />
              <span className="text-lime-dark">Activated Autopilot</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground text-lg mb-6">
              Spend less time managing marketing, more time improving your product.
            </p>
            <div className="flex gap-4">
              <Button variant="lime" size="xl" className="rounded-full bg-green-500 py-3 px-5">
            Join Waitlist
          </Button>
              <Button variant="nav" size="xl" className="rounded-full border text-black border-black py-3 px-6 hover:text-black/80">
            Learn more
          </Button>
            </div>
          </motion.div>
        </div>

        {/* Features Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Analytics Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-6 shadow-card border border-border row-span-2"
          >
            <h3 className="text-lg font-semibold text-lime-dark mb-2">Analytics that matter</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Deploy your campaigns and optimize them with top tier revolutionary AI technology
            </p>
            
            {/* Chart Visualization */}
            <div className="relative h-48 mt-auto">
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-2">
                {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95].map((height, i) => (
                  <div
                    key={i}
                    className="w-4 lg:w-5 rounded-t-md bg-gradient-to-t from-lime/60 to-lime"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="absolute top-4 left-4 bg-lime/90 text-forest text-xs font-semibold px-3 py-1 rounded-full">
                97% accuracy
              </div>
            </div>
          </motion.div>

          {/* Integrations Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-3xl p-6 shadow-card border border-border"
          >
            <div className="grid grid-cols-4 gap-3 mb-6">
              {/* Social Icons */}
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm4.3 8.3c.1.1.2.3.2.5 0 3.5-2.7 7.6-7.6 7.6-1.5 0-2.9-.4-4.1-1.2.2 0 .4.1.6.1 1.2 0 2.4-.4 3.3-1.1-1.1 0-2.1-.8-2.4-1.8.2 0 .3.1.5.1.2 0 .5 0 .7-.1-1.2-.2-2.1-1.3-2.1-2.5v-.1c.4.2.8.3 1.2.3-.7-.5-1.2-1.3-1.2-2.2 0-.5.1-.9.4-1.3 1.3 1.6 3.3 2.6 5.5 2.7 0-.2-.1-.4-.1-.6 0-1.5 1.2-2.7 2.7-2.7.8 0 1.5.3 2 .9.6-.1 1.2-.3 1.7-.6-.2.6-.6 1.1-1.2 1.5.5-.1 1-.2 1.5-.4-.3.5-.8.9-1.3 1.3z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                <Instagram className="w-6 h-6 text-pink-600" />
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <Twitter className="w-6 h-6 text-gray-900" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-lime-dark mb-2">Seamless Integrations</h3>
            <p className="text-muted-foreground text-sm">
              A solution that integrates to all your marketing channels
            </p>
          </motion.div>

          {/* Precise Forecast Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary rounded-3xl p-6 shadow-card row-span-2 relative overflow-hidden"
          >
            <h3 className="text-lg font-semibold text-lime mb-2">Precise forecast</h3>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Get precise data previsions for all your campaigns to adapt your approach
            </p>
            
            {/* Forecast Line Chart */}
            <div className="relative h-48">
              <svg className="w-full h-full" viewBox="0 0 200 100">
                <path
                  d="M0 80 Q 30 70, 50 60 T 100 40 T 150 30 T 200 10"
                  fill="none"
                  stroke="hsl(90, 70%, 65%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="180" cy="15" r="6" fill="hsl(90, 70%, 65%)" />
              </svg>
            </div>
          </motion.div>

          {/* Pixel Perfect Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-3xl overflow-hidden shadow-card border border-border"
          >
            <Image
              src={pixelPerfectMedia}
              alt="Pixel Perfect Media"
              className="w-full h-32 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-lime-dark mb-2">Pixel Perfect Media</h3>
              <p className="text-muted-foreground text-sm">
                Generate engagement with generated user content for every kind of product
              </p>
            </div>
          </motion.div>

          {/* One Tool Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-3xl p-6 shadow-card border border-border text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center">
                  <BarChart className="w-8 h-8 text-lime" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-lime rounded-full" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-lime/60 rounded-full" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-lime-dark mb-2">One tool fits all</h3>
            <p className="text-muted-foreground text-sm">
              Don't rely on endless add-ons, plugins and extensions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
