// Принимает заявку с сайта и отправляет её владельцу в Telegram.
// Токен бота и ID чата хранятся в переменных окружения Netlify и на сайт не попадают:
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

const LIMITS = {
  name: 80,
  contact: 120,
  type: 60,
  description: 2000,
  design: 1500,
  deadline: 80,
  budget: 80
};

const ALLOWED_TYPES = ["Форум", "Сайт-визитка или лендинг", "Веб-приложение", "Другое"];

// Простая защита от частых отправок с одного адреса: 5 заявок за 10 минут.
// Память функции не вечная, поэтому это защита «по возможности».
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function tooMany(ip) {
  const now = Date.now();
  for (const [key, list] of hits) {
    const fresh = list.filter((t) => now - t < WINDOW_MS);
    if (fresh.length) hits.set(key, fresh);
    else hits.delete(key);
  }
  const list = hits.get(ip) || [];
  if (list.length >= MAX_PER_WINDOW) return true;
  list.push(now);
  hits.set(ip, list);
  return false;
}

function clean(value, max) {
  return String(value == null ? "" : value)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

function telegramLink(contact) {
  const m = /^(?:https?:\/\/)?(?:t\.me\/|@)([A-Za-z][A-Za-z0-9_]{4,31})$/.exec(contact);
  return m ? "https://t.me/" + m[1] : null;
}

exports.handler = async function (event) {
  const headers = { "Content-Type": "application/json; charset=utf-8" };
  const reply = (statusCode, body) => ({ statusCode, headers, body: JSON.stringify(body) });

  if (event.httpMethod !== "POST") return reply(405, { ok: false, error: "method" });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("Не заданы TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID");
    return reply(500, { ok: false, error: "config" });
  }

  const raw = event.body || "";
  if (raw.length > 20000) return reply(413, { ok: false, error: "size" });

  let body;
  try {
    body = JSON.parse(raw || "{}");
  } catch (e) {
    return reply(400, { ok: false, error: "json" });
  }

  // Скрытое поле для ботов: человек его не видит и не заполняет.
  if (clean(body.website, 100)) return reply(200, { ok: true });

  const h = event.headers || {};
  const ip = h["x-nf-client-connection-ip"] || h["client-ip"] || (h["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (tooMany(ip)) return reply(429, { ok: false, error: "rate" });

  const data = {};
  for (const key of Object.keys(LIMITS)) data[key] = clean(body[key], LIMITS[key]);

  if (!data.name || data.contact.length < 3 || data.description.length < 10) {
    return reply(400, { ok: false, error: "fields" });
  }
  if (!ALLOWED_TYPES.includes(data.type)) data.type = "Другое";

  const lines = [
    "📩 Новая заявка с сайта Conninqs",
    "",
    "Имя: " + data.name,
    "Связь: " + data.contact,
    "Что нужно: " + data.type
  ];
  if (data.deadline) lines.push("Сроки: " + data.deadline);
  if (data.budget) lines.push("Бюджет: " + data.budget);
  lines.push("", "Описание:", data.description);
  if (data.design) lines.push("", "Дизайн:", data.design);

  const payload = { chat_id: chatId, text: lines.join("\n"), disable_web_page_preview: true };
  const link = telegramLink(data.contact);
  if (link) {
    payload.reply_markup = { inline_keyboard: [[{ text: "Написать в Telegram", url: link }]] };
  }

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), Number(process.env.TG_TIMEOUT_MS) || 8000);
  try {
    const res = await fetch("https://api.telegram.org/bot" + token + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: ctrl.signal
    });
    clearTimeout(timer);
    if (!res.ok) {
      let detail = "";
      try { detail = String((await res.json()).description || "").slice(0, 200); } catch (e) { /* нет тела */ }
      console.error("Telegram ответил статусом", res.status, detail);
      return reply(502, { ok: false, error: "telegram", detail });
    }
  } catch (e) {
    clearTimeout(timer);
    console.error("Не удалось связаться с Telegram:", e && e.name);
    return reply(504, { ok: false, error: "timeout" });
  }

  return reply(200, { ok: true });
};
