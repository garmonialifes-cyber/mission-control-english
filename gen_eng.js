// ─────────────────────────────────────────────────────────────
//  Генератор заданий по английскому — Grade 4
//  Темы грамматики и словаря из B.E.S.T. ELA.
//  Задания собираются из словарей на лету: подставляются разные
//  глаголы, существительные и ситуации, разбор пересобирается
//  под конкретное слово. Повторов не бывает.
// ─────────────────────────────────────────────────────────────

const VERBS=[
 {inf:'go',   s:'goes',   ing:'going',   past:'went',   ru:'идти'},
 {inf:'take', s:'takes',  ing:'taking',  past:'took',   ru:'брать'},
 {inf:'see',  s:'sees',   ing:'seeing',  past:'saw',    ru:'видеть'},
 {inf:'make', s:'makes',  ing:'making',  past:'made',   ru:'делать'},
 {inf:'write',s:'writes', ing:'writing', past:'wrote',  ru:'писать'},
 {inf:'read', s:'reads',  ing:'reading', past:'read',   ru:'читать'},
 {inf:'fly',  s:'flies',  ing:'flying',  past:'flew',   ru:'летать'},
 {inf:'build',s:'builds', ing:'building',past:'built',  ru:'строить'},
 {inf:'send', s:'sends',  ing:'sending', past:'sent',   ru:'посылать'},
 {inf:'bring',s:'brings', ing:'bringing',past:'brought',ru:'приносить'},
 {inf:'catch',s:'catches',ing:'catching',past:'caught', ru:'ловить'},
 {inf:'teach',s:'teaches',ing:'teaching',past:'taught', ru:'учить'},
 {inf:'find', s:'finds',  ing:'finding', past:'found',  ru:'находить'},
 {inf:'keep', s:'keeps',  ing:'keeping', past:'kept',   ru:'хранить'},
 {inf:'grow', s:'grows',  ing:'growing', past:'grew',   ru:'расти'},
 {inf:'draw', s:'draws',  ing:'drawing', past:'drew',   ru:'рисовать'},
 {inf:'know', s:'knows',  ing:'knowing', past:'knew',   ru:'знать'},
 {inf:'ride', s:'rides',  ing:'riding',  past:'rode',   ru:'ехать верхом'},
 {inf:'swim', s:'swims',  ing:'swimming',past:'swam',   ru:'плавать'},
 {inf:'sing', s:'sings',  ing:'singing', past:'sang',   ru:'петь'},
 {inf:'run',  s:'runs',   ing:'running', past:'ran',    ru:'бежать'},
 {inf:'eat',  s:'eats',   ing:'eating',  past:'ate',    ru:'есть'},
 {inf:'drink',s:'drinks', ing:'drinking',past:'drank',  ru:'пить'},
 {inf:'give', s:'gives',  ing:'giving',  past:'gave',   ru:'давать'},
 {inf:'speak',s:'speaks', ing:'speaking',past:'spoke',  ru:'говорить'},
 {inf:'wear', s:'wears',  ing:'wearing', past:'wore',   ru:'носить одежду'},
 {inf:'win',  s:'wins',   ing:'winning', past:'won',    ru:'побеждать'},
 {inf:'lose', s:'loses',  ing:'losing',  past:'lost',   ru:'терять'},
 {inf:'sleep',s:'sleeps', ing:'sleeping',past:'slept',  ru:'спать'},
 {inf:'leave',s:'leaves', ing:'leaving', past:'left',   ru:'уходить'}
];

const SUBJ_ONE=['the astronaut','the rover','my sister','Anna','the teacher','the pilot','the engineer','my brother','the robot','the captain'];
const SUBJ_MANY=['the astronauts','the engineers','my friends','the students','the scientists','the pilots','the robots','the children'];
const TAILS=['every morning','every day','after school','on Mondays','every weekend','before dinner','twice a week'];
const NOW=['right now','at the moment','look!','listen!','at this very moment'];

