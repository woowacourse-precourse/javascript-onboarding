function problem5(money) {
  let answer;

  const UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const wallet = [];

  for (let i = 0; i < UNIT.length; i++) {
    wallet.push(parseInt(money / UNIT[i]));
    money = money % UNIT[i];
  }

  answer = [...wallet];

  return answer;
}

module.exports = problem5;
