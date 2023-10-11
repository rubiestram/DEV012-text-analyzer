const analyzer = {
  // 1. Función para el número de caracteres
  getCharacterCount: (text) => {
    let numeroCaracteres = 0;
    numeroCaracteres = text.length;
    return numeroCaracteres;
  },
  // 2. Función para el número de palabras
  getWordCount: (text) => {
    let conteoPalabras = 0; // Inicializar el contador de palabras
    let palabra = false; // Variable para buscar si es una palabra
    for (let i = 0; i < text.length; i++) {
      const caracter = text[i]; // Iterando text
      // Verificar si el carácter actual es una letra
      const esPalabra =
        (caracter >= "a" && caracter <= "z") ||
        (caracter >= "A" && caracter <= "Z");
      if (esPalabra && !palabra) {
        // Comenzar una nueva palabra
        conteoPalabras++;
        palabra = true;
      } else if (!esPalabra) {
        palabra = false;
      }
    }
    return conteoPalabras; // Retorno de resultado
  },
  // 3. Función para el número de caracteres sin espacios y signos de puntuación
  getCharacterCountExcludingSpaces: (text) => {
    let numeroCaracteresExcluyentes = 0;
    for (let i = 0; i < text.length; i++) {
      const caracterExcluyenteActual = text[i];
      // Confirmar si el caracter es alfanumerico - Verifica si no hay espacios en blanco o cualquiera de los signos
      if (/[\w]/.test(caracterExcluyenteActual) && !/[\s,.!?;:'"_-]/.test(caracterExcluyenteActual)) {
        numeroCaracteresExcluyentes++;
      }
    }
    return numeroCaracteresExcluyentes;
  },
  // 4. Conteo de números
  getNumberCount: (text) => {
    const regex = /\b\d+(\.\d+)?\b/g; // Expresión regular para buscar números, incluyendo decimales
    const numeros = text.match(regex); // Busca los valores que coinciden con la expresión regular
    if (!numeros) {
      // números = null retorna 0
      return 0;
    }
    return numeros.length; // Si hay numeros, retornara el resultado
  },
  // 5. Suma de números
  getNumberSum: (text) => {
    const regex = /\b\d+(\.\d+)?\b/g;
    const numeros = text.match(regex) || []; // Busca las coincidencias o se agrega un arreglo vacio
    let sumaEnteros = 0;
    let sumaDecimales = 0;
    for (const numeroStr of numeros) { // La variable numeroStr representa la iteración de números en formato de cadena
      const numero = parseFloat(numeroStr); // Se convierte numeroStr a float para la suma
      if (Number.isInteger(numero)) { //Función incorporada de JS -> Verifica que el número sea entero = true o false
        sumaEnteros += numero; // Suma de enteros
      } else {
        sumaDecimales += numero; //Suma decimales
      }
    }
    if (sumaDecimales === 0) { 
      return sumaEnteros;
    } else {
      return sumaEnteros + sumaDecimales;
    }
  },
  // 6. Longitud de Palabras
  getAverageWordLength: (text) => {
    const palabras = text.split(/\s+/); // Separamos las palabras con una expresión regular 
    const palabrasLongitud = palabras.map((palabra) => palabra.length); //Calculo de longitud media de las palabras
    const totalLongitud = palabrasLongitud.reduce((acc, length) => acc + length, 0,); // Reduce() sirve para acumular elementos
    if (palabras.length === 0) {
      return 0; // En caso de que no haya palabras, la longitud media es 0.
    } else {
      const redondearLongitud = totalLongitud / palabras.length;
      return parseFloat(redondearLongitud.toFixed(2));
    }
  },
};

export default analyzer;
