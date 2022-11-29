# AdventJs 2021

## Día 1: “Contando ovejas” 🐑

---

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojoy que además su nombre contenga tanto las letras n  y a, sin importar el orden, las mayúsculas o espacios.

```
// Filtro por el color rojo y los nombres que coincidan con la expresión regular.
const contarOvejas = (ovejas) => {
  return ovejas
    .filter((oveja) => oveja.color === "rojo")
    .filter((oveja) => oveja.name.match(/a/gi) && oveja.name.match(/n/gi));
};
```
