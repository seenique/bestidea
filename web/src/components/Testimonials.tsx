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
    <section className="border-b border-purple-200/40 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-2"><span className="gradient-text">Отзывы</span></h2>
        <p className="text-slate-600 mb-8">Что говорят клиенты</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={i}
              className="glass shadow-elevated rounded-2xl border-2 border-purple-200/40 p-6 hover:border-cyan-300/60 transition-all relative"
            >
              <div className="absolute top-4 right-4 text-2xl opacity-20">💬</div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-200/60"
                />
                <div className="flex-1">
                  <div className="font-bold text-slate-800">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400">⭐</span>
                ))}
              </div>
              <div className="text-slate-700 text-sm relative z-10 leading-relaxed">"{t.text}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



