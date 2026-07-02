/* =========================================================
   英検準2級 対策データ（一次試験＋二次試験）
   - EIKEN_GUIDE     : 試験ガイド（形式）
   - EIKEN_PLAN      : 約3か月（12週）の学習計画
   - EIKEN_VOCAB     : 分野別 語彙・熟語
   - EIKEN_GRAMMAR   : 準2級の文法ユニット（解説＋確認問題）
   - EIKEN_PART1     : 大問1 短文の語句空所補充（4択）
   - EIKEN_PART2     : 大問2 会話文の空所補充（4択）
   - EIKEN_READING   : 大問3 長文読解（パッセージ＋設問）
   - EIKEN_LISTENING : リスニング（音声＋設問）
   - EIKEN_WRITING   : ライティング（意見論述・Eメール）
   - EIKEN_INTERVIEW : 二次試験（面接）練習カード
   問題は既存のテスト形式（choice / listen 等）と共通。
   ========================================================= */

const EIKEN_GUIDE = {
  overview: "英検準2級は高校中級（CEFR A2）レベル。一次試験（筆記＋リスニング）に合格すると二次試験（面接・スピーキング）に進みます。合格の目安は各技能でバランスよく6割前後。",
  primary: [
    { section: "大問1：短文の語句空所補充", content: "単語・熟語・文法の4択（約15問）。語彙力が得点の要。" },
    { section: "大問2：会話文の空所補充", content: "会話の流れに合う表現を4択で選ぶ（約5問）。" },
    { section: "大問3：長文の内容一致", content: "掲示・Eメール・説明文を読み、内容に関する4択に答える。" },
    { section: "ライティング", content: "Eメール返信と、意見論述（QUESTIONに対し自分の意見＋理由2つ、50語程度）。" },
    { section: "リスニング", content: "第1部＝会話の応答選択、第2部＝会話の内容一致、第3部＝説明文の内容一致。" },
  ],
  secondary: [
    { section: "音読（No.1）", content: "20語程度のパッセージを音読。発音・区切りを意識。" },
    { section: "パッセージの質問（No.2）", content: "本文の内容について答える（Whyには becauseで）。" },
    { section: "イラストの質問（No.3）", content: "人物が何をしているかを現在進行形で描写する。" },
    { section: "意見の質問（No.4・No.5）", content: "カードの話題や自分自身のことについて意見を述べる。" },
    { section: "態度（アティチュード）", content: "はっきり・積極的に。分からなければ Pardon? と聞き返してOK。" },
  ],
};

const EIKEN_PLAN = [
  { phase: "1か月目：基礎固め", weeks: "Week 1–4", tasks: [
    "毎日：語彙ユニットを1つ＋フラッシュカードで暗記",
    "文法ユニットを週2つ学習＋確認テスト",
    "リスニングに毎日5分（聞き流し＋設問）",
    "目標：準2級の基本文法と頻出語1000語レベルに慣れる",
  ] },
  { phase: "2か月目：分野別対策", weeks: "Week 5–8", tasks: [
    "大問1（語句）・大問2（会話）を毎日10問",
    "長文読解を週3本（時間を計って）",
    "ライティング：意見論述の型を覚え、週2本書く",
    "リスニング：第1〜3部をバランスよく",
  ] },
  { phase: "3か月目：仕上げ・二次対策", weeks: "Week 9–12", tasks: [
    "模試（一次形式）を週1回、時間配分を練習",
    "間違えた問題と苦手語をリセットせず復習",
    "二次試験：面接カードで音読・質問応答を声に出して練習",
    "本番前1週間：総復習＋Eメール/面接の定型を最終確認",
  ] },
];

