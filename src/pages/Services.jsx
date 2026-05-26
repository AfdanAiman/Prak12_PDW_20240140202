import { Link } from 'react-router-dom';
import { services, process } from '../data';
import useReveal from '../components/useReveal';

export default function Services() {
  useReveal();
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute inset-0 mesh-fire opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="reveal">
            <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">Our Services</span>
            <h1 className="text-5xl md:text-8xl font-display font-black mt-4 leading-[0.95] text-text">
              Everything You<br /><span className="text-fire text-glow">Need to Win.</span>
            </h1>
          </div>
          <p className="text-text-dim text-xl mt-8 max-w-xl leading-relaxed reveal" data-delay="150">
            From zero to product-market fit. Full-spectrum digital product development — no multiple agencies, no coordination overhead.
          </p>
          <div className="flex gap-4 mt-10 reveal" data-delay="250">
            <Link to="/contact" className="btn-fire relative px-8 py-4 text-white font-display font-bold text-sm rounded-xl overflow-hidden">
              <span className="relative z-10">Get a Free Quote →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={s.id} className="card-hover reveal group border border-border rounded-2xl p-10 bg-card relative overflow-hidden" data-delay={`${i*70}`}>
              <div className="absolute top-6 right-8 text-8xl font-display font-black text-text/4 select-none">{String(i+1).padStart(2,'0')}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-fire/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-5xl mb-6">{s.icon}</div>
                <h3 className="font-display font-black text-2xl text-text mb-3 group-hover:text-fire transition-colors">{s.title}</h3>
                <p className="text-text-dim text-sm leading-relaxed mb-8">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {s.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-fire/8 border border-fire/20 rounded-full text-fire text-xs font-mono font-bold">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="text-xs font-mono text-muted">✓ {s.metric}</span>
                  <span className="text-fire text-sm opacity-0 group-hover:opacity-100 transition-all font-display font-bold group-hover:translate-x-1">Learn more →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-20 reveal">
            <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">How We Work</span>
            <h2 className="text-4xl md:text-6xl font-display font-black mt-3 text-text">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((p, i) => (
              <div key={p.step} className="card-hover reveal group relative border border-border rounded-2xl p-8 bg-card" data-delay={`${i*80}`}>
                <div className="absolute -top-4 left-8">
                  <span className="px-4 py-1.5 bg-fire rounded-full font-mono font-bold text-white text-xs">{p.step}</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-black text-xl text-text group-hover:text-fire transition-colors">{p.title}</h3>
                    <span className="text-xs font-mono text-muted border border-border rounded-full px-3 py-1">{p.duration}</span>
                  </div>
                  <p className="text-text-dim text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">Pricing</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-3 text-text">Simple & Transparent</h2>
          <p className="text-text-dim mt-4 max-w-md mx-auto">No hidden fees. No surprises. Just clear value for every budget.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name:'Starter', price:'25', unit:'juta', desc:'Perfect for MVPs, landing pages, and brand refreshes.', features:['1 Core Service','UI/UX Design','React Frontend','3 Revision Rounds','30-day Support','Source Code Included'], highlight:false },
            { name:'Growth', price:'75', unit:'juta', desc:'Full digital product for funded startups and SMEs.', features:['3 Services Bundled','Web + Mobile App','Backend API','Brand Identity System','6-month Support','Priority Response'], highlight:true },
            { name:'Enterprise', price:'Custom', unit:'', desc:'Bespoke engagement for large organizations and scale-ups.', features:['Dedicated Dev Team','Custom Infrastructure','SLA Guarantees','Ongoing Retainer','Executive Reporting','NDA & IP Protection'], highlight:false },
          ].map((plan, i) => (
            <div key={plan.name} className={`card-hover reveal relative rounded-2xl p-10 border transition-all ${
              plan.highlight ? 'bg-fire border-fire fire-glow-strong' : 'bg-card border-border hover:border-fire/30'
            }`} data-delay={`${i*100}`}>
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-void border border-fire rounded-full text-fire text-xs font-mono font-bold whitespace-nowrap">
                  ⚡ Most Popular
                </div>
              )}
              <h3 className={`font-display font-black text-2xl mb-2 ${plan.highlight ? 'text-white' : 'text-text'}`}>{plan.name}</h3>
              <div className={`flex items-end gap-2 my-6 ${plan.highlight ? 'text-white' : ''}`}>
                <span className="text-5xl font-display font-black">{plan.price}</span>
                {plan.unit && <span className="text-xl font-display mb-1 opacity-80">{plan.unit}</span>}
              </div>
              <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? 'text-white/70' : 'text-text-dim'}`}>{plan.desc}</p>
              <ul className="space-y-3 mb-10">
                {plan.features.map(f => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${plan.highlight ? 'text-white' : 'text-text-dim'}`}>
                    <span className={`text-xs font-bold ${plan.highlight ? 'text-white' : 'text-fire'}`}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`block text-center py-4 font-display font-black text-sm rounded-xl transition-all duration-300 ${
                plan.highlight ? 'bg-void text-fire hover:bg-deep' : 'border-2 border-fire/40 text-fire hover:bg-fire hover:text-white hover:border-fire'
              }`}>
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
