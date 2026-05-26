import { team, stats } from '../data';
import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const values = [
  { icon:'🔥', title:'Craft First', desc:'We obsess over every pixel, every line of code, every interaction. Quality is non-negotiable and mediocrity is not in our vocabulary.' },
  { icon:'⚡', title:'Radical Honesty', desc:'We challenge bad ideas, ask hard questions, and always tell clients what they need to hear — not what they want to hear.' },
  { icon:'🎯', title:'Ship Relentlessly', desc:'Strategy without execution is just theory. We bias heavily toward action, speed, and measurable outcomes over endless planning.' },
  { icon:'🚀', title:'Grow Together', desc:"Our clients' success compounds our own. We build relationships designed to last decades, not just one project." },
];

export default function About() {
  useReveal();
  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute inset-0 mesh-fire opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">About Nexora</span>
          <h1 className="text-5xl md:text-8xl font-display font-black mt-4 leading-[0.95] text-text reveal">
            Built by Makers,<br /><span className="text-fire text-glow">for Builders.</span>
          </h1>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <p className="text-text text-xl leading-relaxed mb-6">
              Nexora was founded in 2021 by a group of designers and engineers who were tired of agencies that over-promised and under-delivered.
            </p>
            <p className="text-text-dim text-lg leading-relaxed mb-6">
              We started with one belief: great digital products come from teams who care deeply about the craft — not factories churning out templated solutions.
            </p>
            <p className="text-text-dim text-lg leading-relaxed">
              Today, we are a 30-person studio in Jakarta, working with startups, scale-ups, and enterprise brands across Indonesia and Southeast Asia.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal" data-delay="150">
            {stats.map((s, i) => (
              <div key={i} className="card-hover border border-border rounded-2xl p-8 bg-card text-center">
                <div className="text-4xl font-display font-black text-fire text-glow">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-text-dim text-sm mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-16 reveal">
            <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">Values</span>
            <h2 className="text-4xl md:text-6xl font-display font-black mt-3 text-text">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card-hover reveal flex gap-6 p-8 border border-border rounded-2xl bg-card group" data-delay={`${i*80}`}>
                <span className="text-4xl shrink-0">{v.icon}</span>
                <div>
                  <h3 className="font-display font-black text-xl text-text mb-2 group-hover:text-fire transition-colors">{v.title}</h3>
                  <p className="text-text-dim text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-16 reveal">
          <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">The Team</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-3 text-text">The People Behind<br />the Magic</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((m, i) => (
            <div key={i} className="card-hover reveal group border border-border rounded-2xl p-6 bg-card text-center" data-delay={`${i*60}`}>
              <div className="w-16 h-16 rounded-2xl bg-fire/10 border border-fire/20 flex items-center justify-center text-fire font-display font-black text-lg mx-auto mb-4 group-hover:bg-fire group-hover:text-white group-hover:border-fire transition-all duration-300">
                {m.initials}
              </div>
              <h3 className="font-display font-semibold text-text text-sm">{m.name}</h3>
              <p className="text-muted text-xs mt-1">{m.role}</p>
              <span className="inline-block mt-2 text-xs font-mono text-fire/60">{m.years}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">Recognition</span>
            <h2 className="text-3xl font-display font-black mt-3 text-text">Awards & Press</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { award:'Best Digital Agency', org:'Startup Indonesia Awards 2024', emoji:'🏆' },
              { award:'Top 10 Design Studio', org:'Forbes Indonesia 2024', emoji:'🥇' },
              { award:'Awwwards SOTD', org:'Site of the Day — 5× Winner', emoji:'⭐' },
              { award:'Red Dot Design Award', org:'Digital Design Category 2023', emoji:'🔴' },
            ].map((a, i) => (
              <div key={i} className="card-hover reveal text-center border border-border rounded-2xl p-6 bg-surface" data-delay={`${i*80}`}>
                <div className="text-3xl mb-3">{a.emoji}</div>
                <h4 className="font-display font-bold text-sm text-text mb-1">{a.award}</h4>
                <p className="text-muted text-xs">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 max-w-4xl mx-auto px-6 text-center reveal">
        <h2 className="text-5xl font-display font-black text-text mb-6">Join the Team?</h2>
        <p className="text-text-dim text-lg mb-10 max-w-md mx-auto">We are always looking for exceptional designers and engineers who share our obsession with craft.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact" className="btn-fire relative px-8 py-4 text-white font-display font-bold rounded-xl overflow-hidden">
            <span className="relative z-10">View Open Roles →</span>
          </Link>
          <Link to="/contact" className="px-8 py-4 border border-border text-text font-display font-bold rounded-xl hover:border-fire/50 transition-all">
            Send Your Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
