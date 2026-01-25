'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import dashboardPreview from '@/src/app/assets/dashboard-preview.png';
import testimonial1 from '@/src/app/assets/testimonial-1.jpg';
import testimonial2 from '@/src/app/assets/testimonial-2.jpg';
import testimonial3 from '@/src/app/assets/testimonial-3.jpg';

const CTABanner = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="
            relative
            rounded-3xl
            overflow-hidden
            bg-gradient-to-br
            from-[#004435]
            via-[#005c45]
            to-[#0a7a4f]
          "
        >
          <div className="grid lg:grid-cols-2 gap-10 p-10 lg:p-14">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              {/* Social proof */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  {[testimonial1, testimonial2, testimonial3].map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt="User"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-[#004435] object-cover"
                    />
                  ))}
                </div>
                <span className="text-sm text-white/80">
                  Join 5k+ marketing leads worldwide on Marqo
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Don&apos;t Wait.
                <br />
                Get Results From Day One.
              </h2>

              <p className="text-white/70 max-w-md mb-8">
                Find answers to common questions about AI-powered content creation,
                campaign automation, and analytics tools.
              </p>

              <Button
                size="lg"
                className="
                  w-fit
                  rounded-full
                  bg-[#7CFF4E]
                  px-8
                  text-[#003f2e]
                  hover:bg-[#6af23e]
                "
              >
                Join the waitlist
              </Button>
            </div>

            {/* RIGHT */}
            <div className="relative flex items-center justify-center">
              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-md w-full">
                <Image
                  src={dashboardPreview}
                  alt="Dashboard Preview"
                  className="rounded-xl w-full h-auto"
                />

                {/* Stats */}
                <div className="absolute top-4 right-4 text-right">
                  <p className="text-xs text-muted-foreground">Pageviews</p>
                  <p className="text-sm font-semibold">127k</p>
                  <p className="text-xs text-muted-foreground mt-2">Conversion</p>
                  <p className="text-sm font-semibold">34k</p>
                </div>

                <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow">
                  <p className="text-xs text-muted-foreground mb-1">
                    Total Campaign Income
                  </p>
                  <p className="text-lg font-bold">$123,340,528</p>
                  <span className="inline-block mt-1 text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                    +15% ROI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
