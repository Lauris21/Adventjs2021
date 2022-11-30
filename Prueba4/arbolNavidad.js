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

console.log(createXmasTree(10));
