"use client";
import Link from "next/link";

const PREVIEW_CASES = [
  {
    title: "CRM для отдела продаж",
    company: "TechSales Pro",
    result: "+22% конверсия",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=90&auto=format",
  },
  {
    title: "ERP для логистики",
    company: "LogiWare",
    result: "-60% ошибки сборки",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&q=90&auto=format",
  },
  {
    title: "Маркетплейс услуг",
    company: "ServiceMarket",
    result: "+18% конверсия",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=250&fit=crop&q=90&auto=format",
  },
];

export default function CasesPreview() {
  return (
    <section className="border-b border-slate-200/50 bg-white/60 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Примеры работ</h2>
            <p className="text-slate-600">Реальные результаты наших клиентов</p>
          </div>
          <Link
            href="/cases"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 backdrop-blur-sm px-5 py-2.5 font-medium hover:border-slate-400/70 hover:bg-white/90 transition-all text-slate-700"
          >
            Все кейсы
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PREVIEW_CASES.map((c, i) => (
            <Link
              key={i}
              href="/cases"
              className="group rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm overflow-hidden hover:border-slate-300/70 hover:shadow-lg transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold text-lg mb-1">{c.title}</div>
                  <div className="text-white/90 text-sm">{c.company}</div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-green-600">{c.result}</div>
                  <div className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                    Смотреть →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


