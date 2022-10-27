function problem5(money) {
  const arr = [50_000, 10_000, 5_000, 1_000, 500, 100, 50, 10, 1];
  const obj = {};

  for (const key of arr) {
    obj[key] = Math.floor(money / key);
    money %= key
  }

  return Object.values(obj).reverse();
}

module.exports = problem5;
