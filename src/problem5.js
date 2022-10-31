function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 10, 1];
  const out = [];

  for (let unit of units) {
    out.push(Math.floor(money / unit));
    money %= unit;
  }

  return out;
}

// console.log(problem5(50237));
// console.log(problem5(15000));

module.exports = problem5;
