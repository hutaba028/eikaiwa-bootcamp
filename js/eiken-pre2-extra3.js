/* =========================================================
   英検準2級 追加コンテンツ 第3弾（すべて自作）
   文法2ユニット / 語彙2ユニット / 大問1 +10 / 大問2 +15 /
   長文 +3 / リスニング +8 / 二次カード +3 / ライティング +3
   ※ 他のeiken-pre2*.js の後、app.js の前に読み込む。
   ========================================================= */

/* ---- 文法ユニット追加 ---- */
EIKEN_GRAMMAR.push(
  {
    id: "g11", title: "前置詞の使い分け", theme: "at/on/in・by/until・for/during",
    intro: "時や場所を表す前置詞は準2級で頻出。使い分けを整理しましょう。",
    points: [
      { h: "時の at / on / in", p: "at＋時刻、on＋曜日・日付、in＋月・年・季節。", eg: "at 7, on Monday, in May" },
      { h: "場所の at / on / in", p: "at＋地点、on＋接する面、in＋広い空間。", eg: "at the station, on the wall, in Tokyo" },
      { h: "by と until", p: "by＝〜までに(期限)、until＝〜まで(継続)。", eg: "Finish it by five. / Wait until five." },
      { h: "for と during", p: "for＋期間の長さ、during＋特定の期間中。", eg: "for two hours / during the vacation" },
    ],
    questions: [
      { type: "choice", q: "The train leaves ___ 8:30.", options: ["at", "on", "in", "by"], answer: 0, explain: "時刻は at。" },
      { type: "choice", q: "I have to finish this ___ Friday.", options: ["until", "by", "for", "during"], answer: 1, explain: "期限は by。" },
      { type: "choice", q: "She studied English ___ the summer vacation.", options: ["for", "during", "by", "until"], answer: 1, explain: "特定の期間中は during。" },
      { type: "fill", q: "We usually go skiing ___ winter.（季節の前置詞）", answer: ["in"], explain: "季節は in。" },
    ],
  },
  {
    id: "g12", title: "数量詞・不定代名詞", theme: "some/any・every/each・both/either/neither",
    intro: "「いくつか」「それぞれ」「どちらも」など、数量や人・物を指す語を整理します。",
    points: [
      { h: "some / any", p: "some＝肯定文、any＝疑問・否定文。", eg: "some water / any questions" },
      { h: "every / each", p: "どちらも単数扱い。every＝全体、each＝一つ一つ。", eg: "Every student has a bag. / each of them" },
      { h: "both / either / neither", p: "both＝両方、either＝どちらか、neither＝どちらも〜ない。", eg: "both of us / either one / neither of them" },
      { h: "-one / -thing / -body", p: "someone, anything, everybody など。単数扱い。", eg: "Someone is calling you." },
    ],
    questions: [
      { type: "choice", q: "Every student ___ a locker.", options: ["have", "has", "are", "were"], answer: 1, explain: "every は単数扱い。" },
      { type: "choice", q: "Do you have ___ questions?", options: ["some", "any", "much", "a little"], answer: 1, explain: "疑問文は any。" },
      { type: "choice", q: "___ of my parents likes coffee. (両方とも好きではない)", options: ["Both", "Either", "Neither", "All"], answer: 2, explain: "「どちらも〜ない」は Neither。" },
      { type: "choice", q: "___ is knocking at the door.", options: ["Someone", "Any", "Every", "Both"], answer: 0, explain: "「誰か」は Someone（単数）。" },
    ],
  }
);

