console.log("Hola SW");
self.addEventListener('fetch' , event =>{

    event.respondWith( fetch(event.request));

});
