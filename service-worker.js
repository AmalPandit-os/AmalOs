
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('amalos-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/main.js',
        '/manifest.json',
        '/apps/notepad.html',
        '/apps/filemanager.html',
        '/apps/browser.html',
        '/apps/amalai.html'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
