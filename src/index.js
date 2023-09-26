import analyzer from './analyzer.js';

// Textarea
const textarea = document.querySelector('textarea[name="user-input"]');
// Evento Input
textarea.addEventListener("input", (e) => {
  console.log(e) //probando evento
});

// Boton de Eliminar
const resetButton = document.getElementById("reset-button");
//Evento Click
resetButton.addEventListener('click', () => {
  textarea.value = '';
});



// Inicializamos las metricas en 0
const wordCount = document.querySelector('.wordcount');
const charactercount = document.querySelector('.charactercount')
const characternospacescount = document.querySelector('.characternospacescount')
const numbercount = document.querySelector('.numbercount')
const numbersum = document.querySelector('.numbersum')
const wordlengthaverage = document.querySelector('.wordlengthaverage')

wordCount.textContent += " 0";
charactercount.textContent += " 0";
characternospacescount.textContent += " 0";
numbercount.textContent += " 0";
numbersum.textContent += " 0";
wordlengthaverage.textContent += " 0";