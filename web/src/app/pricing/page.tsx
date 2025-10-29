import Link from "next/link";
import BackgroundText from "@/components/BackgroundText";

export const metadata = {
  title: "Тарифы — bestidea",
  description: "Пакеты Start/Growth/Scale: сроки, стоимость и включенные работы",
};

const PLANS = [
  { 
    name: "Start", 
    price: "от 49 500 ₽", 
    time: "1–2 недели", 
    features: ["Лендинг/MVP", "Аналитика", "Базовые интеграции"],
    gradient: "from-purple-500 to-pink-500",
    icon: "🚀"
  },
  { 
    name: "Growth", 
    price: "от 145 000 ₽", 
    time: "2–4 недели", 
    features: ["CRM/интеграции", "Автотесты", "CI/CD"],
    gradient: "from-cyan-500 to-blue-500",
    icon: "📈"
  },
  { 
    name: "Scale", 
    price: "от 345 000 ₽", 
    time: "4–8 недель", 
    features: ["ERP/маркетплейс", "Высокая нагрузка", "Поддержка"],
    gradient: "from-amber-500 to-orange-500",
    icon: "⚡"
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-slate-900">
      <BackgroundText />
      
      <header className="sticky top-0 z-50 border-b border-slate-200 glass backdrop-blur-md bg-white/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="bestidea" width={24} height={24} className="h-6 w-6" loading="eager" />
            <span>bestidea</span>
          </Link>
          <nav className="hidden gap-4 text-sm md:flex lg:gap-6">
            <Link href="/#catalog" className="text-slate-700 hover:text-slate-900 transition-colors">Каталог</Link>
            <Link href="/#benefits" className="text-slate-700 hover:text-slate-900 transition-colors">Преимущества</Link>
            <Link href="/#process" className="text-slate-700 hover:text-slate-900 transition-colors">Процесс</Link>
            <Link href="/cases" className="text-slate-700 hover:text-slate-900 transition-colors">Кейсы</Link>
            <Link href="/#lead" className="text-slate-700 hover:text-slate-900 transition-colors">Контакт</Link>
          </nav>
          <Link href="/#lead" className="hidden md:inline-block btn-brand rounded-full px-4 py-2 text-sm">Получить расчет</Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="border-b border-slate-200/50 bg-gradient-to-b from-slate-50/60 to-white/50 backdrop-blur-sm relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                <span className="gradient-text">Тарифы</span>
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Выбирайте пакет — мы адаптируем под вашу задачу. Все цены фиксированные, без скрытых платежей.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {PLANS.map((p) => (
                <div 
                  key={p.name} 
                  className="group relative rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-8 hover:border-slate-300/70 hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{p.icon}</span>
                      <div className="text-2xl font-bold text-slate-900">{p.name}</div>
                    </div>
                    <div className="mb-2">
                      <div className="text-4xl font-extrabold text-slate-900">{p.price}</div>
                      <div className="text-sm text-slate-600 mt-1">Сроки: {p.time}</div>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.gradient}`}></div>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/#lead" 
                      className={`mt-8 inline-block w-full text-center rounded-full px-5 py-3 font-medium text-white bg-gradient-to-r ${p.gradient} hover:shadow-lg hover:scale-105 transition-all`}
                    >
                      Выбрать пакет
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-slate-600 mb-4">Нужна индивидуальная стоимость?</p>
              <Link href="/#lead" className="btn-brand rounded-full px-6 py-3 font-medium inline-block">
                Получить расчет за 24 часа
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/50 bg-white/60 backdrop-blur-sm py-10 text-center text-sm text-slate-600">
        <Link href="/" className="hover:text-slate-900 transition-colors">← Вернуться на главную</Link>
      </footer>
    </div>
  );
}
