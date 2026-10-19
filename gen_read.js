// ─────────────────────────────────────────────────────────────
//  Генератор заданий на чтение — Benchmark Advance Grade 4,
//  Characters' Actions and Reactions.
//  Текст собирается из каркаса: герой, ситуация, скрытая причина,
//  поступок. Меняются имена, обстоятельства и детали, поэтому
//  история каждый раз другая, а разбираемый навык один и тот же.
// ─────────────────────────────────────────────────────────────

const NAMES=['Maya','Theo','Owen','Dara','Ivy','Priya','Sam','Lena','Nina','Marco','Ali','Ben','Zoe','Jonas','Mira','Kai','Ruth','Felix'];
const mix2=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const two=()=>{const n=mix2(NAMES);return [n[0],n[1]]};

// каркасы историй: каждая строит текст и вопрос под один читательский навык
const STORIES=[
 // ── причина поступка спрятана в воспоминании ──
 (A,B)=>{const place=pick(['the lunch table','the bus stop','the library','the playground']);
  return {
   text:`${A} saw the new student sitting alone at ${place}. ${A} remembered the first day at this school, when nobody had said a word all morning. ${A} picked up a tray and walked over.`,
   q:`Why did ${A} walk over to the new student?`,
   right:`${A} remembered feeling lonely on the first day`,
   wrong:[`${A} wanted a better seat`,`A teacher told ${A} to do it`,`${A} wanted to borrow something`],
   skill:'причина поступка',
   why:`Причина спрятана в среднем предложении. Автор не пишет «${A} была доброй» — он показывает, о чём она вспомнила перед тем, как встать.`,
   rule:`Писатели редко называют причину прямо. Чаще они ставят перед поступком мысль или воспоминание героя, и именно оно объясняет действие. Читая, соединяй три вещи: что герой увидел, о чём подумал, что сделал. Ответ на вопрос «почему» почти всегда лежит между вторым и третьим.`,
   ex:`Увидел(а): новенький сидит один\nВспомнил(а): со мной было так же\nСделал(а): подошёл(ла)\nПричина — воспоминание`,
   again:`Убери среднее предложение и перечитай. Поступок станет непонятным — значит именно там была причина.`};
 },
 // ── поворотный момент ──
 (A,B)=>{const skill=pick(['song','speech','dive','race','trick']);
  return {
   text:`${A} had practised the ${skill} a hundred times. On the day itself, ${A}'s hands would not stop shaking. Then ${A} looked at ${B} in the front row, and ${B} nodded. ${A} began.`,
   q:`What made ${A} able to begin?`,
   right:`${B}'s nod`,
   wrong:[`the hundred practices`,`the shaking hands`,`the bright lights`],
   skill:'поворотный момент',
   why:`Вопрос про момент, когда что-то изменилось. До кивка герой не мог начать, сразу после — начал.`,
   rule:`Реакция героя — это всегда ответ на что-то конкретное. Чтобы найти причину перемены, отследи, что произошло прямо перед ней. Репетиции были задолго и дрожь не остановили, а кивок случился ровно между «не мог» и «начал». Такое событие и называется поворотным.`,
   ex:`До: руки трясутся, начать не может\nСобытие: ${B} кивнул(а)\nПосле: начал(а)\nЗначит дело в кивке`,
   again:`Сто репетиций — правда, но они не помешали дрожи. Ищи то, что случилось ближе всего к перемене.`};
 },
 // ── черта характера через повторение ──
 (A,B)=>{const animal=pick(['stray cat','injured bird','shy puppy','old dog']);
  const days=R(9,21);
  return {
   text:`Every day ${A} left food for the ${animal} behind the shop, even when it hissed and ran away. On the ${days}th day it stayed and let ${A} touch its head.`,
   q:`Which word best describes ${A}?`,
   right:'patient',
   wrong:['careless','selfish','fearful'],
   skill:'черта характера',
   why:`Характер показывают повторяющиеся действия, а не одно разовое. Здесь важны слова «каждый день» и «на ${days}-й день».`,
   rule:`Чтобы понять, какой герой, смотри на то, что он делает снова и снова, особенно когда это трудно и ничего не даёт взамен. ${A} приходил(а) много дней подряд, хотя зверь шипел и убегал — то есть продолжал(а) без всякой награды. Это и есть терпение. Одно доброе действие ещё ничего не доказывает, повторяющееся поведение — доказывает.`,
   ex:`Кормил(а) каждый день → постоянство\nЗверь убегал → результата не было\nВсё равно приходил(а) → терпение`,
   again:`Проверь остальные слова текстом: беспечный? Приходил(а) намеренно. Эгоист? Делал(а) для зверя. Трусливый? Не отступил(а).`};
 },
 // ── два слоя: на людях и наедине ──
 (A,B)=>{const what=pick(['the team list','the contest results','the cast list','the award']);
  return {
   text:`When the coach read out ${what}, ${A} smiled and clapped for ${B}. Later, alone in the hallway, ${A} wiped both eyes and said nothing.`,
   q:`What does this tell you about ${A}?`,
   right:`${A} hid being upset in front of others`,
   wrong:[`${A} was happy about the result`,`${A} did not care at all`,`${A} was angry at ${B}`],
   skill:'два слоя поведения',
   why:`Герой ведёт себя по-разному на людях и наедине. Эта разница и есть то, что автор хочет показать.`,
   rule:`Иногда действия героя как будто противоречат друг другу: улыбался — и плакал. Противоречия нет, есть два слоя. На людях герой показывает то, что считает правильным, наедине — то, что чувствует на самом деле. Встретив такую пару сцен, читай их вместе: настоящее чувство почти всегда в той, где герой один.`,
   ex:`При всех: улыбнулся(ась), похлопал(а)\nОдин(одна) в коридоре: вытер(ла) глаза\nЗначит расстроился(ась), но не показал(а)`,
   again:`Спроси: зачем автор добавил вторую сцену? Если бы герой правда радовался, коридор был бы не нужен.`};
 },
 // ── влияние одного героя на другого ──
 (A,B)=>{const trouble=pick(['the power went out','the storm started','the lights failed','the train stopped']);
  const calm=pick(['lit candles and pulled out an old board game','opened a bag of nuts and started a story','began humming an old song','got out a deck of cards']);
  return {
   text:`${trouble.replace(/^./,c=>c.toUpperCase())}. ${B} ${calm} and said, "Now this is the good part." ${A} stopped worrying about the dark.`,
   q:`How did ${B}'s reaction affect ${A}?`,
   right:'It calmed the fear',
   wrong:['It made the fear worse','It made ${A} angry'.replace('${A}',A),'It changed nothing'],
   skill:'влияние героев друг на друга',
   why:`Спрашивают не про поступок сам по себе, а про то, что он изменил в другом герое.`,
   rule:`Персонажи влияют друг на друга, и реакция одного часто меняет состояние другого. Чтобы это увидеть, найди состояние второго героя до и после. ${A} боялся(ась), ${B} повёл(а) себя так, будто ничего страшного не происходит — и страх ушёл. Заметь: слов «не бойся» не было, спокойствие передалось через поведение.`,
   ex:`До: ${A} тревожится\n${B}: ведёт себя спокойно и буднично\nПосле: ${A} перестал(а) волноваться`,
   again:`Последнее предложение прямо говорит про перемену. Часто именно в нём и лежит ответ на «как повлияло».`};
 },
 // ── выбор как показатель характера ──
 (A,B)=>{const promise=pick(['help build the model','walk the dog together','finish the puzzle','practise for the test']);
  const temptation=pick(['friends called about the pool','a game invitation arrived','the others went to the park','a film was starting']);
  return {
   text:`${A} had promised to ${promise} with ${B}. Then ${temptation}. ${A} looked at the box on the table, sent one short message and sat down next to ${B}.`,
   q:`What does ${A}'s choice show?`,
   right:'Promises are kept',
   wrong:['Swimming is boring','Friends are scary','${B} is disliked'.replace('${B}',B)],
   skill:'выбор героя',
   why:`Настоящий характер виден в выборе между двумя вещами, а не в том, что герою просто удобно.`,
   rule:`Самые говорящие моменты — те, где герой от чего-то отказывается. ${A} мог(ла) уйти к друзьям, но было обещание — и выбор пал на обещание. Чем труднее выбор, тем больше он говорит о человеке. Если бы соблазна не возникло, никакого выбора не было бы, и мы ничего бы о герое не узнали.`,
   ex:`Обещал(а) ${B}\nПоявился соблазн\nОтказался(ась) от него\nОстался(ась) → держит слово`,
   again:`Проверь, от чего герой отказался. Отказ стоит дороже согласия и точнее показывает, что для него важно.`};
 },
 // ── вывод о чувстве по действию ──
 (A,B)=>{const thing=pick(['drawing','poem','model','song','story']);
  return {
   text:`${B} made a joke about ${A}'s ${thing}, and everyone laughed. ${A} laughed too. At home ${A} put the ${thing} in a drawer and did not take it out again.`,
   q:`How did ${A} really feel?`,
   right:'hurt',
   wrong:['proud','bored','grateful'],
   skill:'чувство за поступком',
   why:`Смех на людях и спрятанная дома вещь говорят о разном. Верить надо второму — там герой был один.`,
   rule:`О чувствах героя часто сообщают не словами, а действием, особенно последним в сцене. Спрятать и больше не доставать — это поведение человека, которому неприятно. Когда поступок наедине противоречит реакции при людях, настоящее чувство показывает именно поступок.`,
   ex:`При всех: засмеялся(ась)\nДома: убрал(а) ${thing} в ящик и не достаёт\nЗначит было обидно`,
   again:`Спроси: так поступают, когда гордятся? Гордость вешают на стену, а не прячут в ящик.`};
 },
 // ── честный поступок ──
 (A,B)=>{const found=pick(['a wallet full of money','a lost phone','a dropped ticket','an envelope with cash']);
  return {
   text:`On the way home ${A} found ${found} on the pavement. ${A} stood still for a moment, looked around the empty street, and carried it straight to the shop counter.`,
   q:`What does ${A}'s action show?`,
   right:'honesty',
   wrong:['greed','fear','carelessness'],
   skill:'поступок как доказательство',
   why:`Про героя говорит не то, что он нашёл, а что сделал дальше — особенно когда вокруг никого не было.`,
   rule:`Автор нарочно добавляет деталь «улица была пустая»: она показывает, что герой мог поступить иначе и никто бы не узнал. Поступок, совершённый без свидетелей, доказывает черту характера сильнее любого заявления. Такие детали в тексте не случайны — ищи их, когда отвечаешь на вопрос о характере.`,
   ex:`Нашёл(а) ценное\nУлица пустая — можно забрать\nВсё равно отнёс(ла) → честность`,
   again:`Зачем автору писать, что улица была пустой? Чтобы показать: выбор был, и герой его сделал.`};
 },
 // ── настойчивость ──
 (A,B)=>{const n=R(4,9), what=pick(['story','drawing','bridge из спичек'.replace(' из спичек',''),'experiment','cake']);
  return {
   text:`${A}'s first ${what} came out wrong. So did the second. ${A} started again, and again, and on the ${n}th try it finally worked.`,
   q:`Which word fits ${A} best?`,
   right:'determined',
   wrong:['lazy','lucky','careless'],
   skill:'черта характера',
   why:`Слово подбирают по поведению героя, а не по итогу. Здесь важны не успех, а ${n} попыток до него.`,
   rule:`Качество героя доказывает путь, а не результат. Удача — это когда получилось сразу и без усилий; настойчивость — когда не получалось много раз, но человек продолжал. Поэтому в таких текстах считай попытки: их число и есть доказательство.`,
   ex:`1-я попытка — не вышло\n2-я — не вышло\n…\n${n}-я — получилось\nПродолжал(а) несмотря на неудачи → настойчивость`,
   again:`Проверь слово «везучий»: везение — это сразу и без труда. Здесь было ${n} попыток, значит дело не в везении.`};
 },
 // ── главная мысль ──
 (A,B)=>{const topic=pick([
    {t:'the Moon has no air',d:'sound cannot travel there',e:'a shout would not be heard at all',main:'No air means no sound on the Moon'},
    {t:'ice reflects sunlight',d:'the poles stay cold',e:'less heat is taken in by white surfaces',main:'Ice keeps the poles cold by reflecting sunlight'},
    {t:'roots hold soil together',d:'hillsides with plants wash away slowly',e:'bare ground loses soil much faster',main:'Plants protect soil from being washed away'}]);
  return {
   text:`${topic.t.replace(/^./,c=>c.toUpperCase())}. Because of this, ${topic.d}. In fact, ${topic.e}.`,
   q:`What is the main idea of this text?`,
   right:topic.main,
   wrong:['It is a dangerous place for people','Scientists disagree about it','It changes every year'],
   skill:'главная мысль',
   why:`Главная мысль объединяет весь текст, а не пересказывает одну деталь и не добавляет того, чего в тексте нет.`,
   rule:`Чтобы найти главную мысль, прочитай все предложения и спроси: о чём они все вместе? Здесь каждое работает на одну связку — причина и следствие. Ответ, который подходит только к одному предложению, слишком узкий. Ответ, которого в тексте нет вовсе, просто неверный, каким бы разумным он ни казался.`,
   ex:`1: ${topic.t}\n2: поэтому ${topic.d}\n3: ${topic.e}\nВсе три об одном → ${topic.main}`,
   again:`Проверь выбранный ответ на каждом предложении по очереди. Подходит ко всем — это главная мысль. Подходит к одному — это деталь.`};
 }
];

