"use client";
import React from "react";

const COMPARISON = [
  {
    aspect: "Стоимость разработки",
    traditional: "1-2 млн руб.",
    our: "от 345 000 ₽",
    savings: "10× дешевле",
  },
  {
    aspect: "Срок разработки",
    traditional: "3-6 месяцев",
    our: "2-6 недель",
    savings: "7,5× быстрее",
  },
  {
    aspect: "Размер команды",
    traditional: "5-10 человек",
    our: "2-3 человека",
    savings: "ИИ-автоматизация",
  },
  {
    aspect: "Сложность изменений",
    traditional: "Недели ожидания",
    our: "3-5 дней релиз",
    savings: "Модульная архитектура",
  },
];

export default function ComparisonSection() {
  return (
    <section className="border-b border-slate-200/50 bg-gradient-to-br from-purple-50/30 via-white/50 to-cyan-50/30 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-slate-900">Сравнение подходов</h2>
          <p className="text-slate-600">Традиционная разработка vs ИИ-разработка</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="hidden lg:block"></div>
          <div className="text-center pb-4 border-b border-slate-200/50">
            <div className="text-sm font-semibold text-slate-500 mb-2">Традиционная разработка</div>
            <div className="h-1 bg-slate-200 rounded-full max-w-24 mx-auto"></div>
          </div>
          <div className="text-center pb-4 border-b border-slate-200/50">
            <div className="text-sm font-semibold text-slate-900 mb-2">bestidea</div>
            <div className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full max-w-24 mx-auto"></div>
          </div>
          <div className="text-center pb-4 border-b border-slate-200/50">
            <div className="text-sm font-semibold text-green-600 mb-2">Выгода</div>
            <div className="h-1 bg-green-400 rounded-full max-w-24 mx-auto"></div>
          </div>
          {COMPARISON.map((item, i) => (
            <React.Fragment key={`row-${i}`}>
              <div className="font-semibold text-slate-900 py-4 text-sm md:text-base border-b border-slate-100 lg:border-b-0">
                {item.aspect}
              </div>
              <div className="text-center py-4 border-b border-slate-100 lg:border-b-0">
                <div className="text-slate-600 text-sm">{item.traditional}</div>
              </div>
              <div className="text-center py-4 border-b border-slate-100 lg:border-b-0">
                <div className="font-bold text-slate-900 text-sm">{item.our}</div>
              </div>
              <div className="text-center py-4 border-b border-slate-100 lg:border-b-0">
                <div className="font-semibold text-green-600 text-sm">{item.savings}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

