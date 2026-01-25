'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Header from '@/src/components/shared/Header';
import Footer from '@/src/components/shared/Footer';
import Image from 'next/image';
import { toast } from 'sonner';

import dashboardPreview from '@/src/app/assets/dashboard-preview.png';
import testimonial1 from '@/src/app/assets/testimonial-1.jpg';
import testimonial2 from '@/src/app/assets/testimonial-2.jpg';
import testimonial3 from '@/src/app/assets/testimonial-3.jpg';

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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#053f30] via-[#064c38] to-[#39d353]">
      {/* Top glow */}
      {/* <div className="absolute inset-x-0 top-[-300px] h-[600px] bg-[radial-gradient(circle,rgba(124,255,78,0.18),transparent_65%)]" /> */}
      {/* Bottom wash */}
      <div className="absolute inset-x-0 bottom-[-200px] h-[500px] bg-[radial-gradient(circle,rgba(124,255,78,0.35),transparent_70%)]" />

      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 text-center relative z-10">
        <span className="inline-block mb-6 rounded-full border border-white/20 px-4 py-1 text-sm text-white/80">
          Available Q4 2025
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
          Get Notified For Early Release
        </h1>

        <p className="max-w-2xl mx-auto text-white/70 mb-10">
          Spend less time managing marketing, more time improving your product,
          we handle the rest with top tier AI and media generation technology
        </p>

        {/* EMAIL INPUT */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-xl items-center rounded-full bg-white p-1"
        >
          <input
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent px-5 py-3 text-sm outline-none"
          />
          <button className="rounded-full bg-[#7CFF4E] px-6 py-3 text-sm font-semibold text-[#053f30]">
            Join waitlist
          </button>
        </form>

        {/* SOCIAL PROOF */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[testimonial1, testimonial2, testimonial3].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-[#053f30]"
              />
            ))}
          </div>
          <p className="text-sm text-white/70">
            Join 5k+ marketing leads worldwide on Marqo
          </p>
        </div>

        {/* COUNTDOWN */}
        <div className="mt-6 text-white/80">
          {finished ? (
            <p className="text-base">Countdown finished!</p>
          ) : (
            <div className="flex justify-center gap-6 text-center">
              {Object.entries(countdown).map(([label, value]) => (
                <div key={label}>
                  <div className="text-2xl font-semibold">{value}</div>
                  <div className="text-xs uppercase opacity-70">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* VIDEO PREVIEW */}
      <section className="relative z-10 pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl"
          >
           <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black">
          <iframe
            src="https://www.youtube.com/embed/8AHPXm9Y6mI?rel=0&modestbranding=1"
            title="Marqo product preview"
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
