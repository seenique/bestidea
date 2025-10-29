"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense, useMemo } from "react";

function Prism() {
  const vertices = useMemo(() => {
    const r = 1; const h = 1.2; const n = 6;
    const verts: number[] = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const x = Math.cos(a) * r; const z = Math.sin(a) * r;
      // top and bottom triangles
      verts.push(0, h, 0, x, -h, z, Math.cos(((i+1)%n)/n*2*Math.PI)*r, -h, Math.sin(((i+1)%n)/n*2*Math.PI)*r);
    }
    return new Float32Array(verts);
  }, []);
  return (
    <mesh rotation={[0.3, 0.2, 0.1]}>
      <icosahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial color={"#8b5cf6"} metalness={0.3} roughness={0.2} envMapIntensity={1.2} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-zinc-50 to-white dark:border-white/10 dark:from-zinc-950 dark:to-black">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Float floatIntensity={1.5} rotationIntensity={1.2} speed={1.5}>
            <Prism />
          </Float>
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}



