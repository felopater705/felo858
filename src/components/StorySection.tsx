import { useEffect, useRef, useState } from 'react';
import { Sparkles, Gem, Award, Globe } from 'lucide-react';

const stats = [
  { value: '100', label: 'Years of Heritage', suffix: '+' },
  { value: '50', label: 'Master Jewelers', suffix: '' },
  { value: '12', label: 'Ateliers Worldwide', suffix: '' },
  { value: '1000', label: 'Designs Crafted', suffix: '+' },
];

const values = [
  { icon: Gem, title: 'Ethically Sourced', desc: 'Every gemstone is traceable to its origin, certified conflict-free.' },
  { icon: Award, title: 'Master Craftsmanship', desc: 'Each piece passes through the hands of artisans with decades of expertise.' },
  { icon: Globe, title: 'Timeless Heritage', desc: 'A century of design tradition, reimagined for the modern world.' },
  { icon: Sparkles, title: 'Bespoke Service', desc: 'Custom commissions and personal consultations for every client.' },
];

export default function StorySection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
    if (entry.isIntersecting) setVisible(true);
    },
    { threshold: 0.15 }
  );
  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => observer.disconnect();
  }, []);

  return (
  <section id="story" ref={sectionRef} className="relative">
    {/* Full-width cinematic image */}
    <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden">
    <img
      src="https://images.pexels.com/photos/6263068/pexels-photo-6263068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      alt="Master jeweler at work"
      className={`w-full h-full object-cover transition-all duration-[2s] ${
      visible ? 'scale-100 opacity-100' : 'scale-110 opacity-40'
      }`}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/50 to-ink-900" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 to-transparent" />

    {/* Cinematic text */}
    <div className="absolute inset-0 flex items-center">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
    <div className={`max-w-xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <p className="section-label text-champagne-400/80 mb-4">The House of LUMIÈRE</p>
      <h2 className="text-display font-serif font-light text-gradient-gold-light mb-6 leading-tight">
      A Century of<br />Brilliance.
      </h2>
      <div className="divider-gold mb-6" />
      <p className="text-ink-100 font-light text-base lg:text-lg leading-relaxed">
      Since 1924, our ateliers have been guided by a singular pursuit: to capture light
      and transform it into wearable art. Every LUMIÈRE piece begins as a sketch and ends
      as an heirloom — a moment of brilliance made eternal.
      </p>
    </div>
    </div>
    </div>

    {/* Parallax gradient bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
    </div>

    {/* Values section */}
    <div className="relative py-24 lg:py-32 px-6 lg:px-12 bg-ink-900">
    <div className="max-w-[1400px] mx-auto">
    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, i) => (
      <div
        key={i}
        className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: `${i * 0.1}s` }}
      >
      <p className="font-serif text-4xl lg:text-5xl text-gradient-gold font-light mb-2">
        {stat.value}{stat.suffix}
      </p>
      <p className="text-[0.65rem] tracking-[0.25em] uppercase text-ink-300 font-light">
        {stat.label}
      </p>
      </div>
      ))}
    </div>

    {/* Values grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {values.map((value, i) => (
      <div
        key={i}
        className={`group glass-card p-8 lg:p-10 hover:border-champagne-400/20 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
      >
      <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-full glass flex items-center justify-center shrink-0 group-hover:border-champagne-400/30 group-hover:scale-110 transition-all duration-500">
        <value.icon size={22} strokeWidth={1.2} className="text-champagne-300" />
      </div>
      <div>
      <h3 className="font-serif text-xl text-ink-100 font-light mb-2">{value.title}</h3>
      <p className="text-sm text-ink-200 font-light leading-relaxed">{value.desc}</p>
      </div>
      </div>
      </div>
      ))}
    </div>
    </div>
    </div>
  </section>
  );
}
