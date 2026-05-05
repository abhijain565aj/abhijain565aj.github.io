import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Clock, Search } from 'lucide-react';
import blogs from '../data/blogs.json';
import SectionHeading from './SectionHeading.jsx';
import { unique } from '../utils.js';

export default function Blogs() {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('All');

  const tags = useMemo(() => ['All', ...unique(blogs.flatMap((b) => b.tags))], []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogs
      .filter((b) => tag === 'All' || b.tags.includes(tag))
      .filter((b) => !q || [b.title, b.summary, b.status, ...b.tags].join(' ').toLowerCase().includes(q))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [query, tag]);

  return (
    <section id="blogs" className="section-shell">
      <SectionHeading eyebrow="writing" title="Blog system ready for essays, notes and write-ups">
        The blog cards are also JSON-driven. Right now they are seeded as planned/draft posts; replace URLs with Markdown-rendered pages, Notion links, Substack links, or GitHub markdown posts later.
      </SectionHeading>

      <div className="mt-10 grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl light:border-slate-200 light:bg-white md:grid-cols-[1fr_auto]">
        <label className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search blogs..." className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50 light:border-slate-200 light:bg-slate-50 light:text-slate-950" />
        </label>
        <select value={tag} onChange={(e) => setTag(e.target.value)} className="h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm font-semibold text-white outline-none focus:border-cyan-300/50 light:border-slate-200 light:bg-slate-50 light:text-slate-950">
          {tags.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {filtered.map((blog, index) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="glass-card group flex min-h-[22rem] flex-col rounded-[2rem] p-5"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 light:bg-cyan-50 light:text-cyan-700"><BookOpen size={20} /></div>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-600">{blog.status}</span>
            </div>
            <h3 className="mt-5 text-xl font-black leading-7 text-white light:text-slate-950">{blog.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400 light:text-slate-600">{blog.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {blog.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
            <div className="mt-auto flex items-center justify-between pt-6 text-xs font-semibold text-slate-400 light:text-slate-500">
              <span className="flex items-center gap-2"><Clock size={14} /> {blog.readTime}</span>
              <a href={blog.url} className="inline-flex items-center gap-1 text-cyan-200 transition group-hover:translate-x-1 light:text-violet-700">Open <ArrowUpRight size={14} /></a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
