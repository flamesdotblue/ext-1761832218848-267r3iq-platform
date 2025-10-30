import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-white text-lg">Meet<span className="text-indigo-400">.</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a className="hover:text-white transition-colors" href="#about">About</a>
            <a className="hover:text-white transition-colors" href="#projects">Projects</a>
            <a className="hover:text-white transition-colors" href="#contact">Contact</a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            >Hire Me</a>
          </nav>
          <a
            href="#contact"
            className="md:hidden inline-flex items-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
          >Hire</a>
        </div>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-neutral-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Meet • Built with React, Vite, Tailwind
        </div>
      </footer>
    </div>
  );
}
