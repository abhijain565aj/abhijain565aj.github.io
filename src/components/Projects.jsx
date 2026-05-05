import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, Filter, Code2, Layers3, Search, SlidersHorizontal, Star, X } from 'lucide-react';
import projects from '../data/projects.json';
import SectionHeading from './SectionHeading.jsx';
import { byDateDesc, unique } from '../utils.js';

const sorters = {
  relevance: (a, b) => b.relevance - a.relevance,
  newest: byDateDesc,
  oldest: (a, b) => new Date(a.sortDate || 0) - new Date(b.sortDate || 0),
  title: (a, b) => a.title.localeCompare(b.title),
};

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-[2rem] p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-300/20 via-violet-500/20 to-amber-300/10 p-3 text-cyan-100 light:border-slate-200 light:text-violet-700">
          <Layers3 size={22} />
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-bold text-amber-200 light:bg-amber-50 light:text-amber-700">
          <Star size={13} /> {project.relevance}
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300 light:text-cyan-700">
        <span>{project.domain}</span>
      </div>
      <h3 className="mt-3 text-2xl font-black text-white light:text-slate-950">{project.title}</h3>
      <p className="mt-2 text-sm font-semibold text-violet-200 light:text-violet-700">{project.type}</p>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400 light:text-slate-600">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((tag) => <span key={tag} className="chip">{tag}</span>)}
      </div>
      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="flex items-center gap-2 text-xs font-semibold text-slate-400 light:text-slate-500"><Calendar size={15} /> {project.time}</span>
        <button onClick={() => onOpen(project)} className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950 transition hover:bg-cyan-100 light:bg-slate-950 light:text-white light:hover:bg-violet-800">
          Details <ArrowUpRight size={14} />
        </button>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-xl"
        onMouseDown={onClose}
      >
        <motion.article
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[2.2rem] border border-white/10 bg-slate-950 p-6 shadow-card light:border-slate-200 light:bg-white"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300 light:text-cyan-700">{project.domain}</p>
              <h3 className="mt-2 font-display text-3xl font-black text-white light:text-slate-950">{project.title}</h3>
              <p className="mt-2 text-sm font-semibold text-violet-200 light:text-violet-700">{project.under}</p>
            </div>
            <button onClick={onClose} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white light:border-slate-200 light:bg-slate-50 light:text-slate-700">
              <X size={18} />
            </button>
          </div>
          <p className="mt-6 text-base leading-8 text-slate-300 light:text-slate-600">{project.summary}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-slate-50"><p className="text-xs uppercase tracking-[0.2em] text-slate-500">Timeline</p><p className="mt-2 font-bold text-white light:text-slate-950">{project.time}</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-slate-50"><p className="text-xs uppercase tracking-[0.2em] text-slate-500">Type</p><p className="mt-2 font-bold text-white light:text-slate-950">{project.type}</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-slate-50"><p className="text-xs uppercase tracking-[0.2em] text-slate-500">Relevance</p><p className="mt-2 font-bold text-white light:text-slate-950">{project.relevance}/100</p></div>
          </div>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300 light:text-slate-600">
            {project.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />{point}</li>)}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-100 light:bg-slate-950 light:text-white"><Code2 size={18} /> GitHub</a>}
            {project.links.codeforces && <a href={project.links.codeforces} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:text-cyan-200 light:border-slate-200 light:bg-white light:text-slate-900">Codeforces <ArrowUpRight size={18} /></a>}
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [query, setQuery] = useState('');
  const [domain, setDomain] = useState('All');
  const [tag, setTag] = useState('All');
  const [sort, setSort] = useState('relevance');
  const [featured, setFeatured] = useState(false);
  const [active, setActive] = useState(null);

  const domains = useMemo(() => ['All', ...unique(projects.map((p) => p.domain))], []);
  const tags = useMemo(() => ['All', ...unique(projects.flatMap((p) => p.tags))], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...projects]
      .filter((p) => domain === 'All' || p.domain === domain)
      .filter((p) => tag === 'All' || p.tags.includes(tag))
      .filter((p) => !featured || p.featured)
      .filter((p) => !q || [p.title, p.summary, p.type, p.under, p.domain, ...p.tags, ...p.points].join(' ').toLowerCase().includes(q))
      .sort(sorters[sort]);
  }, [query, domain, tag, sort, featured]);

  return (
    <section id="projects" className="section-shell">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="builds" title="Project atlas">
          Search across projects, filter by domain or tag, open detailed cards, and sort the complete archive by relevance or timeline.
        </SectionHeading>
      </div>

      <div className="mt-10 grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl light:border-slate-200 light:bg-white md:grid-cols-[1.3fr_.8fr_.8fr_.7fr_auto]">
        <label className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects, tags, algorithms..." className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 light:border-slate-200 light:bg-slate-50 light:text-slate-950" />
        </label>
        <label className="relative">
          <Filter className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <select value={domain} onChange={(e) => setDomain(e.target.value)} className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/60 pl-11 pr-4 text-sm font-semibold text-white outline-none focus:border-cyan-300/50 light:border-slate-200 light:bg-slate-50 light:text-slate-950">
            {domains.map((d) => <option key={d}>{d}</option>)}
          </select>
        </label>
        <select value={tag} onChange={(e) => setTag(e.target.value)} className="h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm font-semibold text-white outline-none focus:border-cyan-300/50 light:border-slate-200 light:bg-slate-50 light:text-slate-950">
          {tags.map((t) => <option key={t}>{t}</option>)}
        </select>
        <label className="relative">
          <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/60 pl-11 pr-4 text-sm font-semibold text-white outline-none focus:border-cyan-300/50 light:border-slate-200 light:bg-slate-50 light:text-slate-950">
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="title">Title</option>
          </select>
        </label>
        <button onClick={() => setFeatured((v) => !v)} className={`h-12 rounded-2xl px-4 text-sm font-black transition ${featured ? 'bg-cyan-300 text-slate-950' : 'border border-white/10 bg-white/5 text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700'}`}>
          Featured
        </button>
      </div>

      <div className="mt-6 text-sm font-semibold text-slate-400 light:text-slate-600">Showing {filtered.length} of {projects.length} projects</div>
      <motion.div layout className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActive} />)}
        </AnimatePresence>
      </motion.div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
