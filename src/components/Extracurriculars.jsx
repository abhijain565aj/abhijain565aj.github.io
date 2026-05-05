import { motion } from 'framer-motion';
import { Sparkles, Trophy } from 'lucide-react';
import extracurriculars from '../data/extracurriculars.json';
import SectionHeading from './SectionHeading.jsx';

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="section-shell">
      <SectionHeading eyebrow="beyond academics" title="Extracurriculars, hackathons and campus competitions">
        Selected non-course milestones across hackathons, mathematics contests, programming events, robotics, finance, business and sports.
      </SectionHeading>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {extracurriculars.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            whileHover={{ y: -5 }}
            className="glass-card group relative overflow-hidden rounded-[2rem] p-5"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-violet-400/20" />
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-300/20 via-cyan-300/10 to-violet-400/20 text-amber-200 light:text-amber-700">
                {item.rank === 'Completed' || item.rank === 'Participant' ? <Sparkles size={22} /> : <Trophy size={22} />}
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-600">{item.year}</span>
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300 light:text-cyan-700">{item.category}</p>
            <h3 className="mt-2 text-xl font-black text-white light:text-slate-950">{item.title}</h3>
            <p className="mt-2 text-sm font-bold text-amber-200 light:text-amber-700">{item.rank}</p>
            <p className="mt-2 text-sm leading-6 text-violet-200 light:text-violet-700">{item.subtitle}</p>
            <p className="mt-4 text-sm leading-6 text-slate-400 light:text-slate-600">{item.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
