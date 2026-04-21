'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Templates', href: '#templates' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-2xl shadow-purple-900/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-700/40 group-hover:shadow-purple-500/60 transition-shadow duration-300">
                <Sparkles className="w-5 h-5 text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-gradient-purple">Flick</span>
                <span className="text-gradient-saffron">Cap</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-purple-200/70 hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-violet-400 to-orange-400 transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/dashboard"
                className="text-sm font-medium text-purple-200/80 hover:text-white transition-colors px-4 py-2"
              >
                Login
              </Link>
              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-sm font-semibold shadow-lg shadow-purple-700/30 hover:shadow-purple-500/50 transition-all duration-200"
                >
                  <Zap className="w-4 h-4" />
                  Start Creating
                </motion.button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-purple-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-strong border-t border-purple-500/10"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-purple-200/80 hover:text-white font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-purple-500/10">
                  <Link href="/dashboard" className="text-center text-purple-200/80 font-medium py-2">Login</Link>
                  <Link href="/dashboard">
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold">
                      Start Creating
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
