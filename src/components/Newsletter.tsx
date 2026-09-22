import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (email) {
    setSubmitted(true);
    setTimeout(() => {
    setSubmitted(false);
    setEmail('');
    }, 3000);
  }
  };

  return (
  <section className="relative py-20 px-6 lg:px-12">
    <div className="max-w-3xl mx-auto text-center">
    <div className="relative glass-card p-10 lg:p-16 overflow-hidden">
    <div className="absolute inset-0 bg-radial-gold opacity-30" />

    <div className="relative">
    <div className="w-14 h-14 rounded-full glass flex items-center justify-center mx-auto mb-6">
    <Mail size={22} strokeWidth={1.2} className="text-champagne-300" />
    </div>

    <p className="section-label text-champagne-400/70 mb-4">Join the Circle</p>
    <h2 className="text-section font-serif font-light text-gradient-gold-light mb-4">
    Private invitations,<br />delivered to you.
    </h2>
    <p className="text-ink-200 font-light text-sm lg:text-base max-w-md mx-auto mb-8">
    Be the first to discover new collections, private viewings, and exclusive pieces
    available only to our members.
    </p>

    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Your email address"
      required
      className="flex-1 bg-ink-700/40 border border-white/10 rounded-full px-6 py-3.5 text-sm text-ink-100 font-light placeholder:text-ink-300 focus:outline-none focus:border-champagne-400/40 transition-colors"
    />
    <button
      type="submit"
      className="btn-luxury-solid whitespace-nowrap"
    >
    {submitted ? (
      <>
      <Check size={15} strokeWidth={1.5} /> Subscribed
      </>
    ) : (
      <>
      Subscribe <ArrowRight size={14} />
      </>
    )}
    </button>
    </form>

    <p className="text-[0.65rem] tracking-[0.15em] uppercase text-ink-300 font-light mt-6">
    No spam. Only beauty. Unsubscribe anytime.
    </p>
    </div>
    </div>
    </div>
  </section>
  );
}
