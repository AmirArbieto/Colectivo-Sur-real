/**
** Navegacion 
** Libreria AOS 
** Menu_Contactenos_Boton_Sandwich 
** Carrusel principal  
** Boton leer mas 
** Carrusel cards 
** Slider carrusel
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










