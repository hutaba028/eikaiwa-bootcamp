/* =========================================================
   英検準2級 追加コンテンツ 第2弾（すべて自作）
   - 大問1（語法・文法）を上乗せ
   - リスニング・長文を追加
   - 二次試験の定番フレーズ集 EIKEN_INTERVIEW_PHRASES を新設
   ※ eiken-pre2.js / eiken-pre2-extra.js の後、app.js の前に読み込む。
   ========================================================= */

/* ---- 大問1：語法・文法を上乗せ ---- */
EIKEN_PART1.push(
  { type: "choice", q: "The girl ___ the piano is my sister.", options: ["play", "playing", "played", "plays"], answer: 1, explain: "現在分詞 playing が後ろから修飾。" },
  { type: "choice", q: "I have a friend ___ father is a famous chef.", options: ["who", "which", "whose", "whom"], answer: 2, explain: "所有を表す関係代名詞 whose。" },
  { type: "choice", q: "This is the cafe ___ we studied last week.", options: ["which", "where", "who", "when"], answer: 1, explain: "場所を説明する関係副詞 where。" },
  { type: "choice", q: "Do you remember the day ___ we first met?", options: ["which", "where", "when", "why"], answer: 2, explain: "時を説明する関係副詞 when。" },
  { type: "choice", q: "He asked me ___ I could help him.", options: ["that", "if", "what", "who"], answer: 1, explain: "yes/no疑問を含む間接疑問は if。" },
  { type: "choice", q: "I don't know ___ to use this machine.", options: ["how", "what", "which", "that"], answer: 0, explain: "how to + 原形＝〜のしかた。" },
  { type: "choice", q: "She is the ___ student in her class.", options: ["tall", "taller", "tallest", "most tall"], answer: 2, explain: "最上級 the tallest。" },
  { type: "choice", q: "This question was ___ than I expected.", options: ["easy", "easier", "easiest", "more easy"], answer: 1, explain: "比較級 easier + than。" },
  { type: "choice", q: "Math is not as interesting ___ science to me.", options: ["as", "than", "so", "more"], answer: 0, explain: "not as 〜 as。" },
  { type: "choice", q: "If it ___ tomorrow, we will stay home.", options: ["rains", "rained", "will rain", "raining"], answer: 0, explain: "if節は未来でも現在形。" },
  { type: "choice", q: "I wish I ___ speak French like you.", options: ["can", "could", "will", "am"], answer: 1, explain: "I wish I could 〜（願望）。" },
  { type: "choice", q: "He kept ___ even though he was tired.", options: ["work", "to work", "working", "worked"], answer: 2, explain: "keep + 動名詞。" },
  { type: "choice", q: "Would you mind ___ the window?", options: ["open", "to open", "opening", "opened"], answer: 2, explain: "mind + 動名詞。" },
  { type: "choice", q: "I'm looking forward to ___ you again soon.", options: ["see", "seeing", "saw", "seen"], answer: 1, explain: "look forward to + 動名詞。" },
  { type: "choice", q: "The children were made ___ their homework first.", options: ["do", "to do", "doing", "done"], answer: 1, explain: "使役 make の受け身は be made to do。" }
);

/* ---- リスニング：追加 ---- */
EIKEN_LISTENING.push(
  { type: "listen", audio: "I have to finish this report by tomorrow, so I can't go out tonight.", q: "なぜ今夜出かけられない？", options: ["明日までにレポートを終える必要がある", "体調が悪い", "お金がない", "天気が悪い"], answer: 0, explain: "明日締め切りのレポート。" },
  { type: "listen", audio: "Attention, shoppers. The store will close in ten minutes.", q: "何のアナウンスですか？", options: ["まもなく閉店", "セール開始", "忘れ物", "停電"], answer: 0, explain: "10分後に閉店。" },
  { type: "listen", audio: "Would you like to leave a message? — Yes, please tell her Tom called.", q: "男性は何をしましたか？", options: ["伝言を残した", "予約した", "注文した", "道を尋ねた"], answer: 0, explain: "Tomから電話があったと伝言。" },
  { type: "listen", audio: "I think we should take the train because the roads are very crowded today.", q: "なぜ電車にするのですか？", options: ["道路が混んでいるから", "電車が安いから", "駅が近いから", "雨だから"], answer: 0, explain: "道路が渋滞。" },
  { type: "listen", audio: "My sister is very good at drawing, so she wants to be an artist.", q: "妹は将来何になりたい？", options: ["画家", "医者", "先生", "歌手"], answer: 0, explain: "絵が得意で画家志望。" },
  { type: "listen", audio: "It will be sunny in the morning, but it will rain in the afternoon.", q: "午後の天気は？", options: ["雨", "晴れ", "雪", "強風"], answer: 0, explain: "午後は雨。" }
);

