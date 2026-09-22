import { Suspense, useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, ZoomIn, Move3d, Maximize2, RotateCcw } from 'lucide-react';
import {
  fadeUp,
  slideRight,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from '@/lib/motion';

const InteractiveRingScene = lazy(() => import('@/three/InteractiveRingScene'));

export default function InteractiveShowcase() {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <section id="showcase" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800 to-ink-900" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-champagne-400/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text side */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="order-2 lg:order-1"
        >
          <motion.p variants={staggerItem} className="section-label">
            Interactive Experience
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="text-display font-serif font-light text-gradient-gold-light mb-6"
          >
            See Every
            <br />
            Detail.
          </motion.h2>
          <motion.div variants={staggerItem} className="divider-gold mb-6" />
          <motion.p
            variants={staggerItem}
            className="text-ink-200 font-light text-base leading-relaxed mb-8 max-w-md"
          >
            Rotate, zoom, and explore our jewelry in 3D. Experience the craftsmanship,
            brilliance, and beauty from every angle.
          </motion.p>

          {/* Feature list */}
          <motion.div variants={staggerItem} className="space-y-4 mb-8">
            {[
              { icon: RotateCw, label: 'Drag to rotate', desc: 'Full 360-degree view' },
              { icon: ZoomIn, label: 'Scroll to zoom', desc: 'Inspect every facet' },
              { icon: Move3d, label: 'Auto-rotation', desc: 'Idle pieces turn themselves' },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full glass flex items-center justify-center group-hover:border-champagne-400/30 transition-colors">
                  <feature.icon size={17} strokeWidth={1.5} className="text-champagne-300" />
                </div>
                <div>
                  <p className="text-sm text-ink-100 font-light">{feature.label}</p>
                  <p className="text-xs text-ink-300 font-light">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.button
            variants={staggerItem}
            onClick={() => document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-luxury"
          >
            Explore the Collection
          </motion.button>
        </motion.div>

        {/* 3D Canvas side */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="order-1 lg:order-2 relative h-[400px] lg:h-[560px]"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/[0.06] bg-ink-800/30">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-champagne-400/20 border-t-champagne-400/60 rounded-full animate-spin" />
                </div>
              }
            >
              <InteractiveRingScene autoRotate={!fullscreen} />
            </Suspense>

            {/* HUD overlay */}
            <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full pointer-events-none">
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-champagne-300/80 font-light flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 animate-shimmer" />
                Live 3D Preview
              </p>
            </div>

            {/* Control buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setFullscreen(!fullscreen)}
                className="w-9 h-9 glass rounded-full flex items-center justify-center hover:border-champagne-400/30 transition-colors"
                aria-label="Toggle fullscreen"
              >
                {fullscreen ? (
                  <RotateCcw size={14} strokeWidth={1.5} className="text-champagne-300" />
                ) : (
                  <Maximize2 size={14} strokeWidth={1.5} className="text-champagne-300" />
                )}
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full pointer-events-none">
              <p className="text-[0.55rem] tracking-[0.15em] uppercase text-ink-200 font-light">
                Drag to rotate · Scroll to zoom
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
