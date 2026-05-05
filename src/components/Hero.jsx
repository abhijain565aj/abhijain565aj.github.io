import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import profile from '../data/profile.json';

function FloatingBadge({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.25 }}
      className={`glass-card rounded-3xl px-4 py-3 text-sm font-semibold text-slate-200 light:text-slate-700 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="grid-mask absolute inset-0 opacity-70" />
      <div className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute right-8 top-32 hidden h-28 w-28 rounded-full bg-cyan-300/15 blur-xl lg:block" />
      <div className="absolute bottom-10 left-10 hidden h-40 w-40 rounded-full bg-amber-300/10 blur-2xl lg:block" />

      <div className="section-shell relative grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 light:border-cyan-500/20 light:bg-cyan-100 light:text-cyan-800">
            <Sparkles size={16} /> ICPC World Finals · IIT Bombay CSE · AI / Systems / Full Stack
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight text-white light:text-slate-950 sm:text-7xl lg:text-8xl">
            Building at the edge of <span className="gradient-text">algorithms</span>, systems and intelligence.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 light:text-slate-600 sm:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.focusAreas.map((area) => <span key={area} className="chip">{area}</span>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:shadow-glow light:bg-slate-950 light:text-white">
              Explore projects <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a href="mailto:23b0903@iitb.ac.in" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50 hover:text-cyan-200 light:border-slate-200 light:bg-white light:text-slate-900 light:hover:text-violet-700">
              <Download size={18} /> Contact / Resume
            </a>
          </div>
        </motion.div>

        <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
            className="orbit-line absolute inset-0 rounded-full p-px opacity-70 blur-[0.2px]"
          >
            <div className="h-full w-full rounded-full bg-slate-950 light:bg-slate-50" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
            className="orbit-line absolute inset-10 rounded-full p-px opacity-40"
          >
            <div className="h-full w-full rounded-full bg-slate-950 light:bg-slate-50" />
          </motion.div>
          <div className="absolute inset-16 rounded-[3rem] border border-white/10 bg-white/[0.06] p-6 shadow-glow backdrop-blur-2xl light:border-slate-200 light:bg-white/80 light:shadow-xl">
            <div className="flex h-full flex-col justify-between rounded-[2.2rem] border border-white/10 bg-slate-950/70 p-6 light:border-slate-200 light:bg-slate-50/90">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300 light:text-cyan-700">portfolio kernel</p>
                <h3 className="mt-4 font-display text-4xl font-black text-white light:text-slate-950">{profile.name}</h3>
                <p className="mt-2 text-sm text-slate-400 light:text-slate-600">{profile.education.degree}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.05] p-4 light:border-slate-200 light:bg-white">
                    <p className="gradient-text font-display text-2xl font-black">{stat.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400 light:text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <FloatingBadge className="absolute -left-4 top-14 animate-float">AIR 58 · JEE Advanced</FloatingBadge>
          <FloatingBadge className="absolute -right-6 bottom-24 animate-float [animation-delay:1.2s]">9.32 CPI · Honors + Minor</FloatingBadge>
          <FloatingBadge className="absolute bottom-6 left-16 animate-float [animation-delay:2s]">Codeforces 2000+</FloatingBadge>
        </div>
      </div>
    </section>
  );
}
