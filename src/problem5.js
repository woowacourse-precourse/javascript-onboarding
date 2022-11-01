function problem5(money) {
  const result = [];

  for (let index = 0; index < BILL_ARRAY.length; index++) {
    result.push(Math.floor(money / BILL_ARRAY[index]));
    money = money % BILL_ARRAY[index];
  }

  return result;
}

const BILL_ARRAY = Object.freeze([
  50000, 10000, 5000, 1000, 500, 100, 50, 10, 1,
]);

module.exports = problem5;
