import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import projects from '../data/projects.json';
import blogs from '../data/blogs.json';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((v) => !v);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const items = useMemo(() => [
    ...projects.map((p) => ({ title: p.title, subtitle: `${p.domain} · ${p.time}`, href: '#projects', type: 'Project', text: [p.title, p.summary, p.domain, ...p.tags].join(' ') })),
    ...blogs.map((b) => ({ title: b.title, subtitle: `${b.status} · ${b.readTime}`, href: '#blogs', type: 'Blog', text: [b.title, b.summary, ...b.tags].join(' ') })),
    { title: 'Experience', subtitle: 'Internship, TA, mentorship', href: '#experience', type: 'Section', text: 'work experience internship teaching assistant mentor' },
    { title: 'Achievements', subtitle: 'ICPC, JEE, KVPY, Olympiads', href: '#achievements', type: 'Section', text: 'achievements ICPC JEE KVPY olympiads' },
  ], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => !q || item.text.toLowerCase().includes(q)).slice(0, 8);
  }, [items, query]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-40 hidden rounded-full border border-white/10 bg-white/10 px-4 py-3 text-xs font-bold text-slate-200 shadow-card backdrop-blur-xl transition hover:border-cyan-300/40 hover:text-cyan-100 light:border-slate-200 light:bg-white light:text-slate-600 light:hover:text-violet-700 sm:inline-flex">
        <Search size={15} className="mr-2" /> Search <span className="ml-2 rounded bg-white/10 px-1.5 py-0.5 font-mono light:bg-slate-100">⌘K</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-slate-950/80 p-4 backdrop-blur-xl" onMouseDown={() => setOpen(false)}>
            <motion.div initial={{ y: 24, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 24, scale: 0.97 }} className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-card light:border-slate-200 light:bg-white" onMouseDown={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 border-b border-white/10 p-4 light:border-slate-200">
                <Search size={20} className="text-cyan-300" />
                <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects, blogs, achievements..." className="h-10 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500 light:text-slate-950" />
                <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-slate-400 hover:text-white light:bg-slate-100 light:text-slate-600"><X size={18} /></button>
              </div>
              <div className="max-h-[26rem] overflow-y-auto p-3">
                {filtered.map((item) => (
                  <a key={`${item.type}-${item.title}`} href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl p-4 transition hover:bg-white/[0.06] light:hover:bg-slate-100">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-bold text-white light:text-slate-950">{item.title}</h3>
                      <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200 light:bg-cyan-50 light:text-cyan-700">{item.type}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-400 light:text-slate-600">{item.subtitle}</p>
                  </a>
                ))}
                {!filtered.length && <p className="p-8 text-center text-sm text-slate-500">No matches found.</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
