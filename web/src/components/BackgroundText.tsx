"use client";
import { useEffect, useState } from "react";

type QuotePosition = {
  text: string;
  section: "hero" | "benefits" | "catalog" | "process" | "testimonials" | "pricing" | "lead" | "cta";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotation?: number;
  delay?: string;
};

const quotes: QuotePosition[] = [
  {
    text: "Этот сайт был создан за 45 минут",
    section: "hero",
    top: "20%",
    left: "5%",
    rotation: -5,
    delay: "0s",
  },
  {
    text: "CRM за неделю — реальность 2025 года",
    section: "hero",
    top: "15%",
    right: "8%",
    rotation: 3,
    delay: "0.5s",
  },
  {
    text: "10× дешевле — не маркетинг",
    section: "benefits",
    top: "25%",
    left: "10%",
    rotation: -8,
    delay: "1s",
  },
  {
    text: "От идеи до MVP за дни",
    section: "catalog",
    top: "30%",
    right: "12%",
    rotation: 6,
    delay: "1.5s",
  },
  {
    text: "Будущее разработки уже здесь",
    section: "process",
    bottom: "35%",
    left: "8%",
    rotation: -4,
    delay: "2s",
  },
  {
    text: "ИИ создаёт, ты зарабатываешь",
    section: "testimonials",
    top: "20%",
    right: "15%",
    rotation: 5,
    delay: "0.3s",
  },
  {
    text: "Маркетплейс за 6 недель",
    section: "pricing",
    top: "25%",
    left: "12%",
    rotation: -6,
    delay: "0.8s",
  },
  {
    text: "ERP без миллиона рублей",
    section: "pricing",
    bottom: "30%",
    right: "10%",
    rotation: 4,
    delay: "1.2s",
  },
  {
    text: "Скорость. Экономия. Результат.",
    section: "lead",
    top: "40%",
    left: "7%",
    rotation: -3,
    delay: "1.8s",
  },
  {
    text: "Твой собственный стартап за неделю",
    section: "cta",
    bottom: "25%",
    right: "8%",
    rotation: 7,
    delay: "0.6s",
  },
];

export default function BackgroundText() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" style={{ overflow: 'visible' }}>
      {/* Floating decorative elements - more varied */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-cyan-200/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-300/15 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute top-2/3 left-1/3 w-36 h-36 bg-cyan-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 right-1/5 w-28 h-28 bg-purple-200/15 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '4s' }} />
      
      {/* Grid pattern overlay (subtle) */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-tl from-cyan-100/30 to-transparent rounded-full blur-3xl" />
    </div>
  );
}
