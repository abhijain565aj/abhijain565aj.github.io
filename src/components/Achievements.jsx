import { motion } from 'framer-motion';
import { Award, Trophy, Zap } from 'lucide-react';
import achievements from '../data/achievements.json';
import SectionHeading from './SectionHeading.jsx';

const toneMap = {
  gold: 'from-amber-300/20 to-orange-500/10 text-amber-200 border-amber-300/20 light:text-amber-700',
  cyan: 'from-cyan-300/20 to-blue-500/10 text-cyan-200 border-cyan-300/20 light:text-cyan-700',
  violet: 'from-violet-300/20 to-fuchsia-500/10 text-violet-200 border-violet-300/20 light:text-violet-700',
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeading eyebrow="signals" title="Achievements that shaped the journey">
        A compact wall of competitive programming, academic and olympiad milestones — the resume content is converted into a cleaner visual system here.
      </SectionHeading>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className={`glass-card group relative overflow-hidden rounded-[2rem] border bg-gradient-to-br p-5 ${toneMap[item.tone] || toneMap.cyan}`}
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl transition group-hover:bg-white/20" />
            <div className="mb-5 flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white light:bg-slate-950/5 light:text-slate-900">
                {index % 3 === 0 ? <Trophy size={20} /> : index % 3 === 1 ? <Award size={20} /> : <Zap size={20} />}
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-slate-200 light:bg-white light:text-slate-600">{item.year}</span>
            </div>
            <h3 className="text-lg font-black text-white light:text-slate-950">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300 light:text-slate-600">{item.subtitle}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
