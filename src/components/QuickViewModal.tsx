import { X, Heart, ShoppingBag, Star, ChevronRight } from 'lucide-react';
import type { Product } from '@/data/products';
import { useStore } from '@/store/StoreContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart, toggleWishlist, wishlist } = useStore();

  if (!product) return null;

  const isWishlisted = wishlist.includes(product.id);

  return (
  <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in" style={{ opacity: 0 }}>
    <div
    className="absolute inset-0 bg-ink-900/80 backdrop-blur-md"
    onClick={onClose}
    />

    <div className="relative z-10 w-full max-w-4xl glass-nav rounded-2xl overflow-hidden animate-slide-up max-h-[90vh] overflow-y-auto no-scrollbar">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
      aria-label="Close"
    >
    <X size={18} strokeWidth={1.5} />
    </button>

    <div className="grid md:grid-cols-2 gap-0">
      {/* Image */}
      <div className="relative aspect-square md:aspect-auto bg-ink-700">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
      {product.badge && (
        <span className="absolute top-4 left-4 px-3 py-1 text-[0.6rem] tracking-[0.2em] uppercase font-light rounded-full bg-champagne-400/90 text-ink-900">
        {product.badge}
        </span>
      )}
      </div>

      {/* Details */}
      <div className="p-8 lg:p-10 flex flex-col">
      <p className="section-label text-champagne-400/70 mb-3">{product.category}</p>

      <h2 className="font-serif text-3xl text-ink-100 font-light mb-3">{product.name}</h2>

      <div className="flex items-center gap-2 mb-4">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          className={i <= Math.floor(product.rating) ? 'fill-champagne-400 text-champagne-400' : 'text-ink-500'}
        />
        ))}
      </div>
      <span className="text-xs text-ink-300 font-light">{product.rating} · {product.reviews} reviews</span>
      </div>

      <p className="text-sm text-ink-200 font-light leading-relaxed mb-6">{product.longDescription}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="glass-card p-3">
        <p className="text-[0.6rem] tracking-[0.2em] uppercase text-ink-300 mb-1">Material</p>
        <p className="text-sm text-ink-100 font-light">{product.material}</p>
      </div>
      <div className="glass-card p-3">
        <p className="text-[0.6rem] tracking-[0.2em] uppercase text-ink-300 mb-1">Gemstone</p>
        <p className="text-sm text-ink-100 font-light">{product.gemstone}</p>
      </div>
      </div>

      <div className="flex items-baseline gap-2 mb-6">
      <span className="text-2xl text-champagne-300 font-serif font-light">
        ${product.price.toLocaleString()}
      </span>
      <span className="text-xs text-ink-300 font-light">USD</span>
      </div>

      <div className="flex gap-3 mt-auto">
      <button
        onClick={() => {
        addToCart(product);
        onClose();
        }}
        className="btn-luxury-solid flex-1"
      >
        <ShoppingBag size={15} strokeWidth={1.5} /> Add to Cart
      </button>
      <button
        onClick={() => toggleWishlist(product.id)}
        className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
        aria-label="Wishlist"
      >
      <Heart
        size={18}
        strokeWidth={1.5}
        className={isWishlisted ? 'fill-champagne-400 text-champagne-400' : 'text-ink-100'}
      />
      </button>
      </div>

      <button
      onClick={() => {
        document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }}
      className="mt-4 flex items-center justify-center gap-1 text-xs text-ink-300 hover:text-champagne-300 transition-colors font-light tracking-wide"
      >
      View full collection <ChevronRight size={13} />
      </button>
      </div>
    </div>
    </div>
  </div>
  );
}