GEN.r_chars=()=>{
  const [A,B]=two();
  const st=pick(STORIES)(A,B);
  return {
    q:`"${st.text}"\n\n${st.q}`,
    o:opts(st.right,...st.wrong),
    why:st.why,
    rule:st.rule,
    ex:st.ex,
    again:st.again,
    up:(()=>{
      const [C,D]=two();
      const other=pick(STORIES.filter(f=>f!==st))(C,D);
      return {q:`"${other.text}"\n\n${other.q}\n(напиши ответ своими словами — одно-два слова)`,
              a:other.right};
    })()
  };
};

(function(){
  const drop=['chars','read'];
  for(let i=SKILLS.length-1;i>=0;i--) if(drop.includes(SKILLS[i].id)) SKILLS.splice(i,1);
  SKILLS.push({id:'r_chars',subj:'ela',name:'Поступки героев',full:'Benchmark Advance · что герой сделал и почему',icon:'🎭'});
})();

['r_chars'].forEach(k=>{
  const base=GEN[k];
  GEN[k]=()=>{
    let q=base();
    for(let i=0;i<15;i++){
      const a=String(q.up&&q.up.a||'').toLowerCase();
      if(a && !(a.length>3 && q.ex.toLowerCase().includes(a))) return q;
      q=base();
    }
    return q;
  };
});
