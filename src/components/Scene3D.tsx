import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Inner 3D Gyroscopic Metallic Structure
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
      // Normalize -1 to 1
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    // Smooth dampening
    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

    if (groupRef.current) {
      groupRef.current.rotation.y = mouseRef.current.x * 0.45;
      groupRef.current.rotation.x = -mouseRef.current.y * 0.35;
    }

    // Continuous slow mechanical rotations
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
      coreRef.current.rotation.y -= delta * 0.35;
      coreRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={[1.4, 1.4, 1.4]}>
      {/* Central Core Metallic Icosahedron */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.75, 1]} />
        <meshStandardMaterial
          color="#151515"
          roughness={0.15}
          metalness={0.92}
          wireframe={false}
        />
      </mesh>

      {/* Subtle Inner Glow Core */}
      <mesh>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshBasicMaterial color="#D4F36A" wireframe={true} transparent opacity={0.35} />
      </mesh>

      {/* Outer Ring 1 — Major Celestial Axis */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.7, 0.022, 16, 100]} />
        <meshStandardMaterial
          color="#D4F36A"
          roughness={0.2}
          metalness={0.85}
          emissive="#D4F36A"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Outer Ring 2 — Oblique Equatorial Axis */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.95, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#E8E8E8"
          roughness={0.15}
          metalness={0.95}
        />
      </mesh>

      {/* Outer Ring 3 — Polar Gyro Axis */}
      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, 0, Math.PI / 3]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#888888"
          roughness={0.25}
          metalness={0.88}
        />
      </mesh>

      {/* Coordinate Orbital Nodes */}
      <mesh position={[1.7, 0, 0]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color="#D4F36A" />
      </mesh>
      <mesh position={[-1.7, 0, 0]}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshBasicMaterial color="#F4F2ED" />
      </mesh>
    </group>
  );
}

// Fallback for mobile, reduced-motion, or when WebGL is unsupported
const FallbackVisual: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center p-8 select-none">
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Ambient background glow */}
      <div className="absolute inset-0 rounded-full bg-[#D4F36A]/5 blur-2xl" />

      {/* Ring 1 */}
      <div 
        className="absolute inset-0 rounded-full border border-[#D4F36A]/40 animate-spin"
        style={{ animationDuration: '30s', borderStyle: 'dashed' }}
      />
      {/* Ring 2 */}
      <div 
        className="absolute inset-6 rounded-full border border-[rgba(255,255,255,0.2)] animate-spin"
        style={{ animationDuration: '22s', animationDirection: 'reverse' }}
      />
      {/* Ring 3 */}
      <div 
        className="absolute inset-12 rounded-full border border-[#D4F36A]/30 animate-spin"
        style={{ animationDuration: '15s' }}
      />
      {/* Center Core */}
      <div className="w-16 h-16 rounded-full bg-[#111111] border border-[rgba(255,255,255,0.25)] flex items-center justify-center shadow-[0_0_30px_rgba(212,243,106,0.15)]">
        <div className="w-4 h-4 rounded-full bg-[#D4F36A] animate-ping opacity-75" />
      </div>
      {/* Monospace coordinates */}
      <span className="absolute bottom-2 text-[10px] font-mono text-[#929292] tracking-widest">
        SYSTEM COORD // 28.61° N, 77.20° E
      </span>
    </div>
  </div>
);

export const Scene3D: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check mobile or small screen
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }

    // Test WebGL support
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
          {/* Subtle Studio Lighting */}
          <ambientLight intensity={0.65} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFFFFF" />
          <pointLight position={[-4, -3, -2]} intensity={1.8} color="#D4F36A" />
          <pointLight position={[3, -4, 4]} intensity={0.8} color="#FFFFFF" />

          {/* Core Orbital Geometry */}
          <OrbitalMechanism />
        </Canvas>
      </Suspense>

      {/* Decorative Technical Labeling */}
      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[#929292] pointer-events-none select-none tracking-widest hidden md:block">
        <span className="text-[#D4F36A]">//</span> THREE.JS ORBITAL CORE
      </div>
    </div>
  );
};

// Canvas WebGL context configuration

// Canvas WebGL context configuration

// Canvas WebGL context configuration

// Canvas WebGL context configuration
