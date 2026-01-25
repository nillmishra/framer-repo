'use client';

import { motion } from 'framer-motion';
import { Zap, Coffee, Target, Dumbbell, Sparkles } from 'lucide-react';

const brands = [
  { name: 'Electrotech', icon: Zap },
  { name: 'Sip & Savor', icon: Coffee },
  { name: 'MarketMinds', icon: Target },
  { name: 'FitTrack', icon: Dumbbell },
  { name: 'Style Hive', icon: Sparkles },
];

const TrustedBrands = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-lime-dark mb-8"
        >
          Trusted by forward-thinking brands
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {brands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="text-base font-semibold">{brand.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands;
