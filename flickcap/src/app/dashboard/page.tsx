'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, FolderOpen, Layout, Mic2, Download, Settings,
  Upload, ChevronDown, Zap, Play, Pause, SkipBack, SkipForward,
  Type, Palette, Hash, Wand2, Volume2, VolumeX, Copy, Check,
  Globe, Sparkles, BarChart2, Clock, Star, LogOut, Bell, Moon
} from 'lucide-react';
import Link from 'next/link';

// ── Sidebar nav items ──
const sidebarItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'projects', icon: FolderOpen, label: 'My Projects' },
  { id: 'templates', icon: Layout, label: 'Templates' },
  { id: 'audio', icon: Mic2, label: 'Audio Enhancer' },
  { id: 'export', icon: Download, label: 'Export' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

const languages = [
  { code: 'hi', label: 'Hindi', script: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ur', label: 'Urdu', script: 'اردو', flag: '🇵🇰' },
  { code: 'pa', label: 'Punjabi', script: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'ta', label: 'Tamil', script: 'தமிழ்', flag: '🇮🇳' },
  { code: 'bn', label: 'Bengali', script: 'বাংলা', flag: '🇧🇩' },
];

const captionTemplates = [
  { id: 'mrbeast', label: 'MrBeast', color: 'from-red-500 to-orange-500', desc: 'Bold, high-energy' },
  { id: 'hormozi', label: 'Hormozi', color: 'from-gray-600 to-gray-800', desc: 'Clean, minimal' },
  { id: 'ali', label: 'Ali Abdaal', color: 'from-blue-500 to-cyan-500', desc: 'Warm, personal' },
  { id: 'desi', label: 'Desi Vibe', color: 'from-orange-500 to-amber-500', desc: 'Cultural, vibrant' },
];

const mockCaptions = [
  { id: 1, start: '0:02', end: '0:05', text: 'यार, आज हम बात करेंगे एक ऐसी चीज़ के बारे में...' },
  { id: 2, start: '0:06', end: '0:10', text: 'जो तुम्हारी ज़िंदगी बदल सकती है! 🔥' },
  { id: 3, start: '0:11', end: '0:15', text: 'AI captions ab Hindi mein bhi available hain!' },
  { id: 4, start: '0:16', end: '0:20', text: 'FlickCap ke saath create karo viral content...' },
];

const suggestedHashtags = [
  '#DesiCreator', '#HindiContent', '#ViralReels', '#IndianYouTuber',
  '#AICaption', '#FlickCap', '#ContentCreation', '#BollywoodVibes',
  '#Trending', '#ReelItFeelIt',
];

const projects = [
  { name: 'Chai Pe Charcha Ep.3', lang: '🇮🇳 Hindi', status: 'done', date: 'Today', views: '4.2K' },
  { name: 'Punjab Da Swag Vlog', lang: '🇮🇳 Punjabi', status: 'processing', date: 'Yesterday', views: '—' },
  { name: 'Chennai Food Review', lang: '🇮🇳 Tamil', status: 'done', date: '2d ago', views: '8.7K' },
];

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [selectedTemplate, setSelectedTemplate] = useState('desi');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [langOpen, setLangOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [transcribing, setTranscribing] = useState(false);
  const [transcribed, setTranscribed] = useState(false);
  const [emojiOn, setEmojiOn] = useState(true);
  const [highlightOn, setHighlightOn] = useState(true);
  const [noiseOn, setNoiseOn] = useState(true);
  const [tone, setTone] = useState('engaging');
  const [copiedTag, setCopiedTag] = useState('');
  const [editingCaption, setEditingCaption] = useState<number | null>(null);
  const [captions, setCaptions] = useState(mockCaptions);
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  };

  const handleTranscribe = () => {
    setTranscribing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setTranscribing(false); setTranscribed(true); return 100; }
        return p + Math.random() * 8 + 2;
      });
    }, 200);
  };

  const handleCopyTag = (tag: string) => {
    navigator.clipboard.writeText(tag).catch(() => {});
    setCopiedTag(tag);
    showToast('Hashtag copied!');
    setTimeout(() => setCopiedTag(''), 1500);
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(suggestedHashtags.join(' ')).catch(() => {});
    showToast('All hashtags copied!');
  };

  return (
    <div className="flex h-screen bg-[#080512] overflow-hidden">

      {/* ── SIDEBAR ── */}
      <aside className="w-64 flex-shrink-0 flex flex-col glass-strong border-r border-purple-800/20 z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 px-6 py-5 border-b border-purple-800/20">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-700/40">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-black">
            <span className="text-gradient-purple">Flick</span>
            <span className="text-gradient-saffron">Cap</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500 px-3 mb-3">Workspace</p>
          <div className="space-y-0.5">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeNav === item.id
                    ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                    : 'text-purple-300/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Projects list */}
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500 px-3 mb-3 mt-6">Recent Projects</p>
          <div className="space-y-1">
            {projects.map((p) => (
              <div key={p.name} className="px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-purple-200 truncate flex-1">{p.name}</p>
                  <span className={`ml-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.status === 'done' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
                </div>
                <p className="text-[10px] text-purple-500 mt-0.5">{p.lang} · {p.date}</p>
              </div>
            ))}
          </div>
        </nav>

        {/* Storage indicator */}
        <div className="px-4 py-4 border-t border-purple-800/20">
          <div className="flex items-center justify-between text-xs text-purple-400 mb-1.5">
            <span>Cloud Storage</span>
            <span>4.2 / 10 GB</span>
          </div>
          <div className="h-1.5 bg-purple-900/40 rounded-full overflow-hidden">
            <div className="h-full w-[42%] bg-gradient-to-r from-violet-500 to-purple-400 rounded-full" />
          </div>
        </div>

        {/* User */}
        <div className="px-4 py-3 border-t border-purple-800/20 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-sm">🧑🏽</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">Desi Creator</p>
            <p className="text-[10px] text-purple-400 truncate">Creator Plan</p>
          </div>
          <button className="text-purple-500 hover:text-purple-300 transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* ── MAIN AREA ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-3 border-b border-purple-800/20 glass-strong flex-shrink-0">
          <div>
            <h1 className="text-base font-bold text-white">Dashboard</h1>
            <p className="text-xs text-purple-400">Create, Edit & Export in seconds</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-white/5 text-purple-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-orange-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/5 text-purple-400 hover:text-white transition-colors">
              <Moon className="w-5 h-5" />
            </button>
            <Link href="/pricing">
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold shadow-lg shadow-orange-700/30 hover:shadow-orange-500/50 transition-shadow">
                ⚡ Upgrade
              </button>
            </Link>
          </div>
        </header>

        {/* Workspace panels */}
        <div className="flex-1 overflow-hidden flex gap-0">

          {/* CENTER — main workspace */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Videos Captioned', value: '47', icon: BarChart2, color: 'text-violet-400' },
                { label: 'Watch Time Saved', value: '12h', icon: Clock, color: 'text-orange-400' },
                { label: 'Avg. Engagement', value: '+38%', icon: Star, color: 'text-emerald-400' },
                { label: 'Languages Used', value: '6', icon: Globe, color: 'text-cyan-400' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 border border-purple-800/20">
                  <div className={`${s.color} mb-2`}><s.icon className="w-4 h-4" /></div>
                  <p className="text-xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-purple-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* ── Panel A: Upload & Transcription ── */}
            <Panel title="Upload & Transcription" icon={Upload} iconColor="from-violet-500 to-purple-700">
              <div className="space-y-4">
                {/* Upload row */}
                <div className="flex gap-3">
                  <div className="flex-1 flex items-center gap-3 p-3 rounded-xl border border-dashed border-purple-500/30 hover:border-violet-400/50 bg-purple-900/10 cursor-pointer transition-colors">
                    <Upload className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-sm text-purple-300">Drop video / audio or click to browse</span>
                  </div>

                  {/* Language */}
                  <div className="relative">
                    <button
                      onClick={() => setLangOpen(!langOpen)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-900/40 border border-purple-500/25 text-sm text-white h-full"
                    >
                      <span>{selectedLang.flag}</span>
                      <span className="font-medium">{selectedLang.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-purple-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {langOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="absolute top-full mt-1 right-0 glass-strong rounded-xl border border-purple-500/20 shadow-xl z-20 w-44 overflow-hidden"
                        >
                          {languages.map((l) => (
                            <button key={l.code} onClick={() => { setSelectedLang(l); setLangOpen(false); }}
                              className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs text-left hover:bg-purple-500/15 text-purple-200 transition-colors">
                              <span>{l.flag}</span><span>{l.label}</span>
                              <span className="ml-auto text-purple-500">{l.script}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Transcribe button + progress */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleTranscribe}
                    disabled={transcribing}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      transcribing
                        ? 'bg-purple-900/50 text-purple-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-700/40'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    {transcribing ? 'Transcribing...' : transcribed ? 'Re-Transcribe' : 'Transcribe Now'}
                  </button>
                  {(transcribing || transcribed) && (
                    <div className="flex-1">
                      <div className="flex justify-between text-xs text-purple-400 mb-1">
                        <span>{transcribing ? 'AI Processing...' : '✓ Complete'}</span>
                        <span>{Math.min(Math.round(progress), 100)}%</span>
                      </div>
                      <div className="h-1.5 bg-purple-900/60 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-400 rounded-full"
                          animate={{ width: `${Math.min(progress, 100)}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Panel>

            {/* ── Panel B: Caption Editor ── */}
            <Panel title="Caption Editor" icon={Type} iconColor="from-fuchsia-500 to-pink-600">
              {/* Video preview mockup */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-950 to-indigo-950 rounded-xl overflow-hidden border border-purple-800/30 mb-4">
                {/* Mock video content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎬</div>
                    <p className="text-purple-400 text-sm">Video Preview</p>
                  </div>
                </div>
                {/* Caption overlay */}
                {transcribed && (
                  <div className="absolute bottom-8 left-0 right-0 text-center px-8">
                    <span className={`inline-block px-4 py-2 rounded-lg text-base font-black text-white shadow-xl ${
                      selectedTemplate === 'mrbeast' ? 'bg-red-600 border-2 border-yellow-400' :
                      selectedTemplate === 'hormozi' ? 'bg-black/80 border border-white/20' :
                      selectedTemplate === 'ali' ? 'bg-blue-600/80 rounded-2xl' :
                      'bg-gradient-to-r from-orange-500 to-amber-500'
                    }`}>
                      यार, आज हम बात करेंगे... 🔥
                    </span>
                  </div>
                )}
                {/* Timeline scrubber */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-purple-900/60">
                  <div className="h-full w-1/3 bg-gradient-to-r from-violet-500 to-purple-400" />
                </div>
              </div>

              {/* Playback controls */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <button className="p-2 text-purple-400 hover:text-white transition-colors"><SkipBack className="w-4 h-4" /></button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/40 transition-shadow"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <button className="p-2 text-purple-400 hover:text-white transition-colors"><SkipForward className="w-4 h-4" /></button>
                <div className="flex-1 h-1 bg-purple-900/60 rounded-full cursor-pointer max-w-xs">
                  <div className="h-full w-1/3 bg-gradient-to-r from-violet-500 to-purple-400 rounded-full" />
                </div>
                <span className="text-xs text-purple-400 font-mono">0:08 / 0:32</span>
              </div>

              {/* Caption timeline blocks */}
              <div className="space-y-2">
                {captions.map((c) => (
                  <div key={c.id} className={`flex items-start gap-3 p-2.5 rounded-lg border transition-all cursor-pointer ${
                    editingCaption === c.id ? 'border-violet-400/60 bg-violet-500/10' : 'border-purple-800/20 hover:border-purple-500/30 hover:bg-purple-900/20'
                  }`} onClick={() => setEditingCaption(editingCaption === c.id ? null : c.id)}>
                    <span className="text-[10px] font-mono text-purple-500 pt-0.5 w-16 flex-shrink-0">{c.start}–{c.end}</span>
                    {editingCaption === c.id ? (
                      <input
                        className="flex-1 text-xs text-white bg-transparent outline-none border-none"
                        value={c.text}
                        onChange={(e) => setCaptions(cs => cs.map(cc => cc.id === c.id ? { ...cc, text: e.target.value } : cc))}
                        autoFocus
                      />
                    ) : (
                      <span className="text-xs text-purple-200 flex-1 leading-relaxed">{c.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </Panel>

            {/* ── Panel C: Hashtag Generator ── */}
            <Panel title="Hashtag Generator" icon={Hash} iconColor="from-emerald-500 to-teal-600">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {suggestedHashtags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleCopyTag(tag)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                        copiedTag === tag
                          ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                          : 'bg-purple-900/30 border-purple-700/30 text-purple-300 hover:border-purple-400/50 hover:text-white'
                      }`}
                    >
                      {copiedTag === tag ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {tag}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleCopyAll}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy All Hashtags
                </button>
              </div>
            </Panel>
          </div>

          {/* RIGHT PANEL — Styling, AI, Audio, Export */}
          <div className="w-[280px] flex-shrink-0 border-l border-purple-800/20 overflow-y-auto glass-strong">
            <div className="p-4 space-y-5">

              {/* Styling Panel */}
              <div>
                <SectionTitle icon={Palette} title="Caption Style" color="text-fuchsia-400" />
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {captionTemplates.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTemplate(t.id)}
                      className={`rounded-xl p-0.5 transition-all ${selectedTemplate === t.id ? 'ring-2 ring-violet-400 scale-[1.02]' : 'hover:scale-[1.01]'}`}
                    >
                      <div className={`rounded-[10px] bg-gradient-to-br ${t.color} p-2.5`}>
                        <p className="text-xs font-black text-white">{t.label}</p>
                        <p className="text-[9px] text-white/70 mt-0.5">{t.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                {/* Font + animations */}
                <div className="space-y-2">
                  <select className="w-full text-xs bg-purple-900/30 border border-purple-700/30 text-purple-200 rounded-lg px-3 py-2 outline-none">
                    <option>Inter — Modern Clean</option>
                    <option>Poppins — Friendly</option>
                    <option>Bebas Neue — Bold</option>
                    <option>Noto Sans Devanagari</option>
                    <option>Custom Font (Upload)</option>
                  </select>
                  <select className="w-full text-xs bg-purple-900/30 border border-purple-700/30 text-purple-200 rounded-lg px-3 py-2 outline-none">
                    <option>Animation: Fade In</option>
                    <option>Animation: Word By Word</option>
                    <option>Animation: Bounce</option>
                    <option>Animation: Typewriter</option>
                  </select>
                </div>
              </div>

              <Divider />

              {/* AI Features */}
              <div>
                <SectionTitle icon={Wand2} title="AI Features" color="text-violet-400" />
                <div className="space-y-3">
                  <ToggleRow label="Emoji Auto-Insert" subLabel="Adds contextual emojis" on={emojiOn} onToggle={() => setEmojiOn(!emojiOn)} />
                  <ToggleRow label="Keyword Highlight" subLabel="Bold key phrases" on={highlightOn} onToggle={() => setHighlightOn(!highlightOn)} />
                  <div>
                    <p className="text-xs text-purple-300 font-medium mb-2">Tone</p>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['Engaging', 'Emotional', 'Story'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setTone(t.toLowerCase())}
                          className={`text-[10px] py-1.5 rounded-lg font-semibold transition-all ${
                            tone === t.toLowerCase()
                              ? 'bg-violet-600/40 text-violet-300 border border-violet-500/40'
                              : 'bg-purple-900/30 text-purple-400 border border-purple-800/30 hover:text-purple-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Divider />

              {/* Audio Enhancement */}
              <div>
                <SectionTitle icon={Mic2} title="Audio Enhancer" color="text-cyan-400" />
                <div className="space-y-3">
                  <ToggleRow label="Noise Reduction" subLabel="Remove background hiss" on={noiseOn} onToggle={() => setNoiseOn(!noiseOn)} />
                  <div className="space-y-2">
                    {['Traffic Noise', 'Crowd Removal', 'Echo Cancel'].map((item) => (
                      <div key={item} className="flex items-center justify-between">
                        <span className="text-xs text-purple-300">{item}</span>
                        <div className="flex items-center gap-2">
                          {noiseOn ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5 text-purple-500" />}
                          <input type="range" min="0" max="100" defaultValue="70"
                            disabled={!noiseOn}
                            className="w-20 h-1 accent-cyan-400 cursor-pointer disabled:opacity-30" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold">
                    Enhance Audio
                  </button>
                </div>
              </div>

              <Divider />

              {/* Export */}
              <div>
                <SectionTitle icon={Download} title="Export" color="text-orange-400" />
                <div className="space-y-2">
                  {[
                    { label: 'Video — 1080p', sub: 'MP4 with captions', icon: '🎬' },
                    { label: 'Video — 4K', sub: 'MP4 ultra HD', icon: '🔥' },
                    { label: 'SRT File', sub: 'Subtitles only', icon: '📄' },
                    { label: 'Alpha Channel', sub: 'Transparency export', icon: '✨' },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => showToast(`Exporting ${opt.label}...`)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-purple-900/20 border border-purple-700/20 hover:border-orange-500/30 hover:bg-orange-900/10 text-left transition-all group"
                    >
                      <span className="text-base">{opt.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-white group-hover:text-orange-300 transition-colors">{opt.label}</p>
                        <p className="text-[10px] text-purple-500">{opt.sub}</p>
                      </div>
                      <Download className="w-3.5 h-3.5 text-purple-500 group-hover:text-orange-400 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl glass-strong border border-purple-500/30 shadow-2xl shadow-purple-900/40 flex items-center gap-2.5"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-white">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Sub-components ──

function Panel({ title, icon: Icon, iconColor, children }: {
  title: string; icon: React.ElementType; iconColor: string; children: React.ReactNode;
}) {
  return (
    <div className="glass rounded-2xl border border-purple-800/20 overflow-hidden">
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-purple-800/20">
        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${iconColor} flex items-center justify-center`}>
          <Icon className="w-3.5 h-3.5 text-white" />
        </div>
        <h2 className="text-sm font-bold text-white">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function SectionTitle({ icon: Icon, title, color }: { icon: React.ElementType; title: string; color: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className={`w-3.5 h-3.5 ${color}`} />
      <p className="text-xs font-bold text-white uppercase tracking-wider">{title}</p>
    </div>
  );
}

function ToggleRow({ label, subLabel, on, onToggle }: { label: string; subLabel: string; on: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs font-medium text-purple-200">{label}</p>
        <p className="text-[10px] text-purple-500">{subLabel}</p>
      </div>
      <button
        onClick={onToggle}
        className={`w-9 h-5 rounded-full transition-all duration-300 relative flex-shrink-0 ${on ? 'bg-violet-600' : 'bg-purple-800/50'}`}
      >
        <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${on ? 'left-4.5' : 'left-0.5'}`}
          style={{ left: on ? '18px' : '2px' }} />
      </button>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-purple-800/20" />;
}
