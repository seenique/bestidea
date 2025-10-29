"use client";
import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Привет! Я помогу выбрать решение: лендинг, CRM/ERP, маркетплейс и т.д. Опишите задачу.",
    } as Message,
  ]);
  const [input, setInput] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function send() {
    if (!input.trim()) return;
    const next: Message[] = [
      ...messages,
      { role: "user", content: input.trim() } as Message,
    ];
    setMessages(next as Message[]);
    setInput("");
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next.slice(-6) }) });
      const data: any = await res.json();
      setMessages((m) => [
        ...m,
        { role: "assistant", content: (data && data.reply) || "Пока не понял, уточните задачу." } as Message,
      ]);
    } catch (e) {
      setMessages(m => [...m, { role: "assistant", content: "Сервис временно недоступен. Попробуйте позже." }]);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open ? (
        <button onClick={() => setOpen(true)} className="btn-brand rounded-full px-4 py-2 shadow-lg">Чат‑помощник</button>
      ) : (
        <div className="w-80 overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-900">
          <div className="flex items-center justify-between border-b border-zinc-200/60 px-4 py-2 text-sm dark:border-white/10">
            <div className="font-medium">ИИ‑ассистент</div>
            <button onClick={() => setOpen(false)} className="opacity-70 hover:opacity-100">✕</button>
          </div>
          <div ref={boxRef} className="h-64 space-y-2 overflow-y-auto p-3 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div className={"inline-block max-w-[85%] rounded-xl px-3 py-2 " + (m.role === "user" ? "bg-zinc-100 dark:bg-zinc-800" : "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black")}>{m.content}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t border-zinc-200/60 p-2 dark:border-white/10">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key==='Enter' && send()} className="flex-1 rounded-xl border border-zinc-300 p-2 text-sm dark:border-white/20 dark:bg-transparent" placeholder="Опишите задачу..." />
            <button onClick={send} className="btn-brand rounded-xl px-3 py-2 text-sm">Отправить</button>
          </div>
        </div>
      )}
    </div>
  );
}



