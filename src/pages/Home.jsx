import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { stats, projects, testimonials, services } from '../data';
import AnimatedCounter from '../components/AnimatedCounter';
import useReveal from '../components/useReveal';

const WORDS = ['Products', 'Experiences', 'Brands', 'Startups', 'Futures'];

function RotatingWord() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIdx(i => (i+1)%WORDS.length); setVisible(true); }, 400);
    }, 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="inline-block text-fire" style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0) skewX(0deg)' : 'translateY(20px) skewX(-3deg)',
      transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
    }}>{WORDS[idx]}</span>
  );
}

function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(i => (i+1)%testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[active];
  return (
    <div className="relative">
      <div className="fire-border rounded-2xl p-8 md:p-12 bg-card min-h-[280px] flex flex-col justify-between transition-all duration-500">
        <div>
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_,i) => <span key={i} className="text-fire text-lg">★</span>)}
          </div>
          <p className="text-text text-lg md:text-xl leading-relaxed font-body italic">"{t.text}"</p>
        </div>
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-fire/20 border border-fire/30 flex items-center justify-center text-fire font-display font-black">
              {t.avatar}
            </div>
            <div>
              <div className="font-display font-bold text-text">{t.name}</div>
              <div className="text-muted text-sm">{t.role}</div>
            </div>
          </div>
          <div className="flex gap-2">
            {testimonials.map((_,i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i===active ? 'w-6 bg-fire' : 'bg-border hover:bg-muted'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useReveal();

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute inset-0 mesh-fire" />
        {/* Big glow orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15 animate-pulse-fire pointer-events-none"
          style={{background:'radial-gradient(circle, #FF4500 0%, #FF2200 30%, transparent 70%)'}} />
        {/* Rotating rings */}
        <div className="absolute top-1/2 right-16 -translate-y-1/2 w-80 h-80 hidden lg:block pointer-events-none">
          <div className="absolute inset-0 border border-fire/10 rounded-full animate-spin-slow" />
          <div className="absolute inset-8 border border-fire/15 rounded-full animate-spin-reverse" />
          <div className="absolute inset-16 border border-fire/20 rounded-full animate-spin-slow" />
          <div className="absolute inset-[88px] border-2 border-fire/40 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-fire animate-pulse-fire fire-glow-strong" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-fire/30 bg-fire/8 mb-10 reveal" data-delay="0">
            <span className="flex gap-0.5">
              {[0,0.15,0.3].map(d => <span key={d} className="w-1.5 h-1.5 rounded-full bg-fire animate-pulse" style={{animationDelay:`${d}s`}} />)}
            </span>
            <span className="text-fire text-xs font-mono tracking-widest uppercase font-bold">Indonesia's Premier Digital Studio</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl xl:text-[96px] leading-[0.93] tracking-tight mb-8">
            <span className="block reveal text-text" data-delay="100">We Forge</span>
            <span className="block reveal" data-delay="200"><RotatingWord /></span>
            <span className="block reveal text-text/25" data-delay="300">That Ignite.</span>
          </h1>

          <p className="text-text-dim text-lg md:text-xl max-w-xl leading-relaxed mb-12 reveal" data-delay="400">
            Strategy, design, and engineering studio crafting exceptional digital products for Indonesia's most ambitious companies — and the world.
          </p>

          <div className="flex flex-wrap gap-4 mb-20 reveal" data-delay="500">
            <Link to="/work" className="btn-fire relative group flex items-center gap-3 px-8 py-4 text-white font-display font-bold text-sm rounded-xl overflow-hidden">
              <span className="relative z-10">View Our Work</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link to="/contact" className="group flex items-center gap-3 px-8 py-4 border border-border hover:border-fire/50 text-text font-display font-bold text-sm rounded-xl transition-all duration-300 hover:bg-fire/5">
              Free Consultation
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border reveal" data-delay="600">
            {stats.map((s,i) => (
              <div key={i} className="group">
                <div className="text-3xl md:text-4xl font-display font-black text-fire text-glow">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-text-dim text-sm mt-1 group-hover:text-text transition-colors">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="relative border-y border-border py-5 overflow-hidden bg-card">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex">
              {['UI/UX Design','Web Development','Mobile Apps','Brand Identity','Digital Marketing','AI Integration','Motion Design','Product Strategy'].map((t,i) => (
                <span key={i} className="inline-flex items-center gap-4 mx-10 text-muted font-display font-black text-xs uppercase tracking-widest">
                  <span className="text-fire">◆</span>{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SERVICES ═══ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="reveal">
            <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-display font-black mt-3 text-text leading-tight">
              End-to-End<br />Digital Services
            </h2>
          </div>
          <Link to="/services" className="reveal text-sm font-display font-bold text-text-dim hover:text-fire transition-colors" data-delay="100">
            All Services →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={s.id} className="card-hover reveal border border-border rounded-2xl p-8 bg-card cursor-pointer group" data-delay={`${i*60}`}>
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="font-display font-black text-lg text-text mb-2 group-hover:text-fire transition-colors">{s.title}</h3>
              <p className="text-text-dim text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-fire/8 border border-fire/20 rounded-full text-fire text-xs font-mono">{tag}</span>
                ))}
              </div>
              <div className="text-xs font-mono text-muted pt-4 border-t border-border group-hover:text-fire/80 transition-colors">
                ✓ {s.metric}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WORK ═══ */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 reveal">
            <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">Selected Work</span>
            <h2 className="text-4xl md:text-6xl font-display font-black mt-3 text-text">Case Studies</h2>
          </div>
          <div className="space-y-3">
            {projects.slice(0,4).map((p,i) => (
              <Link to="/work" key={p.id}
                className="card-hover reveal group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 border border-border rounded-2xl bg-card hover:border-fire/40 transition-all gap-4"
                data-delay={`${i*80}`}>
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-black shrink-0"
                    style={{background:`linear-gradient(135deg, ${p.color}, ${p.color}88)`}}>
                    {String(i+1).padStart(2,'0')}
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-text group-hover:text-fire transition-colors">{p.title}</h3>
                    <p className="text-text-dim text-sm mt-0.5 line-clamp-1">{p.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0 pl-16 md:pl-0">
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold" style={{color:p.color, background:`${p.color}15`, border:`1px solid ${p.color}30`}}>{p.tag}</span>
                  <span className="text-xs font-mono text-muted hidden md:block">{p.result}</span>
                  <span className="text-fire opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 font-display font-bold">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link to="/work" className="inline-flex items-center gap-3 px-8 py-4 border border-fire/40 text-fire font-display font-bold text-sm rounded-xl hover:bg-fire hover:text-white transition-all duration-300">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-display font-black mt-3 text-text leading-tight">
              Words From<br />Our Clients
            </h2>
            <p className="text-text-dim text-lg mt-6 leading-relaxed">
              We measure success by the results we drive — in revenue, retention, and the stories our clients tell.
            </p>
            <div className="flex gap-8 mt-10 pt-8 border-t border-border">
              <div><div className="text-3xl font-display font-black text-fire">150+</div><div className="text-text-dim text-sm mt-1">Projects</div></div>
              <div><div className="text-3xl font-display font-black text-fire">98%</div><div className="text-text-dim text-sm mt-1">Satisfaction</div></div>
              <div><div className="text-3xl font-display font-black text-fire">5.0★</div><div className="text-text-dim text-sm mt-1">Average Rating</div></div>
            </div>
          </div>
          <div className="reveal" data-delay="150">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 mesh-fire opacity-150" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none"
          style={{background:'radial-gradient(ellipse, #FF4500 0%, #FF2200 40%, transparent 70%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fire/30 bg-fire/10 text-fire text-xs font-mono tracking-widest uppercase mb-8 reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-fire animate-pulse" /> Ready to Start?
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 reveal" data-delay="100">
            <span className="text-text">Let's Build</span><br />
            <span className="text-fire text-glow">Something Legendary.</span>
          </h2>
          <p className="text-text-dim text-xl mb-12 max-w-xl mx-auto reveal" data-delay="200">
            Tell us about your vision. We reply within 24 hours with a custom proposal and project roadmap — no fluff, just value.
          </p>
          <div className="flex justify-center gap-4 flex-wrap reveal" data-delay="300">
            <Link to="/contact" className="btn-fire relative group flex items-center gap-3 px-10 py-5 text-white font-display font-black text-base rounded-xl overflow-hidden">
              <span className="relative z-10">Start a Project →</span>
            </Link>
            <Link to="/work" className="group flex items-center gap-3 px-10 py-5 border border-border text-text font-display font-bold text-base rounded-xl hover:border-fire/50 hover:bg-fire/5 transition-all duration-300">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
