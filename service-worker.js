var dataCacheName = 'GPACalculator';
var cacheName = 'GPACalculator';
var filesToCache = ["/GPACalculator/index.html", "/GPACalculator/js/app.js", "/GPACalculator/js/bootstrap.min.js", "/GPACalculator/js/jquery-3.2.1.min.js", "/GPACalculator/css/bootstrap.min.css", "/GPACalculator/css/style.css",
"/GPACalculator/images/logo-128x128.png","/GPACalculator/images/logo-144x144.png","/GPACalculator/images/logo-152x152.png","/GPACalculator/images/logo-192x192.png","/GPACalculator/images/logo-256x256.png","/GPACalculator/manifest.json"];

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
