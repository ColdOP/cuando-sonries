// Texto de la carta
const textoCompleto =
  "Cuando sonríes... Trato de encontrar palabras que hagan justicia a quién tú eres. Nunca había visto al cielo tan celoso y, a la vez, tan admirado. El infinito cosmos te contempla. Te preguntarás: ¿qué contemplan? Y mi respuesta es: a ti. Hoy, hace unos días pasados, impregnabas al cielo de tu majestuosidad. Te colocabas ahí arriba como una estrella de luz infinita, hermosa, digna de admiración. Llenabas los días de alegría con tu carcajada inocente, a quienes, con ojos de orgullo, se perdían maravillados por ese milagro de finos cabellos oscuros, con dulces ojos color miel y con un corazón maravilloso. Eres merecedora de infinitas bendiciones. Sé que tus colores son hermosos, brillantes, llenos de vida, pero... estos colores toman la guía de tus acciones, de tu querer, de lo que sientes, de lo que transmites. Siempre he sabido que coloreas sin salirte de las líneas. Esa pasión en cada acción, esa entrega, ese compromiso son de admirar. Eres un regalo para quienes te conocen. Eres una estrella en el cielo brillando. Hoy quiero invitarte a que seas contigo misma ese regalo que eres para quienes de verdad sabemos de tu corazón. Mereces una vida hermosa, cumplir cada sueño, que brilles, pero, ¿sabes? Mereces sonreír. Y es que quizás no lo sepas, pero cuando sonríes no solo se te achinan los ojitos, no solo enseñas esas perlas con una mueca tan sincera, sino que también enseñas tu alma. Se van tus miedos, se van tus inseguridades, desaparece el tiempo, no hay tristeza, las lágrimas dejan de tener lugar, no hay fantasmas del pasado. Eres tú siendo feliz, eres tú celebrando, eres tú viviendo, eres tú experimentando lo que eres, dándote a ti misma lo que transmites, siendo cristalina, inocente, siendo preciosa, siendo espectacular, siendo humana, siendo ese ser que tanto admiro y que tanto orgullo le tengo. Anda, ve y vive, disfruta de esta experiencia, equivócate, no seas tan dura contigo. Sé humana, sé ese ser que sabemos los dos tú eres. Enamórate con locura de ti, ámate, déjate amar, vive con pasión el clímax jadeante que tanto mereces, pero sobre todo sonríe. Merece la pena esa sonrisa porque solo tú sabes cuánto vale. Preciosa te deseo un feliz cumpleaños... Recuerda que te quiero y eres merecedora de este amor, para nadie más... Te quiero mi dulce niña.";

// Función para mostrar el cuadro de diálogo
function mostrarCuadroDialogo() {
  const audio = document.getElementById("audio");
  const dialogo = Swal.fire({
    title: "¿Deseas escuchar mi voz?",
    text: "Hice una grabación especial para ti",
    imageUrl: "https://cdn.pixabay.com/photo/2023/11/16/15/49/ai-generated-8392596_960_720.png",
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "Imagen de avatar",
    showCancelButton: true,
    confirmButtonText: "Sí, por favor",
    cancelButtonText: "No, gracias",
    backdrop: `
      rgba(255,228,196,0.8)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
    `,
  }).then((result) => {
    if (result.isConfirmed) {
      audio.src = "./music/Cuando_Sonries.mp3";
      audio.play();
    }
    ejecutarEscribirTexto();
  });
}

function escribirTexto(texto, elemento, intervalo) {
  let textoTemp = "";
  const escritura = setInterval(() => {
    if (textoTemp.length < texto.length) {
      textoTemp += texto.charAt(textoTemp.length);
      elemento.innerHTML = textoTemp;
    } else {
      clearInterval(escritura);
    }
  }, intervalo);
}

function ejecutarEscribirTexto() {
  const textoElemento = document.getElementById("texto");
  escribirTexto(textoCompleto, textoElemento, 80);
}

mostrarCuadroDialogo();
