const letter = "(muñeca) consola bici";

const isValid = (letter) => {
  return /^[^\{\[\(\)]*\([^\{\[\(\)]+\)+.*/g.test(letter);
};
console.log(isValid(letter));