/* ---- 長文読解：追加 ---- */
EIKEN_READING.push(
  {
    title: "掲示：料理教室のお知らせ", intro: "掲示を読んで設問に答えましょう。",
    passage: "Weekend Cooking Class\n\nDo you want to learn how to cook Japanese food? Join our cooking class every Saturday at 2:00 p.m. in the community center. The class is free, but you need to bring your own apron. Each week, we make a different dish. This week, we will make sushi. Please sign up at the front desk by Friday because we can only take fifteen people.",
    questions: [
      { type: "choice", q: "When is the cooking class held?", options: ["Every Saturday", "Every Sunday", "Every Friday", "Every weekday"], answer: 0, explain: "毎週土曜。" },
      { type: "choice", q: "What do people need to bring?", options: ["Money", "Their own apron", "Food", "A friend"], answer: 1, explain: "エプロンを持参。" },
      { type: "choice", q: "What will they make this week?", options: ["Ramen", "Tempura", "Sushi", "Curry"], answer: 2, explain: "今週は寿司。" },
      { type: "choice", q: "Why should people sign up early?", options: ["The class is expensive.", "Only fifteen people can join.", "It starts in the morning.", "It is very difficult."], answer: 1, explain: "定員15名のため。" },
    ],
  },
  {
    title: "説明文：睡眠の大切さ (Sleep)", intro: "説明文を読んで設問に答えましょう。",
    passage: "Sleep is very important for our health. When we sleep, our body and brain rest and get ready for the next day. Studies show that students who sleep well can remember things better and feel less stressed. However, many young people stay up late using their smartphones. Experts say that we should stop using screens before bed and try to sleep at the same time every night.",
    questions: [
      { type: "choice", q: "What happens when we sleep?", options: ["Our body and brain rest.", "We use more energy.", "We forget things.", "We feel more tired."], answer: 0, explain: "体と脳が休む。" },
      { type: "choice", q: "What can students who sleep well do?", options: ["Remember things better", "Eat more", "Study less", "Grow taller quickly"], answer: 0, explain: "よく眠ると記憶力が良い。" },
      { type: "choice", q: "Why do many young people stay up late?", options: ["They study all night.", "They use their smartphones.", "They exercise.", "They work."], answer: 1, explain: "スマホを使うため。" },
      { type: "choice", q: "What do experts advise?", options: ["Sleep at the same time every night", "Use screens before bed", "Sleep in the afternoon", "Drink coffee at night"], answer: 0, explain: "毎晩同じ時間に寝る。" },
    ],
  }
);

/* ---- 二次試験：定番フレーズ集 ---- */
const EIKEN_INTERVIEW_PHRASES = [
  { category: "🚪 入室・退室のあいさつ", items: [
    { en: "Hello. May I come in?", ja: "こんにちは。入ってもいいですか？" },
    { en: "Here you are.", ja: "（カードを渡して）どうぞ。" },
    { en: "Thank you very much. Goodbye.", ja: "ありがとうございました。さようなら。" },
  ] },
  { category: "🔁 聞き返し・時間かせぎ", items: [
    { en: "I'm sorry?", ja: "すみません、もう一度？" },
    { en: "Could you say that again, please?", ja: "もう一度言ってもらえますか？" },
    { en: "Well, let me see.", ja: "ええと、そうですね。" },
    { en: "That's a good question.", ja: "いい質問ですね（考える時間）。" },
  ] },
  { category: "📖 No.2（パッセージ）の答え方", items: [
    { en: "Because ~ (本文から理由を抜き出す)", ja: "Whyには Because 〜。本文の該当部分を使う。" },
    { en: "By ~ing ~ (手段を問われたら)", ja: "How には By 〜ing で答えることも。" },
  ] },
  { category: "🖼️ No.3（イラスト）の描写", items: [
    { en: "A man is ~ing.", ja: "男性が〜しています。" },
    { en: "A woman is ~ing.", ja: "女性が〜しています。" },
    { en: "Two people are ~ing.", ja: "2人が〜しています。" },
    { en: "There are some ~ on the table.", ja: "テーブルの上に〜があります。" },
  ] },
  { category: "💬 No.4・No.5（意見）の答え方", items: [
    { en: "Yes, I do. / No, I don't.", ja: "はい／いいえ（まず立場を示す）。" },
    { en: "I think so because ~.", ja: "〜だからそう思います。" },
    { en: "I have two reasons.", ja: "理由は2つあります。" },
    { en: "For example, ~.", ja: "例えば〜。" },
  ] },
];
