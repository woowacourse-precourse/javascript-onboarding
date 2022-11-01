const moneySizes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

const changeMoney = (money) => {
  const changedMoneyCount = [];
  let changingMoney = money;
  for (const sizes of moneySizes) {
    changedMoneyCount.push(parseInt(changingMoney / sizes));
    changingMoney %= sizes;
  }
  return changedMoneyCount;
};

function problem5(money) {
  const answer = changeMoney(money);
  return answer;
}

module.exports = problem5;
