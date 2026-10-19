// ─────────────────────────────────────────────────────────────
//  Генераторы: предлоги, словарь, наука.
//  Вместо готовых заданий — базы знаний, из которых задание
//  собирается в момент показа. Один факт даёт несколько разных
//  вопросов, поэтому набор не кончается.
//  Наука — темы Inspire Science / STEMscopes Florida, Grade 4.
// ─────────────────────────────────────────────────────────────

// своё перемешивание: shuffle живёт в index.html и к моменту загрузки
// этого файла ещё не объявлен
const mix=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};

/* ── база предлогов ── */
const PREP_PLACE=[
 {p:'in',    q:'The astronaut is ___ the spacecraft.',  ru:'внутри, в замкнутом пространстве', ex:'in the box, in the room, in the car'},
 {p:'on',    q:'The rover landed ___ Mars.',            ru:'на поверхности, с касанием',       ex:'on the table, on the wall, on Mars'},
 {p:'above', q:'The satellite flies ___ the Earth.',    ru:'выше, не касаясь',                 ex:'above the clouds, above the table'},
 {p:'under', q:'There is an ocean ___ the ice.',        ru:'ниже, под чем-то',                 ex:'under the chair, under the ice'},
 {p:'between',q:'Mars is ___ Earth and Jupiter.',       ru:'между двумя названными',           ex:'between the Sun and Earth'},
 {p:'near',  q:'The station flies ___ the Moon.',       ru:'рядом, недалеко',                  ex:'near the window, near the school'},
 {p:'behind',q:'The Moon passed ___ the Earth.',        ru:'позади, с обратной стороны',       ex:'behind the door, behind the hill'},
 {p:'inside',q:'The samples are ___ the capsule.',      ru:'внутри, подчёркнуто',              ex:'inside the bag, inside the capsule'},
 {p:'across',q:'The rover drove ___ the crater.',       ru:'через, с одной стороны на другую', ex:'across the road, across the river'},
 {p:'around',q:'The Moon moves ___ the Earth.',         ru:'вокруг',                           ex:'around the Sun, around the table'}
];
const PREP_TIME=[
 {p:'at', unit:'час',          ex:['9 o\'clock','noon','midnight','7:30'],      ru:'точное время'},
 {p:'on', unit:'день',         ex:['Monday','May 5th','my birthday','Friday'],  ru:'день или дата'},
 {p:'in', unit:'месяц и год',  ex:['1961','April','2026','summer'],             ru:'длинный промежуток'}
];

GEN.e_prep=()=>{
  const time=Math.random()<.45;
  if(time){
    const t=pick(PREP_TIME), v=pick(t.ex);
    const others=PREP_TIME.filter(x=>x.p!==t.p).map(x=>x.p);
    return {
      q:`The launch happened ___ ${v}.`,
      o:opts(t.p,...others,'under'),
      why:`Здесь назван ${t.ru} — «${v}». Для него в английском свой предлог, и перепутать их легко, потому что по-русски во всех случаях говорят одинаково.`,
      rule:`Предлоги времени устроены лесенкой от точного к общему. At отвечает за момент: at 9 o'clock, at noon. On — за день: on Monday, on May 5th. In — за длинные промежутки: in April, in 2026, in summer. Чем крупнее отрезок времени, тем «шире» предлог. Эта лесенка работает почти без исключений, и достаточно понять, насколько точное время названо.`,
      ex:`at ${PREP_TIME[0].ex[0]} — час\non ${PREP_TIME[1].ex[0]} — день\nin ${PREP_TIME[2].ex[0]} — год\nЗдесь названо: ${v} → ${t.p}`,
      again:`Спроси себя, насколько точно указано время. Назван час — at. Назван день — on. Назван месяц или год — in.`,
      up:(()=>{const u=pick(PREP_TIME.filter(x=>x.p!==t.p));
        return{q:`The lesson is ___ ${pick(u.ex)}. (at / on / in)`,a:u.p}})()
    };
  }
  const x=pick(PREP_PLACE);
  const others=PREP_PLACE.filter(y=>y.p!==x.p).map(y=>y.p);
  return {
    q:x.q,
    o:opts(x.p,...mix(others).slice(0,3)),
    why:`Нужен предлог со значением «${x.ru}». Предлоги места различаются тонко, и выбирать надо по положению предметов друг относительно друга, а не по привычному переводу.`,
    rule:`Предлоги места описывают, где предмет находится. In — внутри объёма, on — на поверхности с касанием, above — выше без касания, under — ниже, between — между двумя названными, around — вокруг, across — с одной стороны на другую, behind — позади. Разница между парами вроде on и above только в касании, и именно она чаще всего решает ответ.`,
    ex:`${x.p} — ${x.ru}\nПримеры: ${x.ex}\n${x.q.replace('___',x.p)}`,
    again:`Нарисуй картинку в голове: где именно стоит предмет относительно другого — внутри, сверху, снизу, сбоку. Предлог подбирается под эту картинку.`,
    up:(()=>{const y=pick(PREP_PLACE.filter(z=>z.p!==x.p));
      return{q:`${y.q} (${y.p==='in'?'in / on':mix([y.p,pick(others)]).join(' / ')})`,a:y.p}})()
  };
};

