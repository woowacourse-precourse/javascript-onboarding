const MONEY_COUNT = 9;
const MONEYS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  var answer;

  var answer = new Array(MONEY_COUNT).fill(0);
  for (let i = 0; i < MONEY_COUNT; i++) {
    const count = Math.floor(money / MONEYS[i]);
    answer[i] = count;
    money -= count * MONEYS[i];
  }

  return answer;
}

module.exports = problem5;
