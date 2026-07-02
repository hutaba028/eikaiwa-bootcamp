/* =========================================================
   英検準2級 追加コンテンツ（増量分）
   既存の EIKEN_* 配列/オブジェクトに push して拡張する。
   ※ eiken-pre2.js の後、app.js の前に読み込むこと。
   ========================================================= */

/* ---- 語彙：分野を追加 ---- */
EIKEN_VOCAB.push(
  { unit: "🏠 家庭・日常生活", items: [
    { en: "housework", ja: "家事" }, { en: "chore", ja: "雑用" }, { en: "neighbor", ja: "近所の人" },
    { en: "relative", ja: "親戚" }, { en: "garbage", ja: "ごみ" }, { en: "laundry", ja: "洗濯(物)" },
    { en: "furniture", ja: "家具" }, { en: "appliance", ja: "家電" }, { en: "repair", ja: "修理する" },
    { en: "borrow", ja: "借りる" }, { en: "lend", ja: "貸す" }, { en: "share", ja: "共有する" },
    { en: "tidy", ja: "きちんとした" }, { en: "quiet", ja: "静かな" }, { en: "comfortable", ja: "快適な" },
    { en: "daily", ja: "毎日の" },
  ] },
  { unit: "🎨 趣味・スポーツ・娯楽", items: [
    { en: "hobby", ja: "趣味" }, { en: "match", ja: "試合" }, { en: "team", ja: "チーム" },
    { en: "coach", ja: "コーチ" }, { en: "champion", ja: "優勝者" }, { en: "instrument", ja: "楽器" },
    { en: "photography", ja: "写真(撮影)" }, { en: "collect", ja: "集める" }, { en: "practice", ja: "練習する" },
    { en: "win", ja: "勝つ" }, { en: "lose", ja: "負ける" }, { en: "compete", ja: "競争する" },
    { en: "exciting", ja: "わくわくする" }, { en: "amazing", ja: "驚くべき" }, { en: "audience", ja: "観客" },
    { en: "performance", ja: "演技/公演" },
  ] },
  { unit: "🌆 社会・都市・ニュース", items: [
    { en: "society", ja: "社会" }, { en: "government", ja: "政府" }, { en: "population", ja: "人口" },
    { en: "culture", ja: "文化" }, { en: "festival", ja: "祭り" }, { en: "volunteer", ja: "ボランティア" },
    { en: "community", ja: "地域社会" }, { en: "safety", ja: "安全" }, { en: "article", ja: "記事" },
    { en: "report", ja: "報告(する)" }, { en: "event", ja: "行事" }, { en: "public", ja: "公共の" },
    { en: "local", ja: "地元の" }, { en: "foreign", ja: "外国の" }, { en: "modern", ja: "現代の" },
    { en: "traditional", ja: "伝統的な" },
  ] },
  { unit: "🔑 熟語・句動詞②", items: [
    { en: "pick up", ja: "拾う/車で迎える" }, { en: "run out of", ja: "使い果たす" }, { en: "take part in", ja: "〜に参加する" },
    { en: "be based on", ja: "〜に基づく" }, { en: "be similar to", ja: "〜に似ている" }, { en: "be different from", ja: "〜と違う" },
    { en: "on time", ja: "時間どおりに" }, { en: "in fact", ja: "実際は" }, { en: "at least", ja: "少なくとも" },
    { en: "thanks to", ja: "〜のおかげで" }, { en: "according to", ja: "〜によれば" }, { en: "such as", ja: "〜のような" },
    { en: "a variety of", ja: "さまざまな" }, { en: "for example", ja: "例えば" }, { en: "these days", ja: "最近" },
    { en: "more and more", ja: "ますます" },
  ] }
);

