import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  size?: number;
  color?: string;
  radius?: number;
}

export default function ParticleField({
  count = 200,
  size = 0.04,
  color = '#e0c285',
  radius = 8,
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * (0.3 + Math.random() * 0.7);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
  }, [count, radius]);

  useFrame((state) => {
  if (!pointsRef.current) return;
  const t = state.clock.elapsedTime;
  pointsRef.current.rotation.y = t * 0.03;
  pointsRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });

  return (
  <points ref={pointsRef}>
    <bufferGeometry>
    <bufferAttribute
      attach="attributes-position"
      args={[positions, 3]}
    />
    </bufferGeometry>
    <pointsMaterial
    size={size}
    color={color}
    transparent
    opacity={0.6}
    sizeAttenuation
    depthWrite={false}
    blending={THREE.AdditiveBlending}
    />
  </points>
  );
}
