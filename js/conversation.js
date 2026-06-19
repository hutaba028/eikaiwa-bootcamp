/* =========================================================
   実践会話モジュール — フレーズ集 / 会話シナリオ / 会話力判定テスト
   ・PHRASES   : 普段使いフレーズ集（カテゴリ別）
   ・DIALOGUES : 場面別のリアルな会話の流れ（A↔B）
   ・CONV_TEST : 会話できそう度を測る判定テスト（場面対応・自然な返し）
   ========================================================= */

const PHRASES = [
  {
    category: "🙋 あいさつ・声かけ",
    items: [
      { en: "Hi! / Hello!", ja: "やあ！／こんにちは！" },
      { en: "Good morning.", ja: "おはようございます。" },
      { en: "How are you?", ja: "元気ですか？" },
      { en: "I'm good, thanks. And you?", ja: "元気です、ありがとう。あなたは？" },
      { en: "How's it going?", ja: "調子はどう？" },
      { en: "Long time no see!", ja: "久しぶり！" },
      { en: "Have a nice day!", ja: "よい一日を！" },
      { en: "Excuse me.", ja: "すみません（声かけ）。" },
    ],
  },
  {
    category: "🤝 自己紹介",
    items: [
      { en: "My name is Ken. Nice to meet you.", ja: "ケンです。はじめまして。" },
      { en: "Nice to meet you, too.", ja: "こちらこそ、はじめまして。" },
      { en: "Where are you from?", ja: "どこの出身ですか？" },
      { en: "I'm from Japan.", ja: "日本出身です。" },
      { en: "What do you do?", ja: "お仕事は何を？" },
      { en: "I'm a student. / I work at a company.", ja: "学生です。／会社で働いています。" },
      { en: "How about you?", ja: "あなたはどうですか？" },
    ],
  },
  {
    category: "👍 あいづち・リアクション",
    items: [
      { en: "Really?", ja: "本当に？" },
      { en: "That's great!", ja: "いいですね！" },
      { en: "I see.", ja: "なるほど。" },
      { en: "Sounds good!", ja: "いいね！" },
      { en: "Me too.", ja: "私もです。" },
      { en: "Exactly.", ja: "そのとおり。" },
      { en: "That's too bad.", ja: "それは残念。" },
      { en: "Wow, that's interesting!", ja: "わあ、面白いですね！" },
    ],
  },
  {
    category: "❓ 聞き返す・質問する",
    items: [
      { en: "Could you say that again?", ja: "もう一度言ってもらえますか？" },
      { en: "Could you speak more slowly?", ja: "もう少しゆっくり話してもらえますか？" },
      { en: "Sorry, I didn't catch that.", ja: "すみません、聞き取れませんでした。" },
      { en: "What does \"busy\" mean?", ja: "“busy” はどういう意味ですか？" },
      { en: "How do you say \"ありがとう\" in English?", ja: "「ありがとう」は英語で何と言いますか？" },
      { en: "What do you mean?", ja: "どういう意味ですか？" },
    ],
  },
  {
    category: "🙏 お願い・お礼・謝罪",
    items: [
      { en: "Could you help me?", ja: "手伝ってもらえますか？" },
      { en: "Can I have a coffee, please?", ja: "コーヒーをもらえますか？" },
      { en: "Just a moment, please.", ja: "少々お待ちください。" },
      { en: "Thank you so much.", ja: "本当にありがとうございます。" },
      { en: "You're welcome.", ja: "どういたしまして。" },
      { en: "I'm sorry. / Sorry about that.", ja: "ごめんなさい。／申し訳ない。" },
      { en: "No problem.", ja: "問題ないですよ。" },
    ],
  },
  {
    category: "🆘 困ったとき",
    items: [
      { en: "I don't understand.", ja: "わかりません。" },
      { en: "I'm not sure.", ja: "よくわかりません／確信がないです。" },
      { en: "Where is the bathroom?", ja: "トイレはどこですか？" },
      { en: "How much is it?", ja: "いくらですか？" },
      { en: "I'm lost.", ja: "道に迷いました。" },
      { en: "Can you help me, please?", ja: "助けてもらえますか？" },
    ],
  },
  {
    category: "👋 会話の締め・別れ",
    items: [
      { en: "It was nice talking to you.", ja: "お話しできてよかったです。" },
      { en: "Let's keep in touch.", ja: "また連絡を取り合いましょう。" },
      { en: "See you later! / See you soon!", ja: "また後で！／また近いうちに！" },
      { en: "Take care!", ja: "気をつけてね！" },
      { en: "Goodbye. / Bye!", ja: "さようなら。／バイバイ！" },
    ],
  },
  {
    category: "✈️ 旅行・サバイバル",
    items: [
      { en: "Where is the bathroom?", ja: "トイレはどこですか？" },
      { en: "Could you take a picture, please?", ja: "写真を撮ってもらえますか？" },
      { en: "I'd like to check in, please.", ja: "チェックインをお願いします。" },
      { en: "Do you take credit cards?", ja: "クレジットカードは使えますか？" },
      { en: "I lost my wallet.", ja: "財布をなくしました。" },
      { en: "Could you call a taxi for me?", ja: "タクシーを呼んでもらえますか？" },
      { en: "I don't feel well.", ja: "気分が悪いです。" },
      { en: "Help! / Call the police!", ja: "助けて！／警察を呼んで！" },
    ],
  },
];