const EIKEN_VOCAB = [
  { unit: "🏫 学校・教育", items: [
    { en: "subject", ja: "科目" }, { en: "textbook", ja: "教科書" }, { en: "homework", ja: "宿題" },
    { en: "exam", ja: "試験" }, { en: "grade", ja: "成績/学年" }, { en: "graduate", ja: "卒業する" },
    { en: "professor", ja: "教授" }, { en: "lecture", ja: "講義" }, { en: "absent", ja: "欠席の" },
    { en: "prepare", ja: "準備する" }, { en: "improve", ja: "上達させる" }, { en: "explain", ja: "説明する" },
    { en: "understand", ja: "理解する" }, { en: "knowledge", ja: "知識" }, { en: "difficult", ja: "難しい" },
    { en: "several", ja: "いくつかの" },
  ] },
  { unit: "💼 仕事・職業", items: [
    { en: "company", ja: "会社" }, { en: "office", ja: "職場/事務所" }, { en: "meeting", ja: "会議" },
    { en: "customer", ja: "客" }, { en: "salary", ja: "給料" }, { en: "employee", ja: "従業員" },
    { en: "manager", ja: "管理者" }, { en: "interview", ja: "面接" }, { en: "experience", ja: "経験" },
    { en: "skill", ja: "技能" }, { en: "colleague", ja: "同僚" }, { en: "career", ja: "経歴/職業" },
    { en: "busy", ja: "忙しい" }, { en: "hire", ja: "雇う" }, { en: "task", ja: "作業/仕事" },
    { en: "deadline", ja: "締め切り" },
  ] },
  { unit: "🛒 買い物・お金・食事", items: [
    { en: "expensive", ja: "高価な" }, { en: "cheap", ja: "安い" }, { en: "discount", ja: "割引" },
    { en: "cash", ja: "現金" }, { en: "receipt", ja: "レシート" }, { en: "refund", ja: "返金" },
    { en: "customer", ja: "客" }, { en: "order", ja: "注文する" }, { en: "reserve", ja: "予約する" },
    { en: "recommend", ja: "勧める" }, { en: "menu", ja: "メニュー" }, { en: "dessert", ja: "デザート" },
    { en: "afford", ja: "〜する余裕がある" }, { en: "cost", ja: "費用がかかる" }, { en: "sale", ja: "特売" },
    { en: "bill", ja: "請求書/勘定" },
  ] },
  { unit: "✈️ 旅行・交通", items: [
    { en: "trip", ja: "旅行" }, { en: "flight", ja: "便/飛行" }, { en: "airport", ja: "空港" },
    { en: "passenger", ja: "乗客" }, { en: "reservation", ja: "予約" }, { en: "schedule", ja: "予定/時刻表" },
    { en: "delay", ja: "遅延" }, { en: "arrive", ja: "到着する" }, { en: "depart", ja: "出発する" },
    { en: "luggage", ja: "手荷物" }, { en: "abroad", ja: "海外へ" }, { en: "tourist", ja: "観光客" },
    { en: "sightseeing", ja: "観光" }, { en: "distance", ja: "距離" }, { en: "route", ja: "経路" },
    { en: "traffic", ja: "交通(量)" },
  ] },
  { unit: "🩺 健康・体・環境", items: [
    { en: "health", ja: "健康" }, { en: "medicine", ja: "薬" }, { en: "patient", ja: "患者" },
    { en: "exercise", ja: "運動する" }, { en: "disease", ja: "病気" }, { en: "recover", ja: "回復する" },
    { en: "environment", ja: "環境" }, { en: "pollution", ja: "汚染" }, { en: "recycle", ja: "再利用する" },
    { en: "reduce", ja: "減らす" }, { en: "energy", ja: "エネルギー" }, { en: "protect", ja: "守る" },
    { en: "damage", ja: "損害/傷つける" }, { en: "nature", ja: "自然" }, { en: "climate", ja: "気候" },
    { en: "waste", ja: "無駄/ごみ" },
  ] },
  { unit: "💻 テクノロジー・性格・感情", items: [
    { en: "device", ja: "機器" }, { en: "invent", ja: "発明する" }, { en: "increase", ja: "増える" },
    { en: "convenient", ja: "便利な" }, { en: "communicate", ja: "意思疎通する" }, { en: "information", ja: "情報" },
    { en: "digital", ja: "デジタルの" }, { en: "polite", ja: "礼儀正しい" }, { en: "shy", ja: "内気な" },
    { en: "confident", ja: "自信のある" }, { en: "nervous", ja: "緊張した" }, { en: "honest", ja: "正直な" },
    { en: "curious", ja: "好奇心の強い" }, { en: "proud", ja: "誇りに思う" }, { en: "worried", ja: "心配な" },
    { en: "surprised", ja: "驚いた" }, { en: "prefer", ja: "〜のほうを好む" },
  ] },
  { unit: "🔑 熟語・句動詞（頻出）", items: [
    { en: "look forward to", ja: "〜を楽しみに待つ" }, { en: "give up", ja: "あきらめる" }, { en: "put off", ja: "延期する" },
    { en: "get along with", ja: "〜と仲良くやる" }, { en: "take care of", ja: "〜の世話をする" }, { en: "look for", ja: "〜を探す" },
    { en: "find out", ja: "見つけ出す/分かる" }, { en: "turn down", ja: "断る/音量を下げる" }, { en: "come up with", ja: "思いつく" },
    { en: "be interested in", ja: "〜に興味がある" }, { en: "be afraid of", ja: "〜を恐れる" }, { en: "be proud of", ja: "〜を誇りに思う" },
    { en: "in order to", ja: "〜するために" }, { en: "as soon as", ja: "〜するとすぐに" }, { en: "instead of", ja: "〜の代わりに" },
    { en: "because of", ja: "〜のために(原因)" },
  ] },
];

