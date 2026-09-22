import { motion } from 'framer-motion';
import { collections } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/motion';

export default function Collections() {
  const scrollToShop = () => {
    document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="collections" className="relative py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={staggerItem} className="section-label">
            Explore by Category
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="text-section font-serif font-light text-gradient-gold-light mb-4"
          >
            Our Collections
          </motion.h2>
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="divider-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-champagne-400/40" />
            <div className="divider-gold" />
          </motion.div>
          <motion.p
            variants={staggerItem}
            className="text-ink-200 font-light text-sm lg:text-base max-w-lg mx-auto"
          >
            Four distinct worlds of craftsmanship, each defined by its own character and devotion
            to detail.
          </motion.p>
        </motion.div>

        {/* Collections grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {collections.map((col) => (
            <motion.button
              key={col.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={scrollToShop}
              className="group relative aspect-[4/3] lg:aspect-[5/3] rounded-2xl overflow-hidden text-left"
            >
              <img
                src={col.image}
                alt={col.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent transition-opacity duration-500 group-hover:from-ink-900/95" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-champagne-400/0 to-champagne-400/0 group-hover:from-champagne-400/[0.08] transition-all duration-700" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-champagne-400/70 font-light mb-2">
                  {col.tagline}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl text-ink-100 font-light mb-2">
                  {col.name}
                </h3>
                <p className="text-sm text-ink-200 font-light max-w-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {col.description}
                </p>
                <div className="flex items-center gap-2 text-champagne-300 text-[0.65rem] tracking-[0.2em] uppercase font-light opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                  Discover Collection
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Border frame on hover */}
              <div className="absolute inset-3 lg:inset-4 border border-champagne-400/0 group-hover:border-champagne-400/20 rounded-xl transition-all duration-700 pointer-events-none" />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
