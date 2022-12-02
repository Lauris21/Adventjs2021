const groupBy = (collection, it) => {
  return collection.reduce((res, i) => {
    let key = typeof it === "function" ? it(i) : i[it];

    res[key] = [...(res[key] || []), i];
    return res;
  }, {});
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