/* ---- 文法：ユニットを追加 ---- */
EIKEN_GRAMMAR.push(
  {
    id: "g9", title: "関係副詞", theme: "where / when / why（場所・時・理由を説明）",
    intro: "名詞を「場所・時・理由」の観点でうしろから説明するのが関係副詞です。",
    points: [
      { h: "where（場所）", p: "場所を表す名詞を説明。", eg: "This is the town where I was born." },
      { h: "when（時）", p: "時を表す名詞を説明。", eg: "I remember the day when we met." },
      { h: "why（理由）", p: "the reason why の形で使う。", eg: "That is the reason why he left." },
    ],
    questions: [
      { type: "choice", q: "This is the house ___ I live.", options: ["which", "where", "who", "when"], answer: 1, explain: "場所は where。" },
      { type: "choice", q: "Spring is the season ___ flowers bloom.", options: ["where", "why", "when", "who"], answer: 2, explain: "時は when。" },
      { type: "choice", q: "Tell me the reason ___ you were late.", options: ["why", "which", "where", "how"], answer: 0, explain: "理由は the reason why。" },
      { type: "fill", q: "This is the park ___ we first met.（場所の関係副詞）", answer: ["where"], explain: "the park where 〜。" },
    ],
  },
  {
    id: "g10", title: "使役・知覚動詞", theme: "make/let/have O do、see/hear O do(ing)",
    intro: "「人に〜させる」「〜するのを見る/聞く」を表す動詞は、うしろの動詞が原形になります。",
    points: [
      { h: "使役（〜させる）", p: "make/let/have + O + 動詞の原形。help は to도可。", eg: "My mother makes me clean my room." },
      { h: "知覚（〜するのを）", p: "see/hear/watch + O + 原形（一部始終）/ 〜ing（進行）。", eg: "I saw him enter the room. / I heard her singing." },
      { h: "let（許可）", p: "let + O + 原形。", eg: "Let me help you." },
    ],
    questions: [
      { type: "choice", q: "My parents let me ___ up late on weekends.", options: ["stay", "to stay", "staying", "stayed"], answer: 0, explain: "let + O + 原形。" },
      { type: "choice", q: "I saw him ___ the bus.", options: ["to catch", "catch", "caught", "catches"], answer: 1, explain: "知覚動詞 see + O + 原形。" },
      { type: "choice", q: "The teacher made us ___ the room.", options: ["clean", "to clean", "cleaning", "cleaned"], answer: 0, explain: "make + O + 原形。" },
      { type: "order", q: "「私が手伝いましょう」を並べ替えましょう。", answer: ["Let", "me", "help", "you"], explain: "Let + O + 原形。" },
    ],
  }
);

