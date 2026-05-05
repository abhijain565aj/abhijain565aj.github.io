import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Rocket, Target } from 'lucide-react';
import profile from '../data/profile.json';
import SectionHeading from './SectionHeading.jsx';

const cards = [
  { icon: GraduationCap, title: 'Education', value: 'IIT Bombay CSE', text: 'B.Tech 2027 · CPI 9.32 · CS Honors + Machine Intelligence & Data Science Minor' },
  { icon: Target, title: 'Direction', value: 'Systems + Intelligence', text: 'I like projects where algorithmic depth meets usable products and strong engineering.' },
  { icon: Rocket, title: 'Builder mode', value: 'Startup-oriented', text: 'Long-term goal: build products from first principles and own the full stack from research to launch.' },
  { icon: MapPin, title: 'Base', value: profile.location, text: 'Open to research collaborations, internships, serious projects and founder-style conversations.' },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="about" title="A portfolio meant to feel like a product, not a static resume">
          The home page gives instant signal, while deeper sections let recruiters and collaborators inspect projects by domain, relevance, tags and timeline.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="glass-card rounded-[2rem] p-5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 light:bg-cyan-50 light:text-cyan-700"><Icon size={22} /></div>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-slate-500">{card.title}</p>
                <h3 className="mt-2 text-xl font-black text-white light:text-slate-950">{card.value}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400 light:text-slate-600">{card.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
