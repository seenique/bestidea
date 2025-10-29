import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import BackgroundText from "@/components/BackgroundText";
import SectionQuote from "@/components/SectionQuote";
import CasesPreview from "@/components/CasesPreview";
import StatsSection from "@/components/StatsSection";
import ComparisonSection from "@/components/ComparisonSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 glass backdrop-blur-md bg-white/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <img src="/logo.svg" alt="bestidea" width={24} height={24} className="h-6 w-6" loading="eager" />
            <span>bestidea</span>
          </div>
          <nav className="hidden gap-4 text-sm md:flex lg:gap-6">
            <Link href="#catalog" className="text-slate-700 hover:text-slate-900 transition-colors">Каталог</Link>
            <Link href="#benefits" className="text-slate-700 hover:text-slate-900 transition-colors">Преимущества</Link>
            <Link href="#process" className="text-slate-700 hover:text-slate-900 transition-colors">Процесс</Link>
            <Link href="/pricing" className="text-slate-700 hover:text-slate-900 transition-colors">Цены</Link>
            <Link href="/cases" className="text-slate-700 hover:text-slate-900 transition-colors">Кейсы</Link>
            <Link href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors">Контакт</Link>
          </nav>
          <a href="#lead" className="hidden md:inline-block btn-brand rounded-full px-4 py-2 text-sm">Получить расчет</a>
        </div>
      </header>

      <BackgroundText />
      <main className="relative z-10">
        {/* Hero */}
        <section className="border-b border-slate-200/50 bg-gradient-to-b from-slate-50/60 to-white/50 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
          <SectionQuote text="Этот сайт был создан за 45 минут" top="5%" left="2%" rotation={-8} delay="0s" />
          <SectionQuote text="CRM за неделю — реальность 2025 года" top="5%" right="2%" rotation={8} delay="0.5s" />
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:py-28 relative z-10">
            <div>
              <h1 className="text-3xl font-bold leading-tight md:text-5xl text-slate-900">
                Создаем цифровые продукты в <span className="gradient-text">10× дешевле</span> и в <span className="gradient-text">7,5× быстрее</span> — благодаря нейросетям
              </h1>
              <p className="mt-5 text-lg text-slate-700">
                Лендинги, CRM/ERP, маркетплейсы и кастомные системы за недели, а не месяцы. Опора на ИИ‑автоматизацию вместо раздутых команд и инфраструктуры.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#lead" className="btn-brand rounded-full px-5 py-3 text-white font-medium">Заказать аудит за 0 ₽</a>
                <a href="#catalog" className="rounded-full border border-slate-300/70 bg-white/70 backdrop-blur-sm px-5 py-3 font-medium hover:border-slate-400/70 hover:bg-white/80 transition-colors text-slate-700">Каталог решений</a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur-sm p-6 shadow-sm">
              <HeroSection />
              <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/70 p-4">
                  <div className="text-3xl font-bold text-slate-900">10×</div>
                  <div className="text-slate-600 mt-1">дешевле</div>
                </div>
                <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/70 p-4">
                  <div className="text-3xl font-bold text-slate-900">7,5×</div>
                  <div className="text-slate-600 mt-1">быстрее</div>
                </div>
                <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/70 p-4">
                  <div className="text-3xl font-bold text-slate-900">2–6 недель</div>
                  <div className="text-slate-600 mt-1">до запуска</div>
                </div>
                <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/70 p-4">
                  <div className="text-3xl font-bold text-slate-900">750%</div>
                  <div className="text-slate-600 mt-1">рост эффективности</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Benefits */}
        <section id="benefits" className="border-b border-slate-200/50 bg-white/60 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
          <SectionQuote text="10× дешевле — не маркетинг" top="10%" right="3%" rotation={10} delay="1s" />
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
            {[
              { title: "Дешевизна", desc: "снижение бюджета разработки до 10× за счет ИИ и модульности" },
              { title: "Скорость", desc: "MVP за 1–3 недели, релизы — каждые 3–5 дней" },
              { title: "Масштабируемость", desc: "от лендинга до ERP без переписываний" },
              { title: "Качество", desc: "автотесты, линтеры, типы, метрики качества" },
              { title: "Интеграции", desc: "1С, Битрикс24, Google, Telegram, WhatsApp, любые API" },
              { title: "Прозрачность", desc: "еженедельные демо, SLA, план работ" },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-6 hover:border-slate-300/70 hover:shadow-md transition-all">
                <div className="text-lg font-semibold text-slate-900">{b.title}</div>
                <div className="mt-2 text-sm text-slate-600">{b.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Catalog */}
        <section id="catalog" className="border-b border-slate-200/50 bg-white/60 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
          <SectionQuote text="От идеи до MVP за дни" top="10%" left="3%" rotation={-10} delay="1.5s" />
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Каталог решений</h2>
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
                <div key={c} className="rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-5 text-sm hover:border-slate-300/70 hover:shadow-md transition-all text-slate-700">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-b border-slate-200/50 bg-white/60 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
          <SectionQuote text="Будущее разработки уже здесь" top="10%" right="3%" rotation={12} delay="2s" />
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Процесс</h2>
            <p className="text-slate-600 mb-8">Как мы работаем</p>
            <ol className="mt-6 grid gap-4 text-sm sm:grid-cols-2 md:grid-cols-5">
              {[
                "Бриф и аудит → 24 часа",
                "Прототип и смета → 2–5 дней",
                "Разработка спринтами → еженедельные демо",
                "Запуск и аналитика → метрики, A/B",
                "Поддержка и развитие → SLA/roadmap",
              ].map((step, i) => (
                <li key={i} className="rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-5 hover:border-slate-300/70 hover:shadow-md transition-all relative">
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</div>
                  <span className="text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Cases Preview */}
        <CasesPreview />

        {/* Comparison */}
        <ComparisonSection />

        {/* Testimonials */}
        <Testimonials />

        {/* Pricing */}
        <section id="pricing" className="border-b border-slate-200/50 bg-slate-50/60 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
          <SectionQuote text="Маркетплейс за 6 недель" top="8%" left="3%" rotation={-12} delay="0.8s" />
          <SectionQuote text="ERP без миллиона рублей" top="8%" right="3%" rotation={12} delay="1.2s" />
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Пакеты и цены</h2>
            <p className="text-slate-600 mb-8">Выберите подходящий вариант</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { name: "Start", price: "от 49 500 ₽", time: "1–2 недели", features: ["Лендинг/MVP", "Аналитика", "Базовые интеграции"] },
                { name: "Growth", price: "от 145 000 ₽", time: "2–4 недели", features: ["CRM/интеграции", "Автотесты", "CI/CD"] },
                { name: "Scale", price: "от 345 000 ₽", time: "4–8 недель", features: ["ERP/маркетплейс", "Высокая нагрузка", "Поддержка"] },
              ].map((p) => (
                <div key={p.name} className="rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-6 hover:border-slate-300/70 hover:shadow-lg transition-all">
                  <div className="text-xl font-semibold text-slate-900">{p.name}</div>
                  <div className="mt-2 text-3xl font-bold text-slate-900">{p.price}</div>
                  <div className="text-sm text-slate-600">Сроки: {p.time}</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#lead" className="mt-6 inline-block btn-brand rounded-full px-4 py-2 text-sm w-full text-center">Выбрать</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section id="lead" className="border-b border-slate-200/50 bg-white/60 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
          <SectionQuote text="Скорость. Экономия. Результат." top="10%" right="3%" rotation={15} delay="1.8s" />
          <div className="mx-auto max-w-2xl px-6 py-16">
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Получить расчет за 24 часа</h2>
            <p className="text-slate-600 mb-6">Заполните форму, мы свяжемся с вами</p>
            <form className="mt-6 grid gap-4" method="post" action="/api/lead">
              <input name="name" className="rounded-xl border border-slate-300/70 bg-white/80 backdrop-blur-sm p-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" placeholder="Ваше имя" required />
              <input name="contact" className="rounded-xl border border-slate-300/70 bg-white/80 backdrop-blur-sm p-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" placeholder="Телеграм/почта" required />
              <textarea name="about" className="rounded-xl border border-slate-300/70 bg-white/80 backdrop-blur-sm p-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" placeholder="Что хотите создать?" rows={4} />
              <button className="btn-brand rounded-full px-5 py-3 font-medium" type="submit">Отправить</button>
            </form>
            <p className="mt-3 text-sm text-slate-500">Нажимая «Отправить», вы соглашаетесь с обработкой данных.</p>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-slate-50/60 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
          <SectionQuote text="Твой собственный стартап за неделю" top="10%" left="3%" rotation={-15} delay="0.6s" />
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Готовы начать?</h2>
            <p className="mt-3 text-slate-700 text-lg">Созвон на 15 минут — покажем демо и соберем бриф.</p>
            <a href="#lead" className="mt-6 inline-block btn-brand rounded-full px-8 py-4 font-medium text-lg">Записаться</a>
        </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/50 bg-white/60 backdrop-blur-sm py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} bestidea — ИИ‑разработка
      </footer>
    </div>
  );
}
