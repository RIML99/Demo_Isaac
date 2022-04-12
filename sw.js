///console.log("Hola SW");
///self.addEventListener('fetch' , event =>{

    ////event.respondWith( fetch(event.request));

////});

var appShellFiles = [
  '/Demo_Isaac/index.html',
  '/Demo_Isaac/about.html',
  '/Demo_Isaac/images/favicon.png',
  '/Demo_Isaac/plugins/bootstrap/bootstrap.min.css',
  '/Demo_Isaac/plugins/slick/slick.css',
  '/Demo_Isaac/plugins/themify-icons/themify-icons.css',
  '/Demo_Isaac/css/style.css',
  '/Demo_Isaac/images/logo.png',
  '/Demo_Isaac/images/illustrations/leaf-bg.png',
  '/Demo_Isaac/images/illustrations/dots-cyan.png',
  '/Demo_Isaac/images/illustrations/leaf-orange.png',
  '/Demo_Isaac/images/illustrations/dots-orange.png',
  '/Demo_Isaac/images/illustrations/leaf-yellow.png',
  '/Demo_Isaac/images/illustrations/leaf-cyan.png',
  '/Demo_Isaac/images/illustrations/dots-group-orange.png',
  '/Demo_Isaac/images/illustrations/leaf-pink-round.png',
  '/Demo_Isaac/images/illustrations/leaf-cyan-2.png',
  '/Demo_Isaac/images/experience/icon-1.png',
  '/Demo_Isaac/images/experience/icon-2.png',
  '/Demo_Isaac/images/experience/icon-3.png',
  '/Demo_Isaac/images/portfolio/item-1.png',
  '/Demo_Isaac/images/portfolio/item-2.png',
  '/Demo_Isaac/images/portfolio/item-3.png',
  '/Demo_Isaac/images/portfolio/item-4.png',
  '/Demo_Isaac/images/portfolio/item-5.png',
  '/Demo_Isaac/images/testimonial/client-1.png',
  '/Demo_Isaac/images/backgrounds/education-bg.png',
  '/Demo_Isaac/plugins/jQuery/jquery.min.js',
  '/Demo_Isaac/plugins/bootstrap/bootstrap.min.js',
  '/Demo_Isaac/plugins/slick/slick.min.js',
  '/Demo_Isaac/plugins/shuffle/shuffle.min.js',
  '/Demo_Isaac/js/script.js',
];

self.addEventListener('install', event => {

  const endInstall = caches.open('box').then( cache =>{
    return cache.addAll(appShellFiles);
  });

  event.waitUntil( endInstall);

  //self.skipWaiting();
});

self.addEventListener('fetch', e =>{

  const respuesta = caches.open( 'box' ).then( cache => {

         fetch( e.request ).then( newRes => 
                 cache.put( e.request, newRes ));

         return cache.match( e.request );

     });

     e.respondWith( respuesta );
});
