import analyzer from "./analyzer.js";

// Llamamos los elementos de HTML por medio de querySelector para la interacción con el DOM
const wordCount = document.querySelector('li[data-testid="word-count"]');
const charactercount = document.querySelector(
  'li[data-testid="character-count"]',
);
const characternospacescount = document.querySelector(
  'li[data-testid="character-no-spaces-count"]',
);
const numbercount = document.querySelector('li[data-testid="number-count"]');
const numbersum = document.querySelector('li[data-testid="number-sum"]');
const wordlengthaverage = document.querySelector(
  'li[data-testid="word-length-average"]',
);

// Inicializamos las metricas en 0
wordCount.textContent += " 0";
charactercount.textContent += " 0";
characternospacescount.textContent += " 0";
numbercount.textContent += " 0";
numbersum.textContent += " 0";
wordlengthaverage.textContent += " 0";

// Textarea
const textarea = document.querySelector('textarea[name="user-input"]');

// Evento Input
textarea.addEventListener("input", () => {
  // Contador de Palabras
  {
    let contadorPalabras = 0;
    contadorPalabras = analyzer.getWordCount(textarea.value);
    wordCount.innerHTML = "Palabras: " + contadorPalabras;
  }

  // Contador de Caracteres
  {
    let contadorCaracteres = 0;
    contadorCaracteres = analyzer.getCharacterCount(textarea.value);
    charactercount.innerHTML = "Caracteres: " + contadorCaracteres;
  }

  // Contador de Caracteres excluyendo espacios y signos de puntuación
  {
    let contadorCaracteresExcluyentes = 0;
    contadorCaracteresExcluyentes = analyzer.getCharacterCountExcludingSpaces(
      textarea.value,
    );
    characternospacescount.innerHTML =
      "Caracteres sin espacios y signos: " + contadorCaracteresExcluyentes;
  }

  // Contador de números
  {
    let contadorNumeros = 0;
    contadorNumeros = analyzer.getNumberCount(textarea.value);
    numbercount.innerHTML = "Números: " + contadorNumeros;
  }

  // Suma de números
  {
    let sumaNumeros = 0;
    sumaNumeros = analyzer.getNumberSum(textarea.value);
    numbersum.innerHTML = "Suma de números: " + sumaNumeros;
  }

  // Longitud de Palabras
  {
    let contadorLongitudPalabras = 0;
    contadorLongitudPalabras = analyzer.getAverageWordLength(textarea.value);
    wordlengthaverage.innerHTML =
      "Longitud de Caracteres: " + contadorLongitudPalabras;
  }
});

// Función para reiniciar las métricas y el contenido del área de texto
function resetMetrics() {
  document.querySelector('textarea[name="user-input"]').value = "";
  document.querySelectorAll(".metricas").forEach(function (element) {
    element.textContent = element.textContent.replace(/:.*/, ": 0");
  });
}

// Agrega un evento click al botón
document.getElementById("reset-button").addEventListener("click", resetMetrics);