/* ---- 語彙ユニット追加 ---- */
EIKEN_VOCAB.push(
  { unit: "⭐ 最重要 動詞句・イディオム④", items: [
    { en: "look after", ja: "世話をする" }, { en: "look up", ja: "(辞書などで)調べる" }, { en: "give back", ja: "返す" },
    { en: "put on", ja: "着る/身につける" }, { en: "take off", ja: "脱ぐ/離陸する" }, { en: "get up", ja: "起きる" },
    { en: "wake up", ja: "目を覚ます" }, { en: "grow up", ja: "成長する" }, { en: "hurry up", ja: "急ぐ" },
    { en: "carry out", ja: "実行する" }, { en: "hand in", ja: "提出する" }, { en: "fill in", ja: "記入する" },
    { en: "throw away", ja: "捨てる" }, { en: "get together", ja: "集まる" }, { en: "show up", ja: "現れる" },
    { en: "figure out", ja: "理解する/解決する" },
  ] },
  { unit: "⭐ 時・数量・程度の表現", items: [
    { en: "almost", ja: "ほとんど" }, { en: "already", ja: "すでに" }, { en: "yet", ja: "まだ/もう" },
    { en: "still", ja: "まだ" }, { en: "recently", ja: "最近" }, { en: "usually", ja: "たいてい" },
    { en: "sometimes", ja: "時々" }, { en: "hardly ever", ja: "めったに〜ない" }, { en: "at least", ja: "少なくとも" },
    { en: "at most", ja: "多くても" }, { en: "enough", ja: "十分な" }, { en: "too much", ja: "多すぎる" },
    { en: "a couple of", ja: "2, 3の" }, { en: "plenty of", ja: "たくさんの" }, { en: "most of", ja: "〜の大部分" },
    { en: "the number of", ja: "〜の数" },
  ] }
);

/* ---- 大問1 追加 ---- */
EIKEN_PART1.push(
  { type: "choice", q: "Please ___ this form and give it to the teacher.", options: ["fill in", "look up", "take off", "grow up"], answer: 0, explain: "fill in＝記入する。" },
  { type: "choice", q: "I need to ___ this word in the dictionary.", options: ["look after", "look up", "give back", "throw away"], answer: 1, explain: "look up＝調べる。" },
  { type: "choice", q: "Don't ___ these old newspapers; we can recycle them.", options: ["throw away", "hand in", "show up", "get up"], answer: 0, explain: "throw away＝捨てる。" },
  { type: "choice", q: "You must ___ your report by Monday.", options: ["hand in", "look up", "take off", "grow up"], answer: 0, explain: "hand in＝提出する。" },
  { type: "choice", q: "The plane will ___ in ten minutes.", options: ["take off", "put on", "get up", "look after"], answer: 0, explain: "take off＝離陸する。" },
  { type: "choice", q: "I ___ never eaten Thai food before.", options: ["have", "had", "am", "was"], answer: 0, explain: "現在完了の経験。" },
  { type: "choice", q: "She speaks English ___ than her brother.", options: ["good", "well", "better", "best"], answer: 2, explain: "副詞 well の比較級 better。" },
  { type: "choice", q: "This is ___ interesting book I have ever read.", options: ["the most", "more", "most", "as"], answer: 0, explain: "最上級 the most interesting。" },
  { type: "choice", q: "There were ___ people at the concert.", options: ["much", "a lot of", "a little", "any"], answer: 1, explain: "数えられる名詞は a lot of。" },
  { type: "choice", q: "___ of the two answers is correct.", options: ["Both", "Neither", "All", "Every"], answer: 1, explain: "「どちらも〜ない」は Neither。" }
);

