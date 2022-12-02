const groupBy = (collection, it) => {
  return collection.reduce((acc, i) => {
    let key = typeof it === "function" ? it(i) : i[it];

    acc[key] = [...(acc[key] || []), i];
    console.log(acc);
    return acc;
  }, {});
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
