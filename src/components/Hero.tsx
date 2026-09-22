import { useEffect, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import HeroScene from '@/three/HeroScene';
import { ChevronDown } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, scaleIn } from '@/lib/motion';

export default function Hero() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current = {
        x: (e.clientX / innerWidth) * 2 - 1,
        y: -(e.clientY / innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 65% 50%, rgba(212,168,88,0.12) 0%, transparent 60%)',
        }}
      />

      {/* 3D Canvas - right side */}
      <div className="absolute inset-0 lg:right-0 z-[2]">
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border-2 border-champagne-400/20 border-t-champagne-400/60 rounded-full animate-spin" />
            </div>
          }
        >
          <HeroScene mouse={mouseRef} />
        </Suspense>
      </div>

      {/* Left-aligned text overlay */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 pointer-events-none">
        <div className="lg:max-w-[55%] xl:max-w-[48%]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={staggerItem}
              className="text-champagne-400/80 text-[0.7rem] tracking-[0.5em] uppercase font-sans font-light mb-6"
            >
              Luxury Jewelry
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="text-hero font-serif font-light leading-[1.05] text-shadow-luxury"
            >
              <span className="text-gradient-gold">Elegance,</span>
              <br />
              <span className="text-gradient-gold italic">Reimagined.</span>
            </motion.h1>

            <motion.div
              variants={staggerItem}
              className="divider-gold mt-8 mb-6"
            />

            <motion.p
              variants={staggerItem}
              className="text-ink-200 font-sans font-light text-base lg:text-lg leading-relaxed tracking-wide max-w-md"
            >
              Timeless jewelry crafted for moments that deserve to shine.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto"
            >
              <button
                onClick={() =>
                  document
                    .querySelector('#featured')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-luxury-solid"
              >
                Explore Collection
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector('#story')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-luxury"
              >
                Discover Our Story
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() =>
          document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-champagne-400/50 hover:text-champagne-300 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-[0.55rem] tracking-[0.35em] uppercase font-light">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-champagne-400/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-px h-3 bg-champagne-300 animate-scroll-down" />
        </div>
        <ChevronDown size={12} strokeWidth={1} className="animate-float" />
      </motion.button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink-900 to-transparent z-[5]" />
    </section>
  );
}
