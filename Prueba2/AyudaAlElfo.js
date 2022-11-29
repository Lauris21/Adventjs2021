// Convertir el texto en un objeto que contenga el nombre del regalo y las veces que aparece.
// Si tienen un _ al comienzo de la palabra no se deben contar.
const carta = "bici coche balón _playstation bici coche peluche";

const listGifts = (letter) => {
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
