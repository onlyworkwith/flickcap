'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, ChevronDown, Zap, Globe, Play } from 'lucide-react';
import Link from 'next/link';

const languages = [
  { code: 'hi', label: 'हिन्दी — Hindi', flag: '🇮🇳' },
  { code: 'ur', label: 'اردو — Urdu', flag: '🇵🇰' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ — Punjabi', flag: '🇮🇳' },
  { code: 'ta', label: 'தமிழ் — Tamil', flag: '🇮🇳' },
  { code: 'bn', label: 'বাংলা — Bengali', flag: '🇧🇩' },
  { code: 'te', label: 'తెలుగు — Telugu', flag: '🇮🇳' },
  { code: 'mr', label: 'मराठी — Marathi', flag: '🇮🇳' },
  { code: 'gu', label: 'ગુજરાતી — Gujarati', flag: '🇮🇳' },
];

const floatingTags = [
  { text: 'AI-Powered', x: '-left-4', y: 'top-12', delay: 0 },
  { text: '#Desi', x: 'right-2', y: 'top-6', delay: 0.4 },
  { text: 'हिन्दी', x: '-left-8', y: 'bottom-16', delay: 0.8 },
  { text: 'ਵਾਇਰਲ', x: 'right-0', y: 'bottom-24', delay: 0.2 },
];

export default function HeroSection() {
  const [dragOver, setDragOver] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [langOpen, setLangOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f) setFileName(f.name);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Background layers */}
      <div className="absolute inset-0 desi-pattern" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-900/10 blur-[100px] pointer-events-none" />

      {/* Decorative mandala-inspired rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-purple-500/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-orange-500/3 pointer-events-none" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-8"
      >
        <span className="text-sm">✨</span>
        <span className="text-xs font-semibold text-purple-300 tracking-wider uppercase">AI-Powered for Desi Creators</span>
        <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold uppercase tracking-wide">New</span>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-center max-w-4xl mx-auto mb-6"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          <span className="text-white">Create Viral </span>
          <span className="text-gradient-saffron">Desi Captions</span>
          <br />
          <span className="text-white">in </span>
          <span className="text-gradient-purple">Seconds</span>
        </h1>
        <p className="text-lg sm:text-xl text-purple-200/70 font-medium max-w-2xl mx-auto leading-relaxed">
          AI captions for <strong className="text-orange-400">Hindi, Urdu, Punjabi</strong> & more —{' '}
          built for creators like you.{' '}
          <span className="text-purple-300">जोड़ें, बनाएं, वायरल करें।</span>
        </p>
      </motion.div>

      {/* Upload + Language card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="w-full max-w-2xl relative"
      >
        {/* Floating language tags */}
        {floatingTags.map((tag, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + tag.delay, duration: 0.5 }}
            className={`absolute ${tag.x} ${tag.y} hidden lg:block`}
          >
            <div className="glass px-3 py-1.5 rounded-full text-xs font-semibold text-purple-300 border border-purple-500/20 animate-float whitespace-nowrap"
              style={{ animationDelay: `${tag.delay}s` }}>
              {tag.text}
            </div>
          </motion.div>
        ))}

        <div className="glass-strong rounded-2xl p-6 border border-purple-500/20 shadow-2xl shadow-purple-900/30">
          {/* Drop zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
            className={`relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-300 py-10 mb-5 ${
              dragOver
                ? 'border-violet-400 bg-violet-500/10 scale-[1.01]'
                : 'border-purple-500/30 hover:border-violet-400/60 hover:bg-purple-900/20'
            }`}
          >
            <input ref={fileRef} type="file" accept="video/*,audio/*" className="hidden"
              onChange={(e) => { if (e.target.files?.[0]) setFileName(e.target.files[0].name); }} />
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              dragOver ? 'bg-violet-500 scale-110' : 'bg-purple-900/60'
            }`}>
              <Upload className={`w-7 h-7 transition-colors ${dragOver ? 'text-white' : 'text-purple-400'}`} />
            </div>
            {fileName ? (
              <div className="text-center">
                <p className="text-sm font-semibold text-green-400">✓ {fileName}</p>
                <p className="text-xs text-purple-400 mt-0.5">Ready to transcribe</p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-sm font-semibold text-white">Drop your video or audio here</p>
                <p className="text-xs text-purple-400 mt-0.5">MP4, MOV, MP3, WAV — up to 2GB</p>
              </div>
            )}
          </div>

          {/* Controls row */}
          <div className="flex gap-3 flex-col sm:flex-row">
            {/* Language selector */}
            <div className="relative flex-1">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="w-full flex items-center gap-2.5 px-4 py-3 rounded-xl bg-purple-900/40 border border-purple-500/25 hover:border-violet-400/50 transition-colors text-sm font-medium text-white"
              >
                <Globe className="w-4 h-4 text-purple-400" />
                <span className="flex-1 text-left">{selectedLang.flag} {selectedLang.label}</span>
                <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 glass-strong rounded-xl border border-purple-500/25 shadow-xl overflow-hidden z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-3 text-sm text-left hover:bg-purple-500/15 transition-colors ${
                        selectedLang.code === lang.code ? 'bg-violet-500/15 text-violet-300' : 'text-purple-200'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* CTA */}
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-bold text-sm shadow-lg shadow-purple-700/40 hover:shadow-purple-500/60 transition-shadow whitespace-nowrap w-full sm:w-auto"
              >
                <Zap className="w-4 h-4" />
                Generate Captions
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Social proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-6 mt-10"
      >
        <div className="flex -space-x-2">
          {['🧑🏽', '👩🏾', '👨🏻', '👩🏽', '🧑🏾'].map((emoji, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-700 to-violet-900 border-2 border-purple-900 flex items-center justify-center text-sm">
              {emoji}
            </div>
          ))}
        </div>
        <p className="text-sm text-purple-300">
          <strong className="text-white">12,000+</strong> Desi creators trust FlickCap
        </p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (<span key={i} className="text-amber-400 text-sm">★</span>))}
          <span className="text-sm text-purple-300 ml-1">4.9/5</span>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-purple-400" />
        <Play className="w-3 h-3 text-purple-400 rotate-90" />
      </motion.div>
    </section>
  );
}
