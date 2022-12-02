const maxProfit = (prices) => {
  const newPrices = [...prices].sort();

  for (let i = 0; i < newPrices.length; i++) {
    for (let j = newPrices.length; j >= 0; j--) {
      if (prices.indexOf(newPrices[i]) < prices.indexOf(newPrices[j])) {
        if (newPrices[i] < newPrices[j]) {
          return newPrices[j] - newPrices[i];
        }
      }
    }
  }
  return -1;
};

const pricesAda = [10, 1, 11];
const pricesEth = [10, 20, 30, 40, 50, 90, 70];

console.log(maxProfit(pricesAda));
console.log(maxProfit(pricesEth));
