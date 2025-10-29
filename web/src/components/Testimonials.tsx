import SectionQuote from "@/components/SectionQuote";

export default function Testimonials() {
  const items = [
    {
      name: "Алексей Воробьёв",
      role: "Директор по продажам, TechSales Pro",
      text: "Запустили CRM за 3 недели вместо обещанных 3 месяцев. Сократили ручные операции на 80% и ускорили цикл сделки. Экономия бюджета оказалась ~70% по сравнению с предыдущими оценками.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
      rating: 5,
    },
    {
      name: "Мария Соколова",
      role: "Операционный директор, LogiWare",
      text: "ERP для склада работает отлично. Сборка заказов автоматизирована, аналитика в реальном времени, дашборды информативные. Еженедельные релизы без простоев — это реально.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
      rating: 5,
    },
    {
      name: "Игорь Петров",
      role: "Основатель, ServiceMarket",
      text: "MVP маркетплейса за 6 недель — это фантастика! Оплаты, антифрод, PWA — всё работает как часы. Конверсия выше прогнозной на 18%, и это только начало.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
      rating: 5,
    },
    {
      name: "Елена Кузнецова",
      role: "CEO, StyleShop",
      text: "Миграция с Magento прошла безболезненно. Новый e-commerce работает быстрее, конверсия выросла на 28%. Команда реагировала на все запросы моментально. Рекомендую!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
      rating: 5,
    },
    {
      name: "Дмитрий Орлов",
      role: "CTO, EduPlatform",
      text: "LMS с видео-стримингом запустили за 4 недели. 10 000+ студентов уже на платформе, плюс 42% рост завершения курсов. Техническая поддержка на высшем уровне.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
      rating: 5,
    },
    {
      name: "Анна Волкова",
      role: "HR Director, HRConnect",
      text: "HR-портал сократил время найма на 50%. Автоматизация 80% процессов, интеграции с job-сайтами работают идеально. Удержание сотрудников выросло на 31%.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
      rating: 5,
    },
  ];
  return (
    <section className="border-b border-slate-200/50 bg-white/60 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
      <SectionQuote text="ИИ создаёт, ты зарабатываешь" top="20%" right="15%" rotation={5} delay="0.3s" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-2 text-slate-900">Отзывы</h2>
        <p className="text-slate-600 mb-8">Что говорят клиенты</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-6 hover:border-slate-300/70 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-slate-200 group-hover:border-purple-300 transition-colors"
                />
                <div className="flex-1">
                  <div className="font-bold text-slate-900 mb-1">{t.name}</div>
                  <div className="text-xs text-slate-500 mb-2">{t.role}</div>
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-slate-700 text-sm leading-relaxed mb-4">"{t.text}"</div>
              <div className="pt-4 border-t border-slate-200/50">
                <div className="text-xs text-slate-500 font-medium">Результат проекта:</div>
                <div className="text-xs text-green-600 font-semibold mt-1">
                  {i === 0 && "Экономия ~70%, рост конверсии +22%"}
                  {i === 1 && "Автоматизация 80%, без простоев"}
                  {i === 2 && "MVP за 6 недель, конверсия +18%"}
                  {i === 3 && "Конверсия +28%, время загрузки -45%"}
                  {i === 4 && "10k+ студентов, рост завершения +42%"}
                  {i === 5 && "Время найма -50%, удержание +31%"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



