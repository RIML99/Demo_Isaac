
//confirmar si soporta sw
if ( navigator.serviceWorker ){
    //alert("Soporta la que puede"):
    navigator.serviceWorker.register("Demo_Isaac/sw.js");
}
else{
    alert(": No soporto... tampoco el SW")
}
