import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  Shop: ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'New Arrivals', 'Limited Editions'],
  House: ['Our Story', 'Craftsmanship', 'Sustainability', 'Press', 'Careers', 'Bespoke'],
  Service: ['Contact', 'Shipping', 'Returns', 'Care Guide', 'Ring Sizing', 'Appointments'],
};

export default function Footer() {
  return (
  <footer className="relative border-t border-white/5 bg-ink-900 pt-20 pb-10 px-6 lg:px-12">
    <div className="max-w-[1400px] mx-auto">
    {/* Top section */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
    {/* Brand */}
    <div className="lg:col-span-2">
    <h3 className="font-serif text-3xl text-gradient-gold font-light tracking-[0.2em] mb-4">
    LUMIÈRE
    </h3>
    <p className="text-ink-200 font-light text-sm leading-relaxed max-w-xs mb-6">
    Timeless jewelry crafted for moments that deserve to shine. A century of brilliance,
    reimagined for today.
    </p>

    <div className="space-y-2 mb-6">
    <div className="flex items-center gap-3 text-ink-300 text-xs font-light">
    <MapPin size={14} strokeWidth={1.5} className="text-champagne-400" />
    12 Place Vendôme, Paris 75001
    </div>
    <div className="flex items-center gap-3 text-ink-300 text-xs font-light">
    <Phone size={14} strokeWidth={1.5} className="text-champagne-400" />
    +33 1 42 60 12 24
    </div>
    <div className="flex items-center gap-3 text-ink-300 text-xs font-light">
    <Mail size={14} strokeWidth={1.5} className="text-champagne-400" />
    clients@lumiere.com
    </div>
    </div>

    <div className="flex gap-3">
    {[Instagram, Facebook, Twitter].map((Icon, i) => (
    <a
      key={i}
      href="#"
      className="w-10 h-10 rounded-full glass flex items-center justify-center text-ink-200 hover:text-champagne-300 hover:border-champagne-400/20 transition-all duration-300"
      aria-label="Social media"
    >
    <Icon size={16} strokeWidth={1.5} />
    </a>
    ))}
    </div>
    </div>

    {/* Links */}
    {Object.entries(footerLinks).map(([title, links]) => (
    <div key={title}>
    <h4 className="text-[0.7rem] tracking-[0.25em] uppercase text-champagne-400/70 font-light mb-5">
    {title}
    </h4>
    <ul className="space-y-3">
    {links.map((link) => (
    <li key={link}>
    <a
      href="#"
      className="text-sm text-ink-200 hover:text-champagne-300 font-light transition-colors duration-300"
    >
    {link}
    </a>
    </li>
    ))}
    </ul>
    </div>
    ))}
    </div>

    {/* Marquee */}
    <div className="overflow-hidden border-y border-white/5 py-6 mb-8">
    <div className="flex gap-8 animate-marquee whitespace-nowrap">
    {[...Array(2)].map((_, j) => (
    <div key={j} className="flex gap-8 items-center">
    {['Ethically Sourced', 'Conflict-Free Diamonds', 'Lifetime Warranty', 'Free Global Shipping', 'Bespoke Commissions', 'Member Exclusives'].map((text, i) => (
    <span key={i} className="flex items-center gap-3 text-[0.7rem] tracking-[0.3em] uppercase text-ink-300 font-light">
    {text}
    <span className="w-1 h-1 rounded-full bg-champagne-400/40" />
    </span>
    ))}
    </div>
    ))}
    </div>
    </div>

    {/* Bottom bar */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-[0.7rem] text-ink-300 font-light tracking-wide">
    © 2024 LUMIÈRE. All rights reserved.
    </p>
    <div className="flex gap-6">
    {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
    <a
      key={link}
      href="#"
      className="text-[0.7rem] text-ink-300 hover:text-champagne-300 font-light transition-colors"
    >
    {link}
    </a>
    ))}
    </div>
    </div>
    </div>
  </footer>
  );
}