/* ---- 大問2 追加 ---- */
EIKEN_PART2.push(
  { type: "choice", q: "A: Do you need any help? B: ___", options: ["Yes, please. Thank you.", "You're welcome.", "It's over there.", "I'm fine, thank you and you?"], answer: 0, explain: "助けの申し出を受ける。" },
  { type: "choice", q: "A: I'm sorry, I broke your cup. B: ___", options: ["That's too bad.", "Don't worry about it.", "Congratulations.", "You're right."], answer: 1, explain: "気にしないで、と返す。" },
  { type: "choice", q: "A: What time shall we meet? B: ___", options: ["At the station.", "How about ten o'clock?", "By bus.", "Yes, let's."], answer: 1, explain: "時刻の提案。" },
  { type: "choice", q: "A: Can I try this jacket on? B: ___", options: ["Of course. The fitting room is over there.", "You're welcome.", "It's too small me.", "I have been there."], answer: 0, explain: "試着の許可＋案内。" },
  { type: "choice", q: "A: How do you like your new school? B: ___", options: ["It's great. Everyone is friendly.", "You're right.", "It's on Monday.", "Nice to meet you."], answer: 0, explain: "感想を答える。" },
  { type: "choice", q: "A: Would you like to come to my party? B: ___", options: ["I'm afraid so.", "I'd love to. Thank you.", "You're welcome.", "It was fun."], answer: 1, explain: "招待を喜んで受ける。" },
  { type: "choice", q: "A: I have a bad cold today. B: ___", options: ["That's too bad. Take care.", "Congratulations!", "You're welcome.", "Here you are."], answer: 0, explain: "体調への気づかい。" },
  { type: "choice", q: "A: Excuse me, how much is this? B: ___", options: ["It's fifteen dollars.", "You're welcome.", "It's on Sunday.", "Yes, I do."], answer: 0, explain: "値段を答える。" },
  { type: "choice", q: "A: Could you speak more slowly, please? B: ___", options: ["Of course. Sorry about that.", "You're welcome.", "I have three.", "It's mine."], answer: 0, explain: "ゆっくり話す依頼に応じる。" },
  { type: "choice", q: "A: Are you free this Saturday? B: ___", options: ["It's Saturday.", "Yes, I have no plans. Why?", "You're welcome.", "It was great."], answer: 1, explain: "予定を答え、理由を尋ね返す。" },
  { type: "choice", q: "A: Congratulations on winning the game! B: ___", options: ["Thank you very much.", "That's too bad.", "I'm sorry.", "Not at all it."], answer: 0, explain: "祝福へのお礼。" },
  { type: "choice", q: "A: May I use your pen? B: ___", options: ["Sure, here you are.", "You're right.", "It's Tuesday.", "I'm fine, thanks."], answer: 0, explain: "許可＋手渡す。" },
  { type: "choice", q: "A: What are you going to do this weekend? B: ___", options: ["I'm going to visit my grandmother.", "It was fun.", "You're welcome.", "Yes, I did."], answer: 0, explain: "週末の予定。" },
  { type: "choice", q: "A: I can't decide what to order. B: ___", options: ["The pasta here is really good.", "You're welcome.", "It's over there.", "Congratulations."], answer: 0, explain: "おすすめを教える。" },
  { type: "choice", q: "A: Thank you for your help today. B: ___", options: ["No problem. Any time.", "That's too bad.", "I'm sorry to hear that.", "Not yet."], answer: 0, explain: "お礼への返し。" }
);

/* ---- 長文読解 追加 ---- */
EIKEN_READING.push(
  {
    title: "掲示：夏のボランティア募集", intro: "掲示を読んで設問に答えましょう。",
    passage: "Summer Volunteer Program\n\nOur town is looking for volunteers this summer. You can help clean the park, plant flowers, or read books to young children at the library. The program runs from August 1 to August 20. Volunteers must be 15 years old or older. You do not need any experience. If you are interested, please send an email to the town office by July 25.",
    questions: [
      { type: "choice", q: "What can volunteers NOT do in this program?", options: ["Clean the park", "Plant flowers", "Teach math at school", "Read to children"], answer: 2, explain: "数学を教えるは含まれない。" },
      { type: "choice", q: "How old must volunteers be?", options: ["10 or older", "15 or older", "20 or older", "Any age"], answer: 1, explain: "15歳以上。" },
      { type: "choice", q: "What do volunteers need?", options: ["A lot of experience", "Money", "Nothing special", "A car"], answer: 2, explain: "経験は不要。" },
      { type: "choice", q: "What should interested people do?", options: ["Call the library", "Send an email by July 25", "Visit the park", "Wait until August"], answer: 1, explain: "7月25日までにメール。" },
    ],
  },
  {
    title: "説明文：チョコレートの歴史 (Chocolate)", intro: "説明文を読んで設問に答えましょう。",
    passage: "Chocolate has a long history. Long ago, people in Central America made a bitter drink from cacao beans. They believed it gave them energy. Later, this drink was brought to Europe, where people added sugar to make it sweet. For a long time, only rich people could enjoy it. In the 1800s, machines made it possible to produce chocolate cheaply, and soon many people around the world could eat it.",
    questions: [
      { type: "choice", q: "What did people in Central America make from cacao beans?", options: ["A sweet cake", "A bitter drink", "A kind of bread", "A medicine"], answer: 1, explain: "苦い飲み物。" },
      { type: "choice", q: "What did people in Europe add to it?", options: ["Milk", "Salt", "Sugar", "Water"], answer: 2, explain: "砂糖を加えて甘くした。" },
      { type: "choice", q: "Who could enjoy chocolate for a long time?", options: ["Only rich people", "Only children", "Everyone", "Only farmers"], answer: 0, explain: "長い間、裕福な人だけ。" },
      { type: "choice", q: "What happened in the 1800s?", options: ["Chocolate became a drink again.", "Machines made it cheap to produce.", "People stopped eating it.", "Cacao beans disappeared."], answer: 1, explain: "機械で安く生産可能に。" },
    ],
  },
  {
    title: "物語：はじめての料理 (My First Time Cooking)", intro: "体験談を読んで設問に答えましょう。",
    passage: "Last Sunday, my parents were out, so I decided to cook dinner for the first time. I chose to make curry because it looked easy. However, I soon realized that cutting vegetables was harder than I thought. I also added too much water at first. When my parents came home, they tried my curry. It was a little strange, but they smiled and said it was delicious. I felt happy and proud.",
    questions: [
      { type: "choice", q: "Why did the writer cook dinner?", options: ["The parents were out.", "It was a birthday.", "The writer was hungry.", "For a school project."], answer: 0, explain: "両親が外出していたから。" },
      { type: "choice", q: "Why did the writer choose curry?", options: ["It was cheap.", "It looked easy.", "It was healthy.", "The parents liked it."], answer: 1, explain: "簡単そうだったから。" },
      { type: "choice", q: "What problem did the writer have?", options: ["Added too much water", "Burned the rice", "Forgot the meat", "Broke a dish"], answer: 0, explain: "水を入れすぎた。" },
      { type: "choice", q: "How did the writer feel at the end?", options: ["Sad", "Bored", "Happy and proud", "Angry"], answer: 2, explain: "うれしく誇らしかった。" },
    ],
  }
);

