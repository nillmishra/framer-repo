'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Updates', href: '/updates' },
  { name: 'Case studies', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
   <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl rounded-full border border-white/15 bg-[#004435]/90 backdrop-blur-md text-white">

      <div className="container mx-auto pl-4 pr-1">
        <div className="flex items-center justify-between h-10 lg:h-12">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-lime transition-transform group-hover:rotate-12" />
            <span className="text-xl lg:text-2xl font-serif font-bold text-primary-foreground">
              Marqo
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block bg-white rounded-full text-green-900 ">
            <a href="/waitlist">
            <Button variant="default" size="lg" className="rounded-full cursor-pointer">
              Join Waitlist
            </Button></a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-primary-foreground/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="lime" size="xl" className="rounded-full bg-green-500 py-3 px-5">
            Join Waitlist
          </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
