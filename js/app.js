/* =========================================================
   7日間 英会話ブートキャンプ — アプリ本体
   ========================================================= */
(function () {
  "use strict";

  const STORAGE_KEY = "eikaiwa_bootcamp_v1";
  const app = document.getElementById("app");

  /* ---------- 進捗データ（localStorage） ---------- */
  function loadProgress() {
    let p = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) p = JSON.parse(raw);
    } catch (e) { /* 破損時は初期化 */ }
    if (!p || typeof p !== "object") p = {};
    if (!p.days || typeof p.days !== "object") p.days = {};
    if (!Array.isArray(p.wrong)) p.wrong = [];
    if (!p.mastered || typeof p.mastered !== "object") p.mastered = {};
    if (!p.streak || typeof p.streak !== "object") p.streak = { count: 0, lastDate: null };
    if (typeof p.finalBest !== "number") p.finalBest = 0;
    if (typeof p.convBest !== "number") p.convBest = 0;
    if (typeof p.phraseBest !== "number") p.phraseBest = 0;
    if (typeof p.dialogueBest !== "number") p.dialogueBest = 0;
    if (typeof p.listenBest !== "number") p.listenBest = 0;
    if (typeof p.essentialBest !== "number") p.essentialBest = 0;
    return p;
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
  }
  let progress = loadProgress();

  function dayRecord(day) {
    return progress.days[day] || { best: 0, attempts: 0, completed: false };
  }

  /* ---------- ストリーク（連続学習日数） ---------- */
  function dateKey(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function todayKey() { return dateKey(new Date()); }
  function studiedToday() { return progress.streak.lastDate === todayKey(); }
  function recordActivityToday() {
    const t = todayKey();
    if (progress.streak.lastDate === t) return; // 本日はカウント済み
    const y = new Date(); y.setDate(y.getDate() - 1);
    progress.streak.count = (progress.streak.lastDate === dateKey(y)) ? (progress.streak.count || 0) + 1 : 1;
    progress.streak.lastDate = t;
    saveProgress(progress);
  }

  /* ---------- 暗記済み単語 ---------- */
  function masterKey(en) { return String(en).toLowerCase().trim(); }
  function isMastered(en) { return !!progress.mastered[masterKey(en)]; }
  function setMastered(en, val) {
    const k = masterKey(en);
    if (val) progress.mastered[k] = true; else delete progress.mastered[k];
    saveProgress(progress);
  }
  function masteredCount(vocab) { return vocab.filter((v) => isMastered(v.en)).length; }

  /* ---------- テーマ（ダークモード） ---------- */
  const THEME_KEY = "eikaiwa_theme_v1";
  function loadTheme() {
    let t = null;
    try { t = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (!t) t = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    return t;
  }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    const btn = document.getElementById("theme-btn");
    if (btn) btn.textContent = t === "dark" ? "☀️" : "🌙";
  }
  let theme = loadTheme();
  applyTheme(theme);
  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    applyTheme(theme);
  }
  function wrongKey(day, qi) { return day + ":" + qi; }
  function isWrong(day, qi) {
    return progress.wrong.some((w) => w.day === day && w.qIndex === qi);
  }
  function markWrong(day, qi) {
    if (!isWrong(day, qi)) { progress.wrong.push({ day: day, qIndex: qi }); saveProgress(progress); }
  }
  function clearWrong(day, qi) {
    const before = progress.wrong.length;
    progress.wrong = progress.wrong.filter((w) => !(w.day === day && w.qIndex === qi));
    if (progress.wrong.length !== before) saveProgress(progress);
  }

  /* ---------- ユーティリティ ---------- */
  function normalize(s) {
    return String(s)
      .toLowerCase()
      .replace(/[.,!?;:"'’`]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  }

  const TYPE_LABEL = { choice: "4択", order: "並べ替え", fill: "穴埋め", translate: "英作文", listen: "リスニング", dictation: "聞き取り" };

  /* ---------- 読み上げ（SpeechSynthesis） ---------- */
  const speechOK = "speechSynthesis" in window;
  const VOICE_KEY = "eikaiwa_voice_v1";

  function loadVoiceSettings() {
    try {
      const r = localStorage.getItem(VOICE_KEY);
      if (r) return JSON.parse(r);
    } catch (e) {}
    return { name: null, rate: 0.9 };
  }
  function saveVoiceSettings() {
    try { localStorage.setItem(VOICE_KEY, JSON.stringify(voiceSettings)); } catch (e) {}
  }
  const voiceSettings = loadVoiceSettings();

  let enVoice = null; // 自動選択された英語音声（ユーザー未指定時のフォールバック）
  function englishVoices() {
    return window.speechSynthesis.getVoices().filter((v) => /^en([-_]|$)/i.test(v.lang) || /english/i.test(v.name));
  }
  function pickVoice() {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || !voices.length) return;
    enVoice =
      voices.find((v) => /^en[-_]us/i.test(v.lang)) ||
      voices.find((v) => /^en[-_]gb/i.test(v.lang)) ||
      voices.find((v) => /^en([-_]|$)/i.test(v.lang)) ||
      voices.find((v) => /english/i.test(v.name)) ||
      null;
  }
  function currentVoice() {
    const voices = window.speechSynthesis.getVoices();
    if (voiceSettings.name) {
      const m = voices.find((v) => v.name === voiceSettings.name);
      if (m) return m;
    }
    return enVoice;
  }
  if (speechOK) {
    pickVoice();
    window.speechSynthesis.onvoiceschanged = function () {
      pickVoice();
      // 設定カードが表示中なら音声リストを更新
      const sel = document.getElementById("voice-select");
      if (sel) refreshVoiceSelect(sel);
    };
  }
  // 読み上げに不要な記号（/, 矢印, 括弧）を除去してから発音させる
  function cleanForSpeech(t) {
    return String(t)
      .replace(/\s*[/／]\s*/g, ", ")
      .replace(/[→←↑↓➡]/g, " ")
      .replace(/[()（）「」『』]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  function speak(text, btn) {
    if (!speechOK) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(cleanForSpeech(text));
    const v = currentVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-US"; }
    u.rate = voiceSettings.rate || 0.9;
    if (btn) {
      btn.classList.add("speaking");
      u.onend = u.onerror = () => btn.classList.remove("speaking");
    }
    window.speechSynthesis.speak(u);
  }
  // 複数の英文を順番に読み上げ（会話の通し再生用）
  function speakSequence(texts, btn) {
    if (!speechOK) return;
    window.speechSynthesis.cancel();
    const v = currentVoice();
    texts.forEach((t, i) => {
      const u = new SpeechSynthesisUtterance(cleanForSpeech(t));
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-US"; }
      u.rate = voiceSettings.rate || 0.9;
      if (btn) {
        if (i === 0) u.onstart = () => btn.classList.add("speaking");
        if (i === texts.length - 1) u.onend = u.onerror = () => btn.classList.remove("speaking");
      }
      window.speechSynthesis.speak(u);
    });
  }

  /* ---------- 読み上げ設定カード ---------- */
  function refreshVoiceSelect(sel) {
    const evs = englishVoices();
    sel.innerHTML = "";
    if (evs.length === 0) {
      const o = document.createElement("option");
      o.textContent = "英語音声が見つかりません";
      sel.appendChild(o);
      sel.disabled = true;
      return;
    }
    sel.disabled = false;
    evs.forEach((v) => {
      const o = document.createElement("option");
      o.value = v.name;
      o.textContent = v.name.replace(/^Microsoft\s+/, "") + "（" + v.lang + "）";
      if (voiceSettings.name === v.name) o.selected = true;
      sel.appendChild(o);
    });
    // 未指定なら自動選択中の音声を選択状態に
    if (!voiceSettings.name && enVoice) sel.value = enVoice.name;
  }

  function buildVoiceSettingsCard() {
    const card = el("div", "card");
    card.style.marginBottom = "18px";
    card.appendChild(el("span", "block-label", "🔊 読み上げ設定"));
    if (!speechOK) {
      card.appendChild(el("p", "section-sub", "このブラウザは読み上げ（音声合成）に対応していません。"));
      return card;
    }
    const row = el("div");
    row.style.display = "flex";
    row.style.flexWrap = "wrap";
    row.style.gap = "14px";
    row.style.alignItems = "flex-end";

    // 音声選択
    const vWrap = el("div");
    vWrap.style.flex = "1";
    vWrap.style.minWidth = "200px";
    vWrap.appendChild(el("div", "hint", "音声を選ぶ"));
    const sel = el("select", "text-input");
    sel.id = "voice-select";
    refreshVoiceSelect(sel);
    sel.addEventListener("change", () => { voiceSettings.name = sel.value; saveVoiceSettings(); });
    vWrap.appendChild(sel);
    row.appendChild(vWrap);

    // スピード
    const rWrap = el("div");
    rWrap.style.minWidth = "180px";
    const rLabel = el("div", "hint", "スピード： " + (voiceSettings.rate || 0.9).toFixed(2) + "x");
    rWrap.appendChild(rLabel);
    const rng = el("input");
    rng.type = "range";
    rng.min = "0.5";
    rng.max = "1.1";
    rng.step = "0.05";
    rng.value = voiceSettings.rate || 0.9;
    rng.style.width = "100%";
    rng.style.accentColor = "var(--indigo)";
    rng.addEventListener("input", () => {
      voiceSettings.rate = parseFloat(rng.value);
      rLabel.textContent = "スピード： " + voiceSettings.rate.toFixed(2) + "x";
    });
    rng.addEventListener("change", saveVoiceSettings);
    rWrap.appendChild(rng);
    row.appendChild(rWrap);

    // 試聴
    const prev = el("button", "btn btn-ghost", "試聴 🔊");
    prev.addEventListener("click", () => speak("Hello! Nice to meet you. Let's study English together.", prev));
    row.appendChild(prev);

    card.appendChild(row);
    card.appendChild(el("p", "hint", "聞き取りやすい音声・スピードに調整できます。設定はこの端末に保存されます。"));
    return card;
  }
  function speakButton(text) {
    const b = el("button", "speak-btn", "🔊");
    b.title = "読み上げ";
    b.setAttribute("aria-label", "読み上げ");
    b.addEventListener("click", () => speak(text, b));
    if (!speechOK) b.style.display = "none";
    return b;
  }

  /* ============================================================
     ダッシュボード
     ============================================================ */
  function renderDashboard() {
    window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
    app.innerHTML = "";
    const wrap = el("div", "fade-in");

    // 全体進捗
    const totalDays = CURRICULUM.length;
    let completedDays = 0;
    let scoreSum = 0;
    CURRICULUM.forEach((d) => {
      const r = dayRecord(d.day);
      if (r.completed) completedDays++;
      scoreSum += r.best;
    });
    const overallPct = Math.round((completedDays / totalDays) * 100);
    const avgScore = Math.round(scoreSum / totalDays);

    const streak = progress.streak.count || 0;
    const streakHtml = '<div class="streak-chip">🔥 ' +
      (streak > 0 ? streak + "日連続" : "今日からスタート") +
      (studiedToday() ? " ・ 今日は学習済み ✅" : " ・ 今日はまだ") + "</div>";

    const ov = el("div", "overview");
    ov.innerHTML =
      '<h1>7日間 英会話ブートキャンプ 🚀</h1>' +
      streakHtml +
      '<p>1日1テーマ。会話で使える基礎を一気に身につけましょう。</p>' +
      '<div class="overall-bar"><span style="width:' + overallPct + '%"></span></div>' +
      '<div class="overall-meta"><span>達成 ' + completedDays + " / " + totalDays + " 日</span>" +
      "<span>平均スコア " + avgScore + "%</span></div>";
    wrap.appendChild(ov);

    // 読み上げ設定
    wrap.appendChild(buildVoiceSettingsCard());

    // 復習バナー
    if (progress.wrong.length > 0) {
      const rv = el("div", "card");
      rv.style.marginBottom = "18px";
      rv.style.display = "flex";
      rv.style.alignItems = "center";
      rv.style.gap = "12px";
      rv.style.flexWrap = "wrap";
      rv.innerHTML =
        '<div style="flex:1;min-width:180px"><strong>復習リスト：' + progress.wrong.length +
        ' 問</strong><div style="color:var(--muted);font-size:13.5px">間違えた問題だけをまとめて解き直せます。</div></div>';
      const btn = el("button", "btn btn-primary", "復習する");
      btn.addEventListener("click", () => startReview());
      rv.appendChild(btn);
      wrap.appendChild(rv);
    }

    // Dayカード
    const grid = el("div", "day-grid");
    CURRICULUM.forEach((d) => {
      const r = dayRecord(d.day);
      const card = el("div", "day-card" + (r.completed ? " done" : ""));
      const status = r.completed
        ? '<span class="day-status status-done">✓ 完了（ベスト ' + r.best + "%）</span>"
        : (r.attempts > 0
          ? '<span class="day-status status-todo">挑戦中（ベスト ' + r.best + "%）</span>"
          : '<span class="day-status status-todo">未着手</span>');
      const barPct = r.best;
      const mc = masteredCount(d.vocab);
      card.innerHTML =
        '<div class="day-top">' +
        '<div class="day-badge">Day<br>' + d.day + "</div>" +
        '<div><div class="day-title">' + escapeHtml(d.title) + "</div>" +
        '<div class="day-theme">' + escapeHtml(d.theme) + "</div></div></div>" +
        status +
        '<div class="day-theme">🎴 暗記 ' + mc + " / " + d.vocab.length + " 語</div>" +
        '<div class="mini-bar"><span style="width:' + barPct + '%"></span></div>';

      const actions = el("div", "day-actions");
      const learnBtn = el("button", "btn btn-ghost", "学習");
      learnBtn.addEventListener("click", () => renderLearn(d.day));
      const testBtn = el("button", "btn btn-primary", "テスト");
      testBtn.addEventListener("click", () => startTest(d.day));
      actions.appendChild(learnBtn);
      actions.appendChild(testBtn);
      card.appendChild(actions);
      grid.appendChild(card);
    });
    wrap.appendChild(grid);

    // 修了テスト
    const allCompleted = CURRICULUM.every((d) => dayRecord(d.day).completed);
    const fcard = el("div", "feature-card");
    const bestTxt = progress.finalBest > 0 ? "（ベスト " + progress.finalBest + "%）" : "";
    fcard.innerHTML =
      '<div class="fc-icon">🎓</div>' +
      '<div class="fc-text"><strong>修了テスト ' + bestTxt + "</strong>" +
      "<div>7日間の全範囲からランダムに15問。定着度をチェックしましょう。" +
      (allCompleted ? "" : "（全Day完了で挑戦推奨）") + "</div></div>";
    const fbtn = el("button", "btn btn-primary", "挑戦する");
    fbtn.addEventListener("click", () => startFinalTest());
    fcard.appendChild(fbtn);
    wrap.appendChild(fcard);

    // 実践会話への入口
    const ccard = el("div", "feature-card");
    ccard.style.borderColor = "#0ea5e9";
    const convBestTxt = progress.convBest > 0 ? "（判定ベスト " + progress.convBest + "%）" : "";
    ccard.innerHTML =
      '<div class="fc-icon">💬</div>' +
      '<div class="fc-text"><strong>実践会話 ' + convBestTxt + "</strong>" +
      "<div>挨拶〜会話の流れ・普段使いフレーズ集・会話力判定テスト。実際の会話に備えましょう。</div></div>";
    const cbtn = el("button", "btn btn-primary", "開く");
    cbtn.addEventListener("click", () => renderConversationHub());
    ccard.appendChild(cbtn);
    wrap.appendChild(ccard);

    // データのバックアップ
    const bcard = el("div", "card");
    bcard.style.marginTop = "18px";
    bcard.appendChild(el("span", "block-label", "💾 データのバックアップ"));
    bcard.appendChild(el("p", "section-sub",
      "進捗はこの端末のブラウザに保存されています。機種変更・ブラウザ変更の前にエクスポートしておくと復元できます。"));
    const brow = el("div");
    brow.style.display = "flex";
    brow.style.gap = "8px";
    brow.style.flexWrap = "wrap";
    const expBtn = el("button", "btn btn-ghost", "⬇ エクスポート");
    expBtn.addEventListener("click", exportData);
    const impBtn = el("button", "btn btn-ghost", "⬆ インポート");
    impBtn.addEventListener("click", importData);
    brow.appendChild(expBtn);
    brow.appendChild(impBtn);
    bcard.appendChild(brow);
    wrap.appendChild(bcard);

    app.appendChild(wrap);
  }

  /* ============================================================
     学習ページ
     ============================================================ */
  function renderLearn(day) {
    window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
    const d = CURRICULUM.find((x) => x.day === day);
    app.innerHTML = "";
    const wrap = el("div", "fade-in");

    const back = el("button", "back-link", "← ホームに戻る");
    back.addEventListener("click", renderDashboard);
    wrap.appendChild(back);

    wrap.appendChild(el("h2", "section-title", "Day " + d.day + "：" + escapeHtml(d.title)));
    wrap.appendChild(el("p", "section-sub", escapeHtml(d.theme)));

    // 文法
    const gcard = el("div", "card learn-block");
    gcard.appendChild(el("span", "block-label", "📘 文法"));
    gcard.appendChild(el("p", null, escapeHtml(d.grammar.intro)));
    d.grammar.points.forEach((pt) => {
      const p = el("div", "grammar-point");
      p.innerHTML = "<h4>" + escapeHtml(pt.h) + "</h4><p>" + escapeHtml(pt.p) + "</p>";
      const eg = el("div", "eg");
      eg.appendChild(document.createTextNode("例) " + pt.eg));
      eg.appendChild(speakButton(pt.eg));
      eg.style.display = "flex";
      eg.style.alignItems = "center";
      eg.style.gap = "8px";
      p.appendChild(eg);
      gcard.appendChild(p);
    });
    wrap.appendChild(gcard);

    // 単語
    const vcard = el("div", "card learn-block");
    const vHead = el("div");
    vHead.style.display = "flex";
    vHead.style.alignItems = "center";
    vHead.style.justifyContent = "space-between";
    vHead.style.flexWrap = "wrap";
    vHead.style.gap = "8px";
    vHead.style.marginBottom = "4px";
    vHead.appendChild(el("span", "block-label", "📗 単語（" + d.vocab.length + "語）"));
    const fcBtn = el("button", "btn btn-primary", "🎴 カードで暗記");
    fcBtn.style.padding = "8px 14px";
    fcBtn.style.fontSize = "14px";
    fcBtn.addEventListener("click", () => renderFlashcards(d.day));
    vHead.appendChild(fcBtn);
    vcard.appendChild(vHead);
    const vlist = el("div", "vocab-list");
    d.vocab.forEach((v) => {
      const item = el("div", "vocab-item");
      item.appendChild(speakButton(v.en));
      const t = el("div", "vocab-text");
      t.innerHTML = '<span class="vocab-en">' + escapeHtml(v.en) + '</span> <span class="vocab-ja">' + escapeHtml(v.ja) + "</span>";
      item.appendChild(t);
      vlist.appendChild(item);
    });
    vcard.appendChild(vlist);
    wrap.appendChild(vcard);

    // 例文
    const ecard = el("div", "card learn-block");
    ecard.appendChild(el("span", "block-label", "💬 会話で使える例文"));
    d.examples.forEach((ex) => {
      const item = el("div", "example-item");
      item.appendChild(speakButton(ex.en));
      const t = el("div");
      t.innerHTML = '<div class="example-en">' + escapeHtml(ex.en) + '</div><div class="example-ja">' + escapeHtml(ex.ja) + "</div>";
      item.appendChild(t);
      ecard.appendChild(item);
    });
    wrap.appendChild(ecard);

    // テストへ
    const go = el("button", "btn btn-primary btn-block", "このDayのテストに挑戦 →");
    go.style.marginTop = "6px";
    go.addEventListener("click", () => startTest(d.day));
    wrap.appendChild(go);

    app.appendChild(wrap);
    window.scrollTo(0, 0);
  }

  /* ============================================================
     単語フラッシュカード（暗記モード）
     ============================================================ */
  function renderFlashcards(day) {
    window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
    const d = CURRICULUM.find((x) => x.day === day);
    const cards = shuffle(d.vocab);
    let idx = 0;
    let flipped = false;
    let dir = "en2ja"; // en2ja: 表=英語 / ja2en: 表=日本語

    app.innerHTML = "";
    const wrap = el("div", "fade-in");

    const back = el("button", "back-link", "← 学習ページに戻る");
    back.addEventListener("click", () => renderLearn(day));
    wrap.appendChild(back);

    wrap.appendChild(el("h2", "section-title", "Day " + d.day + " 単語カード"));

    // ツールバー（カウンタ＋出題方向）
    const toolbar = el("div", "fc-toolbar");
    const count = el("div", "count", "");
    toolbar.appendChild(count);
    const dirBtn = el("button", "toggle-dir", "");
    toolbar.appendChild(dirBtn);
    wrap.appendChild(toolbar);

    // 進捗バー（暗記済み）
    const pbar = el("div", "fc-progress-bar");
    const pspan = el("span");
    pbar.appendChild(pspan);
    wrap.appendChild(pbar);

    // カード
    const card = el("div", "flashcard");
    wrap.appendChild(card);

    // 操作（覚えた / 苦手）
    const controls = el("div", "fc-controls");
    const hardBtn = el("button", "btn btn-ghost", "😖 苦手");
    const gotBtn = el("button", "btn btn-primary", "✅ 覚えた");
    controls.appendChild(hardBtn);
    controls.appendChild(gotBtn);
    wrap.appendChild(controls);

    // 前後ナビ
    const nav = el("div", "fc-nav");
    const prevBtn = el("button", "btn btn-ghost", "← 前へ");
    const speakBtn = el("button", "btn btn-ghost", "🔊 発音");
    const nextBtn = el("button", "btn btn-ghost", "次へ →");
    nav.appendChild(prevBtn);
    nav.appendChild(speakBtn);
    nav.appendChild(nextBtn);
    wrap.appendChild(nav);

    wrap.appendChild(el("p", "kbd-hint",
      "ヒント： カードをクリックで裏返し / " +
      "<kbd>Space</kbd> めくる ・ <kbd>←</kbd><kbd>→</kbd> 移動 ・ <kbd>↑</kbd> 覚えた ・ <kbd>↓</kbd> 苦手"));

    function render() {
      const v = cards[idx];
      const front = dir === "en2ja" ? v.en : v.ja;
      const back2 = dir === "en2ja" ? v.ja : v.en;
      const mastered = isMastered(v.en);
      card.className = "flashcard" + (mastered ? " mastered" : "");
      card.innerHTML =
        (mastered ? '<span class="fc-mastered-tag">✓ 暗記済み</span>' : "") +
        '<span class="fc-side-label">' + (dir === "en2ja" ? "English" : "日本語") + "</span>" +
        '<div class="fc-front">' + escapeHtml(front) + "</div>" +
        (flipped
          ? '<span class="fc-side-label">' + (dir === "en2ja" ? "意味" : "English") + '</span><div class="fc-back">' + escapeHtml(back2) + "</div>"
          : '<div class="fc-tap-hint">タップして答えを見る</div>');
      count.textContent = (idx + 1) + " / " + cards.length;
      dirBtn.textContent = dir === "en2ja" ? "英 → 日" : "日 → 英";
      gotBtn.textContent = mastered ? "✓ 暗記済み（解除）" : "✅ 覚えた";
      pspan.style.width = Math.round((masteredCount(d.vocab) / d.vocab.length) * 100) + "%";
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === cards.length - 1;
    }
    function flip() { flipped = !flipped; render(); }
    function go(n) { if (n >= 0 && n < cards.length) { idx = n; flipped = false; render(); } }

    card.addEventListener("click", flip);
    dirBtn.addEventListener("click", () => { dir = dir === "en2ja" ? "ja2en" : "en2ja"; flipped = false; render(); });
    speakBtn.addEventListener("click", () => speak(cards[idx].en, speakBtn));
    prevBtn.addEventListener("click", () => go(idx - 1));
    nextBtn.addEventListener("click", () => go(idx + 1));
    gotBtn.addEventListener("click", () => {
      const v = cards[idx];
      setMastered(v.en, !isMastered(v.en));
      recordActivityToday();
      if (isMastered(v.en) && idx < cards.length - 1) go(idx + 1); else render();
    });
    hardBtn.addEventListener("click", () => {
      setMastered(cards[idx].en, false);
      if (idx < cards.length - 1) go(idx + 1); else render();
    });

    // キーボード操作
    function onKey(e) {
      if (e.key === " " || e.key === "Spacebar") { e.preventDefault(); flip(); }
      else if (e.key === "ArrowRight") go(idx + 1);
      else if (e.key === "ArrowLeft") go(idx - 1);
      else if (e.key === "ArrowUp") { e.preventDefault(); gotBtn.click(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); hardBtn.click(); }
    }
    document.addEventListener("keydown", onKey);
    fcKeyHandler = onKey; // 画面遷移時に解除

    render();
    app.appendChild(wrap);
    window.scrollTo(0, 0);
  }
  let fcKeyHandler = null;
  function clearFcKeys() {
    if (fcKeyHandler) { document.removeEventListener("keydown", fcKeyHandler); fcKeyHandler = null; }
  }

  /* ============================================================
     テスト / 復習
     ============================================================ */
  let session = null; // { items:[{day,qIndex,q}], checked:[], correct:[], title, mode }

  function startTest(day) {
    const d = CURRICULUM.find((x) => x.day === day);
    const items = d.questions.map((q, i) => ({ day: day, qIndex: i, q: q }));
    session = {
      mode: "day",
      day: day,
      title: "Day " + day + "：" + d.title,
      items: items,
      checked: new Array(items.length).fill(false),
      correct: new Array(items.length).fill(false),
    };
    renderTest();
  }

  function startReview() {
    if (progress.wrong.length === 0) { renderDashboard(); return; }
    const items = progress.wrong
      .map((w) => {
        const d = CURRICULUM.find((x) => x.day === w.day);
        if (!d || !d.questions[w.qIndex]) return null;
        return { day: w.day, qIndex: w.qIndex, q: d.questions[w.qIndex] };
      })
      .filter(Boolean);
    session = {
      mode: "review",
      title: "復習モード（" + items.length + "問）",
      items: items,
      checked: new Array(items.length).fill(false),
      correct: new Array(items.length).fill(false),
    };
    renderTest();
  }

  function startFinalTest() {
    // 全Dayの全問題から重複なくランダムに最大15問
    let pool = [];
    CURRICULUM.forEach((d) => {
      d.questions.forEach((q, i) => pool.push({ day: d.day, qIndex: i, q: q }));
    });
    pool = shuffle(pool);
    const items = pool.slice(0, Math.min(15, pool.length));
    session = {
      mode: "final",
      title: "🎓 修了テスト（" + items.length + "問）",
      items: items,
      checked: new Array(items.length).fill(false),
      correct: new Array(items.length).fill(false),
    };
    renderTest();
  }

  function renderTest() {
    window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
    app.innerHTML = "";
    const wrap = el("div", "fade-in");

    const back = el("button", "back-link", "← ホームに戻る");
    back.addEventListener("click", renderDashboard);
    wrap.appendChild(back);

    wrap.appendChild(el("h2", "section-title", session.title));
    wrap.appendChild(el("p", "section-sub",
      "各問題に答えたら「答え合わせ」を押してください。全問終えると結果が表示されます。"));
    wrap.appendChild(el("p", "kbd-hint",
      "⌨️ 4択は <kbd>1</kbd>〜<kbd>4</kbd> で選択 ・ 穴埋めは <kbd>Enter</kbd> ・ 英作文は <kbd>Ctrl</kbd>+<kbd>Enter</kbd> で答え合わせ"));

    // 進捗バー
    const prog = el("div", "test-progress");
    const bar = el("div", "mini-bar");
    const barSpan = el("span", null, "");
    bar.appendChild(barSpan);
    const count = el("div", "count", "");
    prog.appendChild(bar);
    prog.appendChild(count);
    wrap.appendChild(prog);

    function updateProgress() {
      const done = session.checked.filter(Boolean).length;
      const total = session.items.length;
      barSpan.style.width = Math.round((done / total) * 100) + "%";
      count.textContent = done + " / " + total;
      finishBtn.disabled = done < total;
    }

    // 各問題
    session.items.forEach((item, idx) => {
      const card = el("div", "card question");
      card.appendChild(el("span", "q-type-tag",
        (session.mode === "review" ? "Day " + item.day + " ・ " : "") + (TYPE_LABEL[item.q.type] || "問題")));
      buildQuestion(card, item, idx, updateProgress);
      wrap.appendChild(card);
    });

    // 結果ボタン
    const finishBtn = el("button", "btn btn-primary btn-block", "結果を見る →");
    finishBtn.style.marginTop = "6px";
    finishBtn.disabled = true;
    finishBtn.addEventListener("click", () => renderResult());
    wrap.appendChild(finishBtn);

    app.appendChild(wrap);
    updateProgress();
    window.scrollTo(0, 0);
  }

  /* ---------- 問題ごとのUI ---------- */
  function buildQuestion(card, item, idx, onChecked) {
    const q = item.q;
    let getResult = () => false; // 採点関数（正誤を返す）
    let lock = () => {};         // 入力ロック

    if (q.type === "choice" || q.type === "listen") {
      card.appendChild(el("div", "q-prompt", escapeHtml(q.q)));
      if (q.audio) {
        const play = el("button", "btn btn-ghost", "🔊 音声を再生");
        play.style.marginBottom = "10px";
        play.addEventListener("click", () => speak(q.audio, play));
        card.appendChild(play);
      }
      const box = el("div", "choices");
      let selected = -1;
      const btns = [];
      q.options.forEach((opt, i) => {
        const b = el("button", "choice");
        b.innerHTML = '<span class="key">' + String.fromCharCode(65 + i) + "</span><span>" + escapeHtml(opt) + "</span>";
        b.addEventListener("click", () => {
          if (b.disabled) return;
          selected = i;
          btns.forEach((x) => x.classList.remove("selected"));
          b.classList.add("selected");
        });
        btns.push(b);
        box.appendChild(b);
      });
      card.appendChild(box);
      // キーボード: 数字キー 1〜4 で選択
      box.addEventListener("keydown", (e) => {
        const n = parseInt(e.key, 10);
        if (n >= 1 && n <= btns.length && !btns[n - 1].disabled) { e.preventDefault(); btns[n - 1].click(); btns[n - 1].focus(); }
      });
      getResult = () => selected === q.answer;
      lock = (ok) => {
        btns.forEach((b, i) => {
          b.disabled = true;
          if (i === q.answer) b.classList.add("correct");
          else if (i === selected) b.classList.add("wrong");
        });
      };
      var canCheck = () => selected >= 0;

    } else if (q.type === "order") {
      card.appendChild(el("div", "q-prompt", escapeHtml(q.q)));
      const answerBox = el("div", "order-answer");
      const pool = el("div", "order-pool");
      let pieces = shuffle(q.answer);
      if (pieces.length > 1 && pieces.join(" ") === q.answer.join(" ")) pieces = shuffle(pieces);
      const current = []; // 選択された語（文字列）
      function rebuild() {
        answerBox.innerHTML = "";
        current.forEach((w, i) => {
          const t = el("button", "token in-answer", escapeHtml(w));
          t.addEventListener("click", () => { current.splice(i, 1); rebuild(); });
          answerBox.appendChild(t);
        });
        pool.innerHTML = "";
        const used = current.slice();
        pieces.forEach((w) => {
          const ui = used.indexOf(w);
          if (ui >= 0) { used.splice(ui, 1); return; } // すでに使用済み
          const t = el("button", "token", escapeHtml(w));
          t.addEventListener("click", () => { current.push(w); rebuild(); });
          pool.appendChild(t);
        });
      }
      rebuild();
      card.appendChild(answerBox);
      card.appendChild(pool);
      getResult = () => current.join(" ") === q.answer.join(" ");
      lock = (ok) => {
        answerBox.querySelectorAll(".token").forEach((t) => (t.disabled = true));
        pool.querySelectorAll(".token").forEach((t) => (t.disabled = true));
      };
      var canCheck = () => current.length === q.answer.length;

    } else if (q.type === "fill" || q.type === "dictation") {
      card.appendChild(el("div", "q-prompt", escapeHtml(q.q).replace(/_+/g, '<span class="blank">____</span>')));
      if (q.audio) {
        const play = el("button", "btn btn-ghost", "🔊 音声を再生");
        play.style.marginBottom = "10px";
        play.addEventListener("click", () => speak(q.audio, play));
        card.appendChild(play);
      }
      const input = el("input", "text-input");
      input.type = "text";
      input.placeholder = "英語で入力";
      input.autocomplete = "off";
      input.spellcheck = false;
      card.appendChild(input);
      // キーボード: Enter で答え合わせ
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); checkBtn.click(); } });
      const accepted = q.answer.map(normalize);
      if (q.type === "dictation") {
        // 聞き取り：語の8割が一致すれば正解（軽微なミスは許容）
        getResult = () => {
          const got = normalize(input.value).split(" ").filter(Boolean);
          const want = normalize(q.answer[0]).split(" ").filter(Boolean);
          if (!got.length || !want.length) return false;
          const pool = got.slice();
          let match = 0;
          want.forEach((w) => { const k = pool.indexOf(w); if (k >= 0) { match++; pool.splice(k, 1); } });
          return match / want.length >= 0.8;
        };
      } else {
        getResult = () => accepted.indexOf(normalize(input.value)) >= 0;
      }
      lock = (ok) => { input.disabled = true; input.classList.add(ok ? "correct" : "wrong"); };
      var canCheck = () => input.value.trim().length > 0;

    } else { // translate
      card.appendChild(el("div", "q-prompt", escapeHtml(q.q)));
      const input = el("textarea", "text-input");
      input.rows = 2;
      input.placeholder = "英語で入力";
      input.spellcheck = false;
      card.appendChild(input);
      // キーボード: Ctrl/⌘ + Enter で答え合わせ
      input.addEventListener("keydown", (e) => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); checkBtn.click(); } });
      // ヒントは最初は非表示。タップしたときだけキーワードを表示
      const hintBox = el("div");
      const hintBtn = el("button", "mini-link", "💡 ヒントを見る");
      hintBtn.addEventListener("click", () => {
        hintBox.innerHTML = '<div class="hint">キーワード： ' +
          q.keywords.map((k) => "「" + escapeHtml(k) + "」").join(" ") + "</div>";
        hintBtn.style.display = "none";
      });
      hintBox.appendChild(hintBtn);
      card.appendChild(hintBox);
      getResult = () => {
        const tokens = normalize(input.value).split(" ");
        return q.keywords.every((k) => tokens.indexOf(normalize(k)) >= 0);
      };
      lock = (ok) => { input.disabled = true; input.classList.add(ok ? "correct" : "wrong"); };
      var canCheck = () => input.value.trim().length > 0;
    }

    // ボタン（答え合わせ / わからない）
    const checkBtn = el("button", "btn btn-ghost", "答え合わせ");
    const giveBtn = el("button", "btn btn-ghost", "❓ わからない");
    const btnRow = el("div");
    btnRow.style.display = "flex";
    btnRow.style.gap = "8px";
    btnRow.style.flexWrap = "wrap";
    btnRow.style.marginTop = "12px";
    btnRow.appendChild(checkBtn);
    btnRow.appendChild(giveBtn);
    const foot = el("div", "test-foot");
    foot.appendChild(btnRow);
    card.appendChild(foot);

    // 採点・答え表示を共通化（giveUp=「わからない」で答えを見たとき）
    function settle(ok, giveUp) {
      if (session.checked[idx]) return;
      session.checked[idx] = true;
      session.correct[idx] = ok;
      // 復習リストの更新（日付がDay番号のもののみ／会話テストは対象外）
      if (typeof item.day === "number") {
        if (ok) clearWrong(item.day, item.qIndex); else markWrong(item.day, item.qIndex);
      }
      lock(ok);
      btnRow.style.display = "none";

      const fb = el("div", "feedback " + (ok ? "ok" : "ng"));
      const head = ok ? "✅ 正解！" : (giveUp ? "📖 答え" : "❌ 不正解");
      let body = "<div class='fb-head'>" + head + "</div>";
      const showAnswer = !ok; // 不正解 or わからない のとき正解を表示
      if (showAnswer) {
        if (q.type === "order") body += "<div>正しい語順：<span class='model'>" + escapeHtml(q.answer.join(" ")) + "</span></div>";
        else if (q.type === "fill") body += "<div>正解例：<span class='model'>" + escapeHtml(q.answer[0]) + "</span></div>";
        else if (q.type === "translate") body += "<div>模範解答：<span class='model'>" + escapeHtml(q.model) + "</span></div>";
        else if (q.type === "choice") body += "<div>正解：<span class='model'>" + escapeHtml(q.options[q.answer]) + "</span></div>";
      } else if (q.type === "translate") {
        body += "<div>模範解答：<span class='model'>" + escapeHtml(q.model) + "</span></div>";
      }
      if (q.explain) body += "<div style='margin-top:4px'>💡 " + escapeHtml(q.explain) + "</div>";
      fb.innerHTML = body;

      const speakText = q.speak ? q.speak :
        q.type === "order" ? q.answer.join(" ") :
        q.type === "translate" ? q.model :
        q.type === "fill" ? q.answer[0] : q.options[q.answer];
      if (speakText && speechOK) {
        const sb = speakButton(speakText);
        sb.style.marginTop = "6px";
        fb.appendChild(sb);
      }
      foot.appendChild(fb);
      onChecked();
    }

    checkBtn.addEventListener("click", () => {
      if (session.checked[idx]) return;
      if (!canCheck()) {
        checkBtn.textContent = "回答を入力してください";
        setTimeout(() => (checkBtn.textContent = "答え合わせ"), 1200);
        return;
      }
      settle(getResult(), false);
    });
    giveBtn.addEventListener("click", () => settle(false, true));
  }

  /* ============================================================
     結果ページ
     ============================================================ */
  function renderResult() {
    window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
    const total = session.items.length;
    const correct = session.correct.filter(Boolean).length;
    const pct = Math.round((correct / total) * 100);

    // 進捗保存
    if (session.mode === "day") {
      const r = dayRecord(session.day);
      r.attempts = (r.attempts || 0) + 1;
      r.best = Math.max(r.best || 0, pct);
      r.completed = true;
      progress.days[session.day] = r;
      saveProgress(progress);
      recordActivityToday();
    } else if (session.mode === "final") {
      progress.finalBest = Math.max(progress.finalBest || 0, pct);
      saveProgress(progress);
      recordActivityToday();
    } else if (session.mode === "conv") {
      progress.convBest = Math.max(progress.convBest || 0, pct);
      saveProgress(progress);
      recordActivityToday();
    } else if (session.mode === "phrase") {
      progress.phraseBest = Math.max(progress.phraseBest || 0, pct);
      saveProgress(progress);
      recordActivityToday();
    } else if (session.mode === "dialogue") {
      progress.dialogueBest = Math.max(progress.dialogueBest || 0, pct);
      saveProgress(progress);
      recordActivityToday();
    } else if (session.mode === "listen") {
      progress.listenBest = Math.max(progress.listenBest || 0, pct);
      saveProgress(progress);
      recordActivityToday();
    } else if (session.mode === "essential") {
      progress.essentialBest = Math.max(progress.essentialBest || 0, pct);
      saveProgress(progress);
      recordActivityToday();
    } else if (session.mode === "review") {
      recordActivityToday();
    }

    app.innerHTML = "";
    const wrap = el("div", "fade-in");

    let msg, emoji;
    if (session.mode === "conv") {
      // 会話できそう度の判定
      if (pct >= 80) { msg = "会話デビューできそう！基本のやり取りはバッチリ"; emoji = "🎉"; }
      else if (pct >= 60) { msg = "あと少し！定番フレーズを復習すれば会話できます"; emoji = "💪"; }
      else { msg = "まずはフレーズ集と会話シナリオで定番表現を覚えよう"; emoji = "📒"; }
    } else if (pct >= 90) { msg = "すばらしい！完璧に近いです"; emoji = "🏆"; }
    else if (pct >= 70) { msg = "よくできました！"; emoji = "🎉"; }
    else if (pct >= 50) { msg = "もう少し！復習して再挑戦"; emoji = "💪"; }
    else { msg = "復習して基礎を固めましょう"; emoji = "📚"; }

    const color = pct >= 70 ? "var(--green)" : (pct >= 50 ? "var(--amber)" : "var(--red)");
    const circ = 2 * Math.PI * 60;
    const offset = circ * (1 - pct / 100);

    const hero = el("div", "card result-hero");
    hero.innerHTML =
      '<div class="score-ring">' +
      '<svg width="140" height="140" viewBox="0 0 140 140">' +
      '<circle cx="70" cy="70" r="60" fill="none" stroke="var(--line)" stroke-width="12"/>' +
      '<circle cx="70" cy="70" r="60" fill="none" stroke="' + color + '" stroke-width="12" stroke-linecap="round" ' +
      'stroke-dasharray="' + circ + '" stroke-dashoffset="' + offset + '"/>' +
      "</svg>" +
      '<div class="pct" style="color:' + color + '">' + pct + "%</div></div>" +
      '<div class="result-msg">' + emoji + " " + msg + "</div>" +
      '<div class="result-detail">' + total + " 問中 " + correct + " 問正解" +
      (session.mode === "day" ? "（ベスト " + dayRecord(session.day).best + "%）" :
        session.mode === "final" ? "（ベスト " + progress.finalBest + "%）" :
        session.mode === "conv" ? "（ベスト " + progress.convBest + "%）" :
        session.mode === "phrase" ? "（ベスト " + progress.phraseBest + "%）" :
        session.mode === "dialogue" ? "（ベスト " + progress.dialogueBest + "%）" :
        session.mode === "listen" ? "（ベスト " + progress.listenBest + "%）" :
        session.mode === "essential" ? "（ベスト " + progress.essentialBest + "%）" : "") + "</div>";
    wrap.appendChild(hero);

    const actions = el("div", "result-actions");

    const wrongInThis = session.items.filter((_, i) => !session.correct[i]).length;
    if (wrongInThis > 0) {
      const retryWrong = el("button", "btn btn-primary", "間違えた " + wrongInThis + " 問を解き直す");
      retryWrong.addEventListener("click", () => {
        const items = session.items.filter((_, i) => !session.correct[i]);
        session = {
          mode: session.mode,
          day: session.day,
          title: (session.mode === "day" ? "Day " + session.day + "：" : "") + "間違えた問題の再テスト",
          items: items,
          checked: new Array(items.length).fill(false),
          correct: new Array(items.length).fill(false),
        };
        renderTest();
      });
      actions.appendChild(retryWrong);
    }

    if (session.mode === "day") {
      const retry = el("button", "btn btn-ghost", "もう一度テスト");
      retry.addEventListener("click", () => startTest(session.day));
      actions.appendChild(retry);
    } else if (session.mode === "final") {
      const retry = el("button", "btn btn-ghost", "別の15問で再挑戦");
      retry.addEventListener("click", () => startFinalTest());
      actions.appendChild(retry);
    } else if (session.mode === "conv") {
      const retry = el("button", "btn btn-ghost", "もう一度判定する");
      retry.addEventListener("click", () => startConvTest());
      actions.appendChild(retry);
      const hub = el("button", "btn btn-ghost", "実践会話に戻る");
      hub.addEventListener("click", renderConversationHub);
      actions.appendChild(hub);
    } else if (session.mode === "phrase" || session.mode === "dialogue" || session.mode === "listen" || session.mode === "essential") {
      const retry = el("button", "btn btn-ghost", "別の問題でもう一度");
      const againMap = { phrase: startPhraseQuiz, dialogue: startDialogueQuiz, listen: startListeningQuiz, essential: startEssentialsQuiz };
      const again = againMap[session.mode];
      retry.addEventListener("click", () => again());
      actions.appendChild(retry);
      const hub = el("button", "btn btn-ghost", "実践会話に戻る");
      hub.addEventListener("click", renderConversationHub);
      actions.appendChild(hub);
    }

    const home = el("button", "btn btn-ghost", "ホームへ");
    home.addEventListener("click", renderDashboard);
    actions.appendChild(home);

    wrap.appendChild(actions);
    app.appendChild(wrap);
    window.scrollTo(0, 0);
  }

  /* ============================================================
     復習ビュー（ナビ用）
     ============================================================ */
  function renderReview() {
    if (progress.wrong.length === 0) {
      window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
      app.innerHTML = "";
      const wrap = el("div", "fade-in empty");
      wrap.innerHTML =
        '<div class="big">🎯</div>' +
        "<h3>復習する問題はありません</h3>" +
        "<p>テストで間違えた問題が、ここに自動でたまります。</p>";
      const home = el("button", "btn btn-primary", "ホームへ");
      home.addEventListener("click", renderDashboard);
      wrap.appendChild(home);
      app.appendChild(wrap);
      return;
    }
    startReview();
  }

  /* ============================================================
     実践会話モジュール
     ============================================================ */
  function renderConversationHub() {
    window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
    app.innerHTML = "";
    const wrap = el("div", "fade-in");

    const hero = el("div", "conv-hero");
    hero.innerHTML =
      "<h1>💬 実践会話 — 会話デビューを目指す</h1>" +
      "<p>テストが解けることと「会話できる」ことは別もの。挨拶から会話の流れ、" +
      "普段使いのフレーズを身につけて、実際のやり取りに備えましょう。</p>";
    wrap.appendChild(hero);

    const grid = el("div", "conv-grid");
    const cards = [
      { ic: "📒", title: "普段使いフレーズ集", desc: "あいさつ・あいづち・お願いなど、会話で即使える定番表現。", go: renderPhrases },
      { ic: "🎭", title: "会話シナリオ（流れ）", desc: "カフェ・道案内・空港・ホテルなど、自然な会話の流れを場面で学ぶ。", go: renderDialogues },
      { ic: "🔢", title: "数字・時刻・お金", desc: "買い物や予約で必須の実用表現。専用クイズ付き。", go: renderEssentials },
      { ic: "🎧", title: "リスニング", desc: "音声を聞いて意味を選ぶ・書き取る。聞き取り力を鍛える。", go: startListeningQuiz },
      { ic: "🎤", title: "スピーキング練習", desc: "マイクで話して発音を判定（Chrome系推奨）。実際に声に出す練習。", go: renderSpeakingPractice },
      { ic: "🎯", title: "会話力判定テスト", desc: "「これができれば会話できそう」を測る、デイリーとは別の実践テスト。" +
        (progress.convBest > 0 ? "（ベスト " + progress.convBest + "%）" : ""), go: startConvTest },
    ];
    cards.forEach((c) => {
      const card = el("div", "conv-card");
      card.innerHTML = '<div class="ic">' + c.ic + "</div><h3>" + c.title + "</h3><p>" + c.desc + "</p>";
      card.addEventListener("click", c.go);
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    app.appendChild(wrap);
    window.scrollTo(0, 0);
  }

  function renderPhrases() {
    window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
    app.innerHTML = "";
    const wrap = el("div", "fade-in");
    const back = el("button", "back-link", "← 実践会話に戻る");
    back.addEventListener("click", renderConversationHub);
    wrap.appendChild(back);
    wrap.appendChild(el("h2", "section-title", "📒 普段使いフレーズ集"));
    wrap.appendChild(el("p", "section-sub", "🔊 を押すと発音が聞けます。声に出して練習しましょう。"));

    const quizBtn = el("button", "btn btn-primary btn-block", "📝 フレーズクイズに挑戦" +
      (progress.phraseBest > 0 ? "（ベスト " + progress.phraseBest + "%）" : ""));
    quizBtn.style.marginBottom = "18px";
    quizBtn.addEventListener("click", () => startPhraseQuiz());
    wrap.appendChild(quizBtn);

    PHRASES.forEach((cat) => {
      const card = el("div", "card phrase-cat");
      card.appendChild(el("span", "block-label", cat.category));
      cat.items.forEach((p) => {
        const item = el("div", "phrase-item");
        item.appendChild(speakButton(p.en));
        const t = el("div");
        t.innerHTML = '<div class="phrase-en">' + escapeHtml(p.en) + '</div><div class="phrase-ja">' + escapeHtml(p.ja) + "</div>";
        item.appendChild(t);
        card.appendChild(item);
      });
      wrap.appendChild(card);
    });
    app.appendChild(wrap);
    window.scrollTo(0, 0);
  }

  function renderDialogues() {
    window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
    app.innerHTML = "";
    const wrap = el("div", "fade-in");
    const back = el("button", "back-link", "← 実践会話に戻る");
    back.addEventListener("click", renderConversationHub);
    wrap.appendChild(back);
    wrap.appendChild(el("h2", "section-title", "🎭 会話シナリオ（流れ）"));
    wrap.appendChild(el("p", "section-sub", "場面ごとの自然な会話の流れです。「▶ 通して聞く」で会話全体を再生できます。"));

    const quizBtn = el("button", "btn btn-primary btn-block", "📝 会話シナリオクイズに挑戦" +
      (progress.dialogueBest > 0 ? "（ベスト " + progress.dialogueBest + "%）" : ""));
    quizBtn.style.marginBottom = "18px";
    quizBtn.addEventListener("click", () => startDialogueQuiz());
    wrap.appendChild(quizBtn);

    DIALOGUES.forEach((d) => {
      const card = el("div", "card dialogue-scene");
      const head = el("div");
      head.style.display = "flex";
      head.style.alignItems = "center";
      head.style.justifyContent = "space-between";
      head.style.flexWrap = "wrap";
      head.style.gap = "8px";
      head.style.marginBottom = "6px";
      head.appendChild(el("span", "block-label", d.scene));
      const playBtn = el("button", "btn btn-ghost", "▶ 通して聞く");
      playBtn.style.padding = "8px 14px";
      playBtn.style.fontSize = "14px";
      playBtn.addEventListener("click", () => speakSequence(d.lines.map((l) => l.en), playBtn));
      head.appendChild(playBtn);
      card.appendChild(head);

      d.lines.forEach((l, i) => {
        const line = el("div", "dia-line" + (i % 2 === 1 ? " right" : ""));
        line.appendChild(el("span", "dia-speaker", escapeHtml(l.s)));
        const body = el("div", "dia-body");
        body.innerHTML = '<div class="dia-en">' + escapeHtml(l.en) + '</div><div class="dia-ja">' + escapeHtml(l.ja) + "</div>";
        line.appendChild(body);
        line.appendChild(speakButton(l.en));
        card.appendChild(line);
      });
      wrap.appendChild(card);
    });
    app.appendChild(wrap);
    window.scrollTo(0, 0);
  }

  function startConvTest() {
    const items = shuffle(CONV_TEST).map((q, i) => ({ day: "conv", qIndex: i, q: q }));
    session = {
      mode: "conv",
      title: "🎯 会話力判定テスト（" + items.length + "問）",
      items: items,
      checked: new Array(items.length).fill(false),
      correct: new Array(items.length).fill(false),
    };
    renderTest();
  }

  // 重複しない誤答選択肢を作る
  function pickDistractors(pool, correct, n) {
    const cands = shuffle(pool.filter((x) => x !== correct));
    const out = [];
    for (const c of cands) { if (out.indexOf(c) < 0) out.push(c); if (out.length >= n) break; }
    return out;
  }
  function buildChoiceFromPair(promptText, correct, distractorPool, explain, speak) {
    const opts = shuffle([correct].concat(pickDistractors(distractorPool, correct, 3)));
    const q = { type: "choice", q: promptText, options: opts, answer: opts.indexOf(correct), explain: explain };
    if (speak) q.speak = speak; // 読み上げる英文（答えが日本語の問題用）
    return q;
  }

  // フレーズ集クイズ（日↔英を交互に出題、フレーズ集から自動生成）
  function startPhraseQuiz() {
    const all = [];
    PHRASES.forEach((cat) => cat.items.forEach((p) => all.push(p)));
    const enPool = all.map((p) => p.en);
    const jaPool = all.map((p) => p.ja);
    const picks = shuffle(all).slice(0, Math.min(10, all.length));
    const questions = picks.map((p, i) => {
      if (i % 2 === 0) {
        return buildChoiceFromPair("「" + p.ja + "」を英語で言うと？", p.en, enPool, "「" + p.ja + "」→ " + p.en);
      }
      return buildChoiceFromPair("「" + p.en + "」の意味は？", p.ja, jaPool, p.en + " →「" + p.ja + "」", p.en);
    });
    const items = questions.map((q, i) => ({ day: "phrase", qIndex: i, q: q }));
    session = {
      mode: "phrase",
      title: "📒 フレーズクイズ（" + items.length + "問）",
      items: items,
      checked: new Array(items.length).fill(false),
      correct: new Array(items.length).fill(false),
    };
    renderTest();
  }

  // 会話シナリオクイズ（流れに合う自然な次のセリフを選ぶ、ダイアログから自動生成）
  function startDialogueQuiz() {
    const allLines = [];
    DIALOGUES.forEach((d) => d.lines.forEach((l) => allLines.push(l.en)));
    // 各ダイアログから 2行目以降を候補に
    const spots = [];
    DIALOGUES.forEach((d) => {
      for (let i = 1; i < d.lines.length; i++) spots.push({ d: d, i: i });
    });
    const picks = shuffle(spots).slice(0, Math.min(10, spots.length));
    const questions = picks.map((s) => {
      const prev = s.d.lines[s.i - 1];
      const correct = s.d.lines[s.i];
      const promptText = "【" + s.d.scene + "】 直前のセリフ：" + prev.s + "「" + prev.en + "（" + prev.ja + "）」。次に続く自然なセリフは？";
      return buildChoiceFromPair(promptText, correct.en, allLines, "意味：" + correct.ja);
    });
    const items = questions.map((q, i) => ({ day: "dialogue", qIndex: i, q: q }));
    session = {
      mode: "dialogue",
      title: "🎭 会話シナリオクイズ（" + items.length + "問）",
      items: items,
      checked: new Array(items.length).fill(false),
      correct: new Array(items.length).fill(false),
    };
    renderTest();
  }

  // 例文・会話・フレーズを集めた英文プール（リスニング/スピーキング用）
  function sentencePool() {
    const pool = [];
    CURRICULUM.forEach((d) => d.examples.forEach((e) => pool.push({ en: e.en, ja: e.ja })));
    DIALOGUES.forEach((d) => d.lines.forEach((l) => pool.push({ en: l.en, ja: l.ja })));
    PHRASES.forEach((c) => c.items.forEach((p) => pool.push({ en: p.en, ja: p.ja })));
    return pool;
  }

  // リスニング/ディクテーションクイズ（音声を聞いて意味を選ぶ・書き取る）
  function startListeningQuiz() {
    const pool = sentencePool();
    const jaPool = pool.map((p) => p.ja);
    const picks = shuffle(pool).slice(0, 10);
    const questions = picks.map((p, i) => {
      const words = p.en.split(/\s+/).length;
      if (i % 2 === 1 && words <= 6) {
        // ディクテーション（短文のみ）
        return { type: "dictation", q: "🎧 聞こえた英文を入力しましょう", audio: p.en, speak: p.en, answer: [p.en], explain: "意味：" + p.ja };
      }
      // リスニング選択（意味を選ぶ）
      const q = buildChoiceFromPair("🎧 音声を聞いて、合う意味を選びましょう", p.ja, jaPool, "英文：" + p.en, p.en);
      q.type = "listen";
      q.audio = p.en;
      return q;
    });
    const items = questions.map((q, i) => ({ day: "listen", qIndex: i, q: q }));
    session = {
      mode: "listen",
      title: "🎧 リスニング（" + items.length + "問）",
      items: items,
      checked: new Array(items.length).fill(false),
      correct: new Array(items.length).fill(false),
    };
    renderTest();
  }

  // 実用クイズ（数字・時刻・お金）
  function startEssentialsQuiz() {
    const all = [];
    ESSENTIALS.forEach((g) => g.items.forEach((it) => all.push(it)));
    const enPool = all.map((x) => x.en);
    const jaPool = all.map((x) => x.ja);
    const picks = shuffle(all).slice(0, Math.min(10, all.length));
    const questions = picks.map((p, i) =>
      i % 2 === 0
        ? buildChoiceFromPair("「" + p.ja + "」を英語で？", p.en, enPool, "「" + p.ja + "」→ " + p.en)
        : buildChoiceFromPair("「" + p.en + "」の意味は？", p.ja, jaPool, p.en + " →「" + p.ja + "」", p.en));
    const items = questions.map((q, i) => ({ day: "essential", qIndex: i, q: q }));
    session = {
      mode: "essential",
      title: "🔢 実用クイズ（" + items.length + "問）",
      items: items,
      checked: new Array(items.length).fill(false),
      correct: new Array(items.length).fill(false),
    };
    renderTest();
  }

  // 数字・時刻・お金 レッスンページ
  function renderEssentials() {
    window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
    app.innerHTML = "";
    const wrap = el("div", "fade-in");
    const back = el("button", "back-link", "← 実践会話に戻る");
    back.addEventListener("click", renderConversationHub);
    wrap.appendChild(back);
    wrap.appendChild(el("h2", "section-title", "🔢 数字・時刻・お金"));
    wrap.appendChild(el("p", "section-sub", "買い物・予約・道案内で必ず使う実用表現です。🔊 で発音を確認。"));

    const quizBtn = el("button", "btn btn-primary btn-block", "📝 実用クイズに挑戦" +
      (progress.essentialBest > 0 ? "（ベスト " + progress.essentialBest + "%）" : ""));
    quizBtn.style.marginBottom = "18px";
    quizBtn.addEventListener("click", () => startEssentialsQuiz());
    wrap.appendChild(quizBtn);

    ESSENTIALS.forEach((g) => {
      const card = el("div", "card phrase-cat");
      card.appendChild(el("span", "block-label", g.title));
      g.items.forEach((it) => {
        const item = el("div", "phrase-item");
        item.appendChild(speakButton(it.en));
        const t = el("div");
        t.innerHTML = '<div class="phrase-en">' + escapeHtml(it.en) + '</div><div class="phrase-ja">' + escapeHtml(it.ja) + "</div>";
        item.appendChild(t);
        card.appendChild(item);
      });
      wrap.appendChild(card);
    });
    app.appendChild(wrap);
    window.scrollTo(0, 0);
  }

  // スピーキング練習（マイクで話して発音判定・Chrome系のみ）
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  function renderSpeakingPractice() {
    window.speechSynthesis && window.speechSynthesis.cancel(); clearFcKeys();
    app.innerHTML = "";
    const wrap = el("div", "fade-in");
    const back = el("button", "back-link", "← 実践会話に戻る");
    back.addEventListener("click", renderConversationHub);
    wrap.appendChild(back);
    wrap.appendChild(el("h2", "section-title", "🎤 スピーキング練習"));

    if (!SpeechRec) {
      const note = el("div", "card");
      note.innerHTML = "<p>この機能は音声認識（Web Speech API）を使います。<br>" +
        "<strong>Google Chrome / Microsoft Edge</strong> でのご利用をおすすめします。<br>" +
        "（マイクの使用許可と、httpsまたはlocalhostでの表示が必要です。ファイルを直接開いた場合は使えないことがあります。）</p>";
      wrap.appendChild(note);
      app.appendChild(wrap);
      return;
    }
    wrap.appendChild(el("p", "section-sub", "お手本を聞いて、🎤 を押して英語で話してみましょう。認識結果と照らして判定します。"));

    const pool = shuffle(sentencePool());
    let idx = 0;

    const card = el("div", "card");
    const target = el("div");
    target.style.fontSize = "20px";
    target.style.fontWeight = "700";
    target.style.margin = "6px 0";
    const targetJa = el("div", "phrase-ja");
    card.appendChild(target);
    card.appendChild(targetJa);

    const ctrls = el("div");
    ctrls.style.display = "flex";
    ctrls.style.flexWrap = "wrap";
    ctrls.style.gap = "8px";
    ctrls.style.marginTop = "14px";
    const listenBtn = el("button", "btn btn-ghost", "🔊 お手本を聞く");
    const micBtn = el("button", "btn btn-primary", "🎤 話す");
    const nextBtn = el("button", "btn btn-ghost", "次へ →");
    ctrls.appendChild(listenBtn);
    ctrls.appendChild(micBtn);
    ctrls.appendChild(nextBtn);
    card.appendChild(ctrls);

    const fb = el("div");
    fb.style.marginTop = "12px";
    card.appendChild(fb);
    wrap.appendChild(card);

    function load() {
      const p = pool[idx % pool.length];
      target.textContent = p.en;
      targetJa.textContent = p.ja;
      fb.innerHTML = "";
      micBtn.disabled = false;
      micBtn.textContent = "🎤 話す";
    }
    listenBtn.addEventListener("click", () => speak(pool[idx % pool.length].en, listenBtn));
    nextBtn.addEventListener("click", () => { idx++; load(); });

    micBtn.addEventListener("click", () => {
      const targetEn = pool[idx % pool.length].en;
      const rec = new SpeechRec();
      rec.lang = "en-US";
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      micBtn.disabled = true;
      micBtn.textContent = "🎙️ 聞き取り中...";
      fb.innerHTML = "";
      rec.onresult = (ev) => {
        const said = ev.results[0][0].transcript;
        const got = normalize(said).split(" ").filter(Boolean);
        const want = normalize(targetEn).split(" ").filter(Boolean);
        const pl = got.slice();
        let match = 0;
        want.forEach((w) => { const k = pl.indexOf(w); if (k >= 0) { match++; pl.splice(k, 1); } });
        const score = Math.round((match / want.length) * 100);
        const ok = score >= 70;
        fb.innerHTML =
          '<div class="feedback ' + (ok ? "ok" : "ng") + '">' +
          "<div class='fb-head'>" + (ok ? "✅ いい発音です！" : "🔁 もう一度挑戦") + "（一致度 " + score + "%）</div>" +
          "<div>認識結果：<span class='model'>" + escapeHtml(said) + "</span></div>" +
          "<div>お手本：<span class='model'>" + escapeHtml(targetEn) + "</span></div></div>";
        recordActivityToday();
      };
      rec.onerror = (ev) => {
        fb.innerHTML = '<div class="feedback ng"><div class="fb-head">🎤 認識できませんでした</div>' +
          "<div>マイクの許可を確認して、もう一度お試しください。（" + escapeHtml(ev.error || "") + "）</div></div>";
      };
      rec.onend = () => { micBtn.disabled = false; micBtn.textContent = "🎤 話す"; };
      try { rec.start(); } catch (e) { micBtn.disabled = false; micBtn.textContent = "🎤 話す"; }
    });

    load();
    app.appendChild(wrap);
    window.scrollTo(0, 0);
  }

  /* ============================================================
     データのエクスポート / インポート
     ============================================================ */
  function exportData() {
    const data = {
      app: "eikaiwa_bootcamp",
      version: 1,
      exportedAt: new Date().toISOString(),
      progress: progress,
      theme: theme,
      voice: voiceSettings,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "eikaiwa-progress-" + todayKey() + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function importData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json,.json";
    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          if (!data || !data.progress) throw new Error("形式が違います");
          confirmDialog("このバックアップで現在の進捗を上書きします。よろしいですか？", () => {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data.progress));
            if (data.theme) localStorage.setItem(THEME_KEY, data.theme);
            if (data.voice) localStorage.setItem(VOICE_KEY, JSON.stringify(data.voice));
            location.reload();
          });
        } catch (e) {
          confirmDialog("読み込みに失敗しました：" + (e.message || "不明なエラー") + "（このボタンを押すと閉じます）", () => {});
        }
      };
      reader.readAsText(file);
    });
    input.click();
  }

  /* ============================================================
     リセット（確認モーダル）
     ============================================================ */
  const overlay = document.getElementById("modal-overlay");
  const modalMsg = document.getElementById("modal-message");
  const modalOk = document.getElementById("modal-ok");
  const modalCancel = document.getElementById("modal-cancel");
  let onConfirm = null;

  function confirmDialog(message, cb) {
    modalMsg.textContent = message;
    onConfirm = cb;
    overlay.hidden = false;
  }
  modalCancel.addEventListener("click", () => { overlay.hidden = true; onConfirm = null; });
  overlay.addEventListener("click", (e) => { if (e.target === overlay) { overlay.hidden = true; onConfirm = null; } });
  modalOk.addEventListener("click", () => {
    overlay.hidden = true;
    if (onConfirm) onConfirm();
    onConfirm = null;
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    confirmDialog("学習の進捗・スコア・復習リスト・暗記状況・連続記録をすべて消去して最初からやり直します。よろしいですか？", () => {
      progress = { days: {}, wrong: [], mastered: {}, streak: { count: 0, lastDate: null }, finalBest: 0, convBest: 0, phraseBest: 0, dialogueBest: 0, listenBest: 0, essentialBest: 0 };
      saveProgress(progress);
      renderDashboard();
    });
  });

  /* ============================================================
     ナビゲーション
     ============================================================ */
  document.getElementById("brand").addEventListener("click", renderDashboard);
  document.querySelectorAll(".nav-btn[data-nav]").forEach((b) => {
    b.addEventListener("click", () => {
      const nav = b.getAttribute("data-nav");
      if (nav === "dashboard") renderDashboard();
      else if (nav === "review") renderReview();
      else if (nav === "conversation") renderConversationHub();
    });
  });
  document.getElementById("theme-btn").addEventListener("click", toggleTheme);

  /* ---------- PWA（オフライン対応） ---------- */
  // http(s) 経由のときだけ Service Worker を登録（file:// では無効）
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => { /* 失敗しても通常動作 */ });
    });
  }

  /* ---------- 起動 ---------- */
  renderDashboard();
})();
