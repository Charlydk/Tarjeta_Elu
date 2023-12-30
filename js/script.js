const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('sec');

//Fecha futuro

const countdownDate = new Date('Jan 12, 2024 22:00:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
},1000)



// /* 1. Carga asíncrona de la API Iframe de YouTube */

// var tag = document.createElement('script'); //Creación de un elemento <script>

// tag.src = "https://www.youtube.com/iframe_api"; //Definición del src del <script> 

// var firstScriptTag = document.getElementsByTagName('script')[0]; //Se toma el primero de todos los elementos <script> que hay en <head>;
// //en mi caso es uno de jQuery que necesita Bootstrap para su funcionamiento

// var newNode = firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); //Inserta un nodo (tag) antes del nodo de referencia (firstScriptTag) como hijo de un nodo padre (firstScriptTag.parentNode) indicado
// //tag es el <script> creado
// //firstScriptTag es el primer <script> del <head>
// //firstScriptTag.parentNode es todo el <head>
// //newNode equivale a tag
// //Creo que lo que hace es simplemente insertar el nuevo <script> como el primero del <head>


// /* 2. Función que crea un <iframe> conteniendo el reproductor de YouTube */

// function onYouTubeIframeAPIReady() 
// {
//   var caja = document.getElementsByClassName("caja-youtube"); //<span> vacío
//   var enlaceYT = document.getElementsByClassName("audio-youtube"); //<span> con el enlace de YouTube de cada canción
//   var imagen = document.createElement("img"); //Creación de un elemento <img>
  
//   imagen.setAttribute("class", "imagen-youtube"); //Le adjudica un id a la imagen
//   imagen.style.cssText = "cursor: pointer; width: 40px; margin-top: 1.5px;"; //Le da estilos CSS a la imagen
  
//   enlaceYT.appendChild(imagen); //Añade la imagen al <span> que contiene el enlace de YouTube

//   var div = document.createElement("div"); //Creación de un <div>
//   div.setAttribute("class", "reproductor-youtube"); //Le adjudica un id al div
//   caja.appendChild(div); //Añade el div al <span> vacío

//   var toggleButton = function(play) //Controla que se muestre el botón de encendido o de pausa
//   {
//     var boton = play ? "GddldI3.png" : "XrAWYmu.png"; //Si play = true muestra una imagen (botón de encendido) y si no otra (botón de pausa)
    
//     imagen.setAttribute("src", "https://i.imgur.com/" + boton); //Le añade el src apropiado al elemento <img> creado antes
//   }

//   var reproductor = new YT.Player("reproductor-youtube", //Creación de un objeto "reproductor" a partir de la clase YT.Player proporcionada por la API, que además relaciona con el <div> creado antes mediante su id
//   {
//     height: "0", //Características del objeto
//     width: "0", //Altura y anchura nulas
//     videoId: enlaceYT.dataset.video, //Id del vídeo
//     playerVars: 
//     {
//       autoplay: enlaceYT.dataset.autoplay, //Inicio automático
//       loop: enlaceYT.dataset.loop, //Reproducción en bucle
//     },
//     events: //Eventos
//     {
//       'onReady': function(e) //Creo que hace referencia a cuando se termina de cargar el DOM
//       {
//         reproductor.setPlaybackQuality("small");
//         toggleButton(reproductor.getPlayerState() !== YT.PlayerState.CUED);
//       },
//       'onStateChange': function(e) //Si termina el vídeo, se cambia la imagen a pausa
//       {
//         if(e.data === YT.PlayerState.ENDED) toggleButton(false);
//       }
//     }
//   });

//   enlaceYT.onclick = function() //Al hacer click en el <span> que contiene el enlace de YouTube
//   {
//     if(reproductor.getPlayerState() === YT.PlayerState.PLAYING || reproductor.getPlayerState() === YT.PlayerState.BUFFERING) 
//     { 
//       reproductor.pauseVideo(); //Se pausa el objeto reproductor
//       toggleButton(false);
//     } 
//     else 
//     {
//       reproductor.playVideo(); //Se enciende el objeto reproductor
//       toggleButton(true);
//     };
//   };
// };




 



var myMusic= document.getElementById("music");



function play() {
myMusic.play();

}

 
function pause() {
myMusic.pause();

}




// confirm("qweqwe")

// if (confirm) {
//   play()
  
// } else {
  
// }



// const playSound = function() {
 
//   play();
//   document.removeEventListener('click', playSound);
// }
// document.addEventListener('click', playSound);



// let isBoss = confirm("¿Eres el jefe?");

// playSound