/* ---- リスニング 追加 ---- */
EIKEN_LISTENING.push(
  { type: "listen", audio: "Excuse me, do you know where the nearest convenience store is?", q: "話し手は何をたずねている？", options: ["最寄りのコンビニの場所", "時刻", "電車の値段", "天気"], answer: 0, explain: "コンビニの場所。" },
  { type: "listen", audio: "I'd like two tickets for the seven o'clock movie, please.", q: "話し手は何をしている？", options: ["映画のチケットを買う", "食事を注文する", "予約を取り消す", "道を聞く"], answer: 0, explain: "7時の映画のチケット2枚。" },
  { type: "listen", audio: "Sorry, we're sold out of the chocolate cake, but we have cheesecake.", q: "店員は何を伝えている？", options: ["チョコケーキは売り切れ", "全部売り切れ", "本日休業", "値上げ"], answer: 0, explain: "チョコは売り切れ、チーズケーキはある。" },
  { type: "listen", audio: "Could you help me move this desk after class?", q: "話し手は何を頼んでいる？", options: ["机を運ぶ手伝い", "宿題の手伝い", "掃除", "買い物"], answer: 0, explain: "机を運ぶ手伝い。" },
  { type: "listen", audio: "The museum is free for students, but adults have to pay 500 yen.", q: "大人の入場料は？", options: ["500円", "無料", "1000円", "学生と同じ"], answer: 0, explain: "大人は500円。" },
  { type: "listen", audio: "I usually walk to school, but today I took the bus because I was late.", q: "今日はどうやって学校へ行った？", options: ["バス", "徒歩", "自転車", "電車"], answer: 0, explain: "遅刻したのでバス。" },
  { type: "listen", audio: "Don't forget we have a math test tomorrow, so let's study together tonight.", q: "話し手は何を提案している？", options: ["今夜一緒に勉強する", "テストを延期する", "映画を見る", "早く寝る"], answer: 0, explain: "今夜一緒に勉強。" },
  { type: "listen", audio: "This shirt is nice, but do you have it in blue?", q: "客は何を知りたい？", options: ["青い色があるか", "値段", "サイズ交換", "返品方法"], answer: 0, explain: "青色の在庫。" }
);

