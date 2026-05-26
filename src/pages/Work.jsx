import { useState } from 'react';
import { projects } from '../data';
import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';

const categories = ['All', 'Web App', 'Mobile App', 'UI/UX Design', 'Full Stack', 'AI Tool'];

export default function Work() {
  useReveal();
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);
  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute inset-0 mesh-fire opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">Portfolio</span>
          <h1 className="text-5xl md:text-8xl font-display font-black mt-4 leading-[0.95] text-text reveal">
            Work We're<br /><span className="text-fire text-glow">Proud Of.</span>
          </h1>
          <p className="text-text-dim text-xl mt-8 max-w-xl leading-relaxed reveal" data-delay="150">
            A curated selection of projects where creativity met engineering to deliver genuine business impact.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-wrap gap-2 mb-12 reveal">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all border ${
                active === c ? 'bg-fire text-white border-fire fire-glow' : 'border-border text-muted hover:border-fire/50 hover:text-fire'
              }`}>{c}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <div key={p.id} className="card-hover reveal group border border-border rounded-2xl overflow-hidden bg-card" data-delay={`${i*70}`}>
              <div className="relative h-56 overflow-hidden" style={{background:`linear-gradient(135deg, ${p.color}15, ${p.color}05)`}}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[120px] font-display font-black select-none" style={{color:`${p.color}20`}}>{p.title[0]}</span>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full border-2 animate-spin-slow" style={{borderColor:`${p.color}40`,borderTopColor:p.color}} />
                </div>
                <div className="absolute inset-0 bg-void/80 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-sm border border-white/30 px-6 py-3 rounded-xl">View Case Study →</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold" style={{color:p.color,background:`${p.color}20`,border:`1px solid ${p.color}40`}}>{p.tag}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-muted">{p.category}</span>
                  <span className="text-xs font-mono text-muted">{p.year}</span>
                </div>
                <h3 className="font-display font-black text-2xl text-text group-hover:text-fire transition-colors mb-2">{p.title}</h3>
                <p className="text-text-dim text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs font-mono font-bold" style={{color:p.color}}>✓ {p.result}</span>
                  <span className="text-fire text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all font-display font-bold">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20 reveal">
          <p className="text-text-dim mb-6 text-lg">Got a project in mind?</p>
          <Link to="/contact" className="btn-fire relative inline-flex items-center gap-3 px-10 py-5 text-white font-display font-black text-sm rounded-xl overflow-hidden">
            <span className="relative z-10">Start Working Together →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
