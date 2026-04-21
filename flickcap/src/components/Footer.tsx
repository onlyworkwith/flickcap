'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight, ExternalLink, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/60 to-purple-950/60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-700/20 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-4">🚀 Join 12,000+ Creators</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Start Creating <span className="text-gradient-saffron">Viral Content</span> Today
            </h2>
            <p className="text-lg text-purple-200/60 mb-8 max-w-2xl mx-auto">
              Free forever. No credit card. Just captions that convert — in your language, for your audience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-bold text-base shadow-2xl shadow-purple-700/40"
                >
                  <Zap className="w-5 h-5" /> Start for Free
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/pricing">
                <button className="flex items-center gap-2 px-6 py-4 rounded-2xl glass border border-purple-500/30 text-white font-semibold hover:border-purple-400/50 transition-colors">
                  View Pricing
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-black">
                  <span className="text-gradient-purple">Flick</span>
                  <span className="text-gradient-saffron">Cap</span>
                </span>
              </div>
              <p className="text-sm text-purple-400 leading-relaxed mb-4">
                AI-powered captions for Desi creators. Made with ❤️ in India.
              </p>
              <div className="flex gap-3">
                {[Instagram, Youtube, Twitter, ExternalLink].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-lg glass border border-purple-700/20 text-purple-400 hover:text-white hover:border-purple-500/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: 'Product', links: ['Features', 'Templates', 'Pricing', 'Changelog', 'Roadmap'] },
              { title: 'Languages', links: ['Hindi', 'Urdu', 'Punjabi', 'Tamil', 'Bengali', 'Telugu'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Contact'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-3">{col.title}</h4>
                <div className="space-y-2">
                  {col.links.map((link) => (
                    <a key={link} href="#" className="block text-sm text-purple-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-purple-800/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-purple-600">© 2025 FlickCap. All rights reserved. Made for Desi Creators 🇮🇳</p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookie Policy'].map((l) => (
                <a key={l} href="#" className="text-xs text-purple-600 hover:text-purple-400 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
