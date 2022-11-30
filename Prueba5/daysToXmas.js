const daysToXmas = (date) => {
  const christmas = new Date("Dec 25, 2021 00:00:00");
  const millisecondsDay = 1000 * 60 * 60 * 24;
  return Math.ceil((christmas - date) / millisecondsDay);
};

const date = new Date();

console.log(daysToXmas(date));
