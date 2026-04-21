'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Star, Crown, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';

const plans = [
  {
    id: 'free',
    name: 'Free',
    icon: '🌱',
    price: '₹0',
    period: '/month',
    desc: 'Get started for free',
    color: 'from-gray-600 to-gray-700',
    borderColor: 'border-gray-700/30',
    cta: 'Get Started',
    ctaClass: 'bg-white/10 hover:bg-white/15 text-white',
    popular: false,
    features: [
      '5 videos / month',
      'Hindi & English only',
      '720p export',
      'Basic templates',
      'SRT export',
      '500MB storage',
    ],
    missing: ['4K export', 'Custom fonts', 'Audio enhancer', 'Priority support'],
  },
  {
    id: 'editor',
    name: 'Editor',
    icon: '✏️',
    price: '₹499',
    period: '/month',
    desc: 'For growing creators',
    color: 'from-blue-600 to-cyan-600',
    borderColor: 'border-blue-700/30',
    cta: 'Start Editing',
    ctaClass: 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white',
    popular: false,
    features: [
      '25 videos / month',
      '8 Desi languages',
      '1080p export',
      '20+ templates',
      'SRT + Caption file',
      '5GB storage',
      'Audio enhancer (basic)',
    ],
    missing: ['4K export', 'Custom fonts', 'Priority support'],
  },
  {
    id: 'creator',
    name: 'Creator',
    icon: '🔥',
    price: '₹999',
    period: '/month',
    desc: 'Most popular for pros',
    color: 'from-violet-600 to-purple-700',
    borderColor: 'border-violet-500/50',
    cta: 'Go Creator',
    ctaClass: 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-700/40',
    popular: true,
    features: [
      'Unlimited videos',
      '30+ Desi languages',
      '4K export',
      '50+ premium templates',
      'SRT + Alpha + Video',
      '50GB storage',
      'Full audio enhancer',
      'Custom fonts',
      'AI hashtag generator',
      'Priority support',
    ],
    missing: ['White-label', 'Team seats'],
  },
  {
    id: 'business',
    name: 'Business',
    icon: '🏢',
    price: '₹2,999',
    period: '/month',
    desc: 'For teams & agencies',
    color: 'from-orange-500 to-amber-600',
    borderColor: 'border-orange-700/30',
    cta: 'Contact Sales',
    ctaClass: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white',
    popular: false,
    features: [
      'Everything in Creator',
      '5 team seats',
      'White-label captions',
      'API access',
      'Dedicated CDN',
      '500GB storage',
      'Custom integrations',
      'Account manager',
      'SLA guarantee',
      'Invoice billing',
    ],
    missing: [],
  },
];

const tableFeatures = [
  { name: 'Videos / month', free: '5', editor: '25', creator: 'Unlimited', business: 'Unlimited' },
  { name: 'Languages', free: '2', editor: '8', creator: '30+', business: '30+' },
  { name: 'Export Quality', free: '720p', editor: '1080p', creator: '4K', business: '4K' },
  { name: 'Audio Enhancer', free: false, editor: 'Basic', creator: true, business: true },
  { name: 'Custom Fonts', free: false, editor: false, creator: true, business: true },
  { name: 'Alpha Channel', free: false, editor: false, creator: true, business: true },
  { name: 'API Access', free: false, editor: false, creator: false, business: true },
  { name: 'White Label', free: false, editor: false, creator: false, business: true },
  { name: 'Storage', free: '500MB', editor: '5GB', creator: '50GB', business: '500GB' },
  { name: 'Support', free: 'Community', editor: 'Email', creator: 'Priority', business: 'Dedicated' },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#080512]">
      <Header />
      <div className="pt-24 pb-20 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-orange-500/25 mb-5">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Transparent Pricing</span>
          </div>
          <h1 className="text-5xl font-black text-white mb-4">
            Plans for Every{' '}
            <span className="text-gradient-saffron">Desi Creator</span>
          </h1>
          <p className="text-lg text-purple-200/60">
            Start free, grow at your own pace. Cancel anytime.
          </p>
        </motion.div>

        {/* Plan cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative glass rounded-2xl border ${plan.borderColor} transition-all duration-300 hover:scale-[1.02] ${
                plan.popular ? 'ring-2 ring-violet-500/60 shadow-2xl shadow-purple-900/40' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                  <div className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold shadow-lg">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                </div>
              )}

              <div className="p-5">
                {/* Plan header */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                  <span>{plan.icon}</span>
                  <span className="text-sm font-bold text-white">{plan.name}</span>
                </div>
                <div className="mb-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-purple-400 text-sm">{plan.period}</span>
                </div>
                <p className="text-xs text-purple-400 mb-5">{plan.desc}</p>

                <Link href="/dashboard">
                  <button className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90 ${plan.ctaClass}`}>
                    {plan.cta}
                  </button>
                </Link>

                <div className="mt-5 space-y-2">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-purple-200">{f}</span>
                    </div>
                  ))}
                  {plan.missing.map((f) => (
                    <div key={f} className="flex items-start gap-2 opacity-30">
                      <div className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2.5 h-px bg-purple-500 rounded" />
                      </div>
                      <span className="text-xs text-purple-400">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-black text-white text-center mb-8">Full Feature Comparison</h2>
          <div className="glass rounded-2xl border border-purple-800/20 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-5 border-b border-purple-800/20">
              <div className="p-4 text-sm font-semibold text-purple-400">Feature</div>
              {['Free', 'Editor', 'Creator', 'Business'].map((name, i) => (
                <div key={name} className={`p-4 text-center text-sm font-bold ${i === 2 ? 'text-violet-300 bg-violet-900/10' : 'text-white'}`}>
                  {name}
                </div>
              ))}
            </div>
            {tableFeatures.map((row, i) => (
              <div key={row.name} className={`grid grid-cols-5 border-b border-purple-800/10 ${i % 2 === 0 ? '' : 'bg-purple-900/5'}`}>
                <div className="p-3.5 text-xs font-medium text-purple-300">{row.name}</div>
                {[row.free, row.editor, row.creator, row.business].map((val, j) => (
                  <div key={j} className={`p-3.5 text-center ${j === 2 ? 'bg-violet-900/10' : ''}`}>
                    {val === true ? (
                      <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                    ) : val === false ? (
                      <div className="w-4 h-px bg-purple-700 mx-auto rounded" />
                    ) : (
                      <span className="text-xs text-purple-200">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-black text-white mb-2">Ready to go viral? 🚀</h3>
          <p className="text-purple-400 mb-6">Join 12,000+ Desi creators already using FlickCap</p>
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-bold text-base shadow-2xl shadow-purple-700/40 hover:shadow-purple-500/60 transition-shadow"
            >
              <Zap className="w-5 h-5" />
              Start Creating for Free
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
