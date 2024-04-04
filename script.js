// Texto de la carta
const textoCompleto = "que ves?";

// Función para mostrar el cuadro de diálogo
function mostrarCuadroDialogo() {
  const audio = document.getElementById("audio");
  const dialogo = Swal.fire({
    title: "¿Deseas escuchar mi voz?",
    text: "Hice una grabación especial para ti",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/11/16/15/49/ai-generated-8392596_960_720.png",
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
