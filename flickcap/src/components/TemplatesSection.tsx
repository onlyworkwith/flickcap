'use client';

import { motion } from 'framer-motion';
import { Play, Zap, ArrowRight, Sparkles } from 'lucide-react';

const templates = [
  {
    id: 'mrbeast',
    name: 'MrBeast',
    desc: 'High-energy bold text',
    preview: 'WAIT FOR IT!! 🔥',
    style: { background: '#e63946', color: '#FFD700', fontWeight: '900', fontSize: '22px', fontFamily: 'Impact, sans-serif', border: '3px solid #FFD700', textShadow: '2px 2px 0 #000' },
    badge: '🏆 #1 Popular',
  },
  {
    id: 'hormozi',
    name: 'Hormozi',
    desc: 'Clean, direct, powerful',
    preview: 'The truth about success.',
    style: { background: '#111', color: '#fff', fontWeight: '700', fontSize: '18px', fontFamily: 'Arial, sans-serif', borderLeft: '4px solid #fff', paddingLeft: '12px' },
    badge: '💼 Business',
  },
  {
    id: 'ali',
    name: 'Ali Abdaal',
    desc: 'Warm, approachable',
    preview: "Here's what I learned... ✨",
    style: { background: 'linear-gradient(135deg,#667eea,#764ba2)', color: '#fff', fontWeight: '600', fontSize: '17px', fontFamily: 'Georgia, serif', borderRadius: '12px', padding: '10px 16px' },
    badge: '📚 Education',
  },
  {
    id: 'desi',
    name: 'Desi Vibe',
    desc: 'Cultural & vibrant',
    preview: 'यार ये देखो! 🎉',
    style: { background: 'linear-gradient(135deg,#f97316,#fbbf24)', color: '#000', fontWeight: '800', fontSize: '20px', fontFamily: 'sans-serif', borderRadius: '8px', padding: '10px 16px', textShadow: '1px 1px 0 rgba(0,0,0,0.2)' },
    badge: '🪔 Desi',
  },
  {
    id: 'podcast',
    name: 'Podcast Pro',
    desc: 'Clean speaker labels',
    preview: '[HOST]: So the key is...',
    style: { background: 'rgba(139,92,246,0.15)', color: '#c4b5fd', fontWeight: '500', fontSize: '16px', fontFamily: 'monospace', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '6px', padding: '8px 14px' },
    badge: '🎙️ Podcast',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    desc: 'Subtle & elegant',
    preview: 'Less is more.',
    style: { background: 'transparent', color: 'rgba(255,255,255,0.85)', fontWeight: '300', fontSize: '18px', fontFamily: 'Helvetica, sans-serif', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '8px', letterSpacing: '0.04em' },
    badge: '✦ Minimal',
  },
];

export default function TemplatesSection() {
  return (
    <section id="templates" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/25 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">Caption Templates</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Go Viral with{' '}
            <span className="text-gradient-purple">Creator-Proven Styles</span>
          </h2>
          <p className="text-lg text-purple-200/60 max-w-xl mx-auto">
            One-click templates inspired by the world's top creators — now with Desi language support.
          </p>
        </motion.div>

        {/* Template grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {templates.map((tpl, i) => (
            <motion.div
              key={tpl.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-2xl border border-purple-800/20 hover:border-purple-500/40 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-900/30"
            >
              {/* Preview area */}
              <div className="relative h-36 bg-gradient-to-br from-purple-950 to-indigo-950 flex items-center justify-center p-6">
                <div className="relative z-10 max-w-full">
                  <div style={tpl.style as React.CSSProperties} className="text-center">
                    {tpl.preview}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                <button className="absolute bottom-3 right-3 p-2 rounded-full glass border border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity text-purple-300 hover:text-white">
                  <Play className="w-3 h-3" />
                </button>
              </div>

              {/* Info */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-bold text-white">{tpl.name}</h3>
                    <span className="text-[10px] font-semibold text-purple-400 glass px-2 py-0.5 rounded-full border border-purple-700/30">{tpl.badge}</span>
                  </div>
                  <p className="text-xs text-purple-400">{tpl.desc}</p>
                </div>
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Use <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-purple-400 text-sm mb-4">50+ templates available in Creator plan</p>
          <a href="/dashboard">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-sm hover:opacity-90 transition-opacity">
              <Zap className="w-4 h-4" /> Browse All Templates
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
