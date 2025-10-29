"use client";

const STATS = [
  { value: "70+", label: "Проектов запущено", sublabel: "CRM, ERP, маркетплейсы" },
  { value: "10×", label: "Дешевле", sublabel: "чем традиционная разработка" },
  { value: "2-6", label: "Недель до MVP", sublabel: "вместо месяцев" },
  { value: "750%", label: "Рост эффективности", sublabel: "благодаря ИИ-автоматизации" },
];

export default function StatsSection() {
  return (
    <section className="border-b border-slate-200/50 bg-gradient-to-br from-purple-50/40 via-white/50 to-cyan-50/40 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-slate-900">Цифры, которые говорят</h2>
          <p className="text-slate-600">Реальные результаты нашей работы</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="text-center rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-6 hover:border-slate-300/70 hover:shadow-md transition-all"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</div>
              <div className="text-sm text-slate-600">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


