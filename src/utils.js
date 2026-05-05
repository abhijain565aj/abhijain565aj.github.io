import clsx from 'clsx';

export const cn = (...classes) => clsx(classes);

export const unique = (items) => [...new Set(items)].filter(Boolean).sort((a, b) => a.localeCompare(b));

export const monthYear = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
};

export const byDateDesc = (a, b) => new Date(b.sortDate || b.date || 0) - new Date(a.sortDate || a.date || 0);
