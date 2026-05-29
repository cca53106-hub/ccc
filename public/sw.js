self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          console.log('Clearing Service Worker Cache:', name);
          return caches.delete(name);
        })
      );
    })
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll())
    .then((clients) => {
      clients.forEach((client) => {
        if (client.navigate) {
          client.navigate(client.url);
        }
      });
    })
  );
});

// Bypass fetch intercepts entirely
self.addEventListener('fetch', (event) => {
  // Direct fetch from network to avoid any cache issues
  return;
});
