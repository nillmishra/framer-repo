'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What types of content can be generated?',
    answer:
      'Our AI can generate social media posts, video scripts, captions, blogs, ad copy, and more—optimized for platforms like Instagram, TikTok, LinkedIn, and Twitter.',
  },
  {
    question: 'Do I need design or video editing skills?',
    answer:
      'No design or editing skills are required. Marqo handles everything automatically using AI-powered workflows.',
  },
  {
    question: 'Can I automate my marketing campaigns?',
    answer:
      'Yes. You can fully automate campaigns, from content creation to scheduling and analytics.',
  },
  {
    question: 'How does analytics work?',
    answer:
      'We provide real-time engagement metrics, performance comparisons, and AI-based optimization insights.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use enterprise-grade encryption and follow industry best security practices.',
  },
  {
    question: 'Can I customize the AI-generated content?',
    answer:
      'Yes, you can fully customize tone, style, brand voice, and campaign goals.',
  },
];

const FAQ = () => {
  return (
    <section className="relative bg-white pt-24 pb-28 overflow-hidden">
      {/* Soft green top glow */}
      {/* <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#b9f6a3] to-transparent" /> */}

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b3d2e] leading-tight">
              Frequently Asked <br />
              <span className="text-[#0b3d2e]">Questions</span>
            </h2>

            <p className="mt-6 max-w-md text-[#4b6f63]">
              Find answers to common questions about AI-powered content creation,
              campaign automation, and analytics tools.
            </p>

            {/* Card */}
            <div className="mt-10 bg-[#f2f7f5] rounded-2xl p-6 max-w-sm">
              <h4 className="text-lg font-semibold text-[#0b3d2e] mb-2">
                Got More Questions?
              </h4>
              <p className="text-sm text-[#4b6f63] mb-5">
                Still confused? Reach out and our team will help you out.
              </p>
              <button className="rounded-full bg-[#7CFF4E] px-6 py-2 text-sm font-medium text-[#0b3d2e] hover:brightness-95 transition">
                Contact us
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl bg-[#eef4f2] px-6 border-none"
                >
                  <AccordionTrigger className="flex items-center justify-between py-5 text-left text-[#0b3d2e] font-medium hover:no-underline">
                    {faq.question}
                    
                  </AccordionTrigger>

                  <AccordionContent className="pb-5 text-sm text-[#4b6f63]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
