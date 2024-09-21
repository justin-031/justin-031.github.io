
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [
  { text: "¿Cual es el recuerdo más bonito de nosotros?", time: 15, className: "line1" },
  { text: "Sus gestos y las cosas que hacemos juntitos", time: 20, },
  { text: "siempre me recuerdo de ellos,", time: 24, },
  { text: "como dormir juntos, pasar abrazaditos muuucho tiempo,", time: 27, },
  { text: "o simplemente disfrutar de la tarde sin hacer nada y estar juntos", time: 34, },
  { text: "¿Por qué piensas que me enamore de ti?", time: 39, className: "line2" },
  { text: "Poque chi... okey ño", time: 42, },
  { text: "porque con usted soy una mejor persona…", time: 48, },
  { text: "¿Qué volvería a repetir con usted?", time: 55, className: "line3" },
  { text: "Volvería a repetir todos esos días iniales en los que ni nosotros sabíamos que eramos,", time: 63, },
  { text: "porque aunque sean momentos sencillos, son los que más han marcado nuestra relación", time: 69,  },    
  { text: "¿Cuál es mi mayor miedo de nuestro futuro?", time: 72, className: "line4" },
  { text: "Me preocupa que se nos presente momentos difíciles y no sepamos cómo manejarlos juntos.", time: 79,  },
  { text: "Pero al mismo tiempo, sé que si nos comunicándonos bien, podremos superar cualquier cosa", time: 87, },
  { text: "Tres palabras...", time: 93, className: "line5" },
  { text: "La amo mucho", time: 97,  },
  { text: "Algo que podríamos hacer para pasar enriquecer más nuestro vínculo...", time: 108, className: "line6" },
  { text: "El tiempo que pasamos juntos es de lo más importante,", time: 118,  },
  { text: "así que quizás planear más momentos donde solo estemos los dos,", time: 122, },
  { text: "tal vez con la distancia se complique, pero hay formas de hacerlo", time: 129,  },
  { text: "¿Sabe algo mi amor?", time: 135, className: "line7" },
  { text: "Aunque a usted no le agraden, yo amo y re amo sus cachetitos, son re hermosos", time: 142, },
  { text: "me gusta besarle ahí, darle cariñitos y aplastarle sus cachetitos jsjs", time: 150,  },
  { text: "¿Sabé que es lo que más me gusta de usted?", time: 158, className: "line8" },
  { text: "Me encanta cómo sin importar que, usted esta ahí y me escucha, dandome amor y cariño al mismo tiempo.", time: 163,  },
  { text: "LA AMO Y RE AMO MI AMOR Y LA AMARÉ HASTA LA ETERNIDAD", time: 170,},
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = `<span class="${currentLine.className}">${currentLine.text}</span>`;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 180 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 180 segundos (180,000 milisegundos)
setTimeout(ocultarTitulo, 1806000);