const EIKEN_GRAMMAR = [
  {
    id: "g1", title: "現在完了進行形", theme: "have been + 〜ing（ずっと〜し続けている）",
    intro: "過去から今までずっと続いている動作を強調するのが現在完了進行形です。have/has been + 動詞ing。",
    points: [
      { h: "作り方", p: "have/has been + 動詞ing。", eg: "I have been studying for two hours." },
      { h: "for / since", p: "for + 期間、since + 起点。", eg: "She has been waiting since noon." },
      { h: "現在完了との違い", p: "完了進行形は「動作の継続」を強調する。", eg: "It has been raining all day." },
    ],
    questions: [
      { type: "choice", q: "I ___ English for three years.", options: ["have been studying", "am studying", "study", "was studying"], answer: 0, explain: "継続を強調する現在完了進行形。" },
      { type: "choice", q: "She has been waiting ___ 2 o'clock.", options: ["for", "since", "in", "at"], answer: 1, explain: "起点は since。" },
      { type: "fill", q: "It has been ___ all day.（rain を ing形に）", answer: ["raining"], explain: "have been + raining。" },
      { type: "translate", q: "「私は1時間ずっと待っています。」を英語にしましょう。", keywords: ["i", "have", "been", "waiting", "for", "an", "hour"], model: "I have been waiting for an hour.", explain: "have been waiting for 〜。" },
    ],
  },
  {
    id: "g2", title: "過去完了", theme: "had + 過去分詞（〜してしまっていた）",
    intro: "過去のある時点より前に完了していたことを表すのが過去完了。had + 過去分詞です。",
    points: [
      { h: "作り方", p: "had + 過去分詞（主語による変化なし）。", eg: "The train had already left when I arrived." },
      { h: "大過去", p: "過去より前の出来事を表す。", eg: "I lost the book that I had bought." },
      { h: "経験・完了", p: "before / already / never と使う。", eg: "I had never seen snow before I went there." },
    ],
    questions: [
      { type: "choice", q: "When I got there, the movie ___ started.", options: ["has already", "had already", "was already", "already"], answer: 1, explain: "過去より前は had + 過去分詞。" },
      { type: "choice", q: "I lost the pen that I ___ bought.", options: ["have", "had", "was", "did"], answer: 1, explain: "大過去は had + 過去分詞。" },
      { type: "order", q: "「私が着いたとき電車は出発してしまっていた」を並べ替えましょう。", answer: ["The", "train", "had", "left", "when", "I", "arrived"], explain: "had + 過去分詞。" },
      { type: "fill", q: "She had never ___ sushi before.（eat の過去分詞）", answer: ["eaten"], explain: "had + eaten。" },
    ],
  },
  {
    id: "g3", title: "分詞の形容詞用法", theme: "現在分詞・過去分詞が名詞を修飾",
    intro: "動詞のing形（〜している）や過去分詞（〜された）が名詞を説明します。",
    points: [
      { h: "現在分詞（〜している）", p: "能動・進行の意味で名詞を修飾。", eg: "the sleeping baby / the boy running there" },
      { h: "過去分詞（〜された）", p: "受け身・完了の意味で名詞を修飾。", eg: "a broken window / a used car" },
      { h: "後ろから修飾", p: "語句がつくと名詞のうしろに置く。", eg: "the girl standing by the door" },
    ],
    questions: [
      { type: "choice", q: "Look at the ___ baby.（眠っている）", options: ["sleep", "sleeping", "slept", "to sleep"], answer: 1, explain: "「〜している」は現在分詞 sleeping。" },
      { type: "choice", q: "This is a ___ window.（壊された）", options: ["break", "breaking", "broken", "broke"], answer: 2, explain: "「〜された」は過去分詞 broken。" },
      { type: "choice", q: "The boy ___ over there is my brother.", options: ["stand", "stood", "standing", "stands"], answer: 2, explain: "後ろから修飾する現在分詞 standing。" },
      { type: "fill", q: "I want a car ___ in Japan.（make の過去分詞・作られた）", answer: ["made"], explain: "a car made in Japan。" },
    ],
  },
  {
    id: "g4", title: "間接疑問文", theme: "疑問詞 + 主語 + 動詞（語順に注意）",
    intro: "疑問文が文の一部になると、語順が「疑問詞＋主語＋動詞」になります。",
    points: [
      { h: "基本", p: "I know + where he lives（× where does he live）。", eg: "Do you know where the station is?" },
      { h: "yes/no疑問文", p: "if / whether を使う。", eg: "I don't know if he is coming." },
      { h: "疑問詞のまま", p: "who / what / when / why などをそのまま。", eg: "Tell me what you want." },
    ],
    questions: [
      { type: "choice", q: "Do you know where ___?", options: ["is the station", "the station is", "does the station", "the station does"], answer: 1, explain: "間接疑問は 主語+動詞の語順。" },
      { type: "choice", q: "I don't know ___ he will come.", options: ["if", "what", "who", "which"], answer: 0, explain: "yes/noは if / whether。" },
      { type: "order", q: "「あなたが何をしたいのか教えて」を並べ替えましょう。", answer: ["Tell", "me", "what", "you", "want"], explain: "what + 主語 + 動詞。" },
      { type: "fill", q: "Could you tell me where the bank ___?（be動詞）", answer: ["is"], explain: "where the bank is。" },
    ],
  },
  {
    id: "g5", title: "不定詞の応用", theme: "too〜to / enough to / want 人 to / It is 〜 to",
    intro: "不定詞を使った準2級頻出の重要表現を学びます。",
    points: [
      { h: "too 〜 to …", p: "「…するには〜すぎる」。", eg: "It's too hot to walk." },
      { h: "〜 enough to …", p: "「…するのに十分〜」。", eg: "He is old enough to drive." },
      { h: "want / tell / ask 人 to", p: "「人に〜してほしい/言う/頼む」。", eg: "I want you to help me." },
      { h: "It is 〜 (for 人) to …", p: "形式主語。", eg: "It is important to sleep well." },
    ],
    questions: [
      { type: "choice", q: "It's ___ cold ___ swim.", options: ["too / to", "so / to", "enough / to", "too / for"], answer: 0, explain: "too 〜 to …（…するには〜すぎる）。" },
      { type: "choice", q: "I want you ___ come to the party.", options: ["to", "for", "that", "come"], answer: 0, explain: "want 人 to + 原形。" },
      { type: "choice", q: "He is tall ___ to reach it.", options: ["too", "enough", "so", "very"], answer: 1, explain: "形容詞 + enough to …。" },
      { type: "translate", q: "「よく眠ることは大切です。」を英語にしましょう。", keywords: ["it", "is", "important", "to", "sleep", "well"], model: "It is important to sleep well.", explain: "It is 〜 to …。" },
    ],
  },
  {
    id: "g6", title: "動名詞の慣用表現", theme: "look forward to 〜ing など",
    intro: "動名詞（〜ing）を使う定型表現は準2級で頻出です。",
    points: [
      { h: "前置詞 + 〜ing", p: "be good at / be interested in / before / after + 〜ing。", eg: "I'm interested in learning French." },
      { h: "look forward to 〜ing", p: "to のあとが動名詞になる注意表現。", eg: "I'm looking forward to seeing you." },
      { h: "動詞 + 〜ing", p: "enjoy / finish / stop / mind + 〜ing。", eg: "Would you mind opening the window?" },
    ],
    questions: [
      { type: "choice", q: "I'm looking forward ___ you.", options: ["to see", "to seeing", "see", "seeing"], answer: 1, explain: "look forward to + 〜ing。" },
      { type: "choice", q: "She is good at ___.", options: ["cook", "to cook", "cooking", "cooks"], answer: 2, explain: "前置詞 at + 動名詞。" },
      { type: "choice", q: "Would you mind ___ the door?", options: ["close", "to close", "closing", "closed"], answer: 2, explain: "mind + 動名詞。" },
      { type: "fill", q: "Thank you for ___ me.（help を動名詞に）", answer: ["helping"], explain: "for + helping。" },
    ],
  },
  {
    id: "g7", title: "比較の応用", theme: "as 〜 as / not as 〜 as / the 比較級",
    intro: "同等比較や差の表し方など、比較の応用表現を学びます。",
    points: [
      { h: "as 〜 as（同じくらい）", p: "as + 原級 + as。", eg: "He is as tall as his father." },
      { h: "not as 〜 as（ほど〜ない）", p: "否定で差を表す。", eg: "Today is not as cold as yesterday." },
      { h: "比較級 + and + 比較級", p: "「だんだん〜」。", eg: "It's getting warmer and warmer." },
    ],
    questions: [
      { type: "choice", q: "This book is as ___ as that one.", options: ["interesting", "more interesting", "most interesting", "interestinger"], answer: 0, explain: "as + 原級 + as。" },
      { type: "choice", q: "Today is not as hot ___ yesterday.", options: ["than", "as", "so", "like"], answer: 1, explain: "not as 〜 as。" },
      { type: "order", q: "「彼は父と同じくらい背が高い」を並べ替えましょう。", answer: ["He", "is", "as", "tall", "as", "his", "father"], explain: "as tall as。" },
      { type: "fill", q: "It's getting colder and ___.（比較級のくり返し）", answer: ["colder"], explain: "比較級 and 比較級。" },
    ],
  },
  {
    id: "g8", title: "接続詞・仮定法の応用", theme: "although / so that / if I were",
    intro: "文をつなぐ応用接続詞と、現実と違う仮定を表す仮定法を学びます。",
    points: [
      { h: "although / though（〜だけれど）", p: "譲歩を表す。", eg: "Although it was raining, we went out." },
      { h: "so that 〜 can（〜できるように）", p: "目的を表す。", eg: "I got up early so that I could catch the train." },
      { h: "仮定法過去", p: "If + 主語 + 過去形, 主語 + would/could。", eg: "If I were you, I would study harder." },
    ],
    questions: [
      { type: "choice", q: "___ it was cold, she went swimming.", options: ["Although", "Because", "So", "If"], answer: 0, explain: "譲歩の Although。" },
      { type: "choice", q: "If I ___ rich, I would travel the world.", options: ["am", "was", "were", "be"], answer: 2, explain: "仮定法過去は were。" },
      { type: "choice", q: "I study hard ___ I can pass the exam.", options: ["so that", "because of", "although", "such as"], answer: 0, explain: "目的の so that 〜 can。" },
      { type: "translate", q: "「もし私があなたなら、もっと練習します。」を英語にしましょう。", keywords: ["if", "i", "were", "you", "i", "would", "practice", "more"], model: "If I were you, I would practice more.", explain: "If I were you, I would 〜。" },
    ],
  },
];

