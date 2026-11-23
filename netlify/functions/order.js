<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Conninqs — создание сайтов и форумов</title>
<meta name="description" content="Conninqs создаёт сайты и форумы для русскоязычных сообществ: аккаунты, роли, заявки, уведомления. Быстро, на чистом коде.">
<meta name="theme-color" content="#07060f">
<meta property="og:type" content="website">
<meta property="og:title" content="Conninqs — создание сайтов и форумов">
<meta property="og:description" content="Сайты и форумы для русскоязычных сообществ: аккаунты, роли, заявки, уведомления.">
<meta property="og:locale" content="ru_RU">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%2307060f'/%3E%3Ccircle cx='32' cy='32' r='15' fill='none' stroke='%23b84dff' stroke-width='7'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700&family=Manrope:wght@400;500;700&display=swap&subset=cyrillic">
<style>
:root{
  --bg:#07060f;
  --surface:#0f0d1e;
  --line:#1d1a33;
  --line-strong:#2a2650;
  --text:#edebff;
  --muted:#b9b4d9;
  --dim:#8d87b5;
  --accent:#b84dff;
  --cyan:#2ef2e0;
  --display:'Unbounded',system-ui,sans-serif;
  --body:'Manrope',system-ui,sans-serif;
}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:24px}
body{margin:0;background:var(--bg);color:var(--text);font-family:var(--body);font-size:17px;line-height:1.6;overflow-x:hidden}
a{color:var(--cyan);text-decoration:none}
a:hover{color:#fff}
a:focus-visible{outline:2px solid var(--cyan);outline-offset:3px;border-radius:4px}
h1,h2,h3,p{margin:0}
h1,h2,h3{font-family:var(--display);text-wrap:balance}
.wrap{max-width:1200px;margin:0 auto;padding-left:max(24px,env(safe-area-inset-left,0px));padding-right:max(24px,env(safe-area-inset-right,0px))}
.eyebrow{font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:var(--cyan);margin-bottom:16px}
.h2{font-weight:500;font-size:clamp(26px,4vw,36px);line-height:1.2}
section{padding-block:88px;border-top:1px solid var(--line)}

header{display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;padding-block:28px}
.logo{font-family:var(--display);font-weight:700;font-size:22px;letter-spacing:.04em;color:var(--text)}
nav{display:flex;flex-wrap:wrap;gap:8px 28px;font-size:15px}
nav a{color:var(--muted);padding:6px 0}
nav a:hover{color:#fff}

.hero{position:relative;padding-block:96px 120px;border-top:0}
.glow{position:absolute;top:-40px;right:-120px;width:560px;height:560px;max-width:80vw;border-radius:50%;background:radial-gradient(circle,var(--accent) 0%,rgba(7,6,15,0) 68%);opacity:.35;pointer-events:none}
.hero-inner{position:relative;display:flex;flex-direction:column;gap:32px;max-width:860px}
h1{font-weight:700;font-size:clamp(34px,6vw,64px);line-height:1.08;color:#fff;text-shadow:0 0 36px var(--accent)}
.lead{max-width:620px;font-size:clamp(17px,2vw,20px);color:var(--muted)}
.actions{display:flex;flex-wrap:wrap;gap:16px}
.btn{display:inline-flex;align-items:center;min-height:48px;padding:0 28px;border-radius:6px;font-weight:700;transition:transform .15s ease,background .15s ease}
.btn:hover{transform:translateY(-2px)}
.btn-primary{background:var(--accent);color:#07060f}
.btn-primary:hover{background:#cb7bff;color:#07060f}
.btn-ghost{border:1px solid #3a3560;color:var(--text);font-weight:500}
.btn-ghost:hover{border-color:var(--cyan)}

.split{display:flex;flex-wrap:wrap;gap:48px}
.split>*{min-width:0}
.about-text{display:flex;flex-direction:column;gap:20px;color:var(--muted)}

.grid{display:flex;flex-wrap:wrap;gap:24px;margin-top:48px}
.card{flex:1 1 300px;min-width:0;padding:32px;border:1px solid var(--line-strong);border-radius:10px;background:var(--surface);display:flex;flex-direction:column;gap:12px}
.card h3{font-weight:500;font-size:20px}
.card p{color:var(--muted)}
.card-feature{flex:1.4 1 360px;background:linear-gradient(160deg,#1b1340 0%,var(--surface) 70%);border-color:var(--accent)}
.card-feature h3{font-size:22px}
.card-dashed{border:1px dashed #3a3560}
.tag{font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:var(--cyan)}
.card-dashed .tag{color:var(--dim)}
.link{align-self:flex-start;display:inline-flex;align-items:center;min-height:44px;margin-top:8px;font-weight:700}

.person{flex:1 1 280px;max-width:420px;display:flex;flex-direction:column;gap:6px;padding-top:20px;border-top:2px solid var(--accent)}
.person .name{font-family:var(--display);font-weight:500;font-size:20px}
.person .role{color:var(--cyan);font-size:15px}
.person .bio{color:var(--muted);font-size:15px}

.contact-list{display:flex;flex-direction:column}
.contact-row{display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;padding:20px 0;border-bottom:1px solid var(--line);color:var(--text)}
.contact-row:hover{color:var(--cyan)}
.contact-row span:first-child{color:var(--dim)}
.contact-row span:last-child{overflow-wrap:anywhere}

footer{padding-block:24px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;font-size:14px;color:var(--dim)}

.sched-head{display:flex;flex-wrap:wrap;gap:16px 24px;align-items:center;justify-content:space-between;margin-top:48px}
.sched-sub{color:var(--muted)}
.pill{display:inline-flex;align-items:center;gap:10px;min-height:40px;padding:0 18px;border-radius:999px;border:1px solid var(--line-strong);font-size:15px;font-weight:700;color:var(--muted)}
.pill::before{content:"";width:9px;height:9px;border-radius:50%;background:var(--dim)}
.pill.open{color:var(--cyan);border-color:var(--cyan)}
.pill.open::before{background:var(--cyan);box-shadow:0 0 10px var(--cyan)}
.sched-list{margin-top:24px;border:1px solid var(--line-strong);border-radius:10px;background:var(--surface);overflow:hidden}
.sched-row{display:flex;flex-wrap:wrap;gap:6px 24px;align-items:baseline;padding:18px 24px;border-bottom:1px solid var(--line)}
.sched-row:last-child{border-bottom:0}
.sched-row.today{background:#17123a;box-shadow:inset 3px 0 0 var(--accent)}
.sched-day{flex:0 0 160px;font-family:var(--display);font-weight:500;font-size:15px}
.sched-hours{flex:0 0 150px;font-variant-numeric:tabular-nums;color:var(--text)}
.sched-hours.off{color:var(--dim)}
.sched-note{flex:1 1 200px;min-width:0;color:var(--muted);font-size:15px;overflow-wrap:anywhere}
.sched-meta{margin-top:16px;font-size:14px;color:var(--dim)}
.linkbtn{background:none;border:0;padding:0;font:inherit;color:var(--dim);cursor:pointer;min-height:44px;text-decoration:underline}
.linkbtn:hover{color:var(--cyan)}
.admin{margin-top:32px;padding:28px;border:1px solid var(--accent);border-radius:10px;background:var(--surface)}
.admin h3{font-weight:500;font-size:18px;margin-bottom:16px}
.admin-grid{display:flex;flex-direction:column;gap:12px}
.admin-row{display:flex;flex-wrap:wrap;gap:10px 14px;align-items:center}
.admin-row .dn{flex:0 0 150px;font-size:15px}
.field{min-height:44px;padding:0 12px;border-radius:6px;border:1px solid #3a3560;background:var(--bg);color:var(--text);font:inherit;font-size:15px;color-scheme:dark}
.field:focus-visible{outline:2px solid var(--cyan);outline-offset:2px}
.field.note{flex:1 1 200px;min-width:0}
.chk{display:inline-flex;align-items:center;gap:8px;min-height:44px;font-size:15px;color:var(--muted);cursor:pointer}
.chk input{width:20px;height:20px;accent-color:var(--accent)}
.admin-actions{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:20px}
.btn-b{cursor:pointer;border:0;font:inherit;font-weight:700}
.msg{font-size:14px;color:var(--muted)}
.msg.err{color:#ff8a9b}
.msg.ok{color:var(--cyan)}
.login{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.login .field{flex:1 1 220px;min-width:0}

.order{display:flex;flex-direction:column;gap:18px}
.fld{display:flex;flex-direction:column;gap:6px;min-width:0}
.fld>label{font-size:14px;color:var(--muted)}
.req{color:var(--accent)}
.order .field{width:100%}
.field.area{padding:12px;min-height:110px;resize:vertical;line-height:1.5}
select.field{padding-right:8px}
.frow{display:flex;flex-wrap:wrap;gap:18px}
.frow>.fld{flex:1 1 200px}
.hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.consent{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:var(--muted);cursor:pointer}
.consent input{width:20px;height:20px;margin-top:2px;flex:0 0 auto;accent-color:var(--accent)}
.order-actions{display:flex;flex-wrap:wrap;gap:14px;align-items:center}
.btn-b:disabled{opacity:.6;cursor:default}
@media (max-width:600px){
  .sched-row{padding:16px}
  .sched-day,.sched-hours{flex:1 1 100%}
}
@media (max-width:600px){
  section{padding-block:64px}
  .hero{padding-block:56px 80px}
  .card{padding:24px}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .btn{transition:none}
  .btn:hover{transform:none}
}
</style>
</head>
<body>

<div class="wrap">
  <header>
    <a class="logo" href="#top">CONNINQS</a>
    <nav aria-label="Основная навигация">
      <a href="#about">О нас</a>
      <a href="#services">Услуги</a>
      <a href="#projects">Проекты</a>
      <a href="#team">Команда</a>
      <a href="#schedule">График</a>
      <a href="#order">Заказать</a>
      <a href="#contacts">Контакты</a>
    </nav>
  </header>
</div>

<main>
  <section class="hero" id="top">
    <div class="wrap" style="position:relative">
      <div class="glow" aria-hidden="true"></div>
      <div class="hero-inner">
        <div class="eyebrow" style="margin:0">Студия сайтов и сообществ</div>
        <h1>Соединяем людей через интерфейсы</h1>
        <p class="lead">Conninqs создаёт сайты и форумы для русскоязычных сообществ: быстро, на чистом коде, с аккуратным дизайном.</p>
        <div class="actions">
          <a class="btn btn-primary" href="#order">Заказать сайт</a>
          <a class="btn btn-ghost" href="#projects">Смотреть работы</a>
        </div>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="wrap">
      <div class="split">
        <div style="flex:1 1 320px">
          <div class="eyebrow">О компании</div>
          <h2 class="h2">Строим площадки, где комфортно общаться</h2>
        </div>
        <div class="about-text" style="flex:1.4 1 360px">
          <p>Conninqs создаёт сайты, в первую очередь форумы: с заявками, ролями, аккаунтами и уведомлениями. Сайт для людей должен быть понятным с первого экрана и работать без сбоев, когда на нём одновременно сидят много участников.</p>
          <p>Фронтенд пишется на HTML, CSS и JavaScript, данные хранятся в облачной базе. Отдельное внимание уходит мелочам: состояниям кнопок, мобильной версии, читаемости текста.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="services">
    <div class="wrap">
      <div class="eyebrow">Услуги</div>
      <h2 class="h2">Что мы делаем</h2>
      <div class="grid">
        <article class="card">
          <h3>Сайты и лендинги</h3>
          <p>Одностраничники и многостраничные сайты для компаний, команд и проектов. Адаптивная вёрстка, быстрая загрузка.</p>
        </article>
        <article class="card">
          <h3>Форумы и веб-приложения</h3>
          <p>Авторизация, роли, заявки, уведомления и хранение данных в реальном времени на Firebase.</p>
        </article>
        <article class="card">
          <h3>Интерфейсы и дизайн</h3>
          <p>Тёмные и светлые темы, анимации, интерактивные элементы, которые вовлекают аудиторию.</p>
        </article>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="wrap">
      <div class="eyebrow">Проекты</div>
      <h2 class="h2">Избранные работы</h2>
      <div class="grid">
        <article class="card card-feature">
          <div class="tag">Форум заявок</div>
          <h3>Black Princes</h3>
          <p>Рабочий форум для семьи: заявки, права автора на правку и удаление своих записей, несколько ролей администрации и вход по аккаунтам.</p>
          <a class="link" href="https://forum-black-princes.netlify.app/" target="_blank" rel="noopener">Открыть форум →</a>
        </article>
        <article class="card card-dashed">
          <div class="tag">Следующий проект</div>
          <h3>Ваш сайт</h3>
          <p>Нужен форум или сайт для сообщества? Опишите задачу, и мы обсудим сроки.</p>
          <a class="link" href="#order">Оставить заявку →</a>
        </article>
      </div>
    </div>
  </section>

  <section id="team">
    <div class="wrap">
      <div class="eyebrow">Команда</div>
      <h2 class="h2">Люди за Conninqs</h2>
      <div class="grid">
        <div class="person">
          <div class="name">Артём Бутылин</div>
          <div class="role">Владелец и разработчик</div>
          <div class="bio">Проектирует и верстает сайты, настраивает базы данных и сам ведёт проекты до запуска.</div>
        </div>
      </div>
    </div>
  </section>

  <section id="schedule">
    <div class="wrap">
      <div class="eyebrow">График работы</div>
      <h2 class="h2">Когда можно связаться с руководителем</h2>
      <div class="sched-head">
        <p class="sched-sub" id="sched-sub">Время указано по Киеву.</p>
        <span class="pill" id="sched-pill" hidden></span>
      </div>
      <div class="sched-list" id="sched-list" aria-live="polite"></div>
      <p class="sched-meta" id="sched-meta"></p>

      <div class="admin" id="admin" hidden>
        <div id="admin-login">
          <h3>Вход для владельца</h3>
          <form class="login" id="login-form">
            <input class="field" id="login-email" type="email" autocomplete="username" placeholder="Почта" aria-label="Почта" required>
            <input class="field" id="login-pass" type="password" autocomplete="current-password" placeholder="Пароль" aria-label="Пароль" required>
            <button class="btn btn-primary btn-b" type="submit">Войти</button>
          </form>
        </div>
        <div id="admin-edit" hidden>
          <h3>Редактирование графика</h3>
          <div class="admin-grid" id="edit-grid"></div>
          <div class="admin-actions">
            <button class="btn btn-primary btn-b" id="save-btn" type="button">Сохранить</button>
            <button class="btn btn-ghost btn-b" id="logout-btn" type="button">Выйти</button>
          </div>
        </div>
        <p class="msg" id="admin-msg" role="status"></p>
      </div>
    </div>
  </section>

  <section id="order">
    <div class="wrap">
      <div class="split">
        <div style="flex:1 1 320px;display:flex;flex-direction:column;gap:16px">
          <div class="eyebrow" style="margin:0">Заказать сайт</div>
          <h2 class="h2">Опишите, что вам нужно</h2>
          <p style="color:var(--muted)">Чем подробнее задача, тем точнее я отвечу по срокам и цене. Заявка сразу приходит мне в Telegram, и я свяжусь с вами по контакту, который вы укажете.</p>
        </div>
        <form class="order" id="order-form" style="flex:1.4 1 360px" novalidate>
          <div class="frow">
            <div class="fld">
              <label for="o-name">Как к вам обращаться <span class="req">*</span></label>
              <input class="field" id="o-name" type="text" maxlength="80" autocomplete="name">
            </div>
            <div class="fld">
              <label for="o-contact">Как с вами связаться <span class="req">*</span></label>
              <input class="field" id="o-contact" type="text" maxlength="120" placeholder="@telegram, почта или телефон" autocomplete="off">
            </div>
          </div>
          <div class="fld">
            <label for="o-type">Что нужно сделать</label>
            <select class="field" id="o-type">
              <option>Форум</option>
              <option>Сайт-визитка или лендинг</option>
              <option>Веб-приложение</option>
              <option>Другое</option>
            </select>
          </div>
          <div class="fld">
            <label for="o-desc">Что должен делать сайт <span class="req">*</span></label>
            <textarea class="field area" id="o-desc" maxlength="2000" placeholder="Для кого сайт, какие разделы и функции нужны: заявки, роли, вход по аккаунтам и так далее"></textarea>
          </div>
          <div class="fld">
            <label for="o-design">Пожелания по дизайну</label>
            <textarea class="field area" id="o-design" maxlength="1500" placeholder="Цвета, стиль, примеры сайтов, которые нравятся"></textarea>
          </div>
          <div class="frow">
            <div class="fld">
              <label for="o-deadline">Желаемые сроки</label>
              <input class="field" id="o-deadline" type="text" maxlength="80" placeholder="Например, за две недели">
            </div>
            <div class="fld">
              <label for="o-budget">Бюджет</label>
              <input class="field" id="o-budget" type="text" maxlength="80" placeholder="Если уже есть ориентир">
            </div>
          </div>
          <div class="hp" aria-hidden="true">
            <label for="o-site">Не заполняйте это поле</label>
            <input id="o-site" type="text" tabindex="-1" autocomplete="off">
          </div>
          <label class="consent" for="o-consent">
            <input id="o-consent" type="checkbox">
            <span>Я согласен, что введённые данные получит владелец сайта, чтобы ответить на заявку.</span>
          </label>
          <div class="order-actions">
            <button class="btn btn-primary btn-b" id="o-send" type="submit">Отправить заявку</button>
            <p class="msg" id="o-msg" role="status" aria-live="polite"></p>
          </div>
        </form>
      </div>
    </div>
  </section>

  <section id="contacts">
    <div class="wrap">
      <div class="split">
        <div style="flex:1 1 320px;display:flex;flex-direction:column;gap:16px">
          <div class="eyebrow" style="margin:0">Контакты</div>
          <h2 class="h2">Расскажите о задаче</h2>
          <p style="color:var(--muted)">Напишите, какой сайт нужен. Отвечу и предложу формат работы.</p>
        </div>
        <div class="contact-list" style="flex:1 1 320px">
          <a class="contact-row" href="https://t.me/i_not_friends" target="_blank" rel="noopener"><span>Telegram</span><span>@i_not_friends</span></a>
          <a class="contact-row" href="mailto:artembutilin854@gmail.com"><span>Почта</span><span>artembutilin854@gmail.com</span></a>
        </div>
      </div>
    </div>
  </section>
</main>

<div class="wrap">
  <footer>
    <span>© 2026 Conninqs</span>
    <span>Сайты и сообщества</span>
    <button class="linkbtn" id="owner-btn" type="button" hidden>Вход для владельца</button>
  </footer>
</div>

<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js"></script>
<script>
(function () {
  // Настройки Firebase-проекта conninqs-company (ключ веб-приложения публичный, это нормально).
  var CONFIG = {
    apiKey: "AIzaSyDPMb5zVFJAqVA8QgjaubD6CUPLhDvJ4hY",
    authDomain: "conninqs-company.firebaseapp.com",
    databaseURL: "https://conninqs-company-default-rtdb.firebaseio.com",
    projectId: "conninqs-company"
  };
  var TZ = "Europe/Kyiv";
  var DAYS = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

  var $ = function (id) { return document.getElementById(id); };
  var db = null, auth = null, current = null;

  function blank() {
    return { empty: true, days: DAYS.map(function () { return { on: false, from: "10:00", to: "18:00", note: "" }; }) };
  }
  function toMin(s) {
    var m = /^(\d{1,2}):(\d{2})$/.exec(s || "");
    return m ? (+m[1]) * 60 + (+m[2]) : null;
  }
  function nowInTz() {
    try {
      var parts = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(new Date());
      var o = {};
      parts.forEach(function (p) { o[p.type] = p.value; });
      var idx = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 }[o.weekday];
      return { day: idx, min: (+o.hour % 24) * 60 + (+o.minute) };
    } catch (e) { return null; }
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function render(data) {
    data = data || blank();
    var days = data.days || [];
    var now = nowInTz();
    var list = $("sched-list");
    list.textContent = "";
    var openNow = false;

    DAYS.forEach(function (name, i) {
      var d = days[i] || {};
      var row = el("div", "sched-row" + (now && now.day === i ? " today" : ""));
      row.appendChild(el("div", "sched-day", name));
      var hours;
      if (data.empty) hours = el("div", "sched-hours off", "—");
      else if (d.on) hours = el("div", "sched-hours", d.from + " – " + d.to);
      else hours = el("div", "sched-hours off", "Выходной");
      row.appendChild(hours);
      row.appendChild(el("div", "sched-note", d.note || ""));
      list.appendChild(row);

      if (now && now.day === i && d.on) {
        var a = toMin(d.from), b = toMin(d.to);
        if (a != null && b != null && now.min >= a && now.min < b) openNow = true;
      }
    });

    var pill = $("sched-pill");
    if (data.empty) {
      pill.hidden = true;
      $("sched-meta").textContent = "График пока не опубликован. Напишите в Telegram или на почту.";
    } else {
      pill.hidden = false;
      pill.className = "pill" + (openNow ? " open" : "");
      pill.textContent = openNow ? "Сейчас на связи" : "Сейчас не на связи";
      var meta = "";
      if (data.updated) {
        meta = "Обновлено " + new Date(data.updated).toLocaleString("ru-RU", { dateStyle: "long", timeStyle: "short", timeZone: TZ }) + " (по Киеву).";
      }
      $("sched-meta").textContent = meta;
    }
  }

  function buildEditor(data) {
    data = data || blank();
    var grid = $("edit-grid");
    grid.textContent = "";
    DAYS.forEach(function (name, i) {
      var d = (data.days || [])[i] || {};
      var row = el("div", "admin-row");
      row.appendChild(el("div", "dn", name));

      var lab = el("label", "chk");
      var cb = document.createElement("input");
      cb.type = "checkbox"; cb.id = "e-on-" + i; cb.checked = !!d.on;
      lab.appendChild(cb); lab.appendChild(document.createTextNode("Работаю"));
      row.appendChild(lab);

      var f = document.createElement("input");
      f.type = "time"; f.className = "field"; f.id = "e-from-" + i; f.value = d.from || "10:00";
      f.setAttribute("aria-label", name + ": начало");
      var t = document.createElement("input");
      t.type = "time"; t.className = "field"; t.id = "e-to-" + i; t.value = d.to || "18:00";
      t.setAttribute("aria-label", name + ": конец");
      var n = document.createElement("input");
      n.type = "text"; n.className = "field note"; n.id = "e-note-" + i; n.maxLength = 120;
      n.placeholder = "Заметка (необязательно)"; n.value = d.note || "";
      n.setAttribute("aria-label", name + ": заметка");
      row.appendChild(f); row.appendChild(t); row.appendChild(n);
      grid.appendChild(row);
    });
  }

  function say(text, kind) {
    var m = $("admin-msg");
    m.textContent = text || "";
    m.className = "msg" + (kind ? " " + kind : "");
  }

  function collect() {
    return DAYS.map(function (_, i) {
      return {
        on: $("e-on-" + i).checked,
        from: $("e-from-" + i).value || "10:00",
        to: $("e-to-" + i).value || "18:00",
        note: $("e-note-" + i).value.trim().slice(0, 120)
      };
    });
  }

  render(null);
  var timer = setInterval(function () { render(current); }, 60000);

  if (!CONFIG.apiKey || typeof firebase === "undefined") return;

  try {
    firebase.initializeApp(CONFIG);
    db = firebase.database();
    auth = firebase.auth();
  } catch (e) { return; }

  db.ref("schedule").on("value", function (snap) {
    var v = snap.val();
    current = v ? v : null;
    render(current);
  }, function (err) {
    render(null);
    $("sched-meta").textContent = err && err.code === "PERMISSION_DENIED"
      ? "База не отдаёт график посетителям. Владельцу: в правилах базы нужно разрешить чтение для schedule."
      : "Не удалось загрузить график.";
  });

  $("owner-btn").hidden = false;
  $("owner-btn").addEventListener("click", function () {
    $("admin").hidden = false;
    $("admin").scrollIntoView({ behavior: "smooth", block: "center" });
  });

  $("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    say("Входим…");
    auth.signInWithEmailAndPassword($("login-email").value.trim(), $("login-pass").value)
      .then(function () { $("login-pass").value = ""; say(""); })
      .catch(function (err) {
        var c = (err && err.code) || "";
        var text = "Не удалось войти (" + (c || "неизвестная ошибка") + ").";
        if (c === "auth/operation-not-allowed") text = "В Firebase не включён вход по почте и паролю: Authentication → Sign-in method → Email/Password.";
        else if (c === "auth/invalid-credential" || c === "auth/user-not-found" || c === "auth/wrong-password" || c === "auth/invalid-login-credentials") text = "Неверная почта или пароль, либо такого пользователя нет в Authentication → Users.";
        else if (c === "auth/network-request-failed") text = "Нет связи с Firebase. Проверьте интернет.";
        else if (c === "auth/invalid-api-key" || c === "auth/api-key-not-valid.-please-pass-a-valid-api-key.") text = "Неверный apiKey в настройках сайта.";
        say(text, "err");
      });
  });

  auth.onAuthStateChanged(function (user) {
    $("admin-login").hidden = !!user;
    $("admin-edit").hidden = !user;
    if (user) {
      $("admin").hidden = false;
      buildEditor(current);
    }
  });

  $("save-btn").addEventListener("click", function () {
    say("Сохраняем…");
    var wait = setTimeout(function () {
      say("База не отвечает. Проверьте, что Realtime Database создана и адрес databaseURL в коде совпадает с адресом в Firebase.", "err");
    }, 10000);
    db.ref("schedule").set({
      days: collect(),
      updated: firebase.database.ServerValue.TIMESTAMP
    }).then(function () {
      clearTimeout(wait);
      say("График сохранён и уже виден всем.", "ok");
    }).catch(function (err) {
      clearTimeout(wait);
      var c = (err && err.code) || "";
      say(c === "PERMISSION_DENIED"
        ? "Запись запрещена правилами базы. Нужно вставить правила с вашим UID (Realtime Database → Rules)."
        : "Не удалось сохранить (" + (c || "неизвестная ошибка") + ").", "err");
    });
  });

  $("logout-btn").addEventListener("click", function () {
    auth.signOut().then(function () { $("admin").hidden = true; say(""); });
  });
})();
</script>
<script>
(function () {
  var form = document.getElementById("order-form");
  if (!form) return;
  var btn = document.getElementById("o-send");
  var msg = document.getElementById("o-msg");
  var $ = function (id) { return document.getElementById(id); };

  function say(text, kind) {
    msg.textContent = text || "";
    msg.className = "msg" + (kind ? " " + kind : "");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = {
      name: $("o-name").value.trim(),
      contact: $("o-contact").value.trim(),
      type: $("o-type").value,
      description: $("o-desc").value.trim(),
      design: $("o-design").value.trim(),
      deadline: $("o-deadline").value.trim(),
      budget: $("o-budget").value.trim(),
      website: $("o-site").value
    };

    if (!data.name) { say("Укажите, как к вам обращаться.", "err"); $("o-name").focus(); return; }
    if (data.contact.length < 3) { say("Укажите, как с вами связаться: Telegram, почту или телефон.", "err"); $("o-contact").focus(); return; }
    if (data.description.length < 10) { say("Опишите задачу хотя бы в паре предложений.", "err"); $("o-desc").focus(); return; }
    if (!$("o-consent").checked) { say("Отметьте согласие на передачу данных.", "err"); return; }

    btn.disabled = true;
    say("Отправляем…");

    var ctrl = typeof AbortController === "function" ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 25000);

    fetch("/.netlify/functions/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (res) {
      clearTimeout(timer);
      return res.json().catch(function () { return {}; }).then(function (j) {
        if (res.ok && j.ok) {
          form.reset();
          say("Заявка отправлена. Отвечу по указанному контакту.", "ok");
        } else if (res.status === 429) {
          say("Слишком много заявок подряд. Попробуйте через несколько минут.", "err");
        } else {
          say("Не удалось отправить (код " + res.status + (j.error ? ", " + j.error : "") + (j.detail ? ": " + j.detail : "") + "). Напишите мне напрямую в Telegram: @i_not_friends.", "err");
        }
      });
    }).catch(function () {
      clearTimeout(timer);
      say("Нет связи с сервером. Напишите мне напрямую в Telegram: @i_not_friends.", "err");
    }).then(function () {
      btn.disabled = false;
    });
  });
})();
</script>
</body>
</html>
