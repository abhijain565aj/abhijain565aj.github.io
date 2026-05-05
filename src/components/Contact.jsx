import { ArrowUpRight, Code2, Network, Mail } from 'lucide-react';
import profile from '../data/profile.json';
import SectionHeading from './SectionHeading.jsx';

function Icon({ kind }) {
  if (kind === 'github') return <Code2 size={18} />;
  if (kind === 'linkedin') return <Network size={18} />;
  if (kind === 'mail') return <Mail size={18} />;
  return <span className="font-mono text-xs">CF</span>;
}

export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-10">
      <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 lg:p-14">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading eyebrow="contact" title="Have an interesting problem, research idea or startup-grade build?">
            I am usually excited by hard technical systems, clean product ideas, algorithmic challenges and AI tools that actually help people work better.
          </SectionHeading>
          <a href={`mailto:${profile.email}`} className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:shadow-glow light:bg-slate-950 light:text-white">
            Mail me <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="relative mt-10 flex flex-wrap gap-3">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.url} target={social.url.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200 light:border-slate-200 light:bg-white light:text-slate-700 light:hover:text-violet-700">
              <Icon kind={social.kind} /> {social.label}
            </a>
          ))}
        </div>
      </div>
      <footer className="py-10 text-center text-sm text-slate-500">
        Built with React, Vite, Tailwind CSS and Framer Motion · Edit content through JSON · Deployable on GitHub Pages
      </footer>
    </section>
  );
}
