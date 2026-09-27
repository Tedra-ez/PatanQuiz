"""Rebuild the quiz from the supplied PDF; preserve its answer key, flag ambiguity."""
import json
import re
from pathlib import Path
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / 'source.pdf'
r = PdfReader(PDF)
source = '\n'.join(f'\n[[PAGE {i+1}]]\n' + p.extract_text() for i, p in enumerate(r.pages))
blocks = re.split(r'\*{3,}', source)
missing_question_separator = {
105: 'протеинов', 127: 'обратное развитие', 128: '+гипертоническая',
129: 'отложение амилоида в гепатоцитах', 130: 'желудочно-кишечный',
135: 'белый', 190: 'гемоперикард', 229: 'метаплазия', 302: 'разрыв острой',
359: 'Полиомиелит', 364: '+Скарлатины', 387: 'Хронический активный',
429: 'Дерматит', 430: 'Дерматит', 433: 'Острый очаговый',
448: '+бактериальная', 452: 'цитомегаловирусной',
}
repairs = {
39: [('хондросаркома \nрабдомиосаркома', 'хондросаркома//рабдомиосаркома')],
112: [('сложного гиалина  \n+амилоида', 'сложного гиалина//+амилоида')],
161: [('по характеру роста;', 'по характеру роста//')],
234: [('+бронхопневмония \nплевропневмония', '+бронхопневмония//плевропневмония')],
252: [('+гнойный менингит \nабсцесс легкого', '+гнойный менингит//абсцесс легкого')],
377: [('Аденовирусной инфекции \nСкарлатине', 'Аденовирусной инфекции//Скарлатине')],
}
def clean(t):
    # Join PDF line wraps; preserve meaningful hyphens.
    t = re.sub(r'-\s*\n\s*', '-', t)
    t = re.sub(r'\s+', ' ', t).strip()
    # The original uses Latin c inside Russian words.
    t = re.sub(r'(?<=[А-Яа-яЁё])c|c(?=[А-Яа-яЁё])', 'с', t)
    return t

questions, flagged = [], []
page = 1
for block_id, raw in enumerate(blocks):
    pages = set()
    for line in raw.splitlines():
        marker = re.fullmatch(r'\[\[PAGE (\d+)\]\]', line.strip())
        if marker:
            page = int(marker[1])
        elif line.strip():
            pages.add(page)
    if block_id in (0, 203):
        continue
    raw = re.sub(r'\[\[PAGE \d+\]\]', '', raw).strip()
    if block_id == 1:
        raw = re.sub(r'^ОБЩАЯ\s+ПАТОЛОГИЧЕСКАЯ\s+АНАТОМИЯ\s+', '', raw)
    if block_id == 448:
        raw = re.sub(r'^93', '', raw)
    for old, new in repairs.get(block_id, []):
        assert old in raw, (block_id, old)
        raw = raw.replace(old, new)
    if block_id in missing_question_separator:
        target = missing_question_separator[block_id]
        pos = raw.index(target)
        raw = raw[:pos] + '//' + raw[pos:]
    parts = [clean(x) for x in raw.split('//') if x.strip()]
    if block_id == 16:
        parts = [parts[0], 'альтеративное', 'экссудативное', '+продуктивное', 'полипозное', 'кондилломатоз']
    if block_id == 28:
        parts = [parts[0], 'против тока крови', 'под действием силы тяжести', 'против градиента давления', 'из системы воротной вены в вены малого круга кровообращения', '+из вен большого круга в артериальное русло, минуя легкие']
    assert len(parts) in (6, 7), (block_id, parts)
    marked = [i for i, x in enumerate(parts[1:]) if x.startswith('+')]
    q = dict(id=block_id, topic='Общая патологическая анатомия' if block_id < 203 else 'Частная патологическая анатомия', question=parts[0].rstrip(': ').strip(), options=[x.lstrip('+').strip().rstrip(';') for x in parts[1:]], answer=marked[0] if len(marked) == 1 else None, page=min(pages), pages=sorted(pages))
    q['source'] = 'ПАТАН(СЕССИЯ).pdf · стр. ' + '–'.join(map(str, [min(pages), max(pages)] if len(pages)>1 else [min(pages)]))
    if len(marked) != 1:
        q['markedAnswers'] = marked
        q['issue'] = 'В PDF отмечено два ответа. Уточни ключ у преподавателя.' if marked else 'В PDF не отмечен правильный ответ. Уточни ключ у преподавателя.'
        flagged.append(q)
    else:
        questions.append(q)
assert len(questions) == 452 and len(flagged) == 2
out = '// Imported from the supplied PDF. Answer keys are preserved, not medically verified.\n'
out += 'const QUESTIONS = ' + json.dumps(questions, ensure_ascii=False, indent=2) + ';\n'
out += 'const FLAGGED_QUESTIONS = ' + json.dumps(flagged, ensure_ascii=False, indent=2) + ';\n'
(ROOT / 'questions.js').write_text(out)
print(f'{len(questions)} scored questions; {len(flagged)} flagged; {len(r.pages)} pages')
print('Sections:', {t: sum(q['topic']==t for q in questions) for t in {q['topic'] for q in questions}})
print('Flagged:', [(q['id'],q['page']) for q in flagged])
