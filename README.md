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