/* ---- 大問1：語句空所補充（追加34問・合計50問に） ---- */
EIKEN_PART1.push(
  { type: "choice", q: "My father ___ smoking last year.", options: ["put off", "gave up", "looked for", "took part"], answer: 1, explain: "give up＝やめる。" },
  { type: "choice", q: "Please ___ off your shoes at the door.", options: ["put", "take", "get", "turn"], answer: 1, explain: "take off＝脱ぐ。" },
  { type: "choice", q: "Could you ___ down the volume a little?", options: ["take", "put", "turn", "give"], answer: 2, explain: "turn down＝音量を下げる。" },
  { type: "choice", q: "I'm looking ___ to the school trip.", options: ["up", "ahead", "forwards", "forward"], answer: 3, explain: "look forward to 〜。" },
  { type: "choice", q: "She takes good ___ of her little brother.", options: ["look", "care", "part", "place"], answer: 1, explain: "take care of＝世話をする。" },
  { type: "choice", q: "The game was ___ because of the rain.", options: ["put off", "put on", "given up", "looked after"], answer: 0, explain: "put off＝延期する。" },
  { type: "choice", q: "I get ___ well with my classmates.", options: ["on", "along", "off", "up"], answer: 1, explain: "get along with＝仲良くやる。" },
  { type: "choice", q: "He ___ a good idea for the project.", options: ["came up with", "put off", "gave up", "looked for"], answer: 0, explain: "come up with＝思いつく。" },
  { type: "choice", q: "___ order to save money, I walk to school.", options: ["In", "On", "At", "For"], answer: 0, explain: "in order to＝〜するために。" },
  { type: "choice", q: "___ soon as she comes, we will start.", options: ["So", "As", "Too", "Very"], answer: 1, explain: "as soon as＝〜するとすぐに。" },
  { type: "choice", q: "He was absent ___ school yesterday.", options: ["to", "at", "from", "with"], answer: 2, explain: "be absent from＝欠席する。" },
  { type: "choice", q: "This desk is made ___ wood.", options: ["from", "of", "in", "by"], answer: 1, explain: "材料は be made of。" },
  { type: "choice", q: "I'm afraid ___ making mistakes.", options: ["at", "in", "of", "with"], answer: 2, explain: "be afraid of 〜。" },
  { type: "choice", q: "We are proud ___ our hometown.", options: ["at", "in", "of", "with"], answer: 2, explain: "be proud of 〜。" },
  { type: "choice", q: "She is good ___ playing tennis.", options: ["in", "on", "at", "with"], answer: 2, explain: "be good at 〜。" },
  { type: "choice", q: "This shop is famous ___ its bread.", options: ["of", "for", "at", "with"], answer: 1, explain: "be famous for 〜。" },
  { type: "choice", q: "He apologized ___ being late.", options: ["to", "of", "for", "at"], answer: 2, explain: "apologize for 〜。" },
  { type: "choice", q: "Thank you ___ your kind help.", options: ["to", "of", "for", "at"], answer: 2, explain: "thank you for 〜。" },
  { type: "choice", q: "I won't be ___ to come tomorrow.", options: ["able", "possible", "enough", "capable"], answer: 0, explain: "be able to 〜。" },
  { type: "choice", q: "Could you ___ me a favor?", options: ["make", "take", "do", "give"], answer: 2, explain: "do 人 a favor。" },
  { type: "choice", q: "It has been ___ for three days.", options: ["rain", "rained", "raining", "to rain"], answer: 2, explain: "現在完了進行形 have been + raining。" },
  { type: "choice", q: "When we got there, the store had already ___.", options: ["close", "closed", "closing", "closes"], answer: 1, explain: "過去完了 had + 過去分詞。" },
  { type: "choice", q: "Look at that ___ dog over there.", options: ["barked", "barks", "barking", "bark"], answer: 2, explain: "現在分詞 barking が修飾。" },
  { type: "choice", q: "I received a letter ___ in English.", options: ["written", "writing", "wrote", "write"], answer: 0, explain: "過去分詞 written が修飾。" },
  { type: "choice", q: "Do you know where he ___?", options: ["lives", "live", "living", "does live"], answer: 0, explain: "間接疑問は 主語+動詞。" },
  { type: "choice", q: "It's too dark ___ read here.", options: ["for", "to", "that", "of"], answer: 1, explain: "too 〜 to …。" },
  { type: "choice", q: "He is old ___ to drive a car.", options: ["enough", "too", "very", "so"], answer: 0, explain: "形容詞 + enough to …。" },
  { type: "choice", q: "The teacher told us ___ quiet.", options: ["be", "to be", "being", "is"], answer: 1, explain: "tell 人 to + 原形。" },
  { type: "choice", q: "I'd rather walk ___ take the bus.", options: ["than", "then", "to", "that"], answer: 0, explain: "would rather A than B。" },
  { type: "choice", q: "She is as tall ___ her mother.", options: ["than", "as", "so", "like"], answer: 1, explain: "as 〜 as。" },
  { type: "choice", q: "Today isn't as cold ___ yesterday.", options: ["than", "so", "as", "like"], answer: 2, explain: "not as 〜 as。" },
  { type: "choice", q: "If I ___ you, I would accept the offer.", options: ["am", "was", "were", "be"], answer: 2, explain: "仮定法過去 were。" },
  { type: "choice", q: "___ he was tired, he kept working.", options: ["Because", "Although", "So", "If"], answer: 1, explain: "譲歩の Although。" },
  { type: "choice", q: "I saved money so ___ I could travel abroad.", options: ["to", "as", "that", "for"], answer: 2, explain: "so that 〜 can/could。" }
);

/* ---- 大問2：会話文（追加12問・合計20問に） ---- */
EIKEN_PART2.push(
  { type: "choice", q: "A: Can I take a message? B: ___", options: ["It's over there.", "Yes, please tell him I called.", "You're welcome.", "Not at all."], answer: 1, explain: "伝言を頼む自然な応答。" },
  { type: "choice", q: "A: How often do you exercise? B: ___", options: ["It's very fun.", "About three times a week.", "Yes, I do.", "At the gym."], answer: 1, explain: "頻度を答える。" },
  { type: "choice", q: "A: Shall I carry your bag? B: ___", options: ["I'm carrying it.", "You're right.", "Oh, thank you. That's kind of you.", "No problem for you."], answer: 2, explain: "申し出への感謝。" },
  { type: "choice", q: "A: I can't find my keys. B: ___", options: ["Congratulations.", "Did you check your pockets?", "You're welcome.", "Here you are."], answer: 1, explain: "困りごとへの助言。" },
  { type: "choice", q: "A: Would you like some more tea? B: ___", options: ["Yes, I am.", "No, thank you. I'm fine.", "It's delicious you.", "Not at all it."], answer: 1, explain: "勧めを断る自然な言い方。" },
  { type: "choice", q: "A: What's the matter? B: ___", options: ["You're kind.", "It's on Monday.", "I have a headache.", "Nice to meet you."], answer: 2, explain: "体調を答える。" },
  { type: "choice", q: "A: Do you have this shirt in a larger size? B: ___", options: ["Let me check for you.", "You're welcome.", "It's too small me.", "I have been there."], answer: 0, explain: "店員の自然な応答。" },
  { type: "choice", q: "A: Let's meet at six. B: ___", options: ["I'm sorry.", "Sounds good. See you then.", "You have been late.", "It's yours."], answer: 1, explain: "予定に同意する。" },
  { type: "choice", q: "A: Thank you for inviting me. B: ___", options: ["Thanks for coming.", "It's too bad.", "Not yet.", "I have three."], answer: 0, explain: "招待のお礼への返し。" },
  { type: "choice", q: "A: Why don't we go to the beach? B: ___", options: ["I'm afraid so.", "You're welcome.", "That's a great idea!", "It was great."], answer: 2, explain: "提案に賛成。" },
  { type: "choice", q: "A: Excuse me, is this seat taken? B: ___", options: ["No, go ahead.", "Yes, I am.", "It's over there.", "You're right."], answer: 0, explain: "席が空いているか。" },
  { type: "choice", q: "A: I'm going to study abroad next year. B: ___", options: ["Not at all.", "That's wonderful! Good luck.", "I'm sorry to hear that.", "You're welcome."], answer: 1, explain: "良い知らせを祝う。" }
);