/* ── словарь: база терминов ── */
const VOCAB=[
 {w:'rover',    def:'a machine that drives on the surface of a planet', ru:'планетоход', near:'rocket',  diff:'rocket летит, rover ездит'},
 {w:'crater',   def:'a hole in the ground made by a falling rock',      ru:'кратер',     near:'comet',   diff:'comet летит, crater — след от удара'},
 {w:'orbit',    def:'the path of one object around another',            ru:'орбита',     near:'axis',    diff:'axis — ось вращения самого тела, orbit — путь вокруг другого'},
 {w:'gravity',  def:'the force that pulls objects toward each other',   ru:'гравитация', near:'speed',   diff:'gravity — сила, speed — её следствие'},
 {w:'galaxy',   def:'a huge group of billions of stars',                ru:'галактика',  near:'planet',  diff:'в галактике миллиарды звёзд, планета — один шар'},
 {w:'satellite',def:'an object that goes around a planet',              ru:'спутник',    near:'star',    diff:'star светит сама, satellite только кружит рядом'},
 {w:'crew',     def:'the people who work together on a ship',           ru:'экипаж',     near:'team',    diff:'crew на борту, team в спорте'},
 {w:'countdown',def:'counting backwards from ten to zero',              ru:'обратный отсчёт',near:'launch pad',diff:'countdown — счёт, launch pad — площадка'},
 {w:'atmosphere',def:'the layer of gases around a planet',              ru:'атмосфера',  near:'space',   diff:'атмосфера прилегает к планете, космос начинается выше'},
 {w:'telescope',def:'a tool that makes faraway things look closer',     ru:'телескоп',   near:'microscope',diff:'telescope для далёкого, microscope для мелкого'},
 {w:'meteor',   def:'a space rock burning as it falls through the air', ru:'метеор',     near:'comet',   diff:'comet летит по орбите, meteor уже падает'},
 {w:'eclipse',  def:'when one object blocks the light of another',      ru:'затмение',   near:'orbit',   diff:'eclipse — событие, orbit — путь'},
 {w:'astronaut',def:'a person trained to travel into space',            ru:'астронавт',  near:'pilot',   diff:'pilot водит самолёт, astronaut летит в космос'},
 {w:'launch',   def:'sending a rocket up into space',                   ru:'запуск',     near:'landing', diff:'launch — взлёт, landing — посадка'},
 {w:'module',   def:'a separate part of a spacecraft',                  ru:'модуль',     near:'engine',  diff:'module — отсек, engine — двигатель'},
 {w:'mission',  def:'a planned task a crew is sent to do',              ru:'миссия',     near:'orbit',   diff:'mission — задача, orbit — траектория'},
 {w:'surface',  def:'the outside layer of a planet or moon',            ru:'поверхность',near:'core',    diff:'surface снаружи, core в середине'},
 {w:'core',     def:'the hottest part deep inside a planet',              ru:'ядро',       near:'crust',   diff:'core в середине, crust снаружи'},
 {w:'probe',    def:'a small craft sent to study something far away',   ru:'зонд',       near:'rover',   diff:'probe летит, rover ездит по поверхности'},
 {w:'solar system',def:'the Sun and everything that goes around it',    ru:'Солнечная система',near:'galaxy',diff:'в галактике много таких систем'}
];

