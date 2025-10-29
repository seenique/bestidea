"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="h-64 w-full overflow-hidden rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-zinc-50 to-white dark:border-white/10 dark:from-zinc-950 dark:to-black" />
    );
  }
  return <Hero3D />;
}



