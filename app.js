'use strict';
const $ = id => document.getElementById(id);
const byId = new Map(QUESTIONS.map(q => [q.id, q]));
const KEY = 'patan-practice-v1';
let session = null;
let mistakes = new Set();
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify({session, mistakes: [...mistakes]})); }
  catch { $('storage-note').hidden = false; }
}
function restore() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!data) return;
    mistakes = new Set((Array.isArray(data.mistakes) ? data.mistakes : []).filter(id => byId.has(id)));
    const s = data.session;
    if (!s || !Array.isArray(s.deck) || !s.deck.length || !Array.isArray(s.responses)) return;
    if (!s.deck.every(e => byId.has(e.id) && Array.isArray(e.order) && e.order.length === byId.get(e.id).options.length && new Set(e.order).size === e.order.length && e.order.every(i => Number.isInteger(i) && i >= 0 && i < e.order.length))) return;
    if (new Set(s.deck.map(e => e.id)).size !== s.deck.length) return;
    if (!Number.isInteger(s.cursor) || s.cursor < 0 || s.cursor >= s.deck.length) return;
    if (s.responses.length < s.cursor || s.responses.length > s.cursor + 1) return;
    if (!s.responses.every((a, i) => Number.isInteger(a) && a >= 0 && a < byId.get(s.deck[i].id).options.length)) return;
    if (typeof s.complete !== 'boolean' || (s.complete && s.responses.length !== s.deck.length)) return;
    session = s;
  } catch { $('storage-note').hidden = false; }
}
function show(id) {
  for (const name of ['setup', 'quiz', 'results']) $(name).hidden = name !== id;
}
function sourceLink(q) {
  const a = document.createElement('a');
  a.className = 'source'; a.href = `source.pdf#page=${q.page}`;
  a.target = '_blank'; a.rel = 'noopener'; a.textContent = `${q.source} ↗`;
  return a;
}
function paragraph(text, cls = '') {
  const p = document.createElement('p'); p.textContent = text; p.className = cls; return p;
}
function setup(focus = true) {
  show('setup');
  $('resume').hidden = !session || session.complete;
  if (session) $('resume').textContent = `Продолжить тренировку · отвечено ${session.responses.length} из ${session.deck.length} →`;
  $('practice-mistakes').disabled = !mistakes.size;
  $('practice-mistakes').textContent = `Повторить ошибки · ${mistakes.size}`;
  if (focus) $('setup-heading').focus();
}
function start(ids, random = true) {
  session = {
    deck: (random ? shuffle(ids) : ids).map(id => ({id, order: shuffle(byId.get(id).options.map((_, i) => i))})),
    cursor: 0, responses: [], complete: false,
  };
  save(); render();
}
function score() { return session.responses.filter((a, i) => a === byId.get(session.deck[i].id).answer).length; }
function render(focus = true) {
  show('quiz');
  const entry = session.deck[session.cursor], q = byId.get(entry.id);
  const locked = session.responses.length > session.cursor;
  const chosen = session.responses[session.cursor];
  $('position').textContent = `Вопрос ${session.cursor + 1} из ${session.deck.length}`;
  $('score').textContent = `Верно: ${score()} · Отвечено: ${session.responses.length}`;
  $('progress').max = session.deck.length; $('progress').value = session.responses.length;
  $('topic').textContent = `${q.topic} · № ${q.id}`;
  $('question').textContent = q.question;
  $('options').replaceChildren();
  entry.order.forEach((original, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'option'; b.disabled = locked;
    const letter = document.createElement('span'); letter.className = 'letter'; letter.textContent = i + 1;
    const text = document.createElement('span'); text.className = 'choice-text'; text.textContent = q.options[original];
    b.append(letter, text);
    if (locked && (original === q.answer || original === chosen)) {
      const correct = original === q.answer;
      b.classList.add(correct ? 'correct' : 'wrong');
      const tag = document.createElement('span'); tag.className = 'choice-state';
      tag.textContent = correct ? '✓ По ключу' : '✕ Твой ответ'; b.append(tag);
    }
    b.addEventListener('click', () => answer(original));
    $('options').append(b);
  });
  const feedback = $('feedback'); feedback.replaceChildren(); feedback.hidden = !locked;
  if (locked) {
    const correct = chosen === q.answer;
    feedback.className = correct ? '' : 'incorrect';
    const title = document.createElement('strong'); title.textContent = correct ? 'Верно по ключу PDF' : 'Есть что повторить';
    feedback.append(title, paragraph(`Ответ в PDF: ${q.options[q.answer]}`), sourceLink(q));
  }
  $('next').disabled = !locked;
  $('next').textContent = session.cursor === session.deck.length - 1 ? 'Результаты →' : 'Следующий вопрос →';
  if (focus) $('question').focus();
}
function answer(original) {
  if (!session || session.complete || session.responses.length > session.cursor) return;
  const q = byId.get(session.deck[session.cursor].id);
  if (!Number.isInteger(original) || original < 0 || original >= q.options.length) return;
  session.responses.push(original);
  if (original === q.answer) mistakes.delete(q.id); else mistakes.add(q.id);
  save(); render(false); $('next').focus();
}
function next() {
  if (!session || session.complete || session.responses.length <= session.cursor) return;
  if (session.cursor < session.deck.length - 1) { session.cursor++; save(); render(); }
  else { session.complete = true; save(); finish(); }
}
function missedIds() { return session.deck.filter((e, i) => session.responses[i] !== byId.get(e.id).answer).map(e => e.id); }
function finish() {
  show('results');
  const missed = missedIds();
  $('percentage').textContent = `${Math.round(score() / session.deck.length * 100)}%`;
  $('result-summary').textContent = `Верно ${score()} из ${session.deck.length} · Повторить: ${missed.length}`;
  $('retry').hidden = !missed.length;
  $('retry').textContent = `Повторить ошибки · ${missed.length}`;
  $('review').replaceChildren();
  const h = document.createElement('h3'); h.textContent = missed.length ? 'Разбор ошибок' : 'Все ответы верны по ключам PDF'; $('review').append(h);
  if (!missed.length) $('review').append(paragraph('Можно выбрать другой раздел или начать новую тренировку.'));
  session.deck.forEach((entry, i) => {
    const q = byId.get(entry.id), chosen = session.responses[i];
    if (chosen === q.answer) return;
    const d = document.createElement('details'), title = document.createElement('summary');
    title.textContent = q.question;
    d.append(title, paragraph(`Твой ответ: ${q.options[chosen]}`, 'wrong-text'), paragraph(`По ключу PDF: ${q.options[q.answer]}`, 'right-text'), sourceLink(q));
    $('review').append(d);
  });
  $('result-heading').focus();
}
$('settings').addEventListener('submit', event => {
  event.preventDefault();
  const section = $('section').value;
  let ids = QUESTIONS.filter(q => section === 'all' || q.topic.startsWith(section === 'general' ? 'Общая' : 'Частная')).map(q => q.id);
  const count = document.querySelector('input[name="count"]:checked').value;
  const random = $('random').checked;
  if (random) ids = shuffle(ids);
  if (count !== 'all') ids = ids.slice(0, Number(count));
  start(ids, false);
});
$('resume').addEventListener('click', () => render());
$('menu').addEventListener('click', () => setup());
$('restart').addEventListener('click', () => setup());
$('practice-mistakes').addEventListener('click', () => { if (mistakes.size) start([...mistakes]); });
$('retry').addEventListener('click', () => { const ids = missedIds(); if (ids.length) start(ids); });
$('next').addEventListener('click', next);
document.addEventListener('keydown', event => {
  if ($('quiz').hidden || event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
  if (/^[1-6]$/.test(event.key)) {
    const original = session.deck[session.cursor].order[Number(event.key) - 1];
    if (original !== undefined) { event.preventDefault(); answer(original); }
  } else if (event.key === 'Enter' && !['BUTTON', 'A', 'SELECT', 'INPUT'].includes(document.activeElement.tagName)) {
    event.preventDefault(); next();
  }
});
FLAGGED_QUESTIONS.forEach(q => {
  const d = document.createElement('details'), title = document.createElement('summary'); title.textContent = q.question;
  const list = document.createElement('ol');
  q.options.forEach((option, i) => { const li = document.createElement('li'); li.textContent = option + (q.markedAnswers.includes(i) ? ' — отмечено «+» в PDF' : ''); list.append(li); });
  d.append(title, paragraph(q.issue, 'subtle'), list, sourceLink(q)); $('flagged').append(d);
});
restore(); setup(false);