/* 大問1：短文の語句空所補充（語彙・熟語・文法の4択） */
const EIKEN_PART1 = [
  { type: "choice", q: "A: You look tired. B: Yes, I've been ___ hard all week.", options: ["working", "worked", "work", "to work"], answer: 0, explain: "have been + working（継続）。" },
  { type: "choice", q: "The concert was ___ because of the storm.", options: ["put off", "put on", "put up", "put out"], answer: 0, explain: "put off＝延期する。" },
  { type: "choice", q: "I'm looking forward ___ from you.", options: ["to hear", "to hearing", "hearing", "hear"], answer: 1, explain: "look forward to + 〜ing。" },
  { type: "choice", q: "She is old ___ to travel alone.", options: ["too", "enough", "so", "very"], answer: 1, explain: "old enough to 〜。" },
  { type: "choice", q: "This computer is very ___; I use it every day.", options: ["convenient", "absent", "honest", "curious"], answer: 0, explain: "便利な＝convenient。" },
  { type: "choice", q: "Could you ___ me how to get to the station?", options: ["say", "talk", "tell", "speak"], answer: 2, explain: "tell 人 how to 〜。" },
  { type: "choice", q: "He can't ___ to buy a new car right now.", options: ["afford", "spend", "cost", "pay"], answer: 0, explain: "afford to 〜＝〜する余裕がある。" },
  { type: "choice", q: "The book ___ by many students is very useful.", options: ["use", "using", "used", "uses"], answer: 2, explain: "過去分詞 used が後ろから修飾。" },
  { type: "choice", q: "Do you know ___ the meeting starts?", options: ["what time does", "what time", "does what time", "when does"], answer: 1, explain: "間接疑問は 主語+動詞。what time the meeting starts。" },
  { type: "choice", q: "I got up early ___ I could catch the first train.", options: ["because of", "so that", "although", "instead"], answer: 1, explain: "目的の so that 〜 can/could。" },
  { type: "choice", q: "We had to cancel the trip ___ the bad weather.", options: ["because", "because of", "so", "although"], answer: 1, explain: "because of + 名詞。" },
  { type: "choice", q: "My sister is interested ___ studying abroad.", options: ["in", "at", "on", "to"], answer: 0, explain: "be interested in 〜。" },
  { type: "choice", q: "The doctor told him ___ more vegetables.", options: ["eat", "to eat", "eating", "ate"], answer: 1, explain: "tell 人 to + 原形。" },
  { type: "choice", q: "If I ___ you, I would apologize.", options: ["am", "were", "will be", "be"], answer: 1, explain: "仮定法過去 were。" },
  { type: "choice", q: "Please ___ your seatbelt during the flight.", options: ["put on", "wear on", "take off", "get on"], answer: 0, explain: "身につける＝put on。" },
  { type: "choice", q: "It has been ___ since this morning.", options: ["snow", "snowed", "snowing", "to snow"], answer: 2, explain: "have been + snowing。" },
];