/* ---- 長文読解：パッセージを追加（合計6本に） ---- */
EIKEN_READING.push(
  {
    title: "掲示：学園祭のお知らせ", intro: "学校の掲示を読んで設問に答えましょう。",
    passage: "School Festival\n\nOur school festival will be held on Saturday, October 12. It starts at 10:00 a.m. and ends at 4:00 p.m. Each class will have its own event, such as a food stand or a game. There will also be a music concert in the gym at 1:00 p.m. If it rains, the outdoor events will be moved inside. Please tell your family and friends to come!",
    questions: [
      { type: "choice", q: "What time does the festival start?", options: ["9:00 a.m.", "10:00 a.m.", "1:00 p.m.", "4:00 p.m."], answer: 1, explain: "午前10時開始。" },
      { type: "choice", q: "Where will the concert be held?", options: ["In the gym", "Outside", "In the library", "At the station"], answer: 0, explain: "コンサートは体育館。" },
      { type: "choice", q: "What will happen if it rains?", options: ["The festival will be canceled.", "Outdoor events will move inside.", "The concert will stop.", "Nothing will change."], answer: 1, explain: "屋外の催しは屋内へ。" },
      { type: "choice", q: "What does the notice ask students to do?", options: ["Bring money", "Invite family and friends", "Clean the gym", "Wear uniforms"], answer: 1, explain: "家族や友達を誘うよう呼びかけ。" },
    ],
  },
  {
    title: "Eメール：手伝いのお願い", intro: "友達からのメールを読んで設問に答えましょう。",
    passage: "Hi Ken,\n\nI'm planning a birthday party for my sister next Sunday, and I need some help. Could you come to my house at 11:00 a.m. to help me decorate the room? Also, do you know a good place to buy a cake? My sister loves chocolate. After the party, we can play video games. Please let me know if you can come.\n\nSee you,\nTom",
    questions: [
      { type: "choice", q: "Why is Tom writing this email?", options: ["To ask for help with a party", "To sell a cake", "To cancel a party", "To borrow a game"], answer: 0, explain: "パーティーの手伝いを頼んでいる。" },
      { type: "choice", q: "What time does Tom want Ken to come?", options: ["10:00 a.m.", "11:00 a.m.", "1:00 p.m.", "Next Sunday night"], answer: 1, explain: "午前11時に来てほしい。" },
      { type: "choice", q: "What kind of cake does his sister like?", options: ["Cheese", "Strawberry", "Chocolate", "Vanilla"], answer: 2, explain: "チョコが好き。" },
      { type: "choice", q: "What will they do after the party?", options: ["Study", "Play video games", "Go shopping", "Watch a movie"], answer: 1, explain: "パーティーの後はゲーム。" },
    ],
  },
  {
    title: "説明文：ミツバチ (Honeybees)", intro: "説明文を読んで設問に答えましょう。",
    passage: "Honeybees are small insects, but they are very important. They fly from flower to flower to collect nectar, and they make honey from it. While doing this, they also carry pollen, which helps plants make fruits and seeds. Many of the foods we eat depend on bees. However, the number of bees is decreasing because of pollution and the loss of flowers. Scientists are worried about this problem.",
    questions: [
      { type: "choice", q: "What do honeybees make from nectar?", options: ["Sugar", "Honey", "Fruit", "Seeds"], answer: 1, explain: "蜜(nectar)からはちみつを作る。" },
      { type: "choice", q: "Why are bees important for plants?", options: ["They eat harmful insects.", "They carry pollen.", "They give water.", "They make soil."], answer: 1, explain: "花粉を運ぶから。" },
      { type: "choice", q: "Why is the number of bees decreasing?", options: ["Because of pollution and fewer flowers", "Because of too much honey", "Because of cold weather only", "Because people catch them"], answer: 0, explain: "汚染と花の減少。" },
      { type: "choice", q: "How do scientists feel about this?", options: ["Happy", "Worried", "Bored", "Surprised and glad"], answer: 1, explain: "心配している。" },
    ],
  },
  {
    title: "説明文：ある発明 (A Useful Invention)", intro: "説明文を読んで設問に答えましょう。",
    passage: "Many years ago, people had to wash their clothes by hand. It took a lot of time and energy. Then, the washing machine was invented. With this machine, people could wash their clothes much more easily and quickly. This gave people, especially women, more free time. Today, washing machines are found in homes all over the world, and many of them can even dry clothes.",
    questions: [
      { type: "choice", q: "How did people wash clothes long ago?", options: ["By hand", "With machines", "At the river only", "They didn't wash them"], answer: 0, explain: "昔は手洗い。" },
      { type: "choice", q: "What did the washing machine give people?", options: ["More free time", "More money", "More clothes", "More water"], answer: 0, explain: "自由な時間が増えた。" },
      { type: "choice", q: "What can many washing machines do today?", options: ["Cook food", "Dry clothes", "Clean floors", "Make water"], answer: 1, explain: "乾燥もできる。" },
      { type: "choice", q: "What is this passage mainly about?", options: ["A useful invention", "A famous person", "A kind of food", "A sport"], answer: 0, explain: "便利な発明について。" },
    ],
  }
);

