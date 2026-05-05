import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, children, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.32em] text-cyan-300 dark:text-cyan-300">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-5xl light:text-slate-950">
        {title}
      </h2>
      {children && <p className="mt-5 text-base leading-8 text-slate-400 light:text-slate-600 sm:text-lg">{children}</p>}
    </motion.div>
  );
}