/* 大問2：会話文の空所補充（自然な応答を4択） */
const EIKEN_PART2 = [
  { type: "choice", q: "A: Would you like something to drink? B: ___", options: ["Yes, water, please.", "You're welcome.", "It's over there.", "Not at all."], answer: 0, explain: "飲み物の申し出への自然な返答。" },
  { type: "choice", q: "A: I'm sorry I'm late. B: ___ The meeting hasn't started yet.", options: ["That's too bad.", "No problem.", "Congratulations.", "Here you are."], answer: 1, explain: "遅刻の謝罪を許す No problem.。" },
  { type: "choice", q: "A: How was your weekend? B: ___", options: ["It was great. I went hiking.", "You're right.", "I'm fine, thanks.", "See you later."], answer: 0, explain: "週末の様子を答える。" },
  { type: "choice", q: "A: Could you help me carry these boxes? B: ___", options: ["Sure, no problem.", "That's a good idea.", "I'm sorry to hear that.", "Yes, I have."], answer: 0, explain: "依頼を快諾する。" },
  { type: "choice", q: "A: I failed the test. B: ___ You can try again.", options: ["That's too bad.", "Congratulations!", "Here you are.", "You're welcome."], answer: 0, explain: "残念な知らせへの共感。" },
  { type: "choice", q: "A: Do you mind if I open the window? B: ___", options: ["No, go ahead.", "Yes, please open it.", "That's all.", "Never mind."], answer: 0, explain: "Do you mind〜?にNoで許可（どうぞ）。" },
  { type: "choice", q: "A: Thank you for inviting me. B: ___", options: ["My pleasure.", "That's too bad.", "I'm afraid not.", "Not yet."], answer: 0, explain: "感謝への返答 My pleasure.。" },
  { type: "choice", q: "A: What do you want to be in the future? B: ___", options: ["I want to be a nurse.", "I have been there.", "It's on the desk.", "You're right."], answer: 0, explain: "将来の夢を答える。" },
];