GEN.e_voc=()=>{
  const v=pick(VOCAB);
  const kind=pick(['def2word','word2def','diff']);
  const others=mix(VOCAB.filter(x=>x.w!==v.w)).slice(0,3);
  if(kind==='def2word')return {
    q:`What is ${v.def}?`,
    o:opts(v.w,...others.map(x=>x.w)),
    why:`В вопросе дано определение, и нужно подобрать к нему слово. Остальные варианты из той же области, поэтому решает именно смысл, а не знакомость слова.`,
    rule:`Слово «${v.w}» означает ${v.ru}: ${v.def}. Ближе всего к нему по смыслу стоит «${v.near}», и путают их чаще всего. Разница такая: ${v.diff}. Когда два термина из одной области, держи в голове именно эту разницу, а не общее впечатление.`,
    ex:`${v.w} — ${v.ru}\n${v.def}\nНе путать с ${v.near}: ${v.diff}`,
    again:`Привяжи слово к картинке или действию. ${v.w} — это ${v.ru}, представь его в деле, и отличие от «${v.near}» станет очевидным.`,
    up:(()=>{const u=pick(VOCAB.filter(x=>x.w!==v.w&&x.w!==v.near));
      return{q:`What is ${u.def}? (одно слово)`,a:u.w}})()
  };
  if(kind==='word2def')return {
    q:`What does the word "${v.w}" mean?`,
    o:opts(v.def,...others.map(x=>x.def)),
    why:`Здесь наоборот: дано слово, нужно выбрать его значение. Варианты специально взяты из той же темы — чтобы не угадывалось по одному знакомому слову.`,
    rule:`${v.w} это ${v.ru} — ${v.def}. Рядом по смыслу стоит ${v.near}, и разница между ними такая: ${v.diff}. Космические термины часто встречаются в одном тексте, поэтому важно держать не общее ощущение «что-то про космос», а конкретное значение каждого.`,
    ex:`${v.w} = ${v.def}\nПо-русски: ${v.ru}`,
    again:`Разбери слово на части или вспомни однокоренное: часто подсказка прямо в нём. Countdown — count + down, спутник кружит, rover бродит.`,
    up:(()=>{const u=pick(VOCAB.filter(x=>x.w!==v.w));
      return{q:`«${u.ru}» по-английски? (одно слово)`,a:u.w}})()
  };
  return {
    q:`Which is true about "${v.w}" and "${v.near}"?`,
    o:opts(`They are different: ${v.diff.replace(/—/g,'-')}`,'They mean exactly the same','One is a kind of the other','Neither is used in science'),
    why:`Эти два слова постоянно стоят рядом в текстах про космос, поэтому кажется, что они об одном. На деле у каждого своя работа.`,
    rule:`${v.w} означает ${v.ru}, а ${v.near} — другое понятие. Разница: ${v.diff}. Близкие по теме слова почти никогда не взаимозаменяемы: язык держит отдельное слово ровно потому, что им называют что-то своё. Когда встречаешь пару похожих терминов, сразу ищи, чем они отличаются, а не чем похожи.`,
    ex:`${v.w} — ${v.ru}\n${v.near} — другое\nОтличие: ${v.diff}`,
    again:`Попробуй подставить одно слово вместо другого в предложение. Смысл поедет — значит они не синонимы.`,
    up:(()=>{const u=pick(VOCAB.filter(x=>x.w!==v.w));
      return{q:`«${u.ru}» по-английски? (одно слово)`,a:u.w}})()
  };
};

