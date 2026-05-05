import { motion } from 'framer-motion';
import { BriefcaseBusiness, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import experience from '../data/experience.json';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading eyebrow="work" title="Experience & responsibility">
          Professional product work, teaching, mentorship and contest operations — designed as a timeline so it scales cleanly with future internships and startup work.
        </SectionHeading>
        <div className="relative">
          <div className="absolute left-5 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent" />
          <div className="space-y-5">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.period}`}
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="relative ml-12 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl light:border-slate-200 light:bg-white"
              >
                <div className="absolute -left-[3.2rem] top-6 grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/30 bg-slate-950 text-cyan-200 shadow-glow light:bg-white light:text-cyan-700">
                  <BriefcaseBusiness size={18} />
                </div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300 light:text-cyan-700">{item.type}</p>
                    <h3 className="mt-2 text-2xl font-black text-white light:text-slate-950">{item.role}</h3>
                    <p className="mt-1 font-semibold text-violet-200 light:text-violet-700">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-600">{item.period}</span>
                </div>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-400 light:text-slate-600"><MapPin size={15} /> {item.location}</p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300 light:text-slate-600">
                  {item.highlights.map((h) => <li key={h} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{h}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
