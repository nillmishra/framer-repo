'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/src/components/shared/Header';
import Footer from '@/src/components/shared/Footer';
import { toast } from 'sonner';
import FAQ from '../home/FAQ';

const subjects = [
  'Pricing',
  'Technical Support',
  'Feature Request',
  'Partnership',
  'Other',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.warning("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.warning("Please enter a valid email address");
      return;
    }

    toast.success("Message sent! We'll get back to you as soon as possible.");
    
    setFormData({ name: '', surname: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#053f30] via-[#064c38] to-[#39d353]">
  {/* Top soft glow */}
  {/* <div className="absolute inset-x-0 top-[-200px] h-[500px] bg-[radial-gradient(circle,rgba(124,255,78,0.15),transparent_65%)]" /> */}

  {/* Bottom green wash */}
  <div className="absolute inset-x-0 bottom-[-150px] h-[400px] bg-[radial-gradient(circle,rgba(124,255,78,0.35),transparent_70%)]" />

  <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center relative z-10">
  <span className="inline-block mb-6 rounded-full border border-white/20 px-4 py-1 text-sm text-white/80">
    Contact
  </span>

  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
    Get In Touch With Our Team
  </h1>

  <p className="max-w-xl mx-auto text-white/70">
    Stay up to date with the latest features, improvements, and fixes as we
    continue to evolve.
  </p>
</section>


      {/* Contact Section */}
      <section className="pb-32 relative z-10">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="flex gap-10 max-w-5xl mx-auto">
      
      {/* LEFT CARDS */}
      <div className="lg:col-span-2 w-70 space-y-6">
        {/* Email */}
        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 h-71 ">
          <h3 className="flex items-center gap-2 text-white font-semibold mb-2">
            <Mail className="w-4 h-4" /> Email Us
          </h3>
          <p className="text-white/60 text-sm mb-4">
            Facing a more technical issue?<br />
            Need an expert? We’re here.
          </p>
          <a
            href="mailto:support@marqo.com"
            className="text-white underline underline-offset-4"
          >
            support@marqo.com
          </a>
        </div>

        {/* Sales */}
        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 h-71 ">
          <h3 className="flex items-center gap-2 text-white font-semibold mb-2">
            <Phone className="w-4 h-4" /> Contact Sales
          </h3>
          <p className="text-white/60 text-sm mb-4">
            Questions about custom pricing?<br />
            Feature picking? We’ll handle it.
          </p>
          <a
            href="#"
            className="text-white underline underline-offset-4"
          >
            Book a call with sales
          </a>
        </div>
      </div>

      {/* FORM */}
      <div className="lg:col-span-3 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 h-148 ">
        <h3 className="text-2xl font-serif font-bold text-white mb-1">
          We’d Love To Answer Your Questions
        </h3>
        <p className="text-white/60 mb-8">
          Send us a message and we’ll get back to you as soon as possible
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="John"
              className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#7CFF4E]"
            />
            <input
              placeholder="Doe"
              className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#7CFF4E]"
            />
          </div>

          <input
            placeholder="john@email.com"
            className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#7CFF4E]"
          />

          <select className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white outline-none">
            <option>Pricing</option>
            <option>Support</option>
            <option>Partnership</option>
          </select>

          <textarea
            rows={4}
            placeholder="Your message..."
            className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none resize-none focus:ring-2 focus:ring-[#7CFF4E]"
          />

          <button className="w-full rounded-full bg-[#7CFF4E] py-4 text-sm font-semibold text-[#053f30] hover:brightness-95 transition">
            Send your message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* faq */}
     <div className="bg-white mx-auto">
      <div className='max-w-6xl mx-auto'>
<FAQ />
      </div>
        
      </div>
      {/* footer */}
      <div className='bg-white'>
        <Footer />
      </div>
      
    </div>
  );
};

export default Contact;
