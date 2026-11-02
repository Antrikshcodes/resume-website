import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Light-Theme Editorial Armillary / Gyro Mechanism
function OrbitalMechanism() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Mouse dampening coordinates
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    // Smooth dampening physics
    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

    if (groupRef.current) {
      groupRef.current.rotation.y = mouseRef.current.x * 0.45;
      groupRef.current.rotation.x = -mouseRef.current.y * 0.35;
    }

    // Gentle continuous mechanical rotations
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.22;
      ring1Ref.current.rotation.y += delta * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.28;
      ring2Ref.current.rotation.z += delta * 0.18;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.18;
      ring3Ref.current.rotation.x += delta * 0.25;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.32;
      coreRef.current.rotation.x += delta * 0.18;
    }
  });

  return (
    <group ref={groupRef} scale={[1.4, 1.4, 1.4]}>
      {/* Central Core Metallic Icosahedron in Satin Dark Chrome */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.75, 1]} />
        <meshStandardMaterial
          color="#222220"
          roughness={0.25}
          metalness={0.88}
        />
      </mesh>

      {/* Inner Subtle Accent Cage */}
      <mesh>
        <sphereGeometry args={[0.48, 16, 16]} />
        <meshBasicMaterial color="#B7CC64" wireframe={true} transparent opacity={0.4} />
      </mesh>

      {/* Outer Ring 1 — Lime Muted Axis */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.7, 0.024, 16, 100]} />
        <meshStandardMaterial
          color="#B7CC64"
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>

      {/* Outer Ring 2 — Brushed Champagne / Titanium Axis */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.95, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#D4D2C9"
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>

      {/* Outer Ring 3 — Subtle Dark Hairline Gyro Axis */}
      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, 0, Math.PI / 3]}>
        <torusGeometry args={[2.2, 0.016, 16, 100]} />
        <meshStandardMaterial
          color="#8A8880"
          roughness={0.3}
          metalness={0.75}
        />
      </mesh>

      {/* Precision Orbital Coordinate Nodes */}
      <mesh position={[1.7, 0, 0]}>
        <sphereGeometry args={[0.065, 12, 12]} />
        <meshBasicMaterial color="#B7CC64" />
      </mesh>
      <mesh position={[-1.7, 0, 0]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#171717" />
      </mesh>
    </group>
  );
}

// Fallback for mobile, reduced-motion, or when WebGL is unsupported
const FallbackVisual: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center p-8 select-none">
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Ambient background soft glow */}
      <div className="absolute inset-0 rounded-full bg-[#B7CC64]/10 blur-2xl" />

      {/* Ring 1 */}
      <div 
        className="absolute inset-0 rounded-full border border-[#B7CC64]/60 animate-spin"
        style={{ animationDuration: '30s', borderStyle: 'dashed' }}
      />
      {/* Ring 2 */}
      <div 
        className="absolute inset-6 rounded-full border border-[#DEDDD6] animate-spin"
        style={{ animationDuration: '22s', animationDirection: 'reverse' }}
      />
      {/* Ring 3 */}
      <div 
        className="absolute inset-12 rounded-full border border-[#B7CC64]/40 animate-spin"
        style={{ animationDuration: '15s' }}
      />
      {/* Center Core */}
      <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border border-[#DEDDD6] flex items-center justify-center shadow-editorial">
        <div className="w-4 h-4 rounded-full bg-[#B7CC64] animate-ping opacity-75" />
      </div>
      {/* Monospace coordinates */}
      <span className="absolute bottom-2 text-[10px] font-mono text-[#77766F] tracking-widest">
        SYSTEM COORD // 28.61° N, 77.20° E
      </span>
    </div>
  </div>
);

export const Scene3D: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (isMobile || !hasWebGL) {
    return <FallbackVisual />;
  }

  return (
    <div className="w-full h-full min-h-[380px] md:min-h-[480px] relative">
      <Suspense fallback={<FallbackVisual />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          style={{ background: 'transparent' }}
        >
          {/* Crisp Studio Lighting for Light Theme */}
          <ambientLight intensity={0.9} color="#FAF9F5" />
          <directionalLight position={[6, 9, 6]} intensity={1.8} color="#FFFFFF" />
          <pointLight position={[-4, -3, -2]} intensity={1.2} color="#B7CC64" />
          <pointLight position={[4, -4, 4]} intensity={0.9} color="#EFEEE8" />

          {/* Core Orbital Geometry */}
          <OrbitalMechanism />
        </Canvas>
      </Suspense>

      {/* Decorative Technical Labeling */}
      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[#77766F] pointer-events-none select-none tracking-widest hidden md:block">
        <span className="text-[#B7CC64] font-bold">//</span> THREE.JS ORBITAL CORE
      </div>
    </div>
  );
};