/* ---- リスニング：追加（合計20問に） ---- */
EIKEN_LISTENING.push(
  { type: "listen", audio: "May I help you? — Yes, I'm looking for a birthday present for my mother.", q: "客は何を探していますか？", options: ["母への誕生日プレゼント", "自分の服", "食料品", "本"], answer: 0, explain: "母親への誕生日プレゼント。" },
  { type: "listen", audio: "How was the math test? — It was difficult, but I think I did okay.", q: "テストはどうでしたか？", options: ["難しかったがまあできた", "簡単だった", "受けなかった", "遅刻した"], answer: 0, explain: "難しかったがokay。" },
  { type: "listen", audio: "We are sorry, but this train will not stop at Green Station today.", q: "何が伝えられていますか？", options: ["電車がグリーン駅に止まらない", "電車が遅れている", "電車が満員", "駅が閉まる"], answer: 0, explain: "本日Green駅は通過。" },
  { type: "listen", audio: "I'd like to make an appointment to see the doctor tomorrow morning.", q: "話し手は何をしたい？", options: ["明日の朝の診察を予約したい", "薬を買いたい", "会議を開きたい", "旅行を予約したい"], answer: 0, explain: "医者の予約。" },
  { type: "listen", audio: "Could you pass me the salt, please? — Sure, here you are.", q: "この会話はどこで行われている？", options: ["食事の席", "駅", "図書館", "病院"], answer: 0, explain: "塩を取ってもらう＝食事中。" },
  { type: "listen", audio: "The library will close early today at five because of a special event.", q: "図書館について正しいのは？", options: ["今日は5時に早く閉まる", "今日は休館", "24時間開いている", "夜10時まで開く"], answer: 0, explain: "特別行事で5時に早じまい。" },
  { type: "listen", audio: "I forgot my umbrella at home, so I got wet on the way to school.", q: "話し手に何が起きた？", options: ["ぬれてしまった", "傘を買った", "遅刻した", "風邪をひいた"], answer: 0, explain: "傘を忘れてぬれた。" },
  { type: "listen", audio: "Excuse me, does this bus go to the airport? — No, you need to take the number 5 bus.", q: "空港へ行くには？", options: ["5番のバスに乗る", "この同じバスに乗る", "電車に乗る", "歩いて行く"], answer: 0, explain: "5番バスが必要。" },
  { type: "listen", audio: "My brother is going to study abroad in Australia next month.", q: "弟(兄)について正しいのは？", options: ["来月オーストラリアに留学する", "先月帰国した", "海外に行かない", "旅行中だ"], answer: 0, explain: "来月豪州へ留学。" },
  { type: "listen", audio: "Let's finish this report today so we can relax this weekend.", q: "なぜ今日終わらせたい？", options: ["週末にゆっくりするため", "先生に怒られたから", "旅行に行くから", "眠いから"], answer: 0, explain: "週末に休むため。" }
);

