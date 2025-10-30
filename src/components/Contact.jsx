import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="border-t border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Contact</h2>
            <p className="mt-3 text-neutral-300">Let’s build something great together</p>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
              <p className="text-neutral-300 leading-relaxed">
                I’m currently looking for full-time roles and exciting collaborations. If you have an opportunity or just want to say hi, my inbox is open.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <a href="mailto:hello.meet.dev@example.com" className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 hover:bg-neutral-900">
                  <Mail size={18} className="text-indigo-300" />
                  <span className="text-sm">
                    hello.meet.dev@example.com
                  </span>
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3">
                  <MapPin size={18} className="text-indigo-300" />
                  <span className="text-sm">Ahmedabad, India • Open to Remote</span>
                </div>
                <a href="https://github.com/meet-dev" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 hover:bg-neutral-900">
                  <Github size={18} className="text-indigo-300" />
                  <span className="text-sm">github.com/meet-dev</span>
                </a>
                <a href="https://www.linkedin.com/in/meet-dev" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 hover:bg-neutral-900">
                  <Linkedin size={18} className="text-indigo-300" />
                  <span className="text-sm">linkedin.com/in/meet-dev</span>
                </a>
              </div>
              <div className="mt-6">
                <a href="mailto:hello.meet.dev@example.com" className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60">Say Hello</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
