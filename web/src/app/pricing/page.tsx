export const metadata = {
  title: "Тарифы — bestidea",
  description: "Пакеты Start/Growth/Scale: сроки, стоимость и включенные работы",
};

const PLANS = [
  { name: "Start", price: "от 49 500 ₽", time: "1–2 недели", features: ["Лендинг/MVP", "Аналитика", "Базовые интеграции"] },
  { name: "Growth", price: "от 145 000 ₽", time: "2–4 недели", features: ["CRM/интеграции", "Автотесты", "CI/CD"] },
  { name: "Scale", price: "от 345 000 ₽", time: "4–8 недель", features: ["ERP/маркетплейс", "Высокая нагрузка", "Поддержка"] },
];

export default function PricingPage() {
  const plansWithStyles = [
    { ...PLANS[0], borderClass: "border-purple-200/60 hover:border-purple-300/80", blurClass: "from-purple-400/20 to-purple-600/20" },
    { ...PLANS[1], borderClass: "border-cyan-200/60 hover:border-cyan-300/80", blurClass: "from-cyan-400/20 to-cyan-600/20" },
    { ...PLANS[2], borderClass: "border-amber-200/60 hover:border-amber-300/80", blurClass: "from-amber-400/20 to-amber-600/20" },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <section className="border-b border-purple-200/40 bg-neural">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-bold mb-2"><span className="gradient-text">Тарифы</span></h1>
          <p className="mt-3 text-slate-600 text-lg">Выбирайте пакет — мы адаптируем под задачу.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {plansWithStyles.map((p) => (
              <div key={p.name} className={`glass shadow-elevated rounded-2xl border-2 ${p.borderClass} p-6 relative overflow-hidden transition-all`}>
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${p.blurClass} rounded-full blur-2xl`} />
                <div className="relative z-10">
                  <div className="text-xl font-bold gradient-text">{p.name}</div>
                  <div className="mt-2 text-3xl font-bold text-slate-800">{p.price}</div>
                  <div className="text-sm text-slate-600">Сроки: {p.time}</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/#lead" className="mt-6 inline-block btn-brand rounded-full px-4 py-2 text-sm w-full text-center">Выбрать</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}




