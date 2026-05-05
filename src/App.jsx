import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Blogs from './components/Blogs.jsx';
import Achievements from './components/Achievements.jsx';
import Extracurriculars from './components/Extracurriculars.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import CommandPalette from './components/CommandPalette.jsx';

export default function App() {
  useEffect(() => {
    const onMove = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="noise min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blogs />
        <Achievements />
        <Extracurriculars />
        <Skills />
        <Contact />
      </main>
      <CommandPalette />
    </div>
  );
}
