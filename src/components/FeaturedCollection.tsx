import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/motion';

export default function FeaturedCollection() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const featured = products.slice(0, 4);

  return (
    <section id="featured" className="relative py-24 lg:py-32 px-6 lg:px-12">
      <div className="absolute inset-0 bg-radial-gold opacity-[0.06]" />

      <div className="relative max-w-[1500px] mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={staggerItem} className="section-label">
            Curated Selection
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="text-section font-serif font-light text-gradient-gold-light mb-4"
          >
            Featured Collection
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
            Four extraordinary pieces, hand-selected by our master jewelers to represent the
            pinnacle of this season's artistry.
          </motion.p>
        </motion.div>

        {/* Product grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={staggerItem}>
              <ProductCard product={product} onQuickView={setQuickViewProduct} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-luxury"
          >
            View All Pieces
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </section>
  );
}