/* ---- 二次試験：面接カードを追加（合計5枚に） ---- */
EIKEN_INTERVIEW.push(
  {
    topic: "読書 (Reading Books)",
    passage: "Reading books is a good way to learn new things. Many people read books to relax, and others read to get information. Some libraries hold events to help children enjoy reading, so more children are visiting libraries these days.",
    passageJa: "本を読むことは新しいことを学ぶ良い方法です。多くの人はリラックスのために本を読み、情報を得るために読む人もいます。子どもが読書を楽しめるように行事を開く図書館もあり、最近は図書館を訪れる子どもが増えています。",
    illustration: "イラスト：図書館で、女性が本棚に本を戻し、男の子が机で本を読んでいます。",
    questions: [
      { no: 1, kind: "音読", q: "パッセージを声に出して読みましょう。", model: "" },
      { no: 2, kind: "パッセージ", q: "Why are more children visiting libraries these days?", model: "Because some libraries hold events to help children enjoy reading." },
      { no: 3, kind: "イラスト", q: "What is the woman doing? / What is the boy doing?", model: "The woman is putting a book on the shelf. The boy is reading a book." },
      { no: 4, kind: "意見", q: "Do you think reading books is important?", model: "Yes. Books give us a lot of knowledge, and they also help us relax." },
      { no: 5, kind: "自分", q: "Do you often read books? Please tell me more.", model: "Yes, I do. I usually read stories before I go to bed." },
    ],
  },
  {
    topic: "リサイクル (Recycling)",
    passage: "Recycling is important for the environment. When people recycle paper and plastic, they can save energy and reduce waste. Some cities give special bags for recycling, so it is easy for people to join. In this way, many people are trying to protect nature.",
    passageJa: "リサイクルは環境にとって大切です。紙やプラスチックをリサイクルすると、エネルギーを節約しごみを減らせます。リサイクル用の特別な袋を配る市もあり、人々が参加しやすくなっています。こうして多くの人が自然を守ろうとしています。",
    illustration: "イラスト：公園で、男性がびんをリサイクル箱に入れ、女性がベンチに座って飲み物を飲んでいます。",
    questions: [
      { no: 1, kind: "音読", q: "パッセージを声に出して読みましょう。", model: "" },
      { no: 2, kind: "パッセージ", q: "Why is it easy for people to join recycling in some cities?", model: "Because some cities give special bags for recycling." },
      { no: 3, kind: "イラスト", q: "What is the man doing? / What is the woman doing?", model: "The man is putting a bottle into the recycling box. The woman is drinking a drink." },
      { no: 4, kind: "意見", q: "Do you think people should recycle more?", model: "Yes. Recycling saves energy, and it is good for the environment." },
      { no: 5, kind: "自分", q: "Do you do anything to help the environment? Please tell me more.", model: "Yes. I always bring my own bag when I go shopping." },
    ],
  },
  {
    topic: "ペット (Keeping Pets)",
    passage: "Many families keep pets such as dogs and cats. Pets can make people happy, and taking care of them teaches children to be kind. However, keeping a pet takes time and money, so people should think carefully before they get one.",
    passageJa: "多くの家庭が犬や猫などのペットを飼っています。ペットは人を幸せにし、世話をすることは子どもに思いやりを教えます。しかしペットを飼うには時間とお金がかかるので、飼う前によく考えるべきです。",
    illustration: "イラスト：家の庭で、女の子が犬と遊んでおり、男性が花に水をやっています。",
    questions: [
      { no: 1, kind: "音読", q: "パッセージを声に出して読みましょう。", model: "" },
      { no: 2, kind: "パッセージ", q: "Why should people think carefully before they get a pet?", model: "Because keeping a pet takes time and money." },
      { no: 3, kind: "イラスト", q: "What is the girl doing? / What is the man doing?", model: "The girl is playing with a dog. The man is watering the flowers." },
      { no: 4, kind: "意見", q: "Do you think keeping a pet is good for children?", model: "Yes. Taking care of a pet teaches children to be kind and responsible." },
      { no: 5, kind: "自分", q: "Would you like to have a pet? Please tell me more.", model: "Yes, I would. I want to have a dog because dogs are friendly." },
    ],
  }
);

