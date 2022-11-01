function problem5(money) {
  const typeOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let curMoney = money;
  const answer = [];

  typeOfMoney.forEach((v) => {
    answer.push(Math.floor(curMoney / v));
    curMoney = curMoney % v;
  });

  return answer;
}

module.exports = problem5;