const DIALOGUES = [
  {
    scene: "🤝 はじめての出会い（あいさつ→自己紹介→会話を広げる）",
    lines: [
      { s: "A", en: "Hi! I'm Ken. Nice to meet you.", ja: "やあ！ケンです。はじめまして。" },
      { s: "B", en: "Nice to meet you, too. I'm Emma.", ja: "こちらこそ、はじめまして。エマです。" },
      { s: "A", en: "Where are you from, Emma?", ja: "エマはどこの出身ですか？" },
      { s: "B", en: "I'm from Canada. How about you?", ja: "カナダです。あなたは？" },
      { s: "A", en: "I'm from Japan. What do you do?", ja: "日本出身です。お仕事は？" },
      { s: "B", en: "I'm a student. I study music.", ja: "学生です。音楽を勉強しています。" },
      { s: "A", en: "That's great! I love music too.", ja: "いいですね！私も音楽が好きです。" },
      { s: "B", en: "Really? Let's talk again sometime!", ja: "本当に？またいつか話しましょう！" },
    ],
  },
  {
    scene: "☕ カフェで注文する",
    lines: [
      { s: "店員", en: "Hi! What can I get for you?", ja: "いらっしゃいませ！ご注文は？" },
      { s: "You", en: "Hi. Can I have a coffee, please?", ja: "こんにちは。コーヒーをお願いします。" },
      { s: "店員", en: "Sure. Small, medium, or large?", ja: "かしこまりました。S・M・Lどれに？" },
      { s: "You", en: "Medium, please. How much is it?", ja: "Mでお願いします。いくらですか？" },
      { s: "店員", en: "That's four dollars.", ja: "4ドルです。" },
      { s: "You", en: "Here you are. Thank you.", ja: "どうぞ。ありがとう。" },
      { s: "店員", en: "Thanks! Have a nice day.", ja: "ありがとうございます！よい一日を。" },
    ],
  },
  {
    scene: "🗺️ 道をたずねる",
    lines: [
      { s: "You", en: "Excuse me. Where is the station?", ja: "すみません。駅はどこですか？" },
      { s: "通行人", en: "Go straight and turn left.", ja: "まっすぐ行って左に曲がってください。" },
      { s: "You", en: "Sorry, could you say that again?", ja: "すみません、もう一度言ってもらえますか？" },
      { s: "通行人", en: "Sure. Go straight, then turn left.", ja: "もちろん。まっすぐ進んで、左に曲がります。" },
      { s: "You", en: "How long does it take?", ja: "どのくらいかかりますか？" },
      { s: "通行人", en: "About five minutes.", ja: "5分くらいです。" },
      { s: "You", en: "Thank you so much!", ja: "本当にありがとうございます！" },
    ],
  },
  {
    scene: "💬 スモールトーク（天気・週末）",
    lines: [
      { s: "A", en: "Nice weather today, isn't it?", ja: "今日はいい天気ですね。" },
      { s: "B", en: "Yes, it's beautiful. Do you have any plans?", ja: "ええ、最高です。予定はあるんですか？" },
      { s: "A", en: "I'm going to the park. How about you?", ja: "公園に行く予定です。あなたは？" },
      { s: "B", en: "I'll stay home and relax.", ja: "家でゆっくりします。" },
      { s: "A", en: "Sounds good! Have a great weekend.", ja: "いいですね！よい週末を。" },
      { s: "B", en: "You too! See you.", ja: "あなたも！またね。" },
    ],
  },
  {
    scene: "✈️ 空港でチェックイン",
    lines: [
      { s: "係員", en: "Good morning. May I see your passport?", ja: "おはようございます。パスポートを見せてください。" },
      { s: "You", en: "Sure. Here you are.", ja: "はい。どうぞ。" },
      { s: "係員", en: "How many bags are you checking in?", ja: "預ける荷物はいくつですか？" },
      { s: "You", en: "Just one, please.", ja: "1つだけお願いします。" },
      { s: "係員", en: "Here's your boarding pass. Gate 12.", ja: "搭乗券です。12番ゲートです。" },
      { s: "You", en: "Thank you. Where is the gate?", ja: "ありがとう。ゲートはどこですか？" },
      { s: "係員", en: "Go straight and turn right.", ja: "まっすぐ行って右に曲がってください。" },
    ],
  },
  {
    scene: "🏨 ホテルでチェックイン",
    lines: [
      { s: "You", en: "Hi, I have a reservation under Ken.", ja: "こんにちは、ケンで予約しています。" },
      { s: "フロント", en: "Welcome! Could I see your ID, please?", ja: "ようこそ！身分証を見せてもらえますか？" },
      { s: "You", en: "Here it is. What time is check-out?", ja: "どうぞ。チェックアウトは何時ですか？" },
      { s: "フロント", en: "Check-out is at 11 a.m.", ja: "チェックアウトは午前11時です。" },
      { s: "You", en: "Is breakfast included?", ja: "朝食は含まれていますか？" },
      { s: "フロント", en: "Yes, it is. Enjoy your stay!", ja: "はい、含まれています。良いご滞在を！" },
    ],
  },
  {
    scene: "🚉 電車・切符を買う",
    lines: [
      { s: "You", en: "Excuse me. How can I get to the city center?", ja: "すみません。市の中心へはどう行けますか？" },
      { s: "駅員", en: "Take the blue line and get off at Main Street.", ja: "青い路線に乗って、メインストリートで降りてください。" },
      { s: "You", en: "How much is a ticket?", ja: "切符はいくらですか？" },
      { s: "駅員", en: "It's three dollars.", ja: "3ドルです。" },
      { s: "You", en: "Which platform is it?", ja: "何番ホームですか？" },
      { s: "駅員", en: "Platform 2, over there.", ja: "あちらの2番ホームです。" },
      { s: "You", en: "Thank you for your help.", ja: "助けてくれてありがとう。" },
    ],
  },
  {
    scene: "🏥 体調が悪い・病院/薬局で",
    lines: [
      { s: "You", en: "Excuse me, I don't feel well.", ja: "すみません、気分が悪いです。" },
      { s: "店員", en: "I'm sorry to hear that. What's wrong?", ja: "それはお気の毒に。どうされましたか？" },
      { s: "You", en: "I have a headache and a fever.", ja: "頭痛と熱があります。" },
      { s: "店員", en: "You should take this medicine and rest.", ja: "この薬を飲んで休んだほうがいいですよ。" },
      { s: "You", en: "How often should I take it?", ja: "どのくらいの頻度で飲めばいいですか？" },
      { s: "店員", en: "Twice a day, after meals.", ja: "1日2回、食後です。" },
      { s: "You", en: "Thank you. I appreciate it.", ja: "ありがとう。感謝します。" },
    ],
  },
  {
    scene: "🆘 トラブル（道に迷う・なくす）",
    lines: [
      { s: "You", en: "Excuse me, I'm lost. Can you help me?", ja: "すみません、道に迷いました。助けてもらえますか？" },
      { s: "通行人", en: "Of course. Where do you want to go?", ja: "もちろん。どこに行きたいんですか？" },
      { s: "You", en: "I'm looking for the police station.", ja: "警察署を探しています。" },
      { s: "通行人", en: "Is everything okay?", ja: "大丈夫ですか？" },
      { s: "You", en: "I lost my wallet.", ja: "財布をなくしてしまって。" },
      { s: "通行人", en: "Oh no. It's just around the corner.", ja: "それは大変。すぐそこの角を曲がったところですよ。" },
      { s: "You", en: "Thank you so much for your help.", ja: "助けてくれて本当にありがとう。" },
    ],
  },
];

