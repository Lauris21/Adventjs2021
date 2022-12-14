# AdventJs 2021

## Día 1: “Contando ovejas” 🐑

---

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojoy que además su nombre contenga tanto las letras `n`  y `a`, sin importar el orden, las mayúsculas o espacios.

```javascript
// Filtro por el color rojo y los nombres que coincidan con la expresión regular.
const contarOvejas = (ovejas) => {
  return ovejas
    .filter((oveja) => oveja.color === "rojo")
    .filter((oveja) => oveja.name.match(/a/gi) && oveja.name.match(/n/gi));
};
```

## Día 2: “Ayuda al elfo a listar los regalos” 🧝🏻‍♂️

---

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque **ten cuidado**, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un **`_`** delante de la palabra, por ejemplo `_playstation`, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.

```javascript
const listGifts = (letter) => {
  // Convertir el string en array dividido por espacios
  // Filtramos quitando los items vacios y los que empiezan por _
  // Sumamos los valores repetidos y devolvemos un objeto
  return letter
    .split(" ")
    .filter((item) => (item !== "") & !item.startsWith("_"))
    .reduce((result, i) => {
      if (!result[i]) {
        result[i] = 0;
      }
      result[i]++;
      return result;
    }, {});
};
```

## Día 3: “El Grinch quiere fastidiar la Navidad” 👽

---

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis `()`.

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

**¡Pero ojo!** Porque el Grinch ha dejado llaves `{` y corchetes `[` dentro de los paréntesis que **hacen que no sean válidas**. Por suerte sólo los ha dejado en medio de los paréntesis...

Crea una función que pasándole el texto de la carta, devuelva `true`
 si es válida y `false`
 si no lo es. ¡Y acaba con la travesura del Grinch!

```javascript
// Comparamos el string con la regex y si coincide devuelve true.
const isValid = (letter) => {
  return /^[^\{\[\(\)]*\([^\{\[\(\)]+\)+.*/g.test(letter);
};
```

## Día 4: ¡Es hora de poner la navidad en casa! 🎄

---

¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
Si le pasamos el argumento `5`, se pintaría esto:

```javascript
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

Creamos un triángulo de asteriscos `*` con la altura proporcionada y, a los lados, usamos el guión bajo `_` para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de `#`.

```javascript
const createXmasTree = (height) => {
  // Creamos un objeto con los símbolos a utilizar.
  const tools = {
    branch: "*",
    padding: "_",
    trunk: "#",
  };
  const tree = [];
  // Fijamos mínimo de una rama "*".
  let width = 1;
  // Asignamos las veces que se repetirán los laterales "_",
  //iniciándose con la altura introducida menos 1.
  let emptyChars = height - 1;
  // Los laterales "_" se repetirán las veces que indique emptyChars.
  let side = tools.padding.repeat(emptyChars);
  // Definimos el tronco.
  const sideTrunk = `${side}${tools.trunk}${side}`;

  // Recorremos la altura, en cada vuelta fijamos los laterales "_" y las ramas "*".
  for (let i = 0; i < height; i++) {
    // Las ramas "*" se repetirán tantas veces como indique width.
    let branchs = tools.branch.repeat(width);
    side = tools.padding.repeat(emptyChars);
    // Añadimos al árbol los laterales y las rmas
    tree.push(`${side}${branchs}${side}`);
    // Sumamos 2 a width.
    width += 2;
    // Restamos 1 a emptyChars.
    emptyChars--;
  }
  // Le añadimos el tronco al árbol.
  tree.push(sideTrunk);
  tree.push(sideTrunk);

  return tree.join("\n");
};
```

## Dia 5: “Contando los días para los regalos” 🎁

---

Con la emoción, ya estamos empezando a **contar los días del calendario hasta el 25 de diciembre 📆.**

Para ayudar a esto, vamos a crear una función que pasándole una instancia de `Date` nos diga el número de días que faltan.

El resultado tiene que ser **un número entero** y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

**¡Pero ojo!** También hay que indicar si la fecha es del mismo día (devolveríamos `0`) o si es una fecha futura (devolveríamos el número de días en negativo `-`):

```javascript
const daysToXmas = (date) => {
  // Fijamos la fecha hasta la que queremos contar.
  const christmas = new Date("Dec 25, 2021 00:00:00");
  // Definimos los milisegundos por día.
  const millisecondsDay = 1000 * 60 * 60 * 24;
  // Redondeamos hacia arriba y devolvemos el entero menor, mayor o igual al número dado.
  return Math.ceil((christmas - date) / millisecondsDay);
};
```

## Día 6: “Rematando los exámenes finales” 📚

---

Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces **pueden haber más de dos valores** que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, **sin importar lo lejos que esté a la derecha**.

Si no se encuentra, se devuelve `null`.

```javascript
const sumPairs = (numbers, result) => {
  // Recorremos el array de numbers desde la posición 0 y 1.
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      // Si i y j no coinciden y los números donde se encuentran i y j
      // suman el resultado, se devuelven dichos números.
      if (i !== j && numbers[i] + numbers[j] === result)
        return [numbers[i], numbers[j]];
    }
  }

  // Si no se cumple la condición cuando acabe el bucle devolvemos null.
  return null;
};
```

## Día 7: “Buscando en el almacén …” 📦

---

Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función `contains` que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto.

```javascript
const contains = (store, product) => {
  // Recorremos las propiedades de store.
  for (const property in store) {
    // Si la propiedad es tipo string y coincide con product devuelve true.
    if (typeof store[property] === "string" && store[property] === product) {
      return true;
    }

    // Si la propiedad es un objeto y la colección contiene product devuelve true.
    if (typeof store[property] === "object") {
      if (contains(store[property], product)) return true;
    }
  }

  // Si no encuentra product devuelve false
  return false;
};
```

## Día 8: “La locura de las criptomonedas” 💸

Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que **no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.**

**Si ese día no se puede sacar ningún beneficio**, tenemos que devolver `-1`para evitar que hagamos una locura:

```javascript
const maxProfit = (prices) => {
  // Ordenamos de menor a mayor
  const newPrices = [...prices].sort();

  // Recorremos el array ordenado
  for (let i = 0; i < newPrices.length; i++) {
    // y tambien de atrás alante.
    for (let j = newPrices.length; j >= 0; j--) {
      // Comparamos las posiciones en el array original
      // (newPrices[i] iniciará en la posición donde se encuentre el número menor),
      // Para devolver true cuando el mayor se encuentre a su derecha.
      if (prices.indexOf(newPrices[i]) < prices.indexOf(newPrices[j])) {
        // Si encuentra un número mayor hacemos la resta para devolver la diferencia.
        if (newPrices[i] < newPrices[j]) {
          return newPrices[j] - newPrices[i];
        }
      }
    }
  }
  return -1;
};
```

## Día 9: “Agrupando cosas automáticamente” 🎅🏼

En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a **Mark Zucktheelf** 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.

Como ves, la función `groupBy` recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

```javascript
const groupBy = (collection, it) => {
  // Recorremos la colección
  return collection.reduce((res, i) => {
    // Si el segundo parámetro es una función se lo aplicamos a cada elemento y
    // lo almacenamos en key. Si no almacenamos el valor
    let key = typeof it === "function" ? it(i) : i[it];

    // En la respuesta almacenamos la clave y el valor y lo devolvemos en un objeto.
    res[key] = [...(res[key] || []), i];
    return res;
  }, {});
};
```
