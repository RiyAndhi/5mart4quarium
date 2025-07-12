const CACHE_NAME = 'smart-aquarium-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/assets/css/style-login.css',
  '/assets/css/style.css',
  '/assets/img/icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
