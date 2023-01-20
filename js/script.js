/**
** Navegacion 
** Libreria AOS 
** Menu_Contactenos_Boton_Sandwich 
** Carrusel principal  
** Boton leer mas 
** Carrusel cards 
** Slider carrusel
** Hypervinculos 
** Actividades
** Exposiciones
** Proximos eventos
** Proximos eventos card 1
** Proximos eventos card 2
** Proximos eventos card 3
** Proximos eventos card 4
** Proximos eventos card 5
** Proximos eventos card 6
** Cañete cultural
** Noticias
** Documentales
** Podcast
** Mas noticias
** Libros 
** Pie de pagina
*/


// Libreria AOS 
AOS.init();











// Menu_Contactenos_Boton_Sandwich 
// Cuando hago CLICK .button, .nav TOGGLE 'activo' 
const Menu_Contactenos_Boton_Sandwich = document.querySelector('.Menu_Contactenos_Boton_Sandwich')
const Menu_Contactenos_Navegacion   = document.querySelector('.Menu_Contactenos_Navegacion')

Menu_Contactenos_Boton_Sandwich.addEventListener('click',()=>{
    Menu_Contactenos_Navegacion.classList.toggle('Menu_Contactenos_Navegacion_Activo')
})









// Carrusel principal  
// Constante 
const Carrusel_Principal_Diseño_Contenido = document.querySelectorAll('.Carrusel_Principal_Diseño_Contenido'),
    Carrusel_Principal_Boton_Circular = document.querySelectorAll('.Carrusel_Principal_Boton_Circular');

// Contador 
let counter = 1;
slidefun(counter);

// FUNCIONES 
// Slider automatico 
let timer = setInterval(automaticoSlide, 8000);
function automaticoSlide() {
	counter += 1;
	slidefun(counter);
}

// Mover slider con botones  
function Carrusel_Principal_Movimientio(n) {
	counter += n;
	slidefun(counter);
	resetTime();
}

// Actualizar slider 
function Carrusel_Principal_Actual_Slider(n) {
	counter = n;
	slidefun(counter);
	resetTime();
}

// Resetea el tiempo del slider 
function resetTime() {
	clearInterval(timer);
	timer = setInterval(automaticoSlide, 8000);
}

// Movimiento del slider 
function slidefun(n) {
	let i;
	for(i = 0;i<Carrusel_Principal_Diseño_Contenido.length;i++){
		Carrusel_Principal_Diseño_Contenido[i].style.display = "none";
	}
	for(i = 0;i<Carrusel_Principal_Boton_Circular.length;i++) {
		Carrusel_Principal_Boton_Circular[i].className = Carrusel_Principal_Boton_Circular[i].className.replace(' Carrusel_Principal_Boton_Circular_Activo', '');
	}
	if(n > Carrusel_Principal_Diseño_Contenido.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = Carrusel_Principal_Diseño_Contenido.length;
	   }
	Carrusel_Principal_Diseño_Contenido[counter - 1].style.display = "block";
	Carrusel_Principal_Boton_Circular[counter - 1].className += " Carrusel_Principal_Boton_Circular_Activo";
}









// Boton leer mas 
const Slider_Boton = document.querySelectorAll(".Slider_Boton"); //nodelist con todos los botones

//forEach recorre lalista
Slider_Boton.forEach((btn) => {
  // agregamos evento a cada uno
  btn.addEventListener("click", () => {
    verMas(btn);
  });
});

function verMas(btn) {
  // seleccionamos al padre
  let slider = btn.closest(".Slider_Contenedor");

  //seleccionamos el div oculto
  let oculto = slider.children[1];

  oculto.classList.toggle("Slider_Descripcion_Mostrar_Activo");

  if (oculto.classList.contains("Slider_Descripcion_Mostrar_Activo")) {
    btn.innerHTML = "Leer menos";
  } else {
    btn.innerHTML = "Leer mas";
  }
}

// Elaborado por Eliseo Arévalo, portafolio = https://eliseodesign.github.io 










// Carrusel cards 
var swiper = new Swiper(".slide-content", {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: 'true',
	fade: 'true',
	grabCursor: 'true',
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
  
	breakpoints:{
		0: {
		slidesPerView: 1,
		},
		520: {
		slidesPerView: 2,
		},
		950: {
		slidesPerView: 3,
		},
	},
});









