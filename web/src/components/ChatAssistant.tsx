"use client";
import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

// Локальные ответы для быстрой работы без API
const PRICE_INFO: Record<string, string> = {
  лендинг: "Лендинг (Start): от 49 500 ₽, срок 1-2 недели. Включено: дизайн, разработка, базовые интеграции, аналитика.",
  crm: "CRM (Growth): от 145 000 ₽, срок 2-4 недели. Включено: модули продаж, интеграции с 1С/Битрикс24, автотесты, CI/CD.",
  erp: "ERP (Scale): от 345 000 ₽, срок 4-8 недель. Включено: модульная система, высокая нагрузка, поддержка, масштабирование.",
  маркетплейс: "Маркетплейс (Scale): от 345 000 ₽, срок 4-8 недель. Включено: каталог, корзина, оплаты, профили, антифрод.",
};

const SUGGESTIONS = [
  {
    title: "Узнать цену",
    desc: "на лендинг или CRM",
    prompt: "Сколько стоит лендинг?",
  },
  {
    title: "Сроки",
    desc: "разработки проекта",
    prompt: "Какие сроки разработки CRM?",
  },
  {
    title: "Что входит",
    desc: "в тариф Start/Growth",
    prompt: "Что входит в тариф Start?",
  },
  {
    title: "Примеры",
    desc: "готовых проектов",
    prompt: "Покажи примеры готовых CRM",
  },
];

function getLocalResponse(query: string, lastMsg?: string): string | null {
  const lower = query.toLowerCase();
  if (lower.includes("цена") || lower.includes("стоимость") || lower.includes("сколько")) {
    for (const [key, info] of Object.entries(PRICE_INFO)) {
      if (lower.includes(key)) return info;
    }
    return "Наши тарифы: Start (лендинг) — от 49 500 ₽, Growth (CRM) — от 145 000 ₽, Scale (ERP/маркетплейс) — от 345 000 ₽. Что конкретно вас интересует?";
  }
  if (lower.includes("срок") || lower.includes("время") || lower.includes("сколько времени")) {
    return "Сроки разработки: лендинг — 1-2 недели, CRM — 2-4 недели, ERP/маркетплейс — 4-8 недель. MVP можем запустить быстрее!";
  }
  if (lower.includes("что можете") || lower.includes("что делаете") || lower.includes("услуги")) {
    return "Создаём: лендинги, CRM, ERP, маркетплейсы, блоги, BI-аналитику, LMS, SaaS. С помощью ИИ в 10× дешевле и в 7,5× быстрее традиционной разработки.";
  }
  if (lower.includes("процесс") || lower.includes("как работаете") || lower.includes("этапы")) {
    return "Процесс: 1) Бриф и аудит (24ч) → 2) Прототип и смета (2-5 дней) → 3) Разработка спринтами с еженедельными демо → 4) Запуск и аналитика → 5) Поддержка.";
  }
  return null;
}

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0) {
      setShowSuggestions(false);
    }
  }, [messages]);

  async function send(prompt?: string) {
    const userMessage = prompt || input.trim();
    if (!userMessage) return;

    const next: Message[] = [
      ...messages,
      { role: "user", content: userMessage } as Message,
    ];
    setMessages(next);
    setInput("");
    setShowSuggestions(false);

    // Сначала проверяем локальные ответы
    const localReply = getLocalResponse(userMessage, messages[messages.length - 1]?.content);
    if (localReply) {
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: localReply } as Message,
        ]);
      }, 300);
      return;
    }

    // Если не нашли локальный ответ, используем API
    try {
      const res = await fetch("/api/chat", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ messages: next.slice(-6) }) 
      });
      const data: any = await res.json();
      setMessages((m) => [
        ...m,
        { role: "assistant", content: (data && data.reply) || "Уточните, пожалуйста. Например: \"сколько стоит CRM?\" или \"что входит в тариф Start?\"" } as Message,
      ]);
    } catch (e) {
      setMessages(m => [...m, { role: "assistant", content: "Не могу подключиться к серверу. Попробуйте задать вопрос про цены или тарифы, я отвечу из своей базы!" } as Message]);
    }
  }

  return (
    <section className="border-b border-slate-200/50 bg-gradient-to-br from-purple-50/40 via-white/60 to-cyan-50/40 backdrop-blur-sm relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-slate-900">
            <span className="gradient-text">ИИ‑ассистент</span>
          </h2>
          <p className="text-slate-600">Помогу выбрать решение и рассказать про цены</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-purple-200/70 shadow-xl overflow-hidden relative">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-3xl" />
          
          {/* Chat messages */}
          <div ref={boxRef} className="h-96 space-y-4 overflow-y-auto p-6 bg-gradient-to-b from-white/50 to-white relative z-10">
            {messages.length === 0 && showSuggestions && (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-xl font-semibold text-slate-900 mb-1">Привет,</div>
                  <div className="text-slate-600">Как я могу тебе помочь сегодня?</div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {SUGGESTIONS.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => send(s.prompt)}
                      className="group text-left rounded-xl border border-purple-200/50 bg-white/80 hover:bg-gradient-to-br hover:from-purple-50 hover:to-cyan-50 hover:border-purple-400/70 p-4 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="font-semibold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">{s.title}</div>
                      <div className="text-sm text-slate-600">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${m.role === "user" ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-md" : "bg-white border border-slate-200/70 text-slate-900 shadow-sm"}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="flex gap-2 border-t border-purple-200/50 bg-white/90 backdrop-blur-sm p-4 relative z-10">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              onKeyDown={e => e.key === 'Enter' && send()} 
              className="flex-1 rounded-xl border border-purple-200/70 bg-white/80 text-slate-900 placeholder-slate-500 p-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" 
              placeholder="Введите сообщение..." 
            />
            <button 
              onClick={() => send()} 
              className="btn-brand rounded-xl px-5 py-3 font-medium whitespace-nowrap flex items-center justify-center min-w-[48px]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

