"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense, useMemo } from "react";

// Простые геометрические символы для типов сайтов (используем геометрию вместо текста)
function SitePlane({ position, rotation, iconShape, color }: { position: [number, number, number]; rotation: [number, number, number]; iconShape: "circle" | "square" | "triangle" | "diamond"; color: string }) {
  const iconNode = useMemo(() => {
    switch (iconShape) {
      case "circle":
        return <sphereGeometry args={[0.3, 16, 16]} />;
      case "square":
        return <boxGeometry args={[0.5, 0.5, 0.05]} />;
      case "triangle":
        return <coneGeometry args={[0.3, 0.5, 3]} />;
      case "diamond":
        return <octahedronGeometry args={[0.3]} />;
    }
  }, [iconShape]);

  return (
    <group position={position} rotation={rotation}>
      {/* Основная плоскость */}
      <mesh>
        <boxGeometry args={[1.8, 1.8, 0.05]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.2} 
          roughness={0.8}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* Внутренняя панель */}
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry args={[1.6, 1.6, 0.01]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>
      {/* Иконка */}
      <mesh position={[0, 0.3, 0.04]}>
        {iconNode}
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      {/* Декоративные линии */}
      <mesh position={[0, -0.2, 0.04]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.8, 0.02, 0.01]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, -0.4, 0.04]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.6, 0.02, 0.01]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function WebsiteCube() {
  const sites = useMemo(() => [
    { iconShape: "square" as const, color: "#8b5cf6", pos: [0, 0, 1.1] as [number, number, number], rot: [0, 0, 0] as [number, number, number] },
    { iconShape: "circle" as const, color: "#06b6d4", pos: [0, 0, -1.1] as [number, number, number], rot: [Math.PI, 0, 0] as [number, number, number] },
    { iconShape: "triangle" as const, color: "#f59e0b", pos: [0, 1.1, 0] as [number, number, number], rot: [-Math.PI / 2, 0, 0] as [number, number, number] },
    { iconShape: "diamond" as const, color: "#8b5cf6", pos: [0, -1.1, 0] as [number, number, number], rot: [Math.PI / 2, 0, 0] as [number, number, number] },
    { iconShape: "square" as const, color: "#06b6d4", pos: [1.1, 0, 0] as [number, number, number], rot: [0, Math.PI / 2, 0] as [number, number, number] },
    { iconShape: "circle" as const, color: "#f59e0b", pos: [-1.1, 0, 0] as [number, number, number], rot: [0, -Math.PI / 2, 0] as [number, number, number] },
  ], []);

  return (
    <group rotation={[0.2, 0.3, 0]}>
      {/* Центральная ось/стержень */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2.4, 8]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} emissive="#8b5cf6" emissiveIntensity={0.3} />
      </mesh>
      {/* Плоскости с примерами сайтов */}
      {sites.map((site, i) => (
        <SitePlane
          key={i}
          position={site.pos}
          rotation={site.rot}
          iconShape={site.iconShape}
          color={site.color}
        />
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-2xl border border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-white relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]} // Ограничиваем DPR для производительности
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <pointLight position={[-2, -2, -2]} intensity={0.5} color="#06b6d4" />
        <Suspense fallback={null}>
          <Float floatIntensity={1} rotationIntensity={0.5} speed={1.2}>
            <WebsiteCube />
          </Float>
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI * 2 / 3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
