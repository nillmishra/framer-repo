'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  BarChart, 
  Plane,
  Building2,
  Train,
  MapPin,
  Sparkles,
  Zap,
  Target,
  Shield,
  Clock,
  CreditCard,
  Globe,
  Wallet
} from 'lucide-react';
import pixelPerfectMedia from '@/src/app/assets/pixel-perfect-media.jpg';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Everything You Need For
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
              >
                Perfect Travel Planning
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-600 text-lg mb-6">
              Compare, book, and save on flights, hotels, trains, and tour packages all in one place.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="rounded-full text-white font-semibold border-0 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Searching
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="rounded-full font-semibold text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
              >
                Learn more
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Features Grid - 3x2 Aligned Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Row 1 - Box 1: Price Comparison (Same size as Box 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
              >
                <BarChart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Price Comparison</h3>
            </div>
            <p className="text-gray-500 text-sm mb-5">
              Compare prices from 500+ airlines and travel sites to find the best deals instantly
            </p>
            
            {/* Chart Visualization */}
            <div className="relative h-32">
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-1.5">
                {[35, 50, 40, 65, 55, 80, 70, 90, 75, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="w-5 rounded-t-md transition-all duration-300 group-hover:opacity-90"
                    style={{ background: `linear-gradient(180deg, #2563eb ${100 - height}%, #0891b2 100%)` }}
                  />
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute top-0 left-0 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
              >
                Save up to 40%
              </motion.div>
            </div>
          </motion.div>

          {/* Row 1 - Box 2: Travel Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { icon: Plane, color: 'bg-blue-50', iconColor: 'text-blue-600' },
                { icon: Building2, color: 'bg-cyan-50', iconColor: 'text-cyan-600' },
                { icon: Train, color: 'bg-teal-50', iconColor: 'text-teal-600' },
                { icon: MapPin, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md`}
                  >
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </motion.div>
                );
              })}
            </div>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {[
                { icon: Shield, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
                { icon: CreditCard, color: 'bg-purple-50', iconColor: 'text-purple-600' },
                { icon: Globe, color: 'bg-orange-50', iconColor: 'text-orange-600' },
                { icon: Wallet, color: 'bg-pink-50', iconColor: 'text-pink-600' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md`}
                  >
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </motion.div>
                );
              })}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">All Travel Services</h3>
            <p className="text-gray-500 text-sm">
              Flights, hotels, trains, packages — everything in one seamless platform
            </p>
          </motion.div>

          {/* Row 1 - Box 3: Smart Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl p-6 shadow-xl relative overflow-hidden hover:-translate-y-2 transition-all duration-500 group"
            style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%)' }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            
            {/* Floating plane */}
            <motion.div
              className="absolute top-16 right-4 text-white/20"
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Plane className="w-10 h-10 rotate-12" />
            </motion.div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-cyan-300">Smart Price Alerts</h3>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Get notified instantly when prices drop for your dream destinations
              </p>
              
              {/* Price Drop Animation */}
              <div className="relative h-28">
                <svg className="w-full h-full" viewBox="0 0 200 80">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0 60 Q 40 50, 70 45 T 130 30 T 200 10"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.circle 
                    cx="185" 
                    cy="12" 
                    r="5" 
                    fill="#22d3ee"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 0.3 }}
                    className="animate-pulse"
                  />
                </svg>
                
                {/* Price Drop Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 }}
                  className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg"
                >
                  -$127 Drop!
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Row 2 - Box 4: Best Price Guarantee (NEW - Same size as others) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
              >
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Best Price Guarantee</h3>
            </div>
            <p className="text-gray-500 text-sm mb-5">
              Find a lower price? We'll refund the difference plus give you a $50 travel credit
            </p>
            
            {/* Guarantee Badge Visual */}
            <div className="relative">
              <div 
                className="rounded-2xl p-4 border border-emerald-200"
                style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)' }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Price Match</p>
                      <p className="text-xs text-gray-500">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-600">100%</p>
                    <p className="text-xs text-gray-500">Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 2 - Box 5: Destination Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="relative overflow-hidden h-36">
              <Image
                src={pixelPerfectMedia}
                alt="Popular Destinations"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div 
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)' }}
              />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                  >
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Trending Destinations</h3>
                    <p className="text-white/70 text-xs">50+ curated locations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {['🇫🇷', '🇯🇵', '🇮🇹', '🇹🇭', '🇬🇷'].map((flag, i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm border-2 border-white"
                    >
                      {flag}
                    </div>
                  ))}
                </div>
                <span 
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ 
                    background: 'linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%)',
                    color: '#2563eb'
                  }}
                >
                  Explore All →
                </span>
              </div>
            </div>
          </motion.div>

          {/* Row 2 - Box 6: 24/7 Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%)' }}
                >
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full shadow-md flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-3 h-3 text-white" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">24/7 Travel Support</h3>
                <p className="text-gray-500 text-sm">Always here for you</p>
              </div>
            </div>
            
            {/* Support Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '<2min', label: 'Response' },
                { value: '98%', label: 'Satisfaction' },
                { value: '24/7', label: 'Available' },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="text-center p-3 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)' }}
                >
                  <p 
                    className="text-lg font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;