/* 数字・時刻・お金など、会話で必須の実用表現 */
const ESSENTIALS = [
  {
    title: "🔢 数字（基数）",
    items: [
      { en: "one, two, three", ja: "1, 2, 3" },
      { en: "four, five, six", ja: "4, 5, 6" },
      { en: "seven, eight, nine, ten", ja: "7, 8, 9, 10" },
      { en: "eleven, twelve, thirteen", ja: "11, 12, 13" },
      { en: "twenty", ja: "20" },
      { en: "twenty-one", ja: "21" },
      { en: "thirty / forty / fifty", ja: "30 / 40 / 50" },
      { en: "one hundred", ja: "100" },
      { en: "one thousand", ja: "1,000" },
    ],
  },
  {
    title: "🕐 時刻・時間",
    items: [
      { en: "What time is it?", ja: "今、何時ですか？" },
      { en: "It's seven o'clock.", ja: "7時ちょうどです。" },
      { en: "It's half past eight.", ja: "8時半です。" },
      { en: "It's a quarter to nine.", ja: "9時15分前（8時45分）です。" },
      { en: "It's ten thirty.", ja: "10時30分です。" },
      { en: "in the morning / afternoon / evening", ja: "午前／午後／夕方に" },
      { en: "at noon / at midnight", ja: "正午に／真夜中に" },
    ],
  },
  {
    title: "📅 曜日・日付",
    items: [
      { en: "Monday, Tuesday, Wednesday", ja: "月・火・水曜日" },
      { en: "Thursday, Friday", ja: "木・金曜日" },
      { en: "Saturday, Sunday", ja: "土・日曜日" },
      { en: "today / tomorrow / yesterday", ja: "今日／明日／昨日" },
      { en: "What's the date today?", ja: "今日は何日ですか？" },
      { en: "It's May 5th.", ja: "5月5日です。" },
      { en: "next week / last week", ja: "来週／先週" },
    ],
  },
  {
    title: "💰 お金・買い物",
    items: [
      { en: "How much is it?", ja: "いくらですか？" },
      { en: "How much is the total?", ja: "合計でいくらですか？" },
      { en: "It's ten dollars.", ja: "10ドルです。" },
      { en: "That's too expensive.", ja: "高すぎます。" },
      { en: "Do you take credit cards?", ja: "クレジットカードは使えますか？" },
      { en: "Can I pay in cash?", ja: "現金で払えますか？" },
      { en: "Here's your change.", ja: "おつりです。" },
      { en: "Can I have a receipt?", ja: "レシートをもらえますか？" },
    ],
  },
];

