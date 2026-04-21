'use client';

import { motion } from 'framer-motion';
import { Mic2, Palette, Hash, Wand2, Download, Globe2, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: Mic2,
    title: 'Desi Language Transcription',
    desc: 'Accurate AI transcription for Hindi, Urdu, Punjabi, Tamil, Bengali, Telugu & 30+ languages with dialect support.',
    gradient: 'from-violet-500 to-purple-700',
    glow: 'group-hover:shadow-purple-500/30',
    tag: '99.2% accuracy',
  },
  {
    icon: Palette,
    title: 'Creator-Style Templates',
    desc: 'MrBeast, Hormozi, Ali Abdaal-inspired caption styles. Bold, animated, and viral-ready out of the box.',
    gradient: 'from-orange-500 to-amber-600',
    glow: 'group-hover:shadow-orange-500/30',
    tag: '50+ templates',
  },
  {
    icon: Wand2,
    title: 'AI Caption Enhancement',
    desc: 'Auto emoji insertion, keyword highlights, tone selector — emotional, storytelling, or engaging.',
    gradient: 'from-fuchsia-500 to-pink-600',
    glow: 'group-hover:shadow-fuchsia-500/30',
    tag: 'GPT-powered',
  },
  {
    icon: Zap,
    title: 'Audio Enhancement',
    desc: 'Remove background noise, traffic hiss, crowd sounds. Crystal-clear audio with one click.',
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'group-hover:shadow-cyan-500/30',
    tag: 'Studio quality',
  },
  {
    icon: Hash,
    title: 'Viral Hashtag Generator',
    desc: 'Context-aware hashtag suggestions in Hindi & regional scripts. Trends updated in real-time.',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'group-hover:shadow-emerald-500/30',
    tag: 'Auto-suggest',
  },
  {
    icon: Download,
    title: 'Multi-Format Export',
    desc: 'SRT, 1080p/4K video, alpha channel — deploy your content everywhere without re-editing.',
    gradient: 'from-rose-500 to-red-600',
    glow: 'group-hover:shadow-rose-500/30',
    tag: '4K Ready',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 desi-pattern" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-orange-500/25 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-xs font-semibold text-orange-300 uppercase tracking-wider">Everything you need</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Built for the{' '}
            <span className="text-gradient-saffron">Desi Creator</span>
          </h2>
          <p className="text-lg text-purple-200/60 max-w-2xl mx-auto">
            From raw footage to viral reel — every tool, effect, and language your content needs in one place.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              variants={cardVariants}
              key={f.title}
              className={`group relative glass rounded-2xl p-6 border border-purple-800/20 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${f.glow} cursor-default`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold text-white leading-snug flex-1 mr-2">{f.title}</h3>
                  <span className={`text-[10px] font-bold bg-gradient-to-r ${f.gradient} bg-clip-text text-transparent border border-purple-500/20 px-2 py-0.5 rounded-full whitespace-nowrap`}>
                    {f.tag}
                  </span>
                </div>
                <p className="text-sm text-purple-200/60 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Language banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 glass rounded-2xl p-8 border border-orange-500/20 text-center"
        >
          <Globe2 className="w-8 h-8 text-orange-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">30+ South Asian Languages Supported</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {['हिन्दी', 'اردو', 'ਪੰਜਾਬੀ', 'தமிழ்', 'বাংলা', 'తెలుగు', 'ગુજરાતી', 'मराठी', 'ಕನ್ನಡ', 'മലയാളം'].map((lang) => (
              <span key={lang} className="px-3 py-1.5 rounded-lg glass border border-purple-500/20 text-sm font-medium text-purple-200">
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