const NOUNS=[
 {one:'planet',many:'planets',rule:'s'},{one:'rocket',many:'rockets',rule:'s'},
 {one:'star',many:'stars',rule:'s'},{one:'robot',many:'robots',rule:'s'},
 {one:'city',many:'cities',rule:'ies'},{one:'baby',many:'babies',rule:'ies'},
 {one:'story',many:'stories',rule:'ies'},{one:'country',many:'countries',rule:'ies'},
 {one:'galaxy',many:'galaxies',rule:'ies'},{one:'body',many:'bodies',rule:'ies'},
 {one:'box',many:'boxes',rule:'es'},{one:'watch',many:'watches',rule:'es'},
 {one:'dish',many:'dishes',rule:'es'},{one:'bus',many:'buses',rule:'es'},
 {one:'brush',many:'brushes',rule:'es'},{one:'glass',many:'glasses',rule:'es'},
 {one:'man',many:'men',rule:'irr'},{one:'woman',many:'women',rule:'irr'},
 {one:'foot',many:'feet',rule:'irr'},{one:'tooth',many:'teeth',rule:'irr'},
 {one:'child',many:'children',rule:'irr'},{one:'mouse',many:'mice',rule:'irr'},
 {one:'goose',many:'geese',rule:'irr'},{one:'leaf',many:'leaves',rule:'f'},
 {one:'knife',many:'knives',rule:'f'},{one:'shelf',many:'shelves',rule:'f'},
 {one:'day',many:'days',rule:'s'},{one:'boy',many:'boys',rule:'s'},{one:'key',many:'keys',rule:'s'}
];

const ADJ=[
 {w:'big',c:'bigger',t:'short2'},{w:'hot',c:'hotter',t:'short2'},{w:'thin',c:'thinner',t:'short2'},
 {w:'sad',c:'sadder',t:'short2'},{w:'fat',c:'fatter',t:'short2'},{w:'wet',c:'wetter',t:'short2'},
 {w:'small',c:'smaller',t:'short'},{w:'fast',c:'faster',t:'short'},{w:'cold',c:'colder',t:'short'},
 {w:'long',c:'longer',t:'short'},{w:'young',c:'younger',t:'short'},{w:'bright',c:'brighter',t:'short'},
 {w:'dark',c:'darker',t:'short'},{w:'strong',c:'stronger',t:'short'},{w:'light',c:'lighter',t:'short'},
 {w:'happy',c:'happier',t:'y'},{w:'easy',c:'easier',t:'y'},{w:'heavy',c:'heavier',t:'y'},
 {w:'early',c:'earlier',t:'y'},{w:'funny',c:'funnier',t:'y'},
 {w:'beautiful',c:'more beautiful',t:'long'},{w:'interesting',c:'more interesting',t:'long'},
 {w:'difficult',c:'more difficult',t:'long'},{w:'important',c:'more important',t:'long'},
 {w:'careful',c:'more careful',t:'long'},{w:'dangerous',c:'more dangerous',t:'long'},
 {w:'good',c:'better',t:'irr'},{w:'bad',c:'worse',t:'irr'},{w:'far',c:'farther',t:'irr'}
];

const GEN_ENG_SKILLS=[
 {id:'e_s3',  subj:'eng',name:'Хвостик -s',        full:'He / She / It + глагол с -s',icon:'🛰️'},
 {id:'e_past',subj:'eng',name:'Прошедшее время',   full:'Неправильные глаголы',icon:'🌑'},
 {id:'e_cont',subj:'eng',name:'Прямо сейчас',      full:'am / is / are + глагол-ing',icon:'🚀'},
 {id:'e_plur',subj:'eng',name:'Множественное число',full:'-s, -es, -ies и исключения',icon:'✨'},
 {id:'e_comp',subj:'eng',name:'Сравнение',         full:'-er / more … than',icon:'⚖️'},
 {id:'e_art', subj:'eng',name:'Артикли',           full:'a / an / the',icon:'🔭'}
];

/* ── -s у третьего лица ── */
GEN.e_s3=()=>{
  const v=pick(VERBS), many=Math.random()<.45;
  const subj=many?pick(SUBJ_MANY):pick(SUBJ_ONE);
  const right=many?v.inf:v.s;
  const cap=t=>t[0].toUpperCase()+t.slice(1);
  return {
    q:`${cap(subj)} ___ to work ${pick(TAILS)}.`.replace('to work',v.inf==='go'?'to the station':'the work'),
    o:opts(right,many?v.s:v.inf,v.ing,v.past),
    why:many
      ?`Подлежащее «${subj}» означает несколько человек или предметов — это they. К ним глагол идёт без окончания.`
      :`Подлежащее «${subj}» — это один человек или предмет, то есть he, she или it. У глагола рядом с ними вырастает окончание -s.`,
    rule:`В настоящем простом времени глагол меняется только в одном случае — когда действует кто-то один: he, she, it. Тогда он получает -s. Для I, you, we, they глагол остаётся в начальной форме. Проверка простая: замени подлежащее местоимением. Получилось he, she или it — ставь -s, получилось they или we — не ставь. Заодно заметь, что окончание -s в предложении обычно одно: либо у существительного (их много), либо у глагола (он один).`,
    ex:`${cap(subj)} ${right} …\nСравни: ${many?'the astronaut '+v.s+' (один)':'the astronauts '+v.inf+' (много)'}\n${v.inf} → ${v.s} (he/she/it)`,
    again:`Сосчитай действующих: ${many?'их несколько — хвостик не нужен':'он один — хвостик обязателен'}. Количество решает, а не длина фразы.`,
    up:(()=>{const u=pick(VERBS.filter(x=>x.inf!==v.inf));
      return {q:`She ___ (${u.inf}) every day.`, a:u.s}})()
  };
};

