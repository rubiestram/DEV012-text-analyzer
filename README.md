# Analizador de texto 
Text Analyzer es una *Aplicación Web* desarrollada para Laboratoria, es una 
herramienta diseñada para examinar y procesar el lenguaje natural (NLP) para 
analizar el texto y proporcionar análisis detallados, el usuario obtendra
de manera inmediata 6 métricas

![Demo-Text-Analyzer](https://github.com/rubiestram/DEV012-text-analyzer/blob/main/appweb-analyzer-text.png)

## Funcionalidad
## Diseño

* `README.md`: debes modificarlo para explicar la información necesaria para el
  uso de tu aplicación
  web, así como una introducción a la aplicación, su funcionalidad y decisiones
  de diseño que tomaron.

## Funcionalidades

El listado de funcionalidades es el siguiente:

1. La aplicación debe permitir a la usuaria ingresar un texto escribiéndolo
en un cuadro de texto.

2. La aplicación debe calcular las siguientes métricas y actualizar el
resultado en tiempo real a medida que la usuaria escribe su texto:

    - **Recuento de palabras**: la aplicación debe poder contar el número de
    palabras en el texto de entrada y mostrar este recuento a la usuaria
    - **Recuento de caracteres**: la aplicación debe poder contar el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y mostrar este recuento a la usuaria.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación debe poder contar el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento
    a la usuaria.
    - **Recuento de números**: la aplicación debe contar cúantos números hay en
    el texto de entrada y mostrar este recuento a la usuaria.
    - **Suma total de números**: la aplicación debe sumar todos los números que
    hay en el texto de entrada y mostrar el resultado a la usuaria.
    - **Longitud media de las palabras**: la aplicación debe calcular la
    longitud media de las palabras en el texto de entrada y mostrársela a la usuaria.

3. La aplicación debe permitir limpiar el contenido de la caja de texto haciendo
clic en un botón.



* [`src/analyzer.js`](./src/analyzer.js): acá debes implementar el objeto
  `analyzer`, el cual ya está _exportado_ en el _boilerplate_. Este objeto
  (`analyzer`) debe contener seis métodos:
  - `analyzer.getWordCount(text)`: esta función debe retornar el recuento de
  palabras que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCount(text)`: esta función debe retornar el recuento
  de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCountExcludingSpaces(text)`: esta función debe retornar
  el recuento de caracteres excluyendo espacios y signos de puntuación que se
  encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberCount(text)`: esta función debe retornar cúantos números
  se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberSum(text)`: esta función debe retornar la suma de todos
  los números que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getAverageWordLength(text)`: esta función debe retornar la longitud
  media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  En este caso usa 2 dígitos decimales.

  