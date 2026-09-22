import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useStore } from '@/store/StoreContext';

export default function CartDrawer() {
  const {
  cart,
  isCartOpen,
  setCartOpen,
  removeFromCart,
  updateQuantity,
  cartTotal,
  cartCount,
  } = useStore();

  return (
  <>
    {/* Overlay */}
    <div
    className={`fixed inset-0 z-[55] bg-ink-900/80 backdrop-blur-md transition-opacity duration-500 ${
    isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
    onClick={() => setCartOpen(false)}
    />

    {/* Drawer */}
    <div
    className={`fixed top-0 right-0 bottom-0 z-[56] w-full max-w-md glass-nav border-l border-white/5 transition-transform duration-500 flex flex-col ${
    isCartOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
    >
    {/* Header */}
    <div className="flex items-center justify-between p-6 border-b border-white/5">
    <div className="flex items-center gap-3">
    <ShoppingBag size={18} strokeWidth={1.5} className="text-champagne-300" />
    <h3 className="font-serif text-xl text-ink-100 font-light">
    Shopping Bag {cartCount > 0 && `(${cartCount})`}
    </h3>
    </div>
    <button
    onClick={() => setCartOpen(false)}
    className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
    aria-label="Close cart"
    >
    <X size={16} strokeWidth={1.5} />
    </button>
    </div>

    {/* Items */}
    <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
    {cart.length === 0 ? (
    <div className="flex flex-col items-center justify-center h-full text-center">
    <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-6">
      <ShoppingBag size={28} strokeWidth={1} className="text-ink-300" />
    </div>
    <p className="text-ink-100 font-light text-lg mb-2">Your bag is empty</p>
    <p className="text-ink-300 text-sm font-light mb-6">Discover pieces worth treasuring.</p>
    <button
      onClick={() => {
      setCartOpen(false);
      document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="btn-luxury"
    >
    Explore Collection
    </button>
    </div>
    ) : (
    <div className="space-y-4">
    {cart.map((item) => (
    <div key={item.id} className="flex gap-4 glass-card p-3 rounded-xl">
    <div className="w-20 h-20 rounded-lg overflow-hidden bg-ink-700 shrink-0">
    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
    </div>

    <div className="flex-1 min-w-0">
    <h4 className="font-serif text-base text-ink-100 font-light truncate">{item.name}</h4>
    <p className="text-[0.65rem] text-ink-300 font-light mb-2">{item.category}</p>

    <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 glass rounded-full px-2 py-1">
      <button
      onClick={() => updateQuantity(item.id, item.quantity - 1)}
      className="text-ink-200 hover:text-champagne-300 transition-colors"
      >
      <Minus size={12} />
      </button>
      <span className="text-xs text-ink-100 font-light w-6 text-center">{item.quantity}</span>
      <button
      onClick={() => updateQuantity(item.id, item.quantity + 1)}
      className="text-ink-200 hover:text-champagne-300 transition-colors"
      >
      <Plus size={12} />
      </button>
    </div>

    <div className="flex items-center gap-3">
      <span className="text-sm text-champagne-300 font-light">
      ${(item.price * item.quantity).toLocaleString()}
      </span>
      <button
      onClick={() => removeFromCart(item.id)}
      className="text-ink-300 hover:text-red-400 transition-colors"
      aria-label="Remove item"
      >
      <Trash2 size={14} strokeWidth={1.5} />
      </button>
    </div>
    </div>
    </div>
    </div>
    ))}
    </div>
    )}
    </div>

    {/* Footer */}
    {cart.length > 0 && (
    <div className="border-t border-white/5 p-6 space-y-4">
    <div className="flex items-center justify-between">
    <span className="text-sm text-ink-200 font-light">Subtotal</span>
    <span className="text-lg text-champagne-300 font-serif font-light">
    ${cartTotal.toLocaleString()}
    </span>
    </div>
    <div className="flex items-center justify-between">
    <span className="text-sm text-ink-200 font-light">Shipping</span>
    <span className="text-sm text-ink-100 font-light">Complimentary</span>
    </div>
    <div className="h-px bg-white/5" />
    <div className="flex items-center justify-between">
    <span className="text-sm text-ink-100 font-light tracking-wide">Total</span>
    <span className="text-xl text-champagne-300 font-serif font-light">
    ${cartTotal.toLocaleString()}
    </span>
    </div>
    <button className="btn-luxury-solid w-full">
    Proceed to Checkout <ArrowRight size={14} />
    </button>
    <p className="text-[0.65rem] text-ink-300 font-light text-center tracking-wide">
    Secure checkout · Free returns within 30 days
    </p>
    </div>
    )}
    </div>
  </>
  );
}
