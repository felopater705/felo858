import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
  quote: "The Aurore Solitaire is the most beautiful ring I have ever seen. The way it catches light is simply magical. LUMIÈRE made our engagement unforgettable.",
  author: 'Isabelle Laurent',
  role: 'Paris, France',
  rating: 5,
  },
  {
  quote: "I've collected jewelry for thirty years, and the Sovereign Bracelet is among the finest pieces in my collection. The craftsmanship is extraordinary.",
  author: 'James Whitmore',
  role: 'London, England',
  rating: 5,
  },
  {
  quote: "The 3D preview sold me before I even visited the boutique. Seeing every angle online made me confident in my purchase. The Étoile Pendant exceeded all expectations.",
  author: 'Sofia Marchetti',
  role: 'Milan, Italy',
  rating: 5,
  },
];

export default function Testimonials() {
  return (
  <section className="relative py-24 lg:py-32 px-6 lg:px-12 overflow-hidden">
    <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-champagne-400/5 rounded-full blur-[120px] -translate-x-1/2" />

    <div className="relative max-w-[1400px] mx-auto">
    <div className="text-center mb-16">
    <p className="section-label animate-fade-up" style={{ opacity: 0 }}>
    Client Stories
    </p>
    <h2 className="text-section font-serif font-light text-gradient-gold-light mb-4 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
    Cherished Worldwide
    </h2>
    <div className="flex items-center justify-center gap-3 mb-4 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
    <div className="divider-gold" />
    <div className="w-1.5 h-1.5 rounded-full bg-champagne-400/40" />
    <div className="divider-gold" />
    </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {testimonials.map((t, i) => (
    <div
      key={i}
      className="glass-card p-8 lg:p-10 animate-slide-up hover:border-champagne-400/20 transition-colors duration-500"
      style={{ animationDelay: `${0.1 + i * 0.12}s`, opacity: 0 }}
    >
    <Quote size={32} strokeWidth={1} className="text-champagne-400/30 mb-4" />
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={13}
        className={s <= t.rating ? 'fill-champagne-400 text-champagne-400' : 'text-ink-500'}
      />
      ))}
    </div>
    <p className="text-ink-100 font-light text-sm lg:text-base leading-relaxed mb-6 italic font-serif">
    "{t.quote}"
    </p>
    <div>
      <p className="text-champagne-300 font-sans text-sm font-light">{t.author}</p>
      <p className="text-ink-300 text-xs font-light">{t.role}</p>
    </div>
    </div>
    ))}
    </div>
    </div>
  </section>
  );
}
