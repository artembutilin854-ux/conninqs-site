// Принимает заявку с сайта и отправляет её владельцу в Telegram.
2
// Токен бота и ID чата хранятся в переменных окружения Netlify и на сайт не попадают:
3
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
4

5
const LIMITS = {
6
  name: 80,
7
  contact: 120,
8
  type: 60,
9
  description: 2000,
10
  design: 1500,
11
  deadline: 80,
12
  budget: 80
13
};
14

15
const ALLOWED_TYPES = ["Форум", "Сайт-визитка или лендинг", "Веб-приложение", "Другое"];
16

17
// Простая защита от частых отправок с одного адреса: 5 заявок за 10 минут.
18
// Память функции не вечная, поэтому это защита «по возможности».
19
const WINDOW_MS = 10 * 60 * 1000;
20
const MAX_PER_WINDOW = 5;
21
const hits = new Map();
22

23
function tooMany(ip) {
24
  const now = Date.now();
25
  for (const [key, list] of hits) {
26
    const fresh = list.filter((t) => now - t < WINDOW_MS);
27
    if (fresh.length) hits.set(key, fresh);
28
    else hits.delete(key);
29
  }
30
  const list = hits.get(ip) || [];
31
  if (list.length >= MAX_PER_WINDOW) return true;
32
  list.push(now);
33
  hits.set(ip, list);
34
  return false;
35
}
36

37
function clean(value, max) {
38
  return String(value == null ? "" : value)
39
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
40
    .trim()
41
    .slice(0, max);
42
}
43

44
function telegramLink(contact) {
45
  const m = /^(?:https?:\/\/)?(?:t\.me\/|@)([A-Za-z][A-Za-z0-9_]{4,31})$/.exec(contact);
46
  return m ? "https://t.me/" + m[1] : null;
47
}
48

49
exports.handler = async function (event) {
50
  const headers = { "Content-Type": "application/json; charset=utf-8" };
51
  const reply = (statusCode, body) => ({ statusCode, headers, body: JSON.stringify(body) });
52

53
  if (event.httpMethod !== "POST") return reply(405, { ok: false, error: "method" });
54

55
  const token = process.env.TELEGRAM_BOT_TOKEN;
56
  const chatId = process.env.TELEGRAM_CHAT_ID;
57
  if (!token || !chatId) {
58
    console.error("Не заданы TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID");
59
    return reply(500, { ok: false, error: "config" });
60
  }
61

62
  const raw = event.body || "";
63
  if (raw.length > 20000) return reply(413, { ok: false, error: "size" });
64

65
  let body;
66
  try {
67
    body = JSON.parse(raw || "{}");
68
  } catch (e) {
69
    return reply(400, { ok: false, error: "json" });
70
  }
71

72
  // Скрытое поле для ботов: человек его не видит и не заполняет.
73
  if (clean(body.website, 100)) return reply(200, { ok: true });
74

75
  const h = event.headers || {};
76
  const ip = h["x-nf-client-connection-ip"] || h["client-ip"] || (h["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
77
  if (tooMany(ip)) return reply(429, { ok: false, error: "rate" });
78

79
  const data = {};
80
  for (const key of Object.keys(LIMITS)) data[key] = clean(body[key], LIMITS[key]);
81

82
  if (!data.name || data.contact.length < 3 || data.description.length < 10) {
83
    return reply(400, { ok: false, error: "fields" });
84
  }
85
  if (!ALLOWED_TYPES.includes(data.type)) data.type = "Другое";
86

87
  const lines = [
88
    "📩 Новая заявка с сайта Conninqs",
89
    "",
90
    "Имя: " + data.name,
91
    "Связь: " + data.contact,
92
    "Что нужно: " + data.type
93
  ];
94
  if (data.deadline) lines.push("Сроки: " + data.deadline);
95
  if (data.budget) lines.push("Бюджет: " + data.budget);
96
  lines.push("", "Описание:", data.description);
97
  if (data.design) lines.push("", "Дизайн:", data.design);
98

99
  const payload = { chat_id: chatId, text: lines.join("\n"), disable_web_page_preview: true };
100
  const link = telegramLink(data.contact);
101
  if (link) {
102
    payload.reply_markup = { inline_keyboard: [[{ text: "Написать в Telegram", url: link }]] };
103
  }
104

105
  const ctrl = new AbortController();
106
  const timer = setTimeout(() => ctrl.abort(), Number(process.env.TG_TIMEOUT_MS) || 8000);
107
  try {
108
    const res = await fetch("https://api.telegram.org/bot" + token + "/sendMessage", {
109
      method: "POST",
110
      headers: { "Content-Type": "application/json" },
111
      body: JSON.stringify(payload),
112
      signal: ctrl.signal
113
    });
114
    clearTimeout(timer);
115
    if (!res.ok) {
116
      let detail = "";
117
      try { detail = String((await res.json()).description || "").slice(0, 200); } catch (e) { /* нет тела */ }
118
      console.error("Telegram ответил статусом", res.status, detail);
119
      return reply(502, { ok: false, error: "telegram", detail });
120
    }
121
  } catch (e) {
122
    clearTimeout(timer);
123
    console.error("Не удалось связаться с Telegram:", e && e.name);
124
    return reply(504, { ok: false, error: "timeout" });
125
  }
126

127
  return reply(200, { ok: true });
128
};
129


