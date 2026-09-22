import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

interface LuxRingProps {
  metalColor?: string;
  gemColor?: string;
}

function LuxRing({ metalColor = '#d4a858', gemColor = '#f5f8ff' }: LuxRingProps) {
  const bandRef = useRef<THREE.Mesh>(null);

  return (
    <group rotation={[Math.PI / 2.5, 0, 0]}>
      <mesh ref={bandRef} castShadow>
        <torusGeometry args={[1.5, 0.12, 32, 128]} />
        <meshPhysicalMaterial
          color={metalColor}
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={1.8}
          reflectivity={1}
        />
      </mesh>

      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.35, 0, Math.sin(angle) * 0.35]}
            castShadow
          >
            <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
            <meshStandardMaterial color={metalColor} metalness={1} roughness={0.15} />
          </mesh>
        );
      })}

      <mesh position={[0, 0.25, 0]} castShadow>
        <octahedronGeometry args={[0.35, 0]} />
        <meshPhysicalMaterial
          color={gemColor}
          metalness={0}
          roughness={0}
          transmission={0.92}
          thickness={1}
          ior={2.4}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          iridescence={0.4}
          iridescenceIOR={1.8}
          envMapIntensity={2.2}
          specularIntensity={1}
        />
      </mesh>

      <mesh position={[0, 0.25, 0]} scale={0.5}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial color={gemColor} transparent opacity={0.08} />
      </mesh>

      {[-0.5, 0.5].map((x, i) => (
        <mesh key={i} position={[x, 0.05, 0]} castShadow>
          <octahedronGeometry args={[0.1, 0]} />
          <meshPhysicalMaterial
            color={gemColor}
            metalness={0}
            roughness={0}
            transmission={0.9}
            thickness={0.5}
            ior={2.4}
            clearcoat={1}
            envMapIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
}

interface InteractiveRingSceneProps {
  metalColor?: string;
  gemColor?: string;
  autoRotate?: boolean;
}

export default function InteractiveRingScene({
  metalColor,
  gemColor,
  autoRotate = true,
}: InteractiveRingSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1, 5], fov: 40 }}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.4,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.15} />
      <spotLight
        position={[3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={140}
        color="#ffe8c0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, -3]} intensity={35} color="#d4a858" />
      <pointLight position={[0, -3, 2]} intensity={15} color="#fff0d0" />

      <Float speed={0.6} rotationIntensity={0.12} floatIntensity={0.25}>
        <LuxRing metalColor={metalColor} gemColor={gemColor} />
      </Float>

      <Sparkles count={30} scale={6} size={2.5} speed={0.2} color="#e0c285" opacity={0.4} />

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.3}
        scale={8}
        blur={2.5}
        far={3}
        color="#d4a858"
      />

      <Environment preset="studio" environmentIntensity={0.6} />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={8}
        autoRotate={autoRotate}
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
