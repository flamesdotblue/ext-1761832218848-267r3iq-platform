import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: 'DevBoard – Project Management',
    desc: 'Kanban board with drag-and-drop, auth, and REST API. Built with React, Node, Express, and MongoDB.',
    stack: ['React', 'Tailwind', 'Node', 'Express', 'MongoDB'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Chatter – Real-time Chat',
    desc: 'Socket.io powered chat with rooms, typing indicators, and JWT auth.',
    stack: ['React', 'Socket.io', 'Node', 'Express', 'PostgreSQL'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Cookify – Recipe Finder',
    desc: 'Search recipes from a public API, save favorites locally, and responsive UI.',
    stack: ['Vite', 'TypeScript', 'Tailwind'],
    demo: '#',
    code: '#',
  },
];

export default function Projects() {
  return (
    <div className="border-t border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Projects</h2>
            <p className="mt-3 text-neutral-300">Some things I’ve built recently</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-neutral-100 text-neutral-900 px-3.5 py-2 text-sm font-semibold hover:bg-white">
            Collaborate
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group rounded-xl border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/40 transition-colors overflow-hidden">
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2 py-1 rounded-md text-xs bg-neutral-900 border border-neutral-800 text-neutral-300">{s}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.demo} className="inline-flex items-center gap-1.5 text-sm text-indigo-300 hover:text-indigo-200">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.code} className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
