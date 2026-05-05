import { motion } from 'framer-motion';
import { Cpu, Database, Languages, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import skills from '../data/skills.json';

const icons = [Languages, Wrench, Database, Cpu];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading eyebrow="stack" title="Technical toolkit">
        A recruiter-readable view of languages, frameworks, libraries and algorithmic strengths. This can be edited from <code className="rounded bg-white/10 px-2 py-1 font-mono text-sm text-cyan-200 light:bg-slate-100 light:text-violet-700">src/data/skills.json</code>.
      </SectionHeading>
      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {skills.map((group, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.article
              key={group.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass-card rounded-[2rem] p-5"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-300/10 text-violet-200 light:bg-violet-50 light:text-violet-700"><Icon size={20} /></div>
                <h3 className="text-xl font-black text-white light:text-slate-950">{group.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => <span key={item} className="chip">{item}</span>)}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