/* ── прошедшее время ── */
GEN.e_past=()=>{
  const v=pick(VERBS.filter(x=>x.past!==x.inf));
  const subj=pick([...SUBJ_ONE,...SUBJ_MANY]);
  const cap=t=>t[0].toUpperCase()+t.slice(1);
  return {
    q:`Yesterday ${subj} ___ (${v.inf}) something new.`,
    o:opts(v.past,v.inf+'ed',v.inf,v.s),
    why:`К этому глаголу нельзя приклеить -ed: он неправильный и меняет форму целиком. «${v.inf}ed» не существует ни в одном варианте английского.`,
    rule:`Глаголы делятся на правильные и неправильные. Правильные образуют прошедшее время окончанием -ed: work → worked. Неправильные меняются непредсказуемо, и их формы заучивают: ${v.inf} → ${v.past}. По виду слова угадать нельзя — отличить можно только памятью. Хорошая новость: неправильных около двух сотен, и это самые частые слова языка, поэтому они запоминаются сами собой.`,
    ex:`${v.inf} → ${v.past} (${v.ru})\nПравильный для сравнения: work → worked\n${cap(subj)} ${v.past} …`,
    again:`Проверь на слух: фразу с «${v.past}» ты слышал в фильмах и песнях, а «${v.inf}ed» не говорит никто. Слух здесь надёжнее правил.`,
    up:(()=>{const u=pick(VERBS.filter(x=>x.inf!==v.inf&&x.past!==x.inf));
      return {q:`They ___ (${u.inf}) it last week.`, a:u.past}})()
  };
};

/* ── длительное время ── */
GEN.e_cont=()=>{
  const v=pick(VERBS), kind=pick(['I','one','many','habit']);
  const sig=pick(NOW);
  if(kind==='habit'){
    const subj=pick(SUBJ_ONE);
    return {
      q:`${pick(TAILS)} ${subj} ___ (${v.inf}) in the lab.`,
      o:opts(v.s,'is '+v.ing,v.inf,'are '+v.ing),
      why:`Здесь говорится не про этот момент, а про постоянный порядок вещей. Для привычного действия длительное время не нужно.`,
      rule:`В английском два настоящих времени, и выбор определяется не реальностью, а тем, о чём сообщает предложение. Слова every day, usually, always, often говорят о регулярности — нужно простое настоящее. Слова now, right now, at the moment, look! указывают на момент речи — нужно длительное, то есть am, is или are плюс глагол с -ing. Поэтому сначала ищи в предложении слово времени, и только потом выбирай форму.`,
      ex:`${pick(TAILS)} the engineer ${v.s} … (порядок вещей)\nRight now the engineer is ${v.ing} … (этот момент)`,
      again:`Станция вращается вокруг Земли постоянно, но фраза с every day рассказывает про режим, а не про текущую секунду. Слово времени важнее ощущения.`,
      up:(()=>{const u=pick(VERBS.filter(x=>x.inf!==v.inf));return{q:`Look! He ___ (${u.inf}) now. (два слова)`,a:'is '+u.ing}})()
    };
  }
  const map={I:['I','am'],one:[pick(SUBJ_ONE),'is'],many:[pick(SUBJ_MANY),'are']};
  const [subj,aux]=map[kind];
  const cap=t=>t[0].toUpperCase()+t.slice(1);
  return {
    q:`${sig==='look!'?'Look! ':''}${cap(subj)} ___ (${v.inf}) ${sig==='look!'?'':sig}.`,
    o:opts(aux+' '+v.ing, (aux==='is'?'are':'is')+' '+v.ing, v.inf, v.s),
    why:`Помощник выбирается по подлежащему: ${kind==='I'?'у слова I он всегда am и ни с кем больше не встречается':kind==='one'?'«'+subj+'» это один, значит is':'«'+subj+'» это несколько, значит are'}.`,
    rule:`Длительное время всегда состоит из двух частей, и обе обязательны: помощник и глагол с -ing. Помощник подбирается строго по подлежащему: I — am, he, she, it — is, we, you, they — are. Окончание -ing при этом одинаково для всех и не меняется. Удобно строить фразу в два шага: сначала определить, кто действует, и взять помощника, потом прибавить -ing к глаголу.`,
    ex:`I am ${v.ing} — he is ${v.ing} — they are ${v.ing}\n${cap(subj)} ${aux} ${v.ing} ${sig==='look!'?'':sig}`,
    again:`Проверь фразу по двум галочкам: помощник на месте и -ing на месте. Пропустил помощника — предложение рассыпалось, пропустил -ing — получилось другое время.`,
    up:(()=>{const u=pick(VERBS.filter(x=>x.inf!==v.inf));const w=pick([['I','am'],['She','is'],['They','are']]);
      return{q:`${w[0]} ___ (${u.inf}) right now. (два слова)`,a:w[1]+' '+u.ing}})()
  };
};