/* 会話力判定テスト：場面に合った自然な返し・定番表現を問う
   type は通常テストと共通（choice / translate）。day は "conv"。 */
const CONV_TEST = [
  { type: "choice", q: "相手に「How are you?」と聞かれました。自然な返事は？",
    options: ["I'm good, thanks. And you?", "Yes, I am.", "How are you do?", "I'm from Japan."], answer: 0,
    explain: "「元気です、ありがとう。あなたは？」と返して会話を続けます。" },
  { type: "choice", q: "初対面で「Nice to meet you.」と言われました。返し方は？",
    options: ["Me too the meet.", "Nice to meet you, too.", "You are welcome.", "I meet you nice."], answer: 1,
    explain: "「こちらこそ」は Nice to meet you, too. です。" },
  { type: "choice", q: "相手の言葉が聞き取れませんでした。何と言う？",
    options: ["I don't like it.", "Say again you?", "Sorry, could you say that again?", "What you say me?"], answer: 2,
    explain: "聞き返すていねいな定番表現です。" },
  { type: "choice", q: "カフェでコーヒーを頼みたいとき、自然なのは？",
    options: ["Give coffee.", "Can I have a coffee, please?", "I want coffee now.", "Coffee you have?"], answer: 1,
    explain: "Can I have 〜, please? でていねいに注文できます。" },
  { type: "choice", q: "相手が「I got a new job!」と言いました。良いリアクションは？",
    options: ["That's too bad.", "I'm sorry.", "That's great! Congratulations!", "Really? No way."], answer: 2,
    explain: "うれしい知らせには That's great! と祝福を。" },
  { type: "choice", q: "道で人に声をかけて道をたずねるとき、最初の一言は？",
    options: ["Hey you!", "Excuse me.", "Listen to me.", "Give me way."], answer: 1,
    explain: "知らない人への声かけは Excuse me. が基本です。" },
  { type: "choice", q: "話の最後に別れるとき、自然な締めは？",
    options: ["Finish talk.", "It was nice talking to you. See you!", "Go away now.", "Stop talking."], answer: 1,
    explain: "「お話しできてよかった、またね」と締めると好印象です。" },
  { type: "choice", q: "相手の話に「なるほど」と相づちを打つには？",
    options: ["I see.", "I sea.", "Eye see.", "I know it all."], answer: 0,
    explain: "I see. は「なるほど」の定番相づちです。" },
  { type: "translate", q: "「もう一度言ってもらえますか？」を英語で。",
    keywords: ["could", "you", "say", "that", "again"], model: "Could you say that again?",
    explain: "聞き返しの最重要フレーズです。" },
  { type: "translate", q: "「手伝ってもらえますか？」を英語で。",
    keywords: ["could", "you", "help", "me"], model: "Could you help me?",
    explain: "困ったときの依頼表現です。" },
  { type: "translate", q: "「本当にありがとうございます。」を英語で。",
    keywords: ["thank", "you", "so", "much"], model: "Thank you so much.",
    explain: "感謝を強く伝える表現です。" },
  { type: "translate", q: "「あなたはどこの出身ですか？」を英語で。",
    keywords: ["where", "are", "you", "from"], model: "Where are you from?",
    explain: "自己紹介で会話を広げる質問です。" },
];
