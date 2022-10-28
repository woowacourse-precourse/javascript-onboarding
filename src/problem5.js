const takeMoneyOut = (money, unit) => {
  const count = Math.floor(money / unit);
  return [count * unit, count];
};

function problem5(money) {
  const unitOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let answer = [];
  unitOfMoney.forEach((unit) => {
    const [takeMoney, count] = takeMoneyOut(money, unit);
    money -= takeMoney;
    answer.push(count);
  });
  return answer;
}

module.exports = problem5;