/* ── множественное число ── */
GEN.e_plur=()=>{
  const n=pick(NOUNS);
  const wrong={s:n.one+'es',ies:n.one+'s',es:n.one+'s',irr:n.one+'s',f:n.one+'s'}[n.rule];
  const explain={
    s:`Большинству существительных нужно простое -s, без всяких добавок. Окончание -es появляется только после шипящих и свистящих, где просто -s не выговорить.`,
    es:`После s, x, z, ch, sh добавляется -es: без вставной гласной эти звуки не произнести подряд. Попробуй сказать «${n.one}s» вслух — язык спотыкается.`,
    ies:`Слово кончается на -y после согласной, поэтому y меняется на i и добавляется -es. Если бы перед y стояла гласная, было бы просто -s: day → days.`,
    irr:`Это слово из небольшой группы древних исключений: оно меняет гласную внутри, а окончания не берёт вовсе.`,
    f:`У слов на -f и -fe во множественном числе f превращается в v: так язык делает произношение мягче.`
  }[n.rule];
  return {
    q:`one ${n.one} → three ___`,
    o:opts(n.many,wrong,n.one,n.one+'ies'),
    why:explain,
    rule:`Порядок проверки для множественного числа такой. Шаг первый: кончается на s, x, z, ch, sh — добавляй -es. Шаг второй: кончается на -y после согласной — меняй y на i и добавляй -es. Шаг третий: кончается на -f или -fe — меняй на v и добавляй -es. Если ничего из этого не подошло, просто добавь -s. Отдельно живут исключения вроде man, foot, child — они меняют корень и не берут окончаний совсем.`,
    ex:`${n.one} → ${n.many}\n${n.rule==='ies'?'Сравни: day → days — там перед y гласная, и правило не работает':n.rule==='irr'?'Такие слова просто запоминают: man → men, foot → feet, child → children':'Правило: '+(n.rule==='es'?'после шипящих -es':'обычное -s')}`,
    again:`Произнеси вслух оба варианта. Правильная форма выговаривается легко, неправильная спотыкается — правило как раз и выросло из удобства произношения.`,
    up:(()=>{const m=pick(NOUNS.filter(x=>x.one!==n.one));
      return{q:`one ${m.one} → five ___`,a:m.many}})()
  };
};