/* ── наука: база явлений ── */
const SCI=[
 {t:'energy',term:'potential energy',def:'energy stored because of position',
  ex:'a ball at the top of a hill, a stretched rubber band',why:'предмет не движется, но запас есть',
  near:'kinetic energy',diff:'kinetic — энергия движения, potential — запас положения'},
 {t:'energy',term:'kinetic energy',def:'the energy of something that is moving',
  ex:'a rolling ball, a flying bird',why:'есть движение — есть кинетическая энергия',
  near:'potential energy',diff:'potential есть и у неподвижного, kinetic только у движущегося'},
 {t:'energy',term:'friction',def:'a force between two surfaces that slows motion',
  ex:'a sled stopping on rough ground, warm hands after rubbing',why:'поверхности цепляются друг за друга',
  near:'gravity',diff:'friction нужен контакт, gravity работает на расстоянии'},
 {t:'energy',term:'conduction',def:'heat moving through a material by touch',
  ex:'a metal spoon getting hot in soup',why:'частицы передают колебания соседям',
  near:'radiation',diff:'conduction через касание, radiation через пустоту'},
 {t:'energy',term:'radiation',def:'energy travelling as waves, even through empty space',
  ex:'sunlight reaching the Earth',why:'волне не нужна среда',
  near:'conduction',diff:'radiation идёт и через вакуум, conduction только через вещество'},
 {t:'energy',term:'renewable source',def:'an energy source that refills by itself',
  ex:'wind, sunlight, running water',why:'восполняется, пока светит Солнце',
  near:'nonrenewable source',diff:'уголь и нефть копились миллионы лет и не восстановятся при нашей жизни'},
 {t:'forces',term:'gravity',def:'the force that pulls objects with mass toward each other',
  ex:'a dropped apple falling, the Moon circling the Earth',why:'действует на расстоянии, без касания',
  near:'friction',diff:'gravity тянет вниз всегда, friction только при соприкосновении'},
 {t:'forces',term:'balanced forces',def:'forces that cancel each other out',
  ex:'a book resting on a table, tug-of-war with no winner',why:'итог равен нулю, движение не меняется',
  near:'unbalanced forces',diff:'неуравновешенные меняют скорость или направление'},
 {t:'forces',term:'unbalanced forces',def:'forces where one side wins',
  ex:'a ball speeding up down a ramp',why:'движение меняется — значит силы неуравновешены',
  near:'balanced forces',diff:'при уравновешенных движение не меняется вовсе'},
 {t:'forces',term:'contact force',def:'a force that needs touching',
  ex:'a push, a pull, friction',why:'без касания такой силы нет',
  near:'force at a distance',diff:'магнетизм и гравитация действуют через промежуток'},
 {t:'forces',term:'magnetism',def:'a force that attracts certain metals without touching',
  ex:'a magnet picking up a paper clip',why:'работает через воздух',
  near:'gravity',diff:'магнит притягивает не всё подряд, гравитация — всё, что имеет массу'},
 {t:'forces',term:'speed',def:'how far something goes in a certain time',
  ex:'5 km every hour',why:'это результат действия сил, а не сила',
  near:'force',diff:'сила — причина, скорость — следствие'},
 {t:'earth',term:'weathering',def:'rock breaking apart where it stands',
  ex:'water freezing in a crack and splitting the rock',why:'камень разрушился, но остался на месте',
  near:'erosion',diff:'erosion уносит обломки, weathering только разрушает'},
 {t:'earth',term:'erosion',def:'moving broken rock and soil to another place',
  ex:'a river carrying sand downstream',why:'материал переносится',
  near:'deposition',diff:'deposition — когда перенос кончился и материал лёг'},
 {t:'earth',term:'deposition',def:'dropping carried material in a new place',
  ex:'a river building a delta at its mouth',why:'поток замедлился и больше не держит груз',
  near:'erosion',diff:'erosion несёт, deposition кладёт'},
 {t:'earth',term:'crust',def:'the thin outer layer of the Earth',
  ex:'the ground we walk on, the ocean floor',why:'самый тонкий слой, как кожура яблока',
  near:'mantle',diff:'мантия толще всего и лежит под корой'},
 {t:'earth',term:'fossil',def:'the preserved trace of an ancient living thing',
  ex:'sea shells found high in the mountains',why:'рассказывает, каким место было раньше',
  near:'rock',diff:'окаменелость хранит след организма, обычный камень — нет'},
 {t:'earth',term:'water cycle',def:'water moving between the ground, air and clouds',
  ex:'evaporation, condensation, rain',why:'вода на планете не кончается, а ходит по кругу',
  near:'erosion',diff:'круговорот переносит воду, эрозия — породу'}
];

