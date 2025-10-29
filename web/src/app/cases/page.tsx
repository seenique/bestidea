export const metadata = {
  title: "Кейсы — bestidea",
  description: "Реальные примеры: лендинги, CRM/ERP, маркетплейсы и кастомные решения",
};

const CASES = [
  {
    title: "CRM для отдела продаж",
    company: "TechSales Pro",
    industry: "B2B Продажи",
    challenge: "Ручной учёт сделок, отсутствие аналитики, потеря лидов.",
    solution: "Разработали CRM с автоимпортом из почты, интеграцией 1С и телефонией. Внедрили воронку продаж, автоматические напоминания и дашборды.",
    results: [
      { metric: "-70%", label: "снижение бюджета" },
      { metric: "3 недели", label: "MVP до запуска" },
      { metric: "+22%", label: "рост конверсии" },
      { metric: "-40%", label: "время на отчёты" },
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "1С интеграция"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "ERP для складской логистики",
    company: "LogiWare",
    industry: "Логистика",
    challenge: "Устаревшая система учёта, ошибки при сборке заказов, отсутствие мобильного доступа.",
    solution: "Построили модульную ERP с мобильными терминалами, системой штрих-кодов, автоматической маршрутизацией и real-time аналитикой.",
    results: [
      { metric: "5 дней", label: "цикл релиза" },
      { metric: "-60%", label: "ошибки сборки" },
      { metric: "+35%", label: "скорость обработки" },
      { metric: "Мобильно", label: "доступ с терминалов" },
    ],
    tech: ["React", "Node.js", "Docker", "Mobile PWA"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    title: "Маркетплейс услуг",
    company: "ServiceMarket",
    industry: "Сфера услуг",
    challenge: "Нужен MVP за 6 недель: каталог, корзина, оплаты, профили исполнителей.",
    solution: "Создали PWA-маркетплейс с геолокацией, чатом, системой рейтингов, автоматическим биллингом и антифрод алгоритмами.",
    results: [
      { metric: "6 недель", label: "MVP запуск" },
      { metric: "+18%", label: "конверсия выше плана" },
      { metric: "PWA", label: "мобильное приложение" },
      { metric: "0 нарушений", label: "антифрод за 3 месяца" },
    ],
    tech: ["Next.js", "Stripe API", "WebSocket", "Redis"],
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
  },
  {
    title: "E-commerce платформа",
    company: "StyleShop",
    industry: "Ретейл",
    challenge: "Переход с устаревшего Magento на современную платформу без простоя.",
    solution: "Миграция данных, редизайн UI/UX, интеграция с платёжными системами и доставкой. A/B тесты и оптимизация конверсии.",
    results: [
      { metric: "2 недели", label: "миграция" },
      { metric: "+28%", label: "конверсия" },
      { metric: "-45%", label: "время загрузки" },
      { metric: "24/7", label: "без простоев" },
    ],
    tech: ["Next.js", "Shopify API", "Payment Gateways"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "Система управления обучением",
    company: "EduPlatform",
    industry: "Образование",
    challenge: "Создать LMS с видео-стримингом, тестами и сертификацией.",
    solution: "Разработали платформу с интерактивными курсами, live-вебинарами, автоматической проверкой заданий и выдачей сертификатов.",
    results: [
      { metric: "4 недели", label: "MVP до запуска" },
      { metric: "10k+", label: "студентов" },
      { metric: "+42%", label: "завершение курсов" },
      { metric: "HD видео", label: "стриминг" },
    ],
    tech: ["React", "Node.js", "FFmpeg", "WebRTC"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    title: "Портал для HR-отдела",
    company: "HRConnect",
    industry: "HR Tech",
    challenge: "Автоматизация найма, онбординга и управления персоналом.",
    solution: "Интеграция с job-сайтами, система резюме, видео-интервью, дашборды для аналитики найма и удержания.",
    results: [
      { metric: "-50%", label: "время найма" },
      { metric: "+31%", label: "удержание сотрудников" },
      { metric: "Автоматизация", label: "80% процессов" },
      { metric: "Интеграции", label: "5 источников вакансий" },
    ],
    tech: ["Vue.js", "Python", "AI Matching"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <section className="border-b border-purple-200/40 bg-neural">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-4xl font-bold mb-2"><span className="gradient-text">Кейсы</span></h1>
          <p className="text-slate-600 text-lg mb-12">Реальные проекты: скорость, экономия и бизнес‑эффекты.</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <div key={c.title} className="glass shadow-elevated rounded-2xl border-2 border-purple-200/40 overflow-hidden hover:border-cyan-300/60 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-bold text-lg">{c.title}</div>
                    <div className="text-white/80 text-sm">{c.company} • {c.industry}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-purple-600 mb-1">Задача</div>
                    <div className="text-sm text-slate-700">{c.challenge}</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-cyan-600 mb-1">Решение</div>
                    <div className="text-sm text-slate-700">{c.solution}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {c.results.map((r, i) => (
                      <div key={i} className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-lg p-2 text-center border border-purple-200/40">
                        <div className="text-lg font-bold gradient-text">{r.metric}</div>
                        <div className="text-xs text-slate-600">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {c.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}