/* ── сравнение ── */
GEN.e_comp=()=>{
  const a=pick(ADJ);
  const wrong={short:'more '+a.w,short2:a.w+'er',y:a.w+'er',long:a.w+'er',irr:a.w+'er'}[a.t];
  const why={
    short:`Слово короткое, в один слог — ему хватает окончания -er. Ставить перед ним more нельзя: язык не допускает двойного обозначения одного и того же.`,
    short2:`Слово кончается сочетанием «согласная — гласная — согласная», поэтому последняя буква удваивается. Без удвоения гласная читалась бы длинно и слово зазвучало бы иначе.`,
    y:`Слово кончается на -y после согласной, значит y меняется на i, и только потом добавляется -er.`,
    long:`Слово длинное, из трёх слогов и больше. Такие сравниваются при помощи more, потому что «${a.w}er» просто не выговорить.`,
    irr:`Это одно из трёх исключений английского: оно меняет форму целиком, а не берёт окончание.`
  }[a.t];
  return {
    q:`${a.w} → ___ than`,
    o:opts(a.c,wrong,a.w,'the '+(a.t==='long'?'most '+a.w:a.w+'est')),
    why:why,
    rule:`Способ сравнения зависит от длины слова. Односложные берут -er: small → smaller. Если такое слово кончается на согласную-гласную-согласную, последняя буква удваивается: big → bigger. Слова на -y меняют её на i: happy → happier. Длинные слова, из трёх слогов и больше, берут more: more beautiful. И три слова меняются совсем непохоже: good → better, bad → worse, far → farther. Смешивать два способа нельзя — «more bigger» грубая ошибка.`,
    ex:`${a.w} → ${a.c} than\n${a.t==='short2'?'Удвоение: big → bigger, hot → hotter':a.t==='y'?'Замена y → i: happy → happier':a.t==='long'?'Длинное слово: more interesting, more difficult':a.t==='irr'?'Исключение: good → better, bad → worse, far → farther':'Короткое слово: fast → faster'}`,
    again:`Посчитай слоги вслух. Один слог — почти всегда -er. Три и больше — точно more. Два слога на -y — тоже -er, но с заменой буквы.`,
    up:(()=>{const b=pick(ADJ.filter(x=>x.w!==a.w));
      return{q:`${b.w} → ___ than`,a:b.c}})()
  };
};

/* ── артикли ── */
GEN.e_art=()=>{
  const words=[
   {w:'astronaut',art:'an',why:'гласный звук'},{w:'engineer',art:'an',why:'гласный звук'},
   {w:'orbit',art:'an',why:'гласный звук'},{w:'apple',art:'an',why:'гласный звук'},
   {w:'idea',art:'an',why:'гласный звук'},{w:'umbrella',art:'an',why:'гласный звук'},
   {w:'hour',art:'an',why:'буква h не читается, слово начинается со звука [ау]'},
   {w:'honest answer',art:'an',why:'буква h не читается'},
   {w:'rocket',art:'a',why:'согласный звук'},{w:'star',art:'a',why:'согласный звук'},
   {w:'scientist',art:'a',why:'согласный звук'},{w:'telescope',art:'a',why:'согласный звук'},
   {w:'mission',art:'a',why:'согласный звук'},{w:'crew',art:'a',why:'согласный звук'},
   {w:'university',art:'a',why:'пишется с гласной, но звучит как [ю] — это согласный звук'},
   {w:'European country',art:'a',why:'звучит как [ю] — согласный звук'},
   {w:'old telescope',art:'an',why:'решает прилагательное, а оно начинается с гласного'},
   {w:'interesting experiment',art:'an',why:'решает прилагательное, оно с гласного'},
   {w:'bright star',art:'a',why:'решает прилагательное, оно с согласного'}
  ];
  const x=pick(words);
  return {
    q:`I saw ___ ${x.w} yesterday.`,
    o:opts(x.art,x.art==='a'?'an':'a','the','—'),
    why:`Здесь ${x.why}. Артикль выбирается по звуку, с которого начинается следующее слово, а не по букве.`,
    rule:`Артикли a и an — одно и то же слово в двух вариантах произношения: an ставится перед гласным звуком, a перед согласным. Вставная n нужна, чтобы две гласные не слиплись. Решает именно звук, а не написание: hour начинается с гласного звука, хотя пишется с h, а university начинается с согласного [ю], хотя пишется с гласной. И если между артиклем и существительным стоит прилагательное, смотреть надо на него — оно ближе.`,
    ex:`${x.art} ${x.w}\nan astronaut, an hour (гласный звук)\na rocket, a university (согласный звук)`,
    again:`Закрой глаза и произнеси слово вслух. Что слышишь первым — гласный или согласный? Это и есть ответ, написание тут ни при чём.`,
    up:(()=>{const y=pick(words.filter(z=>z.w!==x.w));
      return{q:`___ ${y.w} (a / an)`,a:y.art}})()
  };
};

// заменяем статические темы английского генераторными
(function(){
  const drop=['s3','past','cont','plur','comp','art'];
  for(let i=SKILLS.length-1;i>=0;i--) if(drop.includes(SKILLS[i].id)) SKILLS.splice(i,1);
  SKILLS.push(...GEN_ENG_SKILLS);
})();


// Страховка: если ответ проверки виден в разборе — задание пересобирается.
['e_s3','e_past','e_cont','e_plur','e_comp','e_art'].forEach(k=>{
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
