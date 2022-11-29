# AdventJs 2021

## Día 1: “Contando ovejas” 🐑

---

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojoy que además su nombre contenga tanto las letras **n**  y **a**, sin importar el orden, las mayúsculas o espacios.

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