// Slider carrusel
let slider = document.querySelector(".Slider_Carrusel")
let sliderIndividual = document.querySelectorAll(".Slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 20000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}










// Hypervinculos
// Menu 
function Boton_Contactenos(){
	window.open('/Colectivo-Sur-real/html/Contactenos.html', '_blank');
}

function Boton_Integrantes(){
    location.href='/Colectivo-Sur-real/html/Integrantes.html';
}

function Boton_Proyectos_Historicos(){
    location.href='/Colectivo-Sur-real/html/Proyectos_Historicos.html';
}

function Boton_Logeo(){
    window.open('/Colectivo-Sur-real/html/Logeo.html', '_blank');
}

// Sub menu 
function Boton_Colectivo_Sur_Real(){
    location.href='/Colectivo-Sur-real/index.html';
}

function Boton_Actividades(){
    location.href='/Colectivo-Sur-real/html/Actividades.html';
}

function Boton_Cañete_Cultural(){
    location.href='/Colectivo-Sur-real/html/Cañete_Cultural.html';
}

function Boton_Noticias(){
    location.href='/Colectivo-Sur-real/html/Noticias.html';
}

function Boton_Libros(){
    location.href='/Colectivo-Sur-real/html/Libros.html';
}











// Actividades
// Exposiciones
function Exposiciones_1(){
    window.open('https://www.google.com/search?client=opera-gx&q=exposiciones&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Exposiciones_2(){
    window.open('https://www.google.com/search?client=opera-gx&q=exposiciones&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Exposiciones_3(){
    window.open('https://www.google.com/search?client=opera-gx&q=exposiciones&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Exposiciones_4(){
    window.open('https://www.google.com/search?client=opera-gx&q=exposiciones&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Exposiciones_5(){
    window.open('https://www.google.com/search?client=opera-gx&q=exposiciones&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Exposiciones_6(){
    window.open('https://www.google.com/search?client=opera-gx&q=exposiciones&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}











// Proximos eventos
function Proximos_Eventos_Mapa_1(){
    window.open('https://www.google.com/maps/search/maps/@-12.5730429,-77.2411409,9z/data=!3m1!4b1', '_blank');
}

function Proximos_Eventos_Mapa_2(){
    window.open('https://www.google.com/maps/search/maps/@-12.5730429,-77.2411409,9z/data=!3m1!4b1', '_blank');
}

function Proximos_Eventos_Mapa_3(){
    window.open('https://www.google.com/maps/search/maps/@-12.5730429,-77.2411409,9z/data=!3m1!4b1', '_blank');
}

function Proximos_Eventos_Mapa_4(){
    window.open('https://www.google.com/maps/search/maps/@-12.5730429,-77.2411409,9z/data=!3m1!4b1', '_blank');
}

function Proximos_Eventos_Mapa_5(){
    window.open('https://www.google.com/maps/search/maps/@-12.5730429,-77.2411409,9z/data=!3m1!4b1', '_blank');
}

function Proximos_Eventos_Mapa_6(){
    window.open('https://www.google.com/maps/search/maps/@-12.5730429,-77.2411409,9z/data=!3m1!4b1', '_blank');
}

//
function Proximos_Eventos_Compartir(){
	window.open('https://api.whatsapp.com/send?text=http://127.0.0.1:5500/Colectivo_Sur_Real/html/Actividades.html#&text=Acompáñame a divertirme en este evento', '_blank');
}

function Proximos_Eventos_Inscribirse(){
    window.open('https://www.google.com/search?client=opera-gx&q=exposiciones&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}









// Cañete cultural
function Cards_Flip_Link_1(){
    window.open('https://www.google.com/search?client=opera-gx&q=curiosidades&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Cards_Flip_Link_2(){
    window.open('https://www.google.com/search?client=opera-gx&q=curiosidades&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Cards_Flip_Link_3(){
    window.open('https://www.google.com/search?client=opera-gx&q=curiosidades&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Cards_Flip_Link_4(){
    window.open('https://www.google.com/search?client=opera-gx&q=curiosidades&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Cards_Flip_Link_5(){
    window.open('https://www.google.com/search?client=opera-gx&q=curiosidades&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Cards_Flip_Link_6(){
    window.open('https://www.google.com/search?client=opera-gx&q=curiosidades&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}











// Noticias 
// Documentales
function Noticias_Documentales_1(){
	window.open('https://www.google.com/search?client=opera-gx&q=curiosidades&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Noticias_Documentales_2(){
	window.open('https://www.google.com/search?client=opera-gx&q=noticias&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Noticias_Documentales_3(){
	window.open('https://www.google.com/search?client=opera-gx&q=noticias&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

// Podcast 
function Noticias_Podcast_1(){
	window.open('https://www.google.com/search?client=opera-gx&q=noticias&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Noticias_Podcast_2(){
	window.open('https://www.google.com/search?client=opera-gx&q=noticias&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Noticias_Podcast_3(){
	window.open('https://www.google.com/search?client=opera-gx&q=noticias&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

// Mas noticias 
function Noticias_Mas_Noticias_1(){
	window.open('https://www.google.com/search?client=opera-gx&q=noticias&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Noticias_Mas_Noticias_2(){
	window.open('https://www.google.com/search?client=opera-gx&q=noticias&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Noticias_Mas_Noticias_3(){
	window.open('https://www.google.com/search?client=opera-gx&q=noticias&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}











// Libros 
function Libros_Comprar_Coaldas(){
	window.open('https://www.google.com/search?client=opera-gx&q=comprar+libro+coaldas&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Libros_Comprar_Creacion_Politica_Cañete(){
	window.open('https://www.google.com/search?client=opera-gx&q=comprar+libro+coaldas&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Libros_Comprar_Decimas(){
	window.open('https://www.google.com/search?client=opera-gx&q=comprar+libro+coaldas&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Libros_Comprar_Estacion_San_Vicente(){
	window.open('https://www.google.com/search?client=opera-gx&q=comprar+libro+coaldas&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Libros_Comprar_Esteban(){
	window.open('https://www.google.com/search?client=opera-gx&q=comprar+libro+coaldas&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Libros_Comprar_Principio_Noser(){
	window.open('https://www.google.com/search?client=opera-gx&q=comprar+libro+coaldas&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}

function Libros_Comprar_Historia_Cañete(){
	window.open('https://www.google.com/search?client=opera-gx&q=comprar+libro+coaldas&sourceid=opera&ie=UTF-8&oe=UTF-8', '_blank');
}











// Pie de pagina 
function Boton_Facebook(){
	window.open('https://www.facebook.com/colectivo.surreal.5/', '_blank');
}

function Boton_Github() {
	window.open('https://eliseodesign.github.io', '_blank');
}

function Boton_Youtube(){
	window.open('https://www.youtube.com/@fersareik', '_blank');
}

function Boton_Whatsapp(){
	window.open('https://api.whatsapp.com/send?phone=954708490&text=Buenas tardes, me podrian brindar mas informacion sobre ustedes?', '_blank');
}