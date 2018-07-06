var dataCacheName = 'GPACalculator';
var cacheName = 'GPACalculator';
var filesToCache = ["./index.html", "./js/app.js", "./js/bootstrap.min.js", "./js/jquery-3.2.1.min.js", "./css/bootstrap.min.css", "./css/style.css",
"./images/logo-128x128.png","./images/logo-144x144.png","./images/logo-152x152.png","./images/logo-192x192.png","./images/logo-256x256.png","./manifest.json"];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
