export default function About() {
  return (
    <div className="border-t border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">About Me</h2>
            <p className="mt-3 text-neutral-300">Who I am and what I do</p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-neutral-300 leading-relaxed">
              I’m Meet, a passionate fresher full‑stack developer focused on building reliable web experiences. I enjoy turning ideas into production‑ready features, whether it’s designing RESTful APIs, modeling data, or crafting pixel‑perfect interfaces.
            </p>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              My toolkit includes React, TypeScript, Tailwind CSS, Node.js, Express, and databases like PostgreSQL and MongoDB. I prioritize clean code, reusable components, and DX/UX.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Vite', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Prisma', 'Tailwind', 'Git'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-neutral-900 border border-neutral-800 text-neutral-200">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
