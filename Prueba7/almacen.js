const contains = (store, product) => {
  for (const property in store) {
    if (typeof store[property] === "string" && store[property] === product) {
      return true;
    }
    if (typeof store[property] === "object") {
      if (contains(store[property], product)) return true;
    }
  }
  return false;
};