const SCI_SKILLS=[
 {id:'s_energy',subj:'sci',name:'Энергия',        full:'Движение, запас, превращение',icon:'⚡'},
 {id:'s_forces',subj:'sci',name:'Силы и движение',full:'Что толкает, тянет и останавливает',icon:'🎢'},
 {id:'s_earth', subj:'sci',name:'Земля меняется', full:'Выветривание, эрозия, отложения',icon:'🌋'}
];

function sciGen(topic){
  return ()=>{
    const pool=SCI.filter(x=>x.t===topic);
    const v=pick(pool);
    const others=mix(SCI.filter(x=>x.term!==v.term)).slice(0,3);
    const kind=pick(['def','example','diff','why']);
    const base={
      rule:`${v.term} — это ${v.def}. Понять проще через признак: ${v.why}. Рядом стоит ${v.near}, и путают их постоянно. Разница такая: ${v.diff}. В науке соседние понятия всегда различают по одному чёткому признаку, и запоминать надо именно его, а не общее впечатление.`,
      ex:`${v.term}: ${v.def}\nПримеры: ${v.ex}\nОтличие от ${v.near}: ${v.diff}`,
      up:(()=>{const u=pick(SCI.filter(x=>x.term!==v.term&&x.term!==v.near));
        return{q:`What is ${u.def}? (термин на английском)`,a:u.term}})()
    };
    if(kind==='def')return Object.assign({},base,{
      q:`What is ${v.def}?`,
      o:opts(v.term,...others.map(x=>x.term)),
      why:`В вопросе дано определение, и к нему надо подобрать термин. Все варианты из этой же темы, поэтому выбирать приходится по сути, а не по знакомому слову.`,
      again:`Зацепись за признак: ${v.why}. Он отделяет ${v.term} от всего остального.`
    });
    if(kind==='example')return Object.assign({},base,{
      q:`Which example shows ${v.term}?`,
      o:opts(v.ex.split(',')[0].trim(),...others.map(x=>x.ex.split(',')[0].trim())),
      why:`Определение можно выучить наизусть и всё равно не узнать явление в жизни. Поэтому здесь спрашивают пример, а не формулировку.`,
      again:`Проверь каждый вариант признаком: ${v.why}. Подходит только один.`
    });
    if(kind==='diff')return Object.assign({},base,{
      q:`What is the difference between ${v.term} and ${v.near}?`,
      o:opts(v.diff.replace(/—/g,'-'),'There is no difference','One is always stronger','Only one is used in science'),
      why:`Эти два понятия описывают близкие вещи, поэтому кажутся одним и тем же. На деле их разделяет один чёткий признак.`,
      again:`Возьми конкретный пример и спроси: что здесь происходит на самом деле — ${v.term} или ${v.near}?`
    });
    return Object.assign({},base,{
      q:`${v.ex.split(',')[0].trim().replace(/^./,c=>c.toUpperCase())}. What is happening?`,
      o:opts(v.term,...others.map(x=>x.term)),
      why:`Здесь описана ситуация, и нужно назвать явление. Это самое полезное умение: узнавать явление в жизни, а не только помнить слово.`,
      again:`Смотри на главный признак: ${v.why}.`
    });
  };
}
GEN.s_energy=sciGen('energy');
GEN.s_forces=sciGen('forces');
GEN.s_earth =sciGen('earth');

// статические темы заменяются генераторными
(function(){
  const drop=['prep','voc','energy','forces','earth'];
  for(let i=SKILLS.length-1;i>=0;i--) if(drop.includes(SKILLS[i].id)) SKILLS.splice(i,1);
  SKILLS.push(
    {id:'e_prep',subj:'eng',name:'Где и когда',full:'Предлоги места и времени',icon:'🧭'},
    {id:'e_voc', subj:'eng',name:'Словарь',    full:'Космические слова и их различия',icon:'👨‍🚀'},
    ...SCI_SKILLS);
})();

// страховка: проверка не должна списываться из разбора
['e_prep','e_voc','s_energy','s_forces','s_earth'].forEach(k=>{
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
