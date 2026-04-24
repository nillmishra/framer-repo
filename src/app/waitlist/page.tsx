'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plane, Sparkles, MapPin } from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Image from 'next/image';
import { toast } from 'sonner';

import testimonial1 from '@/app/assets/testimonial-1.jpg';
import testimonial2 from '@/app/assets/testimonial-2.jpg';
import testimonial3 from '@/app/assets/testimonial-3.jpg';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2025-10-01T00:00:00').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return toast.warning('Please enter your email');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return toast.warning('Please enter a valid email address');

    toast.success("You're on the list! We'll notify you when we launch.");
    setEmail('');
  };

  const finished =
    countdown.days === 0 &&
    countdown.hours === 0 &&
    countdown.minutes === 0 &&
    countdown.seconds === 0;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Background - Blue Theme */}
      <div 
        className="absolute inset-0 h-[900px]"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 30%, #0c4a6e 60%, #0891b2 100%)' }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 h-[900px] overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Flying plane animation */}
        <motion.div
          className="absolute top-32 right-10 text-white/10"
          animate={{ x: [-100, 1500], y: [0, -50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Plane className="w-8 h-8 rotate-45" />
        </motion.div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 h-[900px] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-sm text-white/90"
        >
          <MapPin className="w-4 h-4 text-cyan-400" />
          Launching Q4 2025
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
        >
          Get Notified For{' '}
          <span 
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #67e8f9 0%, #22d3ee 50%, #06b6d4 100%)' }}
          >
            Early Access
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-white/70 mb-10"
        >
          Be the first to access exclusive travel deals, compare prices from 500+ providers, 
          and save up to 40% on your dream trips.
        </motion.p>

        {/* Email Input */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-xl items-center rounded-full bg-white/95 backdrop-blur-xl p-1.5 shadow-2xl shadow-black/20"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent px-6 py-3 text-sm text-gray-900 placeholder:text-gray-500 outline-none"
          />
          <button 
            type="submit"
            className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
          >
            <Sparkles className="w-4 h-4" />
            Join Waitlist
          </button>
        </motion.form>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <div className="flex -space-x-2">
            {[testimonial1, testimonial2, testimonial3].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white/50 object-cover"
              />
            ))}
          </div>
          <div className="text-left">
            <p className="text-sm text-white font-medium">2M+ Happy Travelers</p>
            <p className="text-xs text-white/60">Join our growing community</p>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          {finished ? (
            <p className="text-lg text-cyan-400 font-semibold">🎉 We're Live!</p>
          ) : (
            <div className="flex justify-center gap-4 md:gap-8">
              {Object.entries(countdown).map(([label, value]) => (
                <div 
                  key={label} 
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]"
                >
                  <div 
                    className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #67e8f9 0%, #22d3ee 100%)' }}
                  >
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase text-white/60 mt-1 tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Video Preview */}
      <section className="relative z-10 pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl"
          >
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/8AHPXm9Y6mI?rel=0&modestbranding=1"
                title="Product preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className='bg-white'>
        <Footer />
      </div>
    </div>
  );
};

export default Waitlist;