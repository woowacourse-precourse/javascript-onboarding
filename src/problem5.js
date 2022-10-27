const KIND_OF_MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const result = new Array(KIND_OF_MONEY.length).fill(0);
  for (let i = 0; i < KIND_OF_MONEY.length; i++) {
    result[i] = Math.floor(money / KIND_OF_MONEY[i]);
    money %= KIND_OF_MONEY[i];
    if (money <= 0) {
      break;
    }
  }
  return result;
}

module.exports = problem5;