const EIKEN_READING = [
  {
    title: "掲示：図書館のお知らせ", intro: "図書館の掲示を読んで設問に答えましょう。",
    passage: "City Library — New Opening Hours\n\nStarting April 1, the library will open at 9:00 a.m. and close at 8:00 p.m. on weekdays. On weekends, it will be open from 10:00 a.m. to 6:00 p.m. The library will be closed every Monday for cleaning. Students can borrow up to ten books for two weeks. If you return books late, you cannot borrow new ones for one week.",
    questions: [
      { type: "choice", q: "What time does the library close on weekdays?", options: ["6:00 p.m.", "8:00 p.m.", "9:00 a.m.", "10:00 a.m."], answer: 1, explain: "平日は8:00 p.m.に閉館。" },
      { type: "choice", q: "When is the library closed?", options: ["Every Sunday", "Every Monday", "Every weekend", "Every Friday"], answer: 1, explain: "毎週月曜は清掃で休館。" },
      { type: "choice", q: "How many books can a student borrow?", options: ["Up to five", "Up to ten", "Up to twenty", "As many as they want"], answer: 1, explain: "最大10冊。" },
      { type: "choice", q: "What happens if you return books late?", options: ["You pay money.", "You cannot borrow new books for a week.", "You must clean the library.", "Nothing happens."], answer: 1, explain: "1週間新しく借りられない。" },
    ],
  },
  {
    title: "Eメール：週末の予定", intro: "友達どうしのメールを読んで設問に答えましょう。",
    passage: "Hi Mika,\n\nAre you free this Saturday? A new science museum opened near the station last week, and I really want to visit it. They have a special show about space at 2:00 p.m. The ticket is 1,000 yen, but students get a 20% discount. After the museum, how about having dinner at the Italian restaurant nearby? Let me know if you can come.\n\nYour friend,\nEmma",
    questions: [
      { type: "choice", q: "Why does Emma write this email?", options: ["To ask Mika to visit a museum with her", "To sell tickets", "To cancel a plan", "To borrow money"], answer: 0, explain: "美術館(科学館)に一緒に行こうと誘っている。" },
      { type: "choice", q: "What time does the space show start?", options: ["1:00 p.m.", "2:00 p.m.", "6:00 p.m.", "20:00"], answer: 1, explain: "宇宙のショーは午後2時。" },
      { type: "choice", q: "How much is a student ticket?", options: ["1,000 yen", "1,200 yen", "800 yen", "200 yen"], answer: 2, explain: "1000円の20%引き＝800円。" },
      { type: "choice", q: "What does Emma want to do after the museum?", options: ["Go home", "Have dinner at an Italian restaurant", "Watch a movie", "Study science"], answer: 1, explain: "近くのイタリアンで夕食。" },
    ],
  },
];