/* ---- ライティング：トピック・例題を追加 ---- */
EIKEN_WRITING.opinion.topics.push(
  { prompt: "Do you think it is important to have breakfast every day?", model: "I think it is important to have breakfast every day. I have two reasons. First, breakfast gives us energy for the morning. Second, students can study better after eating. For example, I can focus more in class when I eat breakfast. That is why I think breakfast is important." },
  { prompt: "Which do you like better, living in the city or in the countryside?", model: "I like living in the city better. I have two reasons. First, there are many shops and restaurants in the city. Second, it is easy to travel by train or bus. For example, I can go to a big library near my house. That is why I prefer living in the city." },
  { prompt: "Do you think students should join a club at school?", model: "I think students should join a club at school. I have two reasons. First, they can make many friends in a club. Second, they can learn teamwork through club activities. For example, playing on a soccer team teaches us to help each other. That is why I think joining a club is good." },
  { prompt: "Do you think it is good to travel to foreign countries?", model: "I think it is good to travel to foreign countries. I have two reasons. First, we can learn about different cultures. Second, we can improve our language skills. For example, we can practice English when we travel abroad. That is why I think traveling abroad is a good idea." }
);
EIKEN_WRITING.email.samples.push(
  { situation: "友達が「今度の休みに映画に行こう。何の映画が見たい？何時に会う？」と聞いてきた。", model: "Hi Lisa,\n\nThank you for your email! To answer your questions, I really want to see the new action movie. Everyone says it is exciting. How about meeting at the station at one o'clock? Then we can have lunch before the movie. By the way, should I buy the tickets online? Please write back soon.\n\nYour friend,\nKen" },
  { situation: "友達が「新しい町に引っ越した。どんな町？友達はできた？」と聞いてきた。", model: "Hi Alex,\n\nThanks for your email. To answer your questions, my new town is quiet and has a beautiful park. I like it very much. I have already made two friends at my new school, and they are very kind. By the way, when can you come and visit me? I'm looking forward to seeing you.\n\nYour friend,\nMika" }
);

/* =========================================================
   重点追加：得点に直結する最重要語彙・連語と、それを狙う大問1
   （すべて自作の頻出語。準2級で差がつく中級レベルに厳選）
   ========================================================= */
EIKEN_VOCAB.push(
  { unit: "⭐ 最重要動詞", items: [
    { en: "achieve", ja: "達成する" }, { en: "avoid", ja: "避ける" }, { en: "offer", ja: "申し出る/提供する" },
    { en: "decide", ja: "決める" }, { en: "expect", ja: "予期する/期待する" }, { en: "receive", ja: "受け取る" },
    { en: "realize", ja: "気づく/実現する" }, { en: "suggest", ja: "提案する" }, { en: "allow", ja: "許す" },
    { en: "provide", ja: "供給する" }, { en: "produce", ja: "生産する" }, { en: "discover", ja: "発見する" },
    { en: "describe", ja: "描写する/説明する" }, { en: "notice", ja: "気づく" }, { en: "contain", ja: "含む" },
    { en: "continue", ja: "続ける" }, { en: "mention", ja: "言及する" }, { en: "complete", ja: "完成させる" },
  ] },
  { unit: "⭐ 最重要 形容詞・副詞", items: [
    { en: "similar", ja: "似ている" }, { en: "common", ja: "共通の/よくある" }, { en: "certain", ja: "確かな/ある特定の" },
    { en: "various", ja: "さまざまな" }, { en: "special", ja: "特別な" }, { en: "particular", ja: "特定の" },
    { en: "recent", ja: "最近の" }, { en: "actually", ja: "実際は" }, { en: "especially", ja: "特に" },
    { en: "probably", ja: "おそらく" }, { en: "finally", ja: "ついに/最後に" }, { en: "hardly", ja: "ほとんど〜ない" },
    { en: "immediately", ja: "すぐに" }, { en: "exactly", ja: "正確に" }, { en: "quite", ja: "かなり" },
    { en: "nearly", ja: "ほぼ" }, { en: "whole", ja: "全体の" }, { en: "suddenly", ja: "突然" },
  ] },
  { unit: "⭐ 最重要 名詞", items: [
    { en: "chance", ja: "機会/見込み" }, { en: "reason", ja: "理由" }, { en: "result", ja: "結果" },
    { en: "situation", ja: "状況" }, { en: "condition", ja: "状態/条件" }, { en: "choice", ja: "選択" },
    { en: "effort", ja: "努力" }, { en: "opportunity", ja: "機会" }, { en: "activity", ja: "活動" },
    { en: "relationship", ja: "関係" }, { en: "benefit", ja: "利益/恩恵" }, { en: "purpose", ja: "目的" },
    { en: "method", ja: "方法" }, { en: "amount", ja: "量" }, { en: "quality", ja: "質" },
    { en: "average", ja: "平均" }, { en: "goal", ja: "目標" }, { en: "matter", ja: "事柄/問題" },
  ] },
  { unit: "🔑 最重要 連語・熟語③", items: [
    { en: "be likely to", ja: "〜しそうだ" }, { en: "be willing to", ja: "喜んで〜する" }, { en: "be supposed to", ja: "〜することになっている" },
    { en: "be used to ~ing", ja: "〜に慣れている" }, { en: "would rather", ja: "むしろ〜したい" }, { en: "had better", ja: "〜したほうがよい" },
    { en: "no longer", ja: "もはや〜ない" }, { en: "as well as", ja: "〜だけでなく" }, { en: "rather than", ja: "〜よりむしろ" },
    { en: "as a result", ja: "結果として" }, { en: "in addition", ja: "加えて" }, { en: "on the other hand", ja: "一方で" },
    { en: "at first", ja: "最初は" }, { en: "in the end", ja: "最終的に" }, { en: "make sure", ja: "確かめる" },
    { en: "keep in touch", ja: "連絡を取り合う" },
  ] }
);

