import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DiamondGeometry() {
  const geometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(0.55, 0);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y < 0) {
        pos.setY(i, y * 0.42);
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, []);

  return geometry;
}

interface HeroJewelryProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export default function HeroJewelry({ mouse }: HeroJewelryProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const diamondRef = useRef<THREE.Mesh>(null);
  const diamondGeo = DiamondGeometry();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      const targetY = mouse.current.y * 0.15;
      const targetX = mouse.current.x * 0.25;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.12 + targetY;
      groupRef.current.position.x = mouse.current.x * 0.2;
      groupRef.current.rotation.y +=
        (targetX * 0.5 - groupRef.current.rotation.y) * 0.03;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.08;
    }

    if (diamondRef.current) {
      diamondRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={groupRef} rotation={[Math.PI / 2.6, 0, 0]}>
      {/* Ring band */}
      <mesh ref={ringRef} castShadow>
        <torusGeometry args={[1.6, 0.1, 32, 128]} />
        <meshPhysicalMaterial
          color="#d4a858"
          metalness={1}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={2}
          reflectivity={1}
        />
      </mesh>

      {/* Prongs */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.32, 0, Math.sin(angle) * 0.32]}
            castShadow
          >
            <cylinderGeometry args={[0.035, 0.035, 0.28, 8]} />
            <meshStandardMaterial
              color="#e0c285"
              metalness={1}
              roughness={0.12}
            />
          </mesh>
        );
      })}

      {/* Center diamond */}
      <mesh ref={diamondRef} geometry={diamondGeo} position={[0, 0.22, 0]} castShadow>
        <meshPhysicalMaterial
          color="#f8faff"
          metalness={0}
          roughness={0}
          transmission={0.92}
          thickness={1.2}
          ior={2.4}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          iridescence={0.5}
          iridescenceIOR={1.8}
          iridescenceThicknessRange={[100, 400]}
          envMapIntensity={2.5}
          attenuationColor="#e8f0ff"
          attenuationDistance={0.4}
          specularIntensity={1}
        />
      </mesh>

      {/* Diamond glow */}
      <mesh position={[0, 0.22, 0]} scale={0.4}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#e8f0ff" transparent opacity={0.06} />
      </mesh>

      {/* Side accent stones */}
      {[-0.45, 0.45].map((x, i) => (
        <mesh key={i} position={[x, 0.04, 0]} scale={0.07} castShadow>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#f8faff"
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