/* リスニング（音声を聞いて意味/内容を選ぶ。audio＝読み上げる英文） */
const EIKEN_LISTENING = [
  { type: "listen", audio: "Excuse me, could you tell me the way to the post office?", q: "話し手は何をしていますか？", options: ["道をたずねている", "買い物をしている", "電話をかけている", "食事を注文している"], answer: 0, explain: "郵便局への道をたずねている。" },
  { type: "listen", audio: "I'm sorry, but the train has been delayed by thirty minutes.", q: "何が起きましたか？", options: ["電車が30分遅れている", "電車が早く着いた", "電車が満員だ", "電車が止まった"], answer: 0, explain: "30分の遅延。" },
  { type: "listen", audio: "Would you like to join us for lunch tomorrow?", q: "話し手は何をしていますか？", options: ["昼食に誘っている", "道を教えている", "謝っている", "注文している"], answer: 0, explain: "明日のランチに誘っている。" },
  { type: "listen", audio: "The museum is open from nine to five, but it's closed on Mondays.", q: "美術館が閉まっているのはいつ？", options: ["日曜日", "月曜日", "毎日9時前", "週末"], answer: 1, explain: "月曜休館。" },
  { type: "listen", audio: "I've been studying English because I want to work abroad someday.", q: "なぜ英語を勉強していますか？", options: ["海外で働きたいから", "試験に落ちたから", "友達に言われたから", "旅行のため"], answer: 0, explain: "いつか海外で働きたいから。" },
  { type: "listen", audio: "Could you turn down the music? I'm trying to sleep.", q: "話し手は相手に何をしてほしい？", options: ["音楽の音量を下げる", "音楽をかける", "電気をつける", "窓を開ける"], answer: 0, explain: "turn down＝音量を下げる。" },
  { type: "listen", audio: "The restaurant was so crowded that we had to wait for an hour.", q: "彼らはなぜ待ちましたか？", options: ["レストランが混んでいたから", "道に迷ったから", "遅刻したから", "予約したから"], answer: 0, explain: "混雑のため1時間待った。" },
  { type: "listen", audio: "Don't forget to bring your umbrella. It's going to rain this afternoon.", q: "午後の天気は？", options: ["雨", "晴れ", "雪", "くもりのち晴れ"], answer: 0, explain: "午後は雨の予報。" },
  { type: "listen", audio: "I'd like to return this shirt because it's too small.", q: "客は何をしたい？", options: ["シャツを返品したい", "シャツを買いたい", "色を変えたい", "値引きしたい"], answer: 0, explain: "小さすぎて返品したい。" },
  { type: "listen", audio: "She has lived in Japan for ten years, so she speaks Japanese very well.", q: "彼女について正しいのは？", options: ["日本に10年住んでいる", "日本語が話せない", "日本に来たばかり", "英語しか話さない"], answer: 0, explain: "10年住んでいて日本語が上手。" },
];

