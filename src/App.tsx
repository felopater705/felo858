import { StoreProvider } from '@/store/StoreContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCollection from '@/components/FeaturedCollection';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import Collections from '@/components/Collections';
import ProductGrid from '@/components/ProductGrid';
import StorySection from '@/components/StorySection';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import SearchOverlay from '@/components/SearchOverlay';

function App() {
  return (
  <StoreProvider>
    <div className="relative min-h-screen bg-ink-900 text-ink-100 overflow-x-hidden">
    <Navbar />
    <main>
    <Hero />
    <FeaturedCollection />
    <InteractiveShowcase />
    <Collections />
    <ProductGrid />
    <StorySection />
    <Testimonials />
    <Newsletter />
    </main>
    <Footer />

    {/* Overlays */}
    <CartDrawer />
    <SearchOverlay />
    </div>
  </StoreProvider>
  );
}

export default App;
