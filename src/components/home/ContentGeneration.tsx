'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, TrendingUp, Plane, Building2, Train, Target, Shield, Clock } from 'lucide-react';
import phoneMockup1 from '@/src/app/assets/phone-mockup-1.png';
import phoneMockup2 from '@/src/app/assets/phone-mockup-2.png';
import Image from 'next/image';

const ContentGeneration = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Flight Comparison Section */}
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
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#0891b2" />
                  </linearGradient>
                </defs>
                <motion.path 
                  d="M100 50 Q 200 50, 200 150 T 300 250" 
                  fill="none" 
                  stroke="url(#pathGradient)" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
              </svg>

              {/* Center Icon */}
              <motion.div 
                className="absolute left-1/4 top-1/4 w-14 h-14 rounded-xl flex items-center justify-center transform -rotate-12 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                whileHover={{ rotate: 0, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Plane className="w-7 h-7 text-white" />
              </motion.div>

              {/* Phones */}
              <div className="flex gap-4">
                <motion.div
                  whileHover={{ y: -8, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="shadow-2xl rounded-2xl"
                >
                  <Image
                    src={phoneMockup1}
                    alt="Flight search"
                    className="w-32 lg:w-40 rounded-2xl"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -8, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="shadow-2xl rounded-2xl"
                >
                  <Image
                    src={phoneMockup2}
                    alt="Hotel search"
                    className="w-32 lg:w-40 rounded-2xl mt-8"
                  />
                </motion.div>
              </div>

              {/* Decorative Box */}
              <div 
                className="absolute bottom-0 left-8 w-20 h-24 rounded-lg shadow-lg border border-blue-200"
                style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%)' }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 text-white text-sm font-medium rounded-full mb-4 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
            >
              <Plane className="w-4 h-4" />
              Smart Flight Search
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Compare 500+ Airlines{' '}
              <span 
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
              >
                In Seconds
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our AI-powered search finds you the best flight deals across all major airlines and booking sites.
            </p>

            <ul className="space-y-4">
              {[
                { text: 'Real-time price comparison', icon: TrendingUp },
                { text: 'Flexible date search', icon: Clock },
                { text: 'Best Price Guarantee', icon: Shield },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                      style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Hotel & Package Deals Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 text-white text-sm font-medium rounded-full mb-4 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #0891b2 0%, #2563eb 100%)' }}
            >
              <Building2 className="w-4 h-4" />
              Hotels & Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Save More With{' '}
              <span 
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #0891b2 0%, #2563eb 100%)' }}
              >
                Bundle Deals
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Book flights and hotels together to unlock exclusive discounts of up to 40% off regular prices.
            </p>

            <ul className="space-y-4">
              {[
                { text: 'Flight + Hotel packages', icon: Plane },
                { text: 'Curated tour experiences', icon: Target },
                { text: 'Train travel options', icon: Train },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                      style={{ background: 'linear-gradient(135deg, #0891b2 0%, #2563eb 100%)' }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Savings Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Popular Deals This Week</h4>
                  <p className="text-sm text-gray-500">Updated daily</p>
                </div>
                <div 
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                />
              </div>

              <div className="space-y-4">
                {[
                  { route: 'NYC → Paris', savings: '$347', type: 'Flight + Hotel' },
                  { route: 'LA → Tokyo', savings: '$521', type: 'Flight + Hotel' },
                  { route: 'London → Rome', savings: '$189', type: 'Train + Hotel' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center justify-between p-4 rounded-xl border border-blue-100 cursor-pointer hover:bg-blue-50 transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                      >
                        <Plane className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.route}</p>
                        <p className="text-xs text-gray-500">{item.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">You save</p>
                      <p 
                        className="text-lg font-bold bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
                      >
                        {item.savings}
                      </p>
                    </div>
                  </motion.div>
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