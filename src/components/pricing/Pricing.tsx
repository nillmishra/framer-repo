'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Header from '@/src/components/shared/Header';
import Footer from '@/src/components/shared/Footer';

const plans = [
  {
    name: 'Free',
    description:
      'For individuals and small brands starting with AI-generated UGC.',
    price: 0,
    cta: 'Try for free',
    popular: false,
    features: [
      '10 AI-videos per month',
      'Basic automation',
      'Essential analytics',
      '1 user',
    ],
  },
  {
    name: 'Growth',
    description:
      'For growing teams scaling automation and content production.',
    price: 250,
    cta: 'Get Started',
    popular: true,
    features: [
      '250 AI-videos per month',
      'Multi-platform publishing',
      'Advanced analytics & automation',
      '5 users',
    ],
  },
  {
    name: 'Enterprise',
    description:
      'For companies needing full customization and control.',
    price: 1900,
    cta: 'Talk to sales',
    popular: false,
    features: [
      'Unlimited AI-videos',
      'Full branding & white-label',
      'Real-time analytics & API',
      'Unlimited users',
    ],
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

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
          Pricing
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
          Flexible Pricing Solutions
        </h1>

        <p className="max-w-2xl mx-auto text-white/70 mb-10">
          Whether you’re testing AI-powered campaigns, scaling content across
          platforms, or running full enterprise operations — there’s a plan
          designed for you.
        </p>

        {/* TOGGLE */}
        <div className="inline-flex items-center rounded-full bg-white/10 p-1 backdrop-blur">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-6 py-2 rounded-full text-sm transition ${
              billing === 'monthly'
                ? 'bg-[#7CFF4E] text-[#053f30]'
                : 'text-white/70'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className={`px-6 py-2 rounded-full text-sm transition ${
              billing === 'yearly'
                ? 'bg-[#7CFF4E] text-[#053f30]'
                : 'text-white/70'
            }`}
          >
            Yearly
          </button>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="relative z-10 pb-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 ${
                  plan.popular ? 'ring-2 ring-[#7CFF4E]' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#7CFF4E] px-3 py-1 text-xs font-semibold text-[#053f30]">
                    most popular
                  </span>
                )}

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/60 mb-6">
                  {plan.description}
                </p>

                <div className="mb-1">
                  <span className="text-4xl font-bold text-[#7CFF4E]">
                    ${plan.price}
                  </span>
                  <span className="text-white/60 text-sm"> /mo</span>
                </div>

                <p className="text-xs text-white/50 mb-6">
                  pause or cancel anytime
                </p>

                <button
                  className={`w-full rounded-full py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? 'bg-[#7CFF4E] text-[#053f30]'
                      : 'bg-white text-[#053f30]'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-white mb-4">
                    Included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-white/80"
                      >
                        <Check className="w-4 h-4 text-[#7CFF4E]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM CTA */}
      <section className="relative z-10 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-[#7CFF4E]" />
              <div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Interested In A More Customized Solution?
                </h3>
                <p className="text-white/60 text-sm">
                  Call our team and explain your project, wants and needs.
                  We’ll create a custom pricing solution for you.
                </p>
              </div>
            </div>

            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#053f30]">
              Call our team
            </button>
          </div>
        </div>
      </section>

      <div className='bg-white'>
        <Footer />
        </div>
    </div>
  );
};

export default Pricing;
