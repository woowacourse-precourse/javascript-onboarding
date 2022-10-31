function problem5(money) {
  const isInvalid = money < 1 || money > 1000000;
  if (isInvalid) return;

  let currMoney = money;
  const divArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  for (let n of divArr) {
    answer.push(parseInt(currMoney / n));
    currMoney %= n;
  }

  return answer;
}

module.exports = problem5;
