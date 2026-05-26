import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-deep overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-fire rounded-lg" />
                <span className="relative text-white font-display font-black z-10">N</span>
              </div>
              <span className="font-display font-black text-2xl text-text">nex<span className="text-fire">ora</span></span>
            </Link>
            <p className="text-text-dim text-sm leading-relaxed max-w-xs mb-8">
              We build digital products that move culture forward. Strategy, design, and engineering under one roof — Jakarta to the world.
            </p>
            <div className="flex gap-3">
              {['IG','LI','TW','DR','BE'].map(s => (
                <a key={s} href="#" className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-xs font-mono text-muted hover:border-fire hover:text-fire transition-all duration-200">{s}</a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-5">Pages</h4>
            <ul className="space-y-3">
              {[['Home','/'],['Services','/services'],['Work','/work'],['About','/about'],['Contact','/contact']].map(([l,h]) => (
                <li key={l}><Link to={h} className="text-text-dim text-sm hover:text-fire transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {['UI/UX Design','Web Dev','Mobile App','Branding','Marketing','AI Tools'].map(s => (
                <li key={s}><Link to="/services" className="text-text-dim text-sm hover:text-fire transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3 text-text-dim text-sm">
              <li className="hover:text-fire transition-colors cursor-pointer">hello@nexora.id</li>
              <li className="hover:text-fire transition-colors cursor-pointer">+62 812 3456 7890</li>
              <li className="leading-relaxed mt-4 text-muted text-xs">Jl. Sudirman Kav 52-53<br />Jakarta Selatan 12190</li>
            </ul>
            <div className="mt-8 p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-green-400">Available for projects</span>
              </div>
              <p className="text-xs text-muted">Next slot: June 2025</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs font-mono">© {year} Nexora Studio. All rights reserved.</p>
          <p className="text-muted text-xs font-mono">Built with React + Vite + Tailwind CSS 🔥 Jakarta, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
