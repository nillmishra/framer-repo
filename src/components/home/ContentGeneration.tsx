'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, TrendingUp } from 'lucide-react';
import phoneMockup1 from '@/src/app/assets/phone-mockup-1.png';
import phoneMockup2 from '@/src/app/assets/phone-mockup-2.png';
import Image from 'next/image';

const ContentGeneration = () => {
  return (
    <section className="py-16 lg:py-24 bg-sage/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Content Generation */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center">
              {/* Connecting Lines */}
              <svg className="absolute w-full h-full" viewBox="0 0 400 300">
                <path
                  d="M100 50 Q 200 50, 200 150 T 300 250"
                  fill="none"
                  stroke="hsl(90, 70%, 65%)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
              
              {/* Center Star */}
              <div className="absolute left-1/4 top-1/4 w-12 h-12 bg-lime rounded-lg flex items-center justify-center transform -rotate-12">
                <Sparkles className="w-6 h-6 text-forest" />
              </div>

              {/* Phones */}
              <div className="flex gap-4">
                <Image
                  src={phoneMockup1}
                  alt="Content example 1"
                  className="w-32 lg:w-40 rounded-2xl shadow-xl"
                />
                <Image
                  src={phoneMockup2}
                  alt="Content example 2"
                  className="w-32 lg:w-40 rounded-2xl shadow-xl mt-8"
                />
              </div>

              {/* Product Box */}
              <div className="absolute bottom-0 left-8 w-20 h-24 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-lg" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
              Content Generation
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
              Turn Briefs Into Powerful Content With Top Tier AI
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Spend less time managing marketing, more time improving your product.
            </p>

            <ul className="space-y-4">
              {[
                'Authenticity That Converts',
                'Content at Scale',
                'Stronger Brand Trust',
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-lime-dark flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Marketing Automation */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
              Marketing Automation
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
              Automate Campaigns, Save Hours Every Week
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let AI handle delivery, timing, and targeting—so your marketing department can run on autopilot smoothly.
            </p>

            <ul className="space-y-4">
              {[
                'Effortless Setup',
                'Adaptive Targeting',
                'Workflow Freedom',
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-lime-dark flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ROI Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl p-6 shadow-elevated border border-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Customer Acquisition</h4>
                  <p className="text-sm text-muted-foreground">Launched Feb. 2 2025</p>
                </div>
                <div className="w-3 h-3 bg-lime rounded-full" />
              </div>

              <div className="space-y-4">
                {[
                  { roi: '+$2,531', platform: 'Google', growth: true },
                  { roi: '+$5,781', platform: 'Meta', growth: true },
                  { roi: '+$10,265', platform: 'TikTok', growth: true },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-sage/50 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">ROI</span>
                      <span className="text-lg font-bold text-lime-dark">{item.roi}</span>
                      {item.growth && <TrendingUp className="w-4 h-4 text-lime" />}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{item.platform} ↗</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentGeneration;
