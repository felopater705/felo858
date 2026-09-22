import { motion } from 'framer-motion';
import { Eye, Heart, ShoppingBag, Star, Plus } from 'lucide-react';
import type { Product } from '@/data/products';
import { useStore } from '@/store/StoreContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  index?: number;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  const badgeColor: Record<string, string> = {
    New: 'bg-champagne-400/90 text-ink-900',
    Bestseller: 'bg-ink-100/90 text-ink-900',
    Limited: 'bg-accent-500/90 text-ink-900',
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-ink-800/40 transition-all duration-500 hover:border-champagne-400/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-700">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

        {/* Gold glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-champagne-400/0 to-champagne-400/0 group-hover:from-champagne-400/[0.06] transition-all duration-700" />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 text-[0.55rem] tracking-[0.2em] uppercase font-light rounded-full ${badgeColor[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Toggle wishlist"
        >
          <Heart
            size={15}
            strokeWidth={1.5}
            className={isWishlisted ? 'fill-champagne-400 text-champagne-400' : 'text-ink-100'}
          />
        </button>

        {/* Hover actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 glass py-2.5 text-[0.6rem] tracking-[0.15em] uppercase font-light text-ink-100 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye size={12} strokeWidth={1.5} /> Quick View
          </button>
          <button
            onClick={() => addToCart(product)}
            className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Add to cart"
          >
            <Plus size={15} strokeWidth={1.5} className="text-champagne-300" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 lg:p-5">
        <div className="flex items-center gap-1 mb-1.5">
          <Star size={11} className="fill-champagne-400 text-champagne-400" />
          <span className="text-[0.65rem] text-ink-200 font-light">{product.rating}</span>
          <span className="text-[0.65rem] text-ink-300 font-light">({product.reviews})</span>
        </div>

        <h3 className="font-serif text-base lg:text-lg text-ink-100 font-light mb-0.5">
          {product.name}
        </h3>
        <p className="text-[0.7rem] text-ink-300 font-light mb-2 tracking-wide">
          {product.material} · {product.gemstone}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
          <span className="text-champagne-300 font-sans text-sm font-light tracking-wide">
            ${product.price.toLocaleString()}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="text-ink-200 hover:text-champagne-300 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