/* ---- 二次試験カード 追加 ---- */
EIKEN_INTERVIEW.push(
  {
    topic: "運動 (Exercise)",
    passage: "Many people try to exercise to stay healthy. Some people run in the park in the morning, and others go to the gym after work. Doctors say that exercising for just thirty minutes a day is good for the body, so more people are trying to make time for it.",
    passageJa: "多くの人が健康のために運動しようとしています。朝に公園を走る人もいれば、仕事の後にジムへ行く人もいます。1日たった30分の運動でも体に良いと医者は言い、より多くの人が時間を作ろうとしています。",
    illustration: "イラスト：公園で、男性がジョギングをし、女性が犬を散歩させています。",
    questions: [
      { no: 1, kind: "音読", q: "パッセージを声に出して読みましょう。", model: "" },
      { no: 2, kind: "パッセージ", q: "Why are more people trying to make time for exercise?", model: "Because doctors say that exercising for thirty minutes a day is good for the body." },
      { no: 3, kind: "イラスト", q: "What is the man doing? / What is the woman doing?", model: "The man is jogging. The woman is walking a dog." },
      { no: 4, kind: "意見", q: "Do you think exercising every day is important?", model: "Yes. Exercise keeps us healthy, and it also helps us relax." },
      { no: 5, kind: "自分", q: "Do you play any sports? Please tell me more.", model: "Yes. I play tennis with my friends on weekends." },
    ],
  },
  {
    topic: "食事 (Eating at Home)",
    passage: "These days, some families are too busy to cook, so they often eat out or buy ready-made food. However, cooking at home has many good points. Home-cooked meals are usually healthier and cheaper, so some people are learning to cook simple dishes.",
    passageJa: "最近、忙しくて料理ができず、外食や出来合いの食品を買う家庭もあります。しかし家で料理することには良い点が多くあります。家庭料理はたいてい健康的で安いので、簡単な料理を学ぶ人もいます。",
    illustration: "イラスト：台所で、女性が野菜を切り、男の子がテーブルにお皿を並べています。",
    questions: [
      { no: 1, kind: "音読", q: "パッセージを声に出して読みましょう。", model: "" },
      { no: 2, kind: "パッセージ", q: "Why are some people learning to cook simple dishes?", model: "Because home-cooked meals are usually healthier and cheaper." },
      { no: 3, kind: "イラスト", q: "What is the woman doing? / What is the boy doing?", model: "The woman is cutting vegetables. The boy is putting plates on the table." },
      { no: 4, kind: "意見", q: "Do you think cooking at home is better than eating out?", model: "Yes. Home cooking is healthier, and we can save money." },
      { no: 5, kind: "自分", q: "Do you help cook at home? Please tell me more.", model: "Yes. I sometimes help my mother make dinner on weekends." },
    ],
  },
  {
    topic: "外国語学習 (Learning Languages)",
    passage: "Learning a foreign language has become more popular. People study languages to travel, to work, or to make friends from other countries. Some people use apps on their phones to study anytime, so learning a new language is easier than before.",
    passageJa: "外国語を学ぶことがより人気になっています。旅行や仕事、外国の友達を作るために言語を学ぶ人がいます。スマホのアプリを使っていつでも学ぶ人もいて、新しい言語を学ぶのは以前より簡単になっています。",
    illustration: "イラスト：教室で、女性が地図を指さし、2人の生徒がノートに書いています。",
    questions: [
      { no: 1, kind: "音読", q: "パッセージを声に出して読みましょう。", model: "" },
      { no: 2, kind: "パッセージ", q: "Why is learning a new language easier than before?", model: "Because some people use apps on their phones to study anytime." },
      { no: 3, kind: "イラスト", q: "What is the woman doing? / What are the two students doing?", model: "The woman is pointing at a map. The two students are writing in their notebooks." },
      { no: 4, kind: "意見", q: "Do you think it is important to learn a foreign language?", model: "Yes. We can talk with people from other countries, and it is useful for travel." },
      { no: 5, kind: "自分", q: "What language would you like to learn? Please tell me more.", model: "I would like to learn French because I want to visit France someday." },
    ],
  }
);

/* ---- ライティング（意見）追加 ---- */
EIKEN_WRITING.opinion.topics.push(
  { prompt: "Do you think people should use bicycles more often?", model: "I think people should use bicycles more often. I have two reasons. First, riding a bicycle is good for our health. Second, it does not produce air pollution. For example, if more people ride bicycles to work, the air will be cleaner. That is why I think people should use bicycles more." },
  { prompt: "Which do you like better, summer or winter?", model: "I like summer better than winter. I have two reasons. First, I can enjoy swimming in the sea. Second, there are many fun events, such as festivals. For example, I go to a fireworks festival every August. That is why I like summer better." },
  { prompt: "Do you think it is good for students to have a part-time job?", model: "I think it is good for students to have a part-time job. I have two reasons. First, they can learn how to work with other people. Second, they can earn their own money. For example, my friend learned to be responsible through his part-time job. That is why I think a part-time job is good." }
);
