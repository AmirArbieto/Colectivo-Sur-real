let Proyectos_Historicos = [
  {
    /* Proyectos Historicos */
    Titulo: "BIENVENIDOS",
    Descripcion:
      "Somos una asociación fundada el 13 de abril del 2010, con el objetivo de rescatar y revalorar el Patrimonio material e inmaterial de la provincia de Cañete, por lo cual está integrado por profesionales dedicados al tema cultural (historiadores, escritores, gestores culturales, investigadores, artistas plásticos, críticos literarios, fotógrafos, antropólogos, entre....",
    Oculto:
      "otros), realizando todo un trabajo de sensibilización en los 16 distritos, a través de sus Intervenciones Artísticas. Somos una asociación fundada el 13 de abril del 2010, con el objetivo de rescatar y revalorar el Patrimonio material e inmaterial de la provincia de Cañete, por lo cual está integrado por profesionales dedicados al",
    Iframe: "https://www.youtube-nocookie.com/embed/ub91uoZg6BU",
  },
  {
    /* Ultimo video */
    Titulo: "ULTIMO VIDEO",
    Descripcion:
      "Somos una asociación fundada el 13 de abril del 2010, con el objetivo de rescatar y revalorar el Patrimonio material e inmaterial de la provincia de Cañete, por lo cual está integrado por profesionales dedicados al tema cultural (historiadores, escritores, gestores culturales, investigadores, artistas plásticos, críticos literarios, fotógrafos, antropólogos, entre....",
    Oculto:
      "otros), realizando todo un trabajo de sensibilización en los 16 distritos, a través de sus Intervenciones Artísticas. Somos una asociación fundada el 13 de abril del 2010, con el objetivo de rescatar y revalorar el Patrimonio material e inmaterial de la provincia de Cañete, por lo cual está integrado por profesionales dedicados al",
    Iframe: "https://www.youtube.com/embed/nnb7zey9U10",
  },
  {
    /* Documentales de cañete */
    Titulo: "DOCUMENTALES DE CAÑETE",
    Descripcion:
      "Somos una asociación fundada el 13 de abril del 2010, con el objetivo de rescatar y revalorar el Patrimonio material e inmaterial de la provincia de Cañete, por lo cual está integrado por profesionales dedicados al tema cultural (historiadores, escritores, gestores culturales, investigadores, artistas plásticos, críticos literarios, fotógrafos, antropólogos, entre....",
    Oculto:
      "otros), realizando todo un trabajo de sensibilización en los 16 distritos, a través de sus Intervenciones Artísticas. Somos una asociación fundada el 13 de abril del 2010, con el objetivo de rescatar y revalorar el Patrimonio material e inmaterial de la provincia de Cañete, por lo cual está integrado por profesionales dedicados al",
    Iframe: "https://www.youtube.com/embed/nnb7zey9U10",
  },
  {
    /* Festival afroperuano kutuka */
    Titulo: "FESTIVAL AFROPERUANO KUTUKÁ",
    Descripcion:
      "Somos una asociación fundada el 13 de abril del 2010, con el objetivo de rescatar y revalorar el Patrimonio material e inmaterial de la provincia de Cañete, por lo cual está integrado por profesionales dedicados al tema cultural (historiadores, escritores, gestores culturales, investigadores, artistas plásticos, críticos literarios, fotógrafos, antropólogos, entre....",
    Oculto:
      "otros), realizando todo un trabajo de sensibilización en los 16 distritos, a través de sus Intervenciones Artísticas. Somos una asociación fundada el 13 de abril del 2010, con el objetivo de rescatar y revalorar el Patrimonio material e inmaterial de la provincia de Cañete, por lo cual está integrado por profesionales dedicados al",
    Iframe: "https://www.youtube.com/embed/rVr7AR2L6O4",
  },
];

const contenedor = document.querySelector(".Slider_Contenedor_General");
let fragment = document.createDocumentFragment();

Proyectos_Historicos.forEach((proyecto) => {
  let div = document.createElement("ARTICLE");

  div.setAttribute("data-aos", "zoom-in");

  div.classList.add("card", "card--project");

  div.innerHTML = `
	<div id="Slider_Fondo_2" class="Slider">
	<div data-aos="fade-right" data-aos-duration="3000">
		<div class="Slider_Titulo_Blanco">
			<h1>${proyecto.Titulo}</h1> 
			<hr class="Subrayado_Rojo">
		</div>

		<div class="Slider_Contenedor">
			<p class="Slider_Descripcion">  ${proyecto.Descripcion}
				<p class="Slider_Descripcion_Mostrar">
    
        ${proyecto.Oculto}
				</p>
		
			</p>
			<button class="Slider_Boton">
				<a>Leer más</a>
			</button>
		</div>
	</div>
	<iframe data-aos="zoom-in" data-aos-duration="3000" loading="lazy" width="560" height="315" src=${proyecto.Iframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>

    
    `;

  console.log(div.children);

  fragment.appendChild(div);
});

contenedor.appendChild(fragment);
