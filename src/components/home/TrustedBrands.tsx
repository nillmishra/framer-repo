'use client';

import { motion } from 'framer-motion';
import { Plane, Building2, Train, MapPin, Star } from 'lucide-react';

const brands = [
  { name: 'SkyJet Airlines', icon: Plane },
  { name: 'LuxStay Hotels', icon: Building2 },
  { name: 'RailExpress', icon: Train },
  { name: 'TravelMaps', icon: MapPin },
  { name: 'TopRated Tours', icon: Star },
];

const TrustedBrands = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold mb-8 tracking-wide uppercase"
          style={{ 
            background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Trusted by leading travel brands
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
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-all duration-300 cursor-pointer group"
              >
                <div 
                  className="w-10 h-10 bg-gray-100 group-hover:bg-blue-100 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ 
                    background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
                  }}
                >
                  <Icon className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
                </div>
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