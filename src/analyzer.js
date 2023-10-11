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
    let buscarPalabra = false; // Variable para buscar si estamos dentro de una palabra

    for (let i = 0; i < text.length; i++) {
      const caracter = text[i];
      // Verificar si el carácter actual es una letra
      const esLetra = (caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z');
      if (esLetra && !buscarPalabra) {
        conteoPalabras++; // Suma una palabra al contador
        buscarPalabra = true; 
      } else if (!esLetra) {
        buscarPalabra = false;
      }
    }
    return conteoPalabras;
  },
  // 3. Función para el número de caracteres sin espacios y signos de puntuación
  getCharacterCountExcludingSpaces: (text) => {
    let numeroCaracteresExcluyentes = 0;
    for (let i = 0; i < text.length; i++) {
      const caracterExcluyenteActual = text[i];
      // Expresión regular para confirmar si el caracter es alfanumerico - Verifica si no hay espacios en blanco o cualquiera de los signos
      if (
        /[\w]/.test(caracterExcluyenteActual) &&
        !/[\s,.!?;:'"_-]/.test(caracterExcluyenteActual)
      ) {
        numeroCaracteresExcluyentes++;
      }
    }
    return numeroCaracteresExcluyentes;
  },
  getNumberCount: (text) => {
    const regex = /\b\d+(\.\d+)?\b/g; // Expresión regular para buscar números, incluyendo decimales
    const numeros = text.match(regex); // con match() devolvemos solo los números que coinciden con la expresión regulas ubicada en regex
    if (!numeros) {
      return 0;
    }
    return numeros.length; // Si hay numeros, retornara el resultado
  },
  getNumberSum: (text) => {
    const regex = (/\b\d+(\.\d+)?\b/g);
    const numeros = text.match(regex) || [];
    let sumaEnteros = 0;
    let sumaDecimales = 0;
    for (const numStr of numeros) {
      const numero = parseFloat(numStr);
      if (Number.isInteger(numero)) {
        sumaEnteros += numero;
      } else {
        sumaDecimales += numero;
      }
    }

    if (sumaDecimales === 0) {
      return sumaEnteros; 
    } else {
      return (sumaEnteros + sumaDecimales);
    }
  },
  getAverageWordLength: (text) => {
    const palabras = text.split(/\s+/);
    const palabrasLongitud = palabras.map((palabra) => palabra.length); // Calcular la longitud de cada palabra
    const totalLongitud = palabrasLongitud.reduce(
      (acc, length) => acc + length,
      0,
    ); // Calcular la suma de todas las longitudes de palabras
    // Calcular la longitud media
    if (palabras.length === 0) {
      return 0; // En caso de que no haya palabras, la longitud media es 0.
    } else {
      const redondearLongitud = totalLongitud / palabras.length;
      return parseFloat(redondearLongitud.toFixed(2));
    }
  },
};

export default analyzer;
