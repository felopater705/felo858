import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';
import HeroJewelry from './FloatingDiamond';
import ParticleField from './ParticleField';

interface HeroSceneProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export default function HeroScene({ mouse }: HeroSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.3,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.12} />
      <spotLight
        position={[2, 6, 4]}
        angle={0.35}
        penumbra={1}
        intensity={180}
        color="#ffe8c0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, -4]} intensity={35} color="#d4a858" />
      <pointLight position={[3, -2, 3]} intensity={15} color="#fff0d0" />

      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.3}>
        <HeroJewelry mouse={mouse} />
      </Float>

      <ParticleField count={120} size={0.04} color="#e0c285" radius={6} />
      <ParticleField count={50} size={0.025} color="#ffffff" radius={4.5} />

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.25}
        scale={8}
        blur={3}
        far={3.5}
        color="#d4a858"
      />

      <Environment preset="studio" environmentIntensity={0.6} />
    </Canvas>
  );
}
