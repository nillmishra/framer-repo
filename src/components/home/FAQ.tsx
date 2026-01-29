'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle, Plane, MapPin } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do you find the best flight deals?',
    answer:
      'We compare prices from over 500 airlines and travel sites in real-time to find you the lowest fares. Our AI-powered system also predicts price changes so you know the best time to book.',
  },
  {
    question: 'Is booking through your platform secure?',
    answer:
      'Absolutely. We use enterprise-grade encryption and partner only with verified airlines and hotels. Your payment information is never stored on our servers.',
  },
  {
    question: 'Can I set up price alerts for specific routes?',
    answer:
      'Yes! You can set unlimited price alerts for any route. We\'ll notify you instantly via email or push notification when prices drop.',
  },
  {
    question: 'What if I need to cancel or change my booking?',
    answer:
      'Our 24/7 support team can help you with any changes. Most bookings include flexible cancellation options, and we\'ll guide you through the process.',
  },
  {
    question: 'Do you offer package deals?',
    answer:
      'Yes, we offer flight + hotel packages that can save you up to 40% compared to booking separately. We also have curated tour packages for popular destinations.',
  },
  {
    question: 'How does the Best Price Guarantee work?',
    answer:
      'If you find a lower price within 24 hours of booking, we\'ll refund the difference plus give you a $50 travel credit for your next trip.',
  },
  {
    question: 'Which payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely with 256-bit encryption.',
  },
];

const FAQ = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-50 rounded-full blur-3xl opacity-70" />
      
      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 right-20 text-blue-200"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane className="w-10 h-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-cyan-200"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <MapPin className="w-8 h-8" />
      </motion.div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border border-blue-200"
              style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%)' }}
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span 
                className="text-sm font-semibold bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
              >
                FAQ
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Questions?{' '}
              <span 
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
              >
                We've Got Answers
              </span>
            </h2>

            <p className="mt-6 max-w-md text-gray-600">
              Find answers to common questions about booking flights, hotels, and getting the best travel deals.
            </p>

            {/* Contact Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 rounded-2xl p-6 max-w-sm border border-blue-100 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%)' }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Still Have Questions?
              </h4>
              <p className="text-sm text-gray-600 mb-5">
                Our travel experts are available 24/7 to help you plan your perfect trip.
              </p>
              <Button 
                className="rounded-full text-white font-semibold border-0 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)' }}
              >
                Chat with us
              </Button>
            </motion.div>
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <AccordionItem
                    value={`faq-${i}`}
                    className="rounded-xl bg-white px-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                  >
                    <AccordionTrigger className="flex items-center justify-between py-5 text-left text-gray-900 font-medium hover:no-underline group">
                      <span className="group-hover:text-blue-600 transition-colors pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="pb-5 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;