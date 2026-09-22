import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Menu, X, User, ChevronDown } from 'lucide-react';
import { useStore } from '@/store/StoreContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Rings', href: '#shop' },
  { label: 'Necklaces', href: '#shop' },
  { label: 'Earrings', href: '#shop' },
  { label: 'Bracelets', href: '#shop' },
  { label: 'About', href: '#story' },
];

export default function Navbar() {
  const { cartCount, wishlist, setCartOpen, setSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'glass-nav py-3 shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-ink-900/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-champagne-200 p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex-1 lg:flex-none text-center lg:text-left"
          >
            <span className="font-serif text-xl lg:text-2xl tracking-[0.35em] text-gradient-gold font-light">
              LUMIÈRE
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-[0.68rem] tracking-[0.22em] uppercase font-sans font-light text-ink-100/70 hover:text-champagne-300 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-champagne-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4 lg:gap-5 flex-1 lg:flex-none justify-end">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-ink-100/70 hover:text-champagne-300 transition-colors duration-300"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              className="text-ink-100/70 hover:text-champagne-300 transition-colors duration-300 relative"
              aria-label="Wishlist"
            >
              <Heart size={18} strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-champagne-400 text-ink-900 text-[0.55rem] rounded-full w-4 h-4 flex items-center justify-center font-sans">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="text-ink-100/70 hover:text-champagne-300 transition-colors duration-300 relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-champagne-400 text-ink-900 text-[0.55rem] rounded-full w-4 h-4 flex items-center justify-center font-sans">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="hidden lg:block text-ink-100/70 hover:text-champagne-300 transition-colors duration-300"
              aria-label="Account"
            >
              <User size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Scroll indicator line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-400/20 to-transparent" />
        )}
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-900/90 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 right-0 glass-nav pt-24 pb-8 px-6"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="block py-3.5 text-sm tracking-[0.22em] uppercase font-sans font-light text-ink-100/90 hover:text-champagne-300 transition-colors border-b border-white/5"
                    >
                      <div className="flex items-center justify-between">
                        {link.label}
                        <ChevronDown size={14} className="-rotate-90 opacity-40" />
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
