import { useEffect, useRef, useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { useStore } from '@/store/StoreContext';

export default function SearchOverlay() {
  const { isSearchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
  if (isSearchOpen) {
    setTimeout(() => inputRef.current?.focus(), 100);
  } else {
    setQuery('');
  }
  }, [isSearchOpen]);

  useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setSearchOpen(false);
  };
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
  }, [setSearchOpen]);

  if (!isSearchOpen) return null;

  const results = query
  ? products.filter(
    (p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.material.toLowerCase().includes(query.toLowerCase())
    )
  : products.slice(0, 4);

  const handleProductClick = () => {
  setSearchOpen(false);
  document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <div className="fixed inset-0 z-[55] animate-fade-in" style={{ opacity: 0 }}>
    <div
    className="absolute inset-0 bg-ink-900/90 backdrop-blur-xl"
    onClick={() => setSearchOpen(false)}
    />

    <div className="relative z-10 max-w-2xl mx-auto pt-20 px-6">
    {/* Search bar */}
    <div className="glass-nav rounded-2xl p-2 flex items-center gap-3">
    <Search size={20} strokeWidth={1.5} className="text-champagne-400 ml-3" />
    <input
    ref={inputRef}
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search for rings, necklaces, earrings..."
    className="flex-1 bg-transparent text-ink-100 font-light text-lg placeholder:text-ink-300 focus:outline-none py-3"
    />
    <button
    onClick={() => setSearchOpen(false)}
    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
    >
    <X size={18} strokeWidth={1.5} />
    </button>
    </div>

    {/* Results */}
    <div className="mt-4 glass-nav rounded-2xl p-4 max-h-[50vh] overflow-y-auto no-scrollbar">
    {results.length > 0 ? (
    <>
    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-ink-300 font-light mb-3 px-2">
    {query ? `${results.length} results` : 'Popular pieces'}
    </p>
    <div className="space-y-1">
    {results.map((product) => (
    <button
    key={product.id}
    onClick={handleProductClick}
    className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group text-left"
    >
    <div className="w-14 h-14 rounded-lg overflow-hidden bg-ink-700 shrink-0">
    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
    <p className="text-sm text-ink-100 font-light truncate">{product.name}</p>
    <p className="text-xs text-ink-300 font-light">{product.category}</p>
    </div>
    <span className="text-sm text-champagne-300 font-light">${product.price.toLocaleString()}</span>
    <ArrowRight size={15} className="text-ink-300 group-hover:text-champagne-300 group-hover:translate-x-1 transition-all" />
    </button>
    ))}
    </div>
    </>
    ) : (
    <div className="text-center py-12">
    <p className="text-ink-100 font-light mb-2">No results for "{query}"</p>
    <p className="text-ink-300 text-sm font-light">Try a different search term</p>
    </div>
    )}
    </div>
    </div>
  </div>
  );
}
