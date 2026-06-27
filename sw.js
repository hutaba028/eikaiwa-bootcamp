/* 7日間 英会話ブートキャンプ — Service Worker
   方針：ネットワーク優先（オンラインなら常に最新を配信＝更新が全員に反映）。
   オフライン時のみキャッシュから配信。 */
const CACHE = "eikaiwa-bootcamp-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/data.js",
  "./js/curriculum-month.js",
  "./js/conversation.js",
  "./js/app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  // オンライン：最新を取得しキャッシュも更新／オフライン：キャッシュから配信
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(e.request).then((cached) => cached || caches.match("./index.html"))
      )
  );
});
