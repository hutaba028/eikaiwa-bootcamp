/* =========================================================
   1か月コース ボリュームアップ（自作・追加分）
   Day 8〜28 に 単語＋問題 を追加する。
   ※ curriculum-month.js の後、app.js の前に読み込む。
   ========================================================= */
(function () {
  function day(n) { return (typeof CURRICULUM !== "undefined") ? CURRICULUM.find(function (d) { return d.day === n; }) : null; }
  function add(n, vocab, questions) {
    var d = day(n);
    if (!d) return;
    d.vocab = d.vocab.concat(vocab);
    d.questions = d.questions.concat(questions);
    d.totalQuestions = d.questions.length;
  }
  var C = function (q, options, answer, explain) { return { type: "choice", q: q, options: options, answer: answer, explain: explain }; };
  var T = function (q, keywords, model, explain) { return { type: "translate", q: q, keywords: keywords, model: model, explain: explain }; };

  add(8,
    [{ en: "clean", ja: "掃除する" }, { en: "wash", ja: "洗う" }, { en: "carry", ja: "運ぶ" }, { en: "smile", ja: "ほほえむ" },
     { en: "cry", ja: "泣く" }, { en: "dance", ja: "踊る" }, { en: "sing", ja: "歌う" }, { en: "swim", ja: "泳ぐ" }],
    [C("They ___ soccer in the park now.", ["play", "plays", "are playing", "played"], 2, "今〜している＝be+ing。"),
     T("私は今、昼食を作っています。", ["i", "am", "making", "lunch"], "I am making lunch now.", "be動詞+ing。")]
  );
  add(9,
    [{ en: "yesterday", ja: "昨日" }, { en: "ago", ja: "〜前に" }, { en: "moment", ja: "瞬間" }, { en: "noise", ja: "物音" },
     { en: "dream", ja: "夢を見る/夢" }, { en: "shout", ja: "叫ぶ" }, { en: "laugh", ja: "笑う" }, { en: "run", ja: "走る" }],
    [C("He ___ a book when I came in.", ["reads", "was reading", "is reading", "read"], 1, "過去進行形 was + ing。"),
     T("彼らは歌を歌っていました。", ["they", "were", "singing", "a", "song"], "They were singing a song.", "were + ing。")]
  );
  add(10,
    [{ en: "already", ja: "すでに" }, { en: "twice", ja: "2回" }, { en: "once", ja: "1回/かつて" }, { en: "abroad", ja: "海外へ" },
     { en: "recently", ja: "最近" }, { en: "lately", ja: "最近" }, { en: "trip", ja: "旅行" }, { en: "experience", ja: "経験" }],
    [C("I have ___ finished my lunch.", ["yet", "already", "ago", "now"], 1, "肯定の「すでに」は already。"),
     T("私はその映画を2回見たことがあります。", ["i", "have", "seen", "the", "movie", "twice"], "I have seen the movie twice.", "have + 過去分詞 + twice。")]
  );
  add(11,
    [{ en: "heavy", ja: "重い" }, { en: "light", ja: "軽い" }, { en: "young", ja: "若い" }, { en: "kind", ja: "親切な" },
     { en: "careful", ja: "注意深い" }, { en: "quiet", ja: "静かな" }, { en: "popular", ja: "人気の" }, { en: "useful", ja: "役立つ" }],
    [C("A plane is ___ than a train.", ["fast", "faster", "fastest", "more fast"], 1, "比較級 faster + than。"),
     T("この本はいちばん面白い。", ["this", "book", "is", "the", "most", "interesting"], "This book is the most interesting.", "the most + 長い形容詞。")]
  );
  add(12,
    [{ en: "hope", ja: "望む" }, { en: "promise", ja: "約束する" }, { en: "choose", ja: "選ぶ" }, { en: "forget", ja: "忘れる" },
     { en: "remember", ja: "覚えている" }, { en: "keep", ja: "続ける/保つ" }, { en: "mind", ja: "気にする" }, { en: "hobby", ja: "趣味" }],
    [C("I finished ___ my room.", ["clean", "to clean", "cleaning", "cleaned"], 2, "finish + 動名詞。"),
     T("私は歌手になりたい。", ["i", "want", "to", "be", "a", "singer"], "I want to be a singer.", "want to be 〜。")]
  );
  add(13,
    [{ en: "though", ja: "〜だけれど" }, { en: "while", ja: "〜する間に" }, { en: "until", ja: "〜まで" }, { en: "since", ja: "〜以来/だから" },
     { en: "however", ja: "しかし" }, { en: "then", ja: "それから" }, { en: "true", ja: "本当の" }, { en: "sure", ja: "確信して" }],
    [C("Wait here ___ I come back.", ["until", "during", "for", "by"], 0, "「〜まで(継続)」は until。"),
     T("忙しかったので行けませんでした。", ["i", "couldn't", "go", "because", "i", "was", "busy"], "I couldn't go because I was busy.", "理由は because。")]
  );
  add(14,
    [{ en: "review", ja: "復習する" }, { en: "quiz", ja: "小テスト" }, { en: "score", ja: "点数" }, { en: "mistake", ja: "間違い" },
     { en: "correct", ja: "正しい" }, { en: "answer", ja: "答え" }, { en: "question", ja: "質問" }, { en: "example", ja: "例" }],
    [C("She has been ___ tennis since noon.", ["play", "playing", "played", "plays"], 1, "現在完了進行形 have been + ing。"),
     T("これはあれより役に立ちます。", ["this", "is", "more", "useful", "than", "that"], "This is more useful than that.", "more + 形容詞 + than。")]
  );
  add(15,
    [{ en: "rule", ja: "規則" }, { en: "advice", ja: "助言" }, { en: "offer", ja: "申し出る" }, { en: "allow", ja: "許す" },
     { en: "possible", ja: "可能な" }, { en: "safe", ja: "安全な" }, { en: "dangerous", ja: "危険な" }, { en: "afraid", ja: "怖がって" }],
    [C("You ___ finish it today. It's optional.", ["must", "don't have to", "have to", "should"], 1, "「しなくてよい」は don't have to。"),
     T("窓を開けましょうか？", ["shall", "i", "open", "the", "window"], "Shall I open the window?", "Shall I 〜?。")]
  );
  add(16,
    [{ en: "build", ja: "建てる" }, { en: "design", ja: "設計する" }, { en: "invent", ja: "発明する" }, { en: "paint", ja: "描く/塗る" },
     { en: "sell", ja: "売る" }, { en: "send", ja: "送る" }, { en: "produce", ja: "生産する" }, { en: "material", ja: "材料" }],
    [C("This song ___ by young people.", ["loves", "is loved", "loving", "love"], 1, "受け身 is + 過去分詞。"),
     T("この寺は100年前に建てられました。", ["this", "temple", "was", "built", "years", "ago"], "This temple was built 100 years ago.", "was + 過去分詞。")]
  );
  add(17,
    [{ en: "neighbor", ja: "近所の人" }, { en: "author", ja: "著者" }, { en: "tool", ja: "道具" }, { en: "reason", ja: "理由" },
     { en: "someone", ja: "誰か" }, { en: "something", ja: "何か" }, { en: "everyone", ja: "みんな" }, { en: "nothing", ja: "何も〜ない" }],
    [C("I have a friend ___ can speak French.", ["which", "who", "where", "what"], 1, "人は who。"),
     T("これは私が欲しかった本です。", ["this", "is", "the", "book", "that", "i", "wanted"], "This is the book that I wanted.", "the book that 〜。")]
  );
  add(18,
    [{ en: "prefer", ja: "〜を好む" }, { en: "favor", ja: "頼みごと" }, { en: "polite", ja: "ていねいな" }, { en: "kindly", ja: "親切に" },
     { en: "appreciate", ja: "感謝する" }, { en: "suggestion", ja: "提案" }, { en: "wish", ja: "願う" }, { en: "instead", ja: "代わりに" }],
    [C("___ you mind closing the door?", ["Would", "Are", "Do you", "Will you"], 0, "Would you mind + ing。"),
     T("紅茶を一杯いただきたいのですが。", ["i'd", "like", "a", "cup", "of", "tea"], "I'd like a cup of tea.", "I'd like 〜。")]
  );
  add(19,
    [{ en: "several", ja: "いくつかの" }, { en: "enough", ja: "十分な" }, { en: "amount", ja: "量" }, { en: "number", ja: "数" },
     { en: "half", ja: "半分" }, { en: "quarter", ja: "4分の1" }, { en: "empty", ja: "空の" }, { en: "full", ja: "いっぱいの" }],
    [C("We don't have ___ time.", ["enough", "too", "many", "a few"], 0, "enough + 名詞＝十分な。"),
     T("何か質問はありますか？", ["do", "you", "have", "any", "questions"], "Do you have any questions?", "疑問文は any。")]
  );
  add(20,
    [{ en: "recently", ja: "最近" }, { en: "usually", ja: "たいてい" }, { en: "hardly", ja: "ほとんど〜ない" }, { en: "certainly", ja: "確かに" },
     { en: "wake up", ja: "目を覚ます" }, { en: "put on", ja: "身につける" }, { en: "take off", ja: "脱ぐ" }, { en: "look for", ja: "探す" }],
    [C("Please turn ___ the light. It's dark.", ["on", "off", "up", "in"], 0, "つける＝turn on。"),
     T("私は週に2回走ります。", ["i", "run", "twice", "a", "week"], "I run twice a week.", "twice a week。")]
  );
  add(21,
    [{ en: "protect", ja: "守る" }, { en: "recycle", ja: "再利用する" }, { en: "save", ja: "節約する/救う" }, { en: "reduce", ja: "減らす" },
     { en: "increase", ja: "増える" }, { en: "grow", ja: "育つ" }, { en: "collect", ja: "集める" }, { en: "share", ja: "共有する" }],
    [C("This car is ___ in Japan.", ["make", "made", "making", "makes"], 1, "受け身 is made。"),
     T("これはドイツで作られています。", ["this", "is", "made", "in", "germany"], "This is made in Germany.", "is made in 〜。")]
  );
  add(22,
    [{ en: "opinion", ja: "意見" }, { en: "agree", ja: "賛成する" }, { en: "disagree", ja: "反対する" }, { en: "believe", ja: "信じる" },
     { en: "point", ja: "要点" }, { en: "fact", ja: "事実" }, { en: "actually", ja: "実は" }, { en: "maybe", ja: "たぶん" }],
    [C("I ___ with your idea.", ["agree", "agrees", "agreed to", "am agree"], 0, "I agree with 〜。"),
     T("それはいい考えだと思います。", ["i", "think", "it's", "a", "good", "idea"], "I think it's a good idea.", "I think it's 〜。")]
  );
  add(23,
    [{ en: "invite", ja: "誘う" }, { en: "join", ja: "参加する" }, { en: "plan", ja: "計画" }, { en: "free", ja: "ひまな" },
     { en: "available", ja: "都合がつく" }, { en: "decide", ja: "決める" }, { en: "cancel", ja: "取り消す" }, { en: "arrange", ja: "手配する" }],
    [C("___ we meet at seven?", ["Shall", "Do", "Are", "Have"], 0, "Shall we 〜?＝〜しましょうか。"),
     T("一緒に昼食を食べましょう。", ["let's", "have", "lunch", "together"], "Let's have lunch together.", "Let's + 原形。")]
  );
  add(24,
    [{ en: "message", ja: "伝言" }, { en: "reservation", ja: "予約" }, { en: "confirm", ja: "確認する" }, { en: "hold on", ja: "電話を切らずに待つ" },
     { en: "appointment", ja: "(面会の)予約" }, { en: "operator", ja: "交換手" }, { en: "line", ja: "電話回線" }, { en: "return", ja: "折り返す/返す" }],
    [C("Hello, ___ is Ken speaking.", ["this", "here", "it", "that"], 0, "電話で名乗る This is 〜。"),
     T("もう一度言ってもらえますか？", ["could", "you", "repeat", "that"], "Could you repeat that?", "Could you repeat that?。")]
  );
  add(25,
    [{ en: "straight", ja: "まっすぐ" }, { en: "corner", ja: "角" }, { en: "block", ja: "区画" }, { en: "across", ja: "横切って" },
     { en: "fare", ja: "運賃" }, { en: "platform", ja: "ホーム" }, { en: "transfer", ja: "乗り換える" }, { en: "map", ja: "地図" }],
    [C("Go straight and ___ left at the corner.", ["turn", "take", "go", "make"], 0, "turn left＝左に曲がる。"),
     T("駅はどこですか？", ["where", "is", "the", "station"], "Where is the station?", "Where is 〜?。")]
  );
  add(26,
    [{ en: "worried", ja: "心配な" }, { en: "excited", ja: "わくわくした" }, { en: "nervous", ja: "緊張した" }, { en: "fever", ja: "熱" },
     { en: "cough", ja: "せき(をする)" }, { en: "hurt", ja: "痛む" }, { en: "rest", ja: "休む" }, { en: "medicine", ja: "薬" }],
    [C("I have a ___, so I want to rest.", ["headache", "happy", "kind", "fast"], 0, "have a headache＝頭痛がする。"),
     T("財布をなくしました。", ["i", "lost", "my", "wallet"], "I lost my wallet.", "lost my 〜。")]
  );
  add(27,
    [{ en: "goal", ja: "目標" }, { en: "abroad", ja: "海外へ" }, { en: "succeed", ja: "成功する" }, { en: "challenge", ja: "挑戦" },
     { en: "save money", ja: "お金を貯める" }, { en: "someday", ja: "いつか" }, { en: "opportunity", ja: "機会" }, { en: "achieve", ja: "達成する" }],
    [C("I'm going ___ study abroad next year.", ["to", "for", "at", "of"], 0, "be going to + 原形。"),
     T("私の夢は世界中を旅することです。", ["my", "dream", "is", "to", "travel", "the", "world"], "My dream is to travel the world.", "My dream is to 〜。")]
  );
  add(28,
    [{ en: "improve", ja: "上達する" }, { en: "confident", ja: "自信のある" }, { en: "fluent", ja: "流暢な" }, { en: "continue", ja: "続ける" },
     { en: "proud", ja: "誇らしい" }, { en: "effort", ja: "努力" }, { en: "progress", ja: "進歩" }, { en: "never give up", ja: "あきらめない" }],
    [C("I have ___ English for a month.", ["study", "studied", "studying", "studies"], 1, "現在完了 have + 過去分詞。"),
     T("あきらめないで！", ["never", "give", "up"], "Never give up!", "Never give up!。")]
  );
})();
