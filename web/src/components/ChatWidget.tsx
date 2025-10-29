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

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Привет! Я помогу выбрать решение и расскажу про цены. Что хотите создать: лендинг, CRM, маркетплейс или что-то другое?",
    } as Message,
  ]);
  const [input, setInput] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function send() {
    if (!input.trim()) return;
    const userMessage = input.trim();
    const next: Message[] = [
      ...messages,
      { role: "user", content: userMessage } as Message,
    ];
    setMessages(next);
    setInput("");

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
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <div className="w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 backdrop-blur-md shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200/70 bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-3">
          <div className="font-semibold text-white flex items-center gap-2">
            <span className="text-lg">🤖</span>
            <span>ИИ‑ассистент</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        </div>
        <div ref={boxRef} className="h-96 space-y-3 overflow-y-auto p-4 text-sm bg-gradient-to-b from-slate-50 to-white">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${m.role === "user" ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white" : "bg-white/80 backdrop-blur-sm border border-slate-200/70 text-slate-900 shadow-sm"}`}>
                {m.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 border-t border-slate-200/70 bg-white/90 backdrop-blur-sm p-3">
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && send()} 
            className="flex-1 rounded-xl border border-slate-300/70 bg-white/80 backdrop-blur-sm p-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" 
            placeholder="Спросите про цены, тарифы, сроки..." 
          />
          <button onClick={send} className="btn-brand rounded-xl px-4 py-2.5 text-sm font-medium whitespace-nowrap">Отправить</button>
        </div>
      </div>
    </div>
  );
}
