---
title: 'Adopta los Arrays No Mutativos con ES14: Nuevos Métodos Propuestos en JavaScript'
description: "Explora los innovadores métodos de arrays no mutativos de ECMAScript 2023 (ES14), abriendo caminos para una programación eficiente y segura."
pubDate: 2023-04-29
preview: "Descubre el poder de 'Change Array by Copy' con los nuevos métodos de JavaScript en ES14: toReversed(), toSorted(), toSpliced() y with()."
author: 'José Carlos'
readTime: '5 min'
tags: ["javascript", "ecmascript", "web development", "coding", "es14"]
slug: "embrace-non-mutative-arrays-with-es14-new-javascript-proposed-methods"
---

En nuestro mundo tecnológico en constante evolución, mantenerse informado sobre los últimos cambios es crucial. Uno de estos desarrollos es la propuesta para ECMAScript 2023 (ES14), que introduce cuatro nuevos métodos de array:

```javascript 
toReversed(), toSorted(), toSpliced() y with()
``` 

Estos cambios han alcanzado la etapa 4, lo que significa que están en las [Propuestas Finalizadas](https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md) y se incluirán en la próxima versión de JavaScript.

## La Propuesta Finalizada: Change Array by copy (Cambio de Array por Copia)

Coautoría de Robin Ricard y Ashley Claymore de Bloomberg, la propuesta ['Change Array by copy'](https://github.com/tc39/proposal-change-array-by-copy) introduce nuevos métodos para evitar la mutación actual de arrays. Permite modificaciones generando una copia con los cambios, preservando el array original.

## Los Nuevos Métodos en Acción

Los nuevos métodos de array prometen hacer la programación en JavaScript más eficiente y segura. Aquí algunos ejemplos:

```javascript
const sequence = [1, 2, 3];
sequence.toReversed(); // => [3, 2, 1]
sequence; // => [1, 2, 3]

const outOfOrder = new Uint8Array([3, 1, 2]);
outOfOrder.toSorted(); // => Uint8Array [1, 2, 3]
outOfOrder; // => Uint8Array [3, 1, 2]

const correctionNeeded = [1, 1, 3];
correctionNeeded.toSpliced(1, 1, 2); // => [1, 2, 3]
correctionNeeded; // => [1, 1, 3]

const updateNeeded = [1, 2, 3];
updateNeeded.with(2, 4); // => [1, 2, 4]
updateNeeded; // => [1, 2, 3]
```

En los ejemplos anteriores, observamos que los arrays originales permanecen sin mutar después de la aplicación de los nuevos métodos, representando un cambio significativo de los actuales métodos mutantes.

## ¿Por qué estos cambios importan?

Los métodos propuestos por la propuesta 'Cambio de Array por Copia' pueden ayudarnos a escribir código más mantenible y robusto. Las operaciones inmutables minimizan el riesgo de efectos secundarios no deseados, haciendo que nuestro código sea más seguro. Además, simplifican el proceso de escribir código capaz de manejar Arrays y Tuplas de forma intercambiable, mejorando la versatilidad de nuestro código.

## Implementaciones Actuales

A partir de marzo de 2023, se han incorporado nuevos métodos en Firefox/SpiderMonkey, Safari/JavaScriptCore, Chrome/V8 y Ladybird/LibJS para mejorar el rendimiento. En Firefox/SpiderMonkey y Safari/JavaScriptCore, estos métodos están disponibles mediante una configuración manual, lo que significa que debes habilitarlos manualmente para poder utilizarlos. En cambio, en Chrome/V8 y Ladybird/LibJS, estos métodos están disponibles de forma predeterminada. Si quieres obtener más información sobre esta propuesta, puedes consultar las notas de la reunión en la [página de notas de tc39.](https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-30.md#change-array-by-copy).

Si quieres ver cómo se implementaron los nuevos métodos, puedes revisar el [archivo polyfill.js](https://github.com/tc39/proposal-change-array-by-copy/blob/main/polyfill.js) en el repositorio de la propuesta, donde se encuentra una implementación de referencia básica. También puedes encontrar implementaciones individuales para cada método nuevo en la biblioteca "es-shims":

1. [array.prototype.tosorted](https://www.npmjs.com/package/array.prototype.tosorted): Crea un nuevo array con los mismos elementos en orden clasificado.
2. [array.prototype.toreversed](https://www.npmjs.com/package/array.prototype.toreversed): Devuelve un nuevo array con los elementos en orden inverso.
3. [array.prototype.tospliced](https://www.npmjs.com/package/array.prototype.tospliced): Crea un nuevo array eliminando, reemplazando o agregando elementos.
4. [array.prototype.with](https://www.npmjs.com/package/array.prototype.with): Devuelve un nuevo array con un elemento reemplazado.

También puedes encontrar los nuevos métodos implementados [(Cambio de array por copia en core-js)](https://github.com/zloirock/core-js#change-array-by-copy).

## Conclusión

La introducción de estos métodos de array no mutativos en JavaScript significa un paso hacia el desarrollo de códigos más robustos, mantenibles y seguros. A medida que adoptamos los próximos cambios propuestos para ECMAScript 2023, continuamos aprovechando el potencial completo de JavaScript para crear aplicaciones web eficientes y potentes.

Recuerda mantener un ojo en la [especificación ECMA-262](https://tc39.es/ecma262/) para las últimas actualizaciones y cambios en JavaScript. Sigamos explorando y aprendiendo mientras viajamos a través del paisaje siempre en evolución del desarrollo web.

## Recursos adicionales

1. <a href="https://github.com/tc39/proposal-change-array-by-copy" target="_blank" rel="noreferrer">Repositorio de la Propuesta: Cambio de Array por Copia</a>
2. <a href="https://github.com/tc39/proposals/commit/ad4df8435f27f39eda26db3b940ae151980c8015#diff-af1d66eb7dbbf6f66e871d26bcad07076a557256a957f558ca21e60924e2b0b7" target="_blank" rel="noreferrer">Propuestas a Propuestas Finalizadas Etapa 4</a>
3. <a href="https://tc39.es/ecma262/" target="_blank" rel="noreferrer">TC39 - ECMA-262</a>
4. <a href="https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md" target="_blank" rel="noreferrer">Propuestas Finalizadas</a>
5. <a href="https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-30.md#change-array-by-copy" target="_blank" rel="noreferrer">Notas de Cambio de Array por Copia</a>
6. <a href="https://github.com/tc39/proposal-change-array-by-copy/blob/main/polyfill.js" target="_blank" rel="noreferrer">Implementación Polyfill</a>
7. <a href="https://github.com/zloirock/core-js#change-array-by-copy" target="_blank" rel="noreferrer">Implementación Core-JS</a>
8. <a href="https://github.com/es-shims" target="_blank" rel="noreferrer">ES-Shims: Un host comunitario para shims y polyfills</a>
9. <a href="https://www.npmjs.com/package/array.prototype.tosorted" target="_blank" rel="noreferrer">ES-Shims: Implementación toSorted</a>
10. <a href="https://www.npmjs.com/package/array.prototype.toreversed" target="_blank" rel="noreferrer">ES-Shims: Implementación toReversed</a>
11. <a href="https://www.npmjs.com/package/array.prototype.tospliced" target="_blank" rel="noreferrer">ES-Shims: Implementación toSpliced</a>
12. <a href="https://www.npmjs.com/package/array.prototype.with" target="_blank" rel="noreferrer">ES-Shims: Implementación with</a>
13. <a href="https://www.dropbox.com/s/5rabrx387snkbfn/change_array_by_copy_at_tc39_march_2022.pdf?dl=0" target="_blank" rel="noreferrer">Presentación de la Propuesta</a>

Estos recursos brindan información completa sobre la propuesta de Cambio de Array por Copia y el estándar ECMAScript en general. Son excelentes referencias para aquellos interesados en profundizar en el tema o seguir de cerca el desarrollo de JavaScript.

Al mantenernos informados y al día, podemos seguir escribiendo código JavaScript eficiente y robusto, aprovechando al máximo las capacidades en constante evolución del lenguaje. A medida que esperamos el lanzamiento oficial de estos métodos de array no mutativos con ECMAScript 2023 (ES14), sigamos abrazando la continua evolución de JavaScript y el desarrollo web.