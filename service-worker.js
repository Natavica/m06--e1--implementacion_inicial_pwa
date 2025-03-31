

const STATIC_CACHE = "hospital-v1";

const APP_SHELL = [
'/',  
  '/index.html', 
  '/equipo.html', 
  '/contacto.html', 
  '/assets/scss/main.css', 
  '/assets/js/navbar.js', 
  '/assets/js/promp.js', 
  '/assets/js/script.js', 
  '/assets/images/hospital.jpeg', //
  '/assets/images/logo--swh.png', 
  '/assets/images/profesional--c3po.png', 
  '/assets/images/profesional--vader.png', 
  '/assets/images/profesional--chewie.png', 
  '/assets/images/profesional--yoda.png' 
];

// self.addEventListener("install", (e) => {
//   const cacheStatic = caches
//     .open(STATIC_CACHE)
//     .then((cache) => cache.addAll(APP_SHELL));

//   e.waitUntil(cacheStatic);
// });

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch((err) => {
        console.error('Error al agregar archivos al caché:', err);
      })
  );
});

// self.addEventListener("fetch", (e) => {
//   console.log("fetch! ", e.request);
//   e.respondWith(
//     caches
//       .match(e.request)
//       .then((res) => {
//         return res || fetch(e.request);
//       })
//       .catch(console.log)
//   );
//   //   e.waitUntil(response);
// });



self.addEventListener("fetch", (e) => {
  console.log("fetch! ", e.request);
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        // Si la solicitud está en caché, devolverla
        if (res) {
          return res;
        }

        // Si no está en caché, hacer la solicitud a la red
        return fetch(e.request).then((networkResponse) => {
          // Verifica si la respuesta es válida para cachearla
          if (networkResponse && networkResponse.ok) {
            // Clona la respuesta antes de usarla
            const clonedResponse = networkResponse.clone();

            // Guardar en caché
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(e.request, clonedResponse);
            });
          }

          return networkResponse;
        });
      })
      .catch(console.log)
  );
});
