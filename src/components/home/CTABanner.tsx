'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Zap, Plane, TrendingDown, Star } from 'lucide-react';
import Image from 'next/image';

import dashboardPreview from '@/src/app/assets/dashboard-preview.png';
import testimonial1 from '@/src/app/assets/testimonial-1.jpg';
import testimonial2 from '@/src/app/assets/testimonial-2.jpg';
import testimonial3 from '@/src/app/assets/testimonial-3.jpg';

const CTABanner = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 30%, #0c4a6e 60%, #0891b2 100%)' }}
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
          
          {/* Animated plane */}
          <motion.div
            className="absolute top-20 right-10 text-white/10"
            animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Plane className="w-16 h-16 rotate-12" />
          </motion.div>

          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative grid lg:grid-cols-2 gap-10 p-10 lg:p-14">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              {/* Social proof */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="flex -space-x-2">
                  {[testimonial1, testimonial2, testimonial3].map((img, i) => (
                    <Image 
                      key={i} 
                      src={img} 
                      alt="User" 
                      width={36} 
                      height={36} 
                      className="rounded-full border-2 border-white/30 object-cover" 
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-white/80">2M+ happy travelers</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4"
              >
                Your Dream Trip
                <br />
                <span 
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #67e8f9 0%, #22d3ee 50%, #06b6d4 100%)' }}
                >
                  Starts Here
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/70 max-w-md mb-8"
              >
                Compare flights, hotels, and train tickets from 500+ providers. 
                Save up to 40% on your next adventure with our Best Price Guarantee.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-0 px-8"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Searching
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <div className="flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2">
                  <TrendingDown className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-300 font-medium">Best Price Guaranteed</span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-md w-full hover:-translate-y-2 transition-transform duration-500">
                <Image
                  src={dashboardPreview}
                  alt="Dashboard Preview"
                  className="rounded-xl w-full h-auto"
                />

                {/* Stats - Top Right */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-4 right-4 text-right bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                >
                  <p className="text-xs text-gray-500">Flights Compared</p>
                  <p 
                    className="text-sm font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                  >
                    127,340
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Avg. Savings</p>
                  <p className="text-sm font-bold text-emerald-600">$234</p>
                </motion.div>

                {/* Stats - Bottom Left */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100"
                >
                  <p className="text-xs text-gray-500 mb-1">
                    Total User Savings
                  </p>
                  <p 
                    className="text-lg font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
                  >
                    $12.5M+
                  </p>
                  <span className="inline-flex items-center gap-1 mt-1 text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full font-semibold">
                    <Zap className="w-3 h-3" />
                    This month
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;