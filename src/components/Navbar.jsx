import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Network, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import profile from '../data/profile.json';

const navItems = [
  ['Home', '#home'],
  ['Work', '#experience'],
  ['Projects', '#projects'],
  ['Blogs', '#blogs'],
  ['Achievements', '#achievements'],
  ['Contact', '#contact'],
];

function SocialIcon({ kind }) {
  if (kind === 'github') return <Code2 size={18} />;
  if (kind === 'linkedin') return <Network size={18} />;
  if (kind === 'mail') return <Mail size={18} />;
  return <span className="font-mono text-xs">CF</span>;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(() => localStorage.getItem('theme') === 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('light', light);
    document.documentElement.classList.toggle('dark', !light);
    localStorage.setItem('theme', light ? 'light' : 'dark');
  }, [light]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl light:border-slate-200/80 light:bg-white/75"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 via-violet-500 to-amber-300 font-display text-sm font-black text-slate-950 shadow-glow">AJ</span>
          <span className="hidden sm:block">
            <span className="block font-display text-sm font-black text-white light:text-slate-950">{profile.name}</span>
            <span className="block text-xs text-slate-400 light:text-slate-500">IIT Bombay CSE</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {profile.socials.slice(0, 3).map((social) => (
              <a key={social.label} href={social.url} target={social.url.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" aria-label={social.label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200 light:border-slate-200 light:bg-white light:text-slate-600 light:hover:text-violet-700">
                <SocialIcon kind={social.kind} />
              </a>
            ))}
          </div>
          <button onClick={() => setLight((v) => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:text-cyan-200 light:border-slate-200 light:bg-white light:text-slate-600 light:hover:text-violet-700" aria-label="Toggle theme">
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 lg:hidden light:border-slate-200 light:bg-white light:text-slate-600" aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 backdrop-blur-xl lg:hidden light:border-slate-200 light:bg-white/95">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white light:text-slate-700 light:hover:bg-slate-100 light:hover:text-slate-950">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
