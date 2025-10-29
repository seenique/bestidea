import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-slate-900">
      <header className="sticky top-0 z-10 border-b border-purple-200/40 glass backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <img src="/logo.svg" alt="bestidea" width={24} height={24} className="h-6 w-6" loading="eager" />
            bestidea
          </div>
          <nav className="hidden gap-4 text-sm md:flex lg:gap-6">
            <Link href="#catalog" className="hover:opacity-80">Каталог</Link>
            <Link href="#benefits" className="hover:opacity-80">Преимущества</Link>
            <Link href="#process" className="hover:opacity-80">Процесс</Link>
            <Link href="/pricing" className="hover:opacity-80">Цены</Link>
            <Link href="/cases" className="hover:opacity-80">Кейсы</Link>
            <Link href="#contact" className="hover:opacity-80">Контакт</Link>
          </nav>
          <a href="#lead" className="hidden md:inline-block btn-brand rounded-full px-4 py-2 text-sm">Получить расчет</a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-purple-200/40 bg-neural bg-grid relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:py-28 relative z-10">
            <div>
              <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                <span className="gradient-text">Создаем цифровые продукты</span> в <span className="text-purple-600">10× дешевле</span> и в <span className="text-cyan-600">7,5× быстрее</span> — благодаря <span className="gradient-text ai-glow">нейросетям</span>
              </h1>
              <p className="mt-5 text-lg text-slate-700">
                Лендинги, CRM/ERP, маркетплейсы и кастомные системы за недели, а не месяцы. Опора на ИИ‑автоматизацию вместо раздутых команд и инфраструктуры.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#lead" className="btn-brand rounded-full px-5 py-3 text-white font-medium">Заказать аудит за 0 ₽</a>
                <a href="#catalog" className="rounded-full border-2 border-purple-300/60 bg-white/60 backdrop-blur px-5 py-3 font-medium hover:border-purple-400 transition-colors">Каталог решений</a>
              </div>
            </div>
            <div className="glass shadow-elevated rounded-2xl border-2 border-purple-200/60 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-3xl" />
              <HeroSection />
              <div className="grid grid-cols-2 gap-4 text-sm mt-6 relative z-10">
                <div className="rounded-xl bg-gradient-to-br from-purple-50 to-cyan-50 border border-purple-200/40 p-4 shadow-sm">
                  <div className="text-3xl font-bold gradient-text">10×</div>
                  <div className="text-slate-600 mt-1">дешевле</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-cyan-50 to-purple-50 border border-cyan-200/40 p-4 shadow-sm">
                  <div className="text-3xl font-bold gradient-text">7,5×</div>
                  <div className="text-slate-600 mt-1">быстрее</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-amber-50 to-purple-50 border border-amber-200/40 p-4 shadow-sm">
                  <div className="text-3xl font-bold text-amber-600">2–6 недель</div>
                  <div className="text-slate-600 mt-1">до запуска</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-pink-200/40 p-4 shadow-sm">
                  <div className="text-3xl font-bold gradient-text">750%</div>
                  <div className="text-slate-600 mt-1">рост эффективности</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="border-b border-purple-200/40 bg-white/60">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
            {[
              { title: "Дешевизна", desc: "снижение бюджета разработки до 10× за счет ИИ и модульности", icon: "💎" },
              { title: "Скорость", desc: "MVP за 1–3 недели, релизы — каждые 3–5 дней", icon: "⚡" },
              { title: "Масштабируемость", desc: "от лендинга до ERP без переписываний", icon: "🚀" },
              { title: "Качество", desc: "автотесты, линтеры, типы, метрики качества", icon: "✨" },
              { title: "Интеграции", desc: "1С, Битрикс24, Google, Telegram, WhatsApp, любые API", icon: "🔗" },
              { title: "Прозрачность", desc: "еженедельные демо, SLA, план работ", icon: "📊" },
            ].map((b) => (
              <div key={b.title} className="glass shadow-elevated rounded-2xl border-2 border-purple-200/40 p-6 hover:border-purple-300/60 transition-all">
                <div className="text-2xl mb-2">{b.icon}</div>
                <div className="text-lg font-bold gradient-text">{b.title}</div>
                <div className="mt-2 text-sm text-slate-600">{b.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Catalog */}
        <section id="catalog" className="border-b border-purple-200/40 bg-gradient-to-br from-purple-50/50 to-cyan-50/50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-3xl font-bold mb-2"><span className="gradient-text">Каталог решений</span></h2>
            <p className="text-slate-600 mb-8">Что мы создаём с помощью ИИ</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Лендинги и корпоративные сайты",
                "Интернет‑магазины и маркетплейсы",
                "CRM, ERP, Help Desk",
                "Блоги, медиа и портфолио",
                "BI и аналитика",
                "Чат‑боты и коммуникации",
                "ИИ‑ассистенты и генерация контента",
                "PWA и мобильные веб‑приложения",
                "LMS и обучение",
                "SaaS‑платформы",
              ].map((c) => (
                <div key={c} className="glass shadow-elevated rounded-2xl border-2 border-purple-200/40 p-5 text-sm hover:border-purple-300/60 hover:shadow-lg transition-all">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-b border-purple-200/40 bg-white/80">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-3xl font-bold mb-2"><span className="gradient-text">Процесс</span></h2>
            <p className="text-slate-600 mb-8">Как мы работаем</p>
            <ol className="mt-6 grid gap-4 text-sm sm:grid-cols-2 md:grid-cols-5">
              {[
                "Бриф и аудит → 24 часа",
                "Прототип и смета → 2–5 дней",
                "Разработка спринтами → еженедельные демо",
                "Запуск и аналитика → метрики, A/B",
                "Поддержка и развитие → SLA/roadmap",
              ].map((step, i) => (
                <li key={i} className="glass shadow-elevated rounded-2xl border-2 border-purple-200/40 p-5 hover:border-cyan-300/60 transition-all relative">
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-xs font-bold">{i + 1}</div>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Pricing */}
        <section id="pricing" className="border-b border-purple-200/40 bg-neural">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-3xl font-bold mb-2"><span className="gradient-text">Пакеты и цены</span></h2>
            <p className="text-slate-600 mb-8">Выберите подходящий вариант</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { name: "Start", price: "от 49 500 ₽", time: "1–2 недели", features: ["Лендинг/MVP", "Аналитика", "Базовые интеграции"], borderClass: "border-purple-200/60 hover:border-purple-300/80", blurClass: "from-purple-400/20 to-purple-600/20" },
                { name: "Growth", price: "от 145 000 ₽", time: "2–4 недели", features: ["CRM/интеграции", "Автотесты", "CI/CD"], borderClass: "border-cyan-200/60 hover:border-cyan-300/80", blurClass: "from-cyan-400/20 to-cyan-600/20" },
                { name: "Scale", price: "от 345 000 ₽", time: "4–8 недель", features: ["ERP/маркетплейс", "Высокая нагрузка", "Поддержка"], borderClass: "border-amber-200/60 hover:border-amber-300/80", blurClass: "from-amber-400/20 to-amber-600/20" },
              ].map((p) => (
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
                    <a href="#lead" className="mt-6 inline-block btn-brand rounded-full px-4 py-2 text-sm w-full text-center">Выбрать</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section id="lead" className="border-b border-purple-200/40 bg-gradient-to-br from-white to-purple-50/30">
          <div className="mx-auto max-w-2xl px-6 py-16">
            <h2 className="text-3xl font-bold mb-2"><span className="gradient-text">Получить расчет за 24 часа</span></h2>
            <p className="text-slate-600 mb-6">Заполните форму, мы свяжемся с вами</p>
            <form className="mt-6 grid gap-4" method="post" action="/api/lead">
              <input name="name" className="rounded-xl border-2 border-purple-200/60 bg-white/80 backdrop-blur p-3 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300/50 transition-all" placeholder="Ваше имя" required />
              <input name="contact" className="rounded-xl border-2 border-purple-200/60 bg-white/80 backdrop-blur p-3 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300/50 transition-all" placeholder="Телеграм/почта" required />
              <textarea name="about" className="rounded-xl border-2 border-purple-200/60 bg-white/80 backdrop-blur p-3 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300/50 transition-all" placeholder="Что хотите создать?" rows={4} />
              <button className="btn-brand rounded-full px-5 py-3 font-medium" type="submit">Отправить</button>
            </form>
            <p className="mt-3 text-sm text-slate-500">Нажимая «Отправить», вы соглашаетесь с обработкой данных.</p>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-neural">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-2"><span className="gradient-text ai-glow">Готовы начать?</span></h2>
            <p className="mt-3 text-slate-700 text-lg">Созвон на 15 минут — покажем демо и соберем бриф.</p>
            <a href="#lead" className="mt-6 inline-block btn-brand rounded-full px-8 py-4 font-medium text-lg">Записаться</a>
        </div>
        </section>
      </main>

      <footer className="border-t border-purple-200/40 bg-white/80 py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} bestidea — <span className="gradient-text font-semibold">ИИ‑разработка</span>
      </footer>
    </div>
  );
}
