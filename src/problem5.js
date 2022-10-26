const UNIT_OF_MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

const takeMoneyOut = (money, unit) => {
  const count = Math.floor(money / unit);
  return [count * unit, count];
};

function problem5(money) {
  let answer = [];
  UNIT_OF_MONEY.forEach((unit) => {
    const [takeMoney, count] = takeMoneyOut(money, unit);
    money -= takeMoney;
    answer.push(count);
  });
  return answer;
}

module.exports = problem5;
