import { useState } from 'react';
import { faqs } from '../data';
import useReveal from '../components/useReveal';

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name:'', email:'', company:'', budget:'', service:'', message:'' });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email && form.message) setSent(true); };

  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute inset-0 mesh-fire opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">Contact</span>
          <h1 className="text-5xl md:text-8xl font-display font-black mt-4 leading-[0.95] text-text reveal">
            Let's Build<br /><span className="text-fire text-glow">Together.</span>
          </h1>
          <p className="text-text-dim text-xl mt-8 max-w-lg leading-relaxed reveal" data-delay="150">
            Every great product starts with a conversation. Tell us your vision and we will reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="reveal">
            {sent ? (
              <div className="fire-border rounded-2xl p-12 text-center bg-card min-h-[400px] flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-fire/20 border border-fire/40 flex items-center justify-center text-4xl mb-6 fire-glow animate-pulse-fire">🔥</div>
                <h3 className="font-display font-black text-3xl text-fire mb-3">Message Sent!</h3>
                <p className="text-text-dim mb-8 max-w-xs">We will get back to you within 24 hours. Watch your inbox.</p>
                <button onClick={() => { setSent(false); setForm({ name:'',email:'',company:'',budget:'',service:'',message:'' }); }}
                  className="px-6 py-3 border border-fire/40 text-fire text-sm font-display font-bold rounded-xl hover:bg-fire hover:text-white transition-all">
                  Send Another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {[['name','Name *','Budi Santoso','text'],['email','Email *','budi@company.com','email']].map(([n,l,p,t]) => (
                    <div key={n}>
                      <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">{l}</label>
                      <input name={n} value={form[n]} onChange={handleChange} type={t} placeholder={p}
                        className="w-full bg-card border border-border rounded-xl px-5 py-4 text-text text-sm focus:outline-none focus:border-fire transition-colors placeholder:text-muted" />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Company</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="PT. Example"
                      className="w-full bg-card border border-border rounded-xl px-5 py-4 text-text text-sm focus:outline-none focus:border-fire transition-colors placeholder:text-muted" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Budget</label>
                    <select name="budget" value={form.budget} onChange={handleChange}
                      className="w-full bg-card border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-fire transition-colors text-text-dim">
                      <option value="">Select range</option>
                      <option>{'<'} Rp 25 Juta</option>
                      <option>Rp 25 – 75 Juta</option>
                      <option>Rp 75 – 200 Juta</option>
                      <option>Rp 200 Juta+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-3">Service Needed</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {['UI/UX Design','Web Dev','Mobile App','Branding','Marketing','AI Integration'].map(s => (
                      <button type="button" key={s} onClick={() => setForm({ ...form, service: s })}
                        className={`py-2.5 px-3 text-xs font-mono font-bold rounded-xl border transition-all ${
                          form.service === s ? 'border-fire bg-fire/15 text-fire' : 'border-border text-muted hover:border-fire/50 hover:text-fire'
                        }`}>{s}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Your Project *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={6}
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    className="w-full bg-card border border-border rounded-xl px-5 py-4 text-text text-sm focus:outline-none focus:border-fire transition-colors placeholder:text-muted resize-none" />
                </div>
                <button type="submit"
                  className="btn-fire relative w-full py-5 text-white font-display font-black text-sm rounded-xl overflow-hidden">
                  <span className="relative z-10">Send Message →</span>
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8 reveal" data-delay="150">
            <div>
              <h3 className="font-display font-black text-2xl text-text mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {[['Email','hello@nexora.id'],['Phone','+62 812 3456 7890'],['WhatsApp','+62 812 3456 7890'],['Address','Jl. Sudirman Kav 52, Jakarta Selatan 12190']].map(([l,v]) => (
                  <div key={l} className="flex gap-5 p-4 border border-border rounded-xl bg-card hover:border-fire/30 transition-colors">
                    <span className="text-xs font-mono text-muted w-16 shrink-0 pt-0.5">{l}</span>
                    <span className="text-text text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h4 className="font-display font-bold text-text mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-text-dim">Mon – Fri</span><span className="text-fire font-mono font-bold">09:00 – 18:00 WIB</span></div>
                <div className="flex justify-between"><span className="text-text-dim">Saturday</span><span className="text-text-dim">10:00 – 14:00 WIB</span></div>
                <div className="flex justify-between"><span className="text-text-dim">Sunday</span><span className="text-muted">Closed</span></div>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-fire/30 bg-fire/5 fire-glow">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-mono text-sm font-bold">Currently Available</span>
              </div>
              <p className="text-text-dim text-sm">We are accepting new projects. Next available slot: <span className="text-fire font-bold">June 2025</span></p>
            </div>
          </div>
        </div>

        <div className="mt-32 reveal">
          <div className="mb-12">
            <span className="text-xs font-mono text-fire tracking-widest uppercase font-bold">FAQ</span>
            <h2 className="text-4xl font-display font-black mt-3 text-text">Common Questions</h2>
          </div>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden bg-card">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface transition-colors">
                  <span className="font-display font-semibold text-text">{faq.q}</span>
                  <span className={`text-fire text-2xl font-light transition-transform duration-300 ml-4 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                  <p className="px-6 pb-6 text-text-dim text-sm leading-relaxed border-t border-border pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