EIKEN_PART1.push(
  { type: "choice", q: "She worked very hard to ___ her goal.", options: ["avoid", "achieve", "offer", "receive"], answer: 1, explain: "achieve a goal＝目標を達成する。" },
  { type: "choice", q: "You should ___ eating too much sugar.", options: ["avoid", "achieve", "offer", "allow"], answer: 0, explain: "avoid + 動名詞＝〜を避ける。" },
  { type: "choice", q: "The hotel will ___ free breakfast to guests.", options: ["provide", "receive", "avoid", "decide"], answer: 0, explain: "provide A to B＝提供する。" },
  { type: "choice", q: "I didn't ___ that you were behind me.", options: ["offer", "avoid", "realize", "provide"], answer: 2, explain: "realize＝気づく。" },
  { type: "choice", q: "Could you ___ what the man looked like?", options: ["avoid", "describe", "offer", "allow"], answer: 1, explain: "describe＝描写する。" },
  { type: "choice", q: "My teacher ___ that I join the speech contest.", options: ["avoided", "offered", "suggested", "received"], answer: 2, explain: "suggest that 〜＝提案する。" },
  { type: "choice", q: "This drink ___ a lot of vitamin C.", options: ["offers", "avoids", "decides", "contains"], answer: 3, explain: "contain＝含む。" },
  { type: "choice", q: "There is a good ___ that it will snow tonight.", options: ["chance", "reason", "result", "effort"], answer: 0, explain: "a good chance＝〜の見込みが高い。" },
  { type: "choice", q: "It rained hard. ___ a result, the game was canceled.", options: ["In", "As", "For", "By"], answer: 1, explain: "as a result＝結果として。" },
  { type: "choice", q: "She made a lot of ___ to improve her English.", options: ["chance", "result", "effort", "reason"], answer: 2, explain: "make an effort＝努力する。" },
  { type: "choice", q: "My idea is ___ to yours.", options: ["common", "certain", "special", "similar"], answer: 3, explain: "be similar to＝〜に似ている。" },
  { type: "choice", q: "Making this mistake is very ___ among beginners.", options: ["common", "similar", "certain", "recent"], answer: 0, explain: "common＝よくある。" },
  { type: "choice", q: "We are ___ to wear a uniform at this school.", options: ["supposed", "likely", "willing", "afraid"], answer: 0, explain: "be supposed to＝〜することになっている。" },
  { type: "choice", q: "It is ___ to rain this afternoon, so take an umbrella.", options: ["likely", "willing", "supposed", "afraid"], answer: 0, explain: "be likely to＝〜しそうだ。" },
  { type: "choice", q: "I'm ___ to getting up early now, so it's not hard.", options: ["used", "likely", "supposed", "willing"], answer: 0, explain: "be used to ~ing＝〜に慣れている。" }
);
