import { NextResponse } from "next/server";

type Msg = { role: "user" | "assistant"; content: string };

async function replyHeuristic(last: string): Promise<string> {
  let reply = "Предлагаю начать с короткого брифа: бюджет, сроки, тип проекта (лендинг/CRM/ERP/маркетплейс), ключевые интеграции.";
  const text = last.toLowerCase();
  if (/(crm|ерп|erp)/.test(text)) reply = "Для CRM/ERP: MVP за 2–6 недель. Подскажите роли, сущности и интеграции (1С/Битрикс24 и т.д.).";
  else if (/(лендинг|landing|сайт)/.test(text)) reply = "Лендинг за 1–2 недели с A/B тестами. Нужны референсы и оффер.";
  else if (/(маркетплейс|магазин|e-?commerce)/.test(text)) reply = "Маркетплейс/магазин: каталог, корзина, оплаты, админка. Обсудим логистику и фискализацию.";
  return reply;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = (Array.isArray(body?.messages) ? body.messages : []) as Msg[];
    const last = messages.length ? String(messages[messages.length - 1]?.content || "") : "";

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      const reply = await replyHeuristic(last);
      return NextResponse.json({ reply });
    }

    const sys = "Ты консультант по цифровым продуктам. Кратко, по делу. Помогай выбрать: лендинг/CRM/ERP/маркетплейс, сроки, интеграции и экономику.";
    const payload = {
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: sys },
        ...messages.map(m => ({ role: m.role, content: m.content })),
      ],
      temperature: 0.7,
    } as const;

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) {
      console.warn("OpenAI error", await resp.text());
      const reply = await replyHeuristic(last);
      return NextResponse.json({ reply });
    }
    const data = await resp.json();
    const reply: string = data?.choices?.[0]?.message?.content || (await replyHeuristic(last));
    return NextResponse.json({ reply });
  } catch (e) {
    console.error("Chat API error", e);
    return NextResponse.json({ reply: "Сервис временно недоступен. Попробуйте позже." }, { status: 200 });
  }
}



