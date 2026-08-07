const CACHE='kow-v4.2.0';
const ASSETS=[
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './background-portrait.jpg',
  './background-landscape.jpg',
  './officers.csv',
  './officers.json',
  './officer-s7-roisin.jpg',
  './officer-s7-barbara.jpg',
  './officer-s6-regina.jpg',
  './officer-s6-veronica.jpg',
  './officer-s7-code.jpg',
  './officer-s7-klara.jpg',
  './officer-s7-kamila.jpg',
  './officer-s7-stella.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
