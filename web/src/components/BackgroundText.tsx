"use client";
import { useEffect, useState } from "react";

const headlines = [
  "Этот сайт был создан за 45 минут",
  "CRM за неделю — реальность 2025 года",
  "Твой собственный стартап за неделю",
  "Тотальная экономия",
  "ИИ создаёт, ты зарабатываешь",
  "10× дешевле — не маркетинг",
  "От идеи до MVP за дни",
  "Будущее разработки уже здесь",
  "Маркетплейс за 6 недель",
  "ERP без миллиона рублей",
  "Скорость. Экономия. Результат.",
];

export default function BackgroundText() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top headlines */}
      <div className="absolute top-16 left-0 right-0 flex justify-between px-4 md:px-8 opacity-[0.08]">
        <div className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-400 whitespace-nowrap animate-slide-left">
          {headlines[0]}
        </div>
        <div className="hidden lg:block text-xl md:text-3xl lg:text-4xl font-bold text-slate-400 whitespace-nowrap animate-slide-right">
          {headlines[1]}
        </div>
      </div>

      {/* Left side headlines (vertical) */}
      <div className="absolute top-1/4 left-2 md:left-4 transform -rotate-90 origin-left opacity-[0.08]">
        <div className="text-base md:text-2xl font-bold text-slate-400 whitespace-nowrap">
          {headlines[2]}
        </div>
      </div>
      <div className="absolute top-2/3 left-2 md:left-4 transform -rotate-90 origin-left opacity-[0.08]">
        <div className="text-base md:text-2xl font-bold text-slate-400 whitespace-nowrap">
          {headlines[5]}
        </div>
      </div>

      {/* Right side headlines (vertical) */}
      <div className="absolute top-1/3 right-2 md:right-4 transform rotate-90 origin-right opacity-[0.08]">
        <div className="text-base md:text-2xl font-bold text-slate-400 whitespace-nowrap">
          {headlines[3]}
        </div>
      </div>
      <div className="absolute bottom-1/4 right-2 md:right-4 transform rotate-90 origin-right opacity-[0.08]">
        <div className="text-base md:text-2xl font-bold text-slate-400 whitespace-nowrap">
          {headlines[9]}
        </div>
      </div>

      {/* Bottom headlines */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-between px-4 md:px-8 opacity-[0.08]">
        <div className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-400 whitespace-nowrap animate-slide-right">
          {headlines[4]}
        </div>
        <div className="hidden lg:block text-xl md:text-3xl lg:text-4xl font-bold text-slate-400 whitespace-nowrap animate-slide-left">
          {headlines[6]}
        </div>
      </div>

      {/* Additional floating text elements */}
      <div className="absolute top-1/2 left-1/4 opacity-[0.06]">
        <div className="text-lg md:text-2xl font-bold text-slate-300 transform -rotate-12">
          {headlines[7]}
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-[0.06]">
        <div className="text-lg md:text-2xl font-bold text-slate-300 transform rotate-12">
          {headlines[10]}
        </div>
      </div>

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