const EIKEN_WRITING = {
  opinion: {
    intro: "QUESTION に対して自分の意見を書きます。準2級は「意見＋理由2つ」で50語程度が目安です。",
    structure: [
      "① 意見（I think that … / In my opinion, …）",
      "② 理由は2つ（I have two reasons. / First, …）",
      "③ 2つ目（Second, …）＋具体例（For example, …）",
      "④ まとめ（That is why I think …）",
    ],
    phrases: [
      { en: "I think that ~", ja: "私は〜だと思います" },
      { en: "I have two reasons.", ja: "理由は2つあります" },
      { en: "First, ... / Second, ...", ja: "第一に…／第二に…" },
      { en: "For example, ...", ja: "例えば…" },
      { en: "That is why I think ~", ja: "だから〜だと思います" },
    ],
    topics: [
      { prompt: "Do you think students should study English every day?", model: "I think that students should study English every day. I have two reasons. First, studying a little every day helps them remember words better. Second, they can improve their listening by practicing daily. For example, watching a short English video every morning is very useful. That is why I think students should study English every day." },
      { prompt: "Which do you like better, reading books or watching movies?", model: "I like reading books better than watching movies. I have two reasons. First, books let me use my imagination freely. Second, I can read them anywhere, even on the train. For example, I always read a book during my trip. That is why I prefer reading books." },
      { prompt: "Do you think it is good for children to have their own smartphones?", model: "I think it is good for children to have their own smartphones. I have two reasons. First, they can call their parents when they are in trouble. Second, they can use it to study, for example by using learning apps. That is why I think children should have smartphones." },
    ],
  },
  email: {
    intro: "友達などからのメールに返信します。相手の質問に答え、自分からも質問を返すのがポイントです。",
    structure: [
      "① 書き出し（Hi ~, / Thank you for your email.）",
      "② 相手の質問に答える（2つの下線部の質問に必ず答える）",
      "③ 自分から一言・質問（By the way, … / How about you?）",
      "④ 結び（Your friend, / Take care,）",
    ],
    phrases: [
      { en: "Thank you for your email.", ja: "メールありがとう" },
      { en: "To answer your question, ~", ja: "質問に答えると、〜" },
      { en: "By the way, ~", ja: "ところで、〜" },
      { en: "I'm looking forward to ~", ja: "〜を楽しみにしています" },
      { en: "Please write back soon.", ja: "また返事を書いてね" },
    ],
    samples: [
      { situation: "友達が「新しい趣味を始めた。どんな趣味？なぜ始めた？」と聞いてきた。", model: "Hi Sam,\n\nThank you for your email! To answer your questions, my new hobby is playing the guitar. I started it because my brother plays very well, and it looked fun. I practice every evening. By the way, do you have any hobbies? Please write back soon.\n\nYour friend,\nKen" },
    ],
  },
};

const EIKEN_INTERVIEW = [
  {
    topic: "オンライン学習 (Online Learning)",
    passage: "Today, many people study on the Internet. Online lessons are useful because students can learn at home. Some students also enjoy watching videos to study, and they can stop and repeat the videos when they want.",
    passageJa: "今日、多くの人がインターネットで学んでいます。オンラインの授業は家で学べるので便利です。動画を見て学ぶ生徒もいて、好きなときに止めたり繰り返したりできます。",
    illustration: "イラスト：教室で、ある女性が本を読んでおり、2人の男性が机を運んでいます。",
    questions: [
      { no: 1, kind: "音読", q: "パッセージを声に出して読みましょう（20語程度）。", model: "" },
      { no: 2, kind: "パッセージ", q: "Why are online lessons useful?", model: "Because students can learn at home." },
      { no: 3, kind: "イラスト", q: "What is the woman doing? / What are the two men doing?", model: "The woman is reading a book. The two men are carrying a desk." },
      { no: 4, kind: "意見", q: "Do you think studying with videos is a good idea?", model: "Yes. Videos are easy to understand, and I can watch them again when I don't understand." },
      { no: 5, kind: "自分", q: "Do you like studying at home? Please tell me more.", model: "Yes, I do. It is quiet at home, so I can focus well on my homework." },
    ],
  },
  {
    topic: "地元の店 (Local Shops)",
    passage: "Many people like shopping at local shops. Local shops often sell fresh food, and the shop staff are usually kind. Some shops also give useful advice to their customers, so people can choose good products.",
    passageJa: "多くの人が地元の店で買い物をするのを好みます。地元の店は新鮮な食品を売っていることが多く、店員はたいてい親切です。客に役立つ助言をくれる店もあり、良い品を選べます。",
    illustration: "イラスト：店の前で、ある男性が箱を運び、女性が花に水をやっています。",
    questions: [
      { no: 1, kind: "音読", q: "パッセージを声に出して読みましょう。", model: "" },
      { no: 2, kind: "パッセージ", q: "Why do some shops give advice to their customers?", model: "So people can choose good products." },
      { no: 3, kind: "イラスト", q: "What is the man doing? / What is the woman doing?", model: "The man is carrying a box. The woman is watering the flowers." },
      { no: 4, kind: "意見", q: "Do you think local shops are better than large supermarkets?", model: "Yes. Local shops sell fresh food, and the staff are friendly." },
      { no: 5, kind: "自分", q: "Do you often go shopping? Please tell me more.", model: "Yes, I do. I usually go shopping on weekends with my family." },
    ],
  },
];
