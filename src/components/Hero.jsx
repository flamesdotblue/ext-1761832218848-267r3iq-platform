import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-300">
              Fresher • Full-Stack Developer
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Hi, I’m Meet
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400">I build modern web apps</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              Passionate about crafting scalable backends and delightful frontends. I design APIs, model databases, and ship responsive UI with performance and accessibility in mind.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-semibold shadow hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-400/60">View Projects</a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60">Get in Touch</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-neutral-300/90">
              <span className="px-2.5 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60">React</span>
              <span className="px-2.5 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60">Node.js</span>
              <span className="px-2.5 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60">Express</span>
              <span className="px-2.5 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60">MongoDB</span>
              <span className="px-2.5 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60">PostgreSQL</span>
              <span className="px-2.5 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60">TypeScript</span>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-xl border border-neutral-800/60 bg-neutral-900/30 backdrop-blur overflow-hidden">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-neutral-950/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
