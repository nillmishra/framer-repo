'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, BarChart3, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import phoneMockup1 from '@/src/app/assets/phone-mockup-1.png';
import phoneMockup2 from '@/src/app/assets/phone-mockup-2.png';
import phoneMockup3 from '@/src/app/assets/phone-mockup-3.png';
import testimonial1 from '@/src/app/assets/testimonial-1.jpg';
import testimonial2 from '@/src/app/assets/testimonial-2.jpg';
import testimonial3 from '@/src/app/assets/testimonial-3.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient text-white overflow-hidden pt-20 lg:pt-24">
      {/* Floating Analytics Cards - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-4 lg:left-8 top-32 lg:top-40 hidden md:block"
      >
        <div className="bg-card rounded-2xl p-4 shadow-elevated animate-float">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-lime" />
            <span className="text-xs font-medium text-muted-foreground">Pageviews</span>
          </div>
          <p className="text-2xl font-bold text-foreground">127k</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute left-8 lg:left-16 top-64 lg:top-80 hidden md:block"
      >
        <div className="bg-card rounded-2xl p-4 shadow-elevated animate-float-delayed">
          <div className="text-xs text-muted-foreground mb-1">Customer Acquisition</div>
          <div className="text-xs text-muted-foreground/70 mb-2">Launched Feb. 2 2025</div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">ROI</span>
            <span className="text-lg font-bold text-lime">+$2,531</span>
            <TrendingUp className="w-4 h-4 text-lime" />
          </div>
        </div>
      </motion.div>

      {/* Floating Analytics Cards - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute right-4 lg:right-12 top-32 lg:top-36 hidden md:block"
      >
        <div className="bg-card rounded-2xl p-4 shadow-elevated animate-float-delayed">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-4 h-4 text-lime" />
            <span className="text-xs font-medium text-muted-foreground">Total views</span>
          </div>
          <p className="text-2xl font-bold text-foreground">2,857</p>
          <p className="text-xs text-lime mt-1">+34% ↗</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute right-8 lg:right-20 top-56 lg:top-72 hidden lg:block"
      >
        <div className="bg-card rounded-2xl p-3 shadow-elevated animate-float">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-lime/20 rounded-full flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-lime" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">Conversion Rate</span>
          </div>
          <div className="flex items-end gap-1">
            {[40, 60, 45, 80, 70, 90, 75].map((height, i) => (
              <div
                key={i}
                className="w-3 bg-lime rounded-sm"
                style={{ height: `${height * 0.4}px` }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 pt-12 lg:pt-20">
        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8 border border-white/10 bg-white/5 rounded-full px-1 max-w-md mx-auto"
        >
          <div className="flex -space-x-2">
            {[testimonial1, testimonial2, testimonial3].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-primary object-cover"
              />
            ))}
          </div>
          <span className="text-sm text-primary-foreground/80">5k+ marketing leads worldwide onboard</span>
          <Button variant="lime" size="sm" className="rounded-full text-xs px-4 bg-green-500">
            Join waitlist <ArrowRight className="w-3 h-3" />
          </Button>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
            Your Marketing Department
            <br />
            <span className="italic">Just Activated Autopilot</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Spend less time managing marketing, more time improving your product, we handle the rest with top tier AI and media generation technology
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="lime" size="xl" className="rounded-full bg-green-500 py-3 px-5">
            Join Waitlist
          </Button>
          <Button variant="nav" size="xl" className="rounded-full border border-white/30 py-3 px-6 text-white/90 hover:text-white">
            Learn more
          </Button>
        </motion.div>

        {/* Phone Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-end justify-center gap-4 lg:gap-8 max-w-4xl mx-auto"
        >
        <Image
            src={phoneMockup1}
            alt="Phone mockup 1"
            className="w-32 md:w-44 lg:w-52 rounded-3xl shadow-2xl transform -rotate-6 translate-y-8"
          />
         <Image
            src={phoneMockup2}
            alt="Phone mockup 2"
            className="w-40 md:w-56 lg:w-64 rounded-3xl shadow-2xl z-10"
          />
         <Image
            src={phoneMockup3}
            alt="Phone mockup 3"
            className="w-32 md:w-44 lg:w-52 rounded-3xl shadow-2xl transform rotate-6 translate-y-8"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
