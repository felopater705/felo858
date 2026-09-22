import { useState, useMemo } from 'react';
import { products, type Category, type Product } from '@/data/products';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { Search, SlidersHorizontal, ChevronDown, X } from 'lucide-react';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
const categories: (Category | 'All')[] = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
  let result = [...products];

  if (activeCategory !== 'All') {
    result = result.filter((p) => p.category === activeCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    result = result.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.gemstone.toLowerCase().includes(q)
    );
  }

  result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

  switch (sortBy) {
    case 'price-low':
    result.sort((a, b) => a.price - b.price);
    break;
    case 'price-high':
    result.sort((a, b) => b.price - a.price);
    break;
    case 'rating':
    result.sort((a, b) => b.rating - a.rating);
    break;
    case 'newest':
    result.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
    break;
    default:
    break;
  }

  return result;
  }, [activeCategory, sortBy, priceRange, searchQuery]);

  const sortLabels: Record<SortOption, string> = {
  'featured': 'Featured',
  'price-low': 'Price: Low to High',
  'price-high': 'Price: High to Low',
  'rating': 'Highest Rated',
  'newest': 'Newest Arrivals',
  };

  const activeFiltersCount =
  (activeCategory !== 'All' ? 1 : 0) +
  (searchQuery ? 1 : 0) +
  (priceRange[0] > 0 || priceRange[1] < 15000 ? 1 : 0);

  return (
  <section id="shop" className="relative py-24 lg:py-32 px-6 lg:px-12">
    <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-800" />
    <div className="absolute top-0 left-1/2 w-[600px] h-[400px] bg-champagne-400/5 rounded-full blur-[150px] -translate-x-1/2" />

    <div className="relative max-w-[1400px] mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
    <p className="section-label animate-fade-up" style={{ opacity: 0 }}>
    The Boutique
    </p>
    <h2 className="text-section font-serif font-light text-gradient-gold-light mb-4 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
    Product Showcase
    </h2>
    <div className="flex items-center justify-center gap-3 mb-4 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
    <div className="divider-gold" />
    <div className="w-1.5 h-1.5 rounded-full bg-champagne-400/40" />
    <div className="divider-gold" />
    </div>
    <p className="text-ink-200 font-light text-sm lg:text-base max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
    Browse our complete collection. Filter by category, sort to your preference, and discover your next treasure.
    </p>
    </div>

    {/* Controls bar */}
    <div className="glass-card p-4 lg:p-5 mb-8 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
    <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
    {/* Search */}
    <div className="relative flex-1 lg:max-w-xs">
    <Search size={16} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-300" />
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search pieces..."
      className="w-full bg-ink-700/40 border border-white/5 rounded-lg pl-10 pr-4 py-2.5 text-sm text-ink-100 font-light placeholder:text-ink-300 focus:outline-none focus:border-champagne-400/30 transition-colors"
    />
    {searchQuery && (
    <button
      onClick={() => setSearchQuery('')}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-300 hover:text-champagne-300"
    >
    <X size={14} />
    </button>
    )}
    </div>

    {/* Category pills */}
    <div className="flex gap-2 flex-wrap items-center">
    {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      className={`px-4 py-2 rounded-lg text-[0.7rem] tracking-[0.15em] uppercase font-light transition-all duration-300 ${
      activeCategory === cat
        ? 'bg-champagne-400/20 text-champagne-300 border border-champagne-400/30'
        : 'text-ink-200 hover:text-champagne-300 border border-white/5 hover:border-white/10'
      }`}
    >
    {cat}
    </button>
    ))}
    </div>

    {/* Sort + Filters */}
    <div className="flex gap-2">
    {/* Sort dropdown */}
    <div className="relative">
    <button
      onClick={() => setShowSort(!showSort)}
      className="flex items-center gap-2 px-4 py-2.5 glass rounded-lg text-[0.7rem] tracking-[0.1em] uppercase font-light text-ink-100 hover:border-champagne-400/20 transition-colors"
    >
    {sortLabels[sortBy]}
    <ChevronDown size={14} className={`transition-transform ${showSort ? 'rotate-180' : ''}`} />
    </button>
    {showSort && (
    <>
    <div className="fixed inset-0 z-10" onClick={() => setShowSort(false)} />
    <div className="absolute right-0 top-full mt-2 z-20 glass-nav rounded-lg overflow-hidden min-w-[200px] animate-slide-up">
    {(Object.keys(sortLabels) as SortOption[]).map((option) => (
      <button
      key={option}
      onClick={() => {
        setSortBy(option);
        setShowSort(false);
      }}
      className={`block w-full text-left px-4 py-2.5 text-xs font-light hover:bg-white/5 transition-colors ${
        sortBy === option ? 'text-champagne-300' : 'text-ink-200'
      }`}
      >
      {sortLabels[option]}
      </button>
    ))}
    </div>
    </>
    )}
    </div>

    {/* Filters toggle */}
    <button
    onClick={() => setShowFilters(!showFilters)}
    className={`flex items-center gap-2 px-4 py-2.5 glass rounded-lg text-[0.7rem] tracking-[0.1em] uppercase font-light hover:border-champagne-400/20 transition-colors ${
      showFilters ? 'border-champagne-400/30 text-champagne-300' : 'text-ink-100'
    }`}
    >
    <SlidersHorizontal size={14} strokeWidth={1.5} />
    Filters
    {activeFiltersCount > 0 && (
    <span className="bg-champagne-400/20 text-champagne-300 text-[0.6rem] rounded-full px-1.5">
      {activeFiltersCount}
    </span>
    )}
    </button>
    </div>
    </div>

    {/* Expanded filters */}
    {showFilters && (
    <div className="mt-4 pt-4 border-t border-white/5 animate-slide-up">
    <div className="flex flex-col gap-4">
    <div>
    <label className="text-[0.65rem] tracking-[0.2em] uppercase text-ink-300 font-light mb-3 block">
    Price Range: ${priceRange[0].toLocaleString()} — ${priceRange[1].toLocaleString()}
    </label>
    <div className="flex items-center gap-4">
    <input
      type="range"
      min={0}
      max={15000}
      step={500}
      value={priceRange[0]}
      onChange={(e) => setPriceRange([Math.min(Number(e.target.value), priceRange[1] - 500), priceRange[1]])}
      className="flex-1 accent-champagne-400"
    />
    <input
      type="range"
      min={0}
      max={15000}
      step={500}
      value={priceRange[1]}
      onChange={(e) => setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0] + 500)])}
      className="flex-1 accent-champagne-400"
    />
    </div>
    </div>

    {/* Badge filters */}
    <div>
    <label className="text-[0.65rem] tracking-[0.2em] uppercase text-ink-300 font-light mb-2 block">
    Special
    </label>
    <div className="flex gap-2">
    {(['New', 'Bestseller', 'Limited'] as const).map((badge) => (
    <button
      key={badge}
      onClick={() => setSearchQuery(searchQuery ? '' : badge)}
      className={`px-3 py-1.5 rounded-lg text-[0.65rem] tracking-[0.1em] uppercase font-light border transition-all ${
      searchQuery === badge
        ? 'bg-champagne-400/20 text-champagne-300 border-champagne-400/30'
        : 'text-ink-200 border-white/5 hover:border-white/10'
      }`}
    >
    {badge}
    </button>
    ))}
    </div>
    </div>

    {activeFiltersCount > 0 && (
    <button
      onClick={() => {
      setActiveCategory('All');
      setPriceRange([0, 15000]);
      setSearchQuery('');
      }}
      className="text-xs text-ink-300 hover:text-champagne-300 transition-colors font-light tracking-wide flex items-center gap-1 self-start"
    >
    <X size={13} /> Clear all filters
    </button>
    )}
    </div>
    </div>
    )}
    </div>

    {/* Results count */}
    <p className="text-xs text-ink-300 font-light mb-6 tracking-wide">
    {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} found
    </p>

    {/* Product grid */}
    {filteredProducts.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {filteredProducts.map((product, i) => (
    <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}>
      <ProductCard product={product} onQuickView={setQuickViewProduct} index={i} />
    </div>
    ))}
    </div>
    ) : (
    <div className="text-center py-20">
    <p className="text-ink-200 font-light text-lg mb-2">No pieces match your search</p>
    <p className="text-ink-300 text-sm font-light mb-6">Try adjusting your filters</p>
    <button
      onClick={() => {
      setActiveCategory('All');
      setPriceRange([0, 15000]);
      setSearchQuery('');
      setSortBy('featured');
      }}
      className="btn-luxury"
    >
    Reset Filters
    </button>
    </div>
    )}
    </div>

    <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
  </section>
  );
}
