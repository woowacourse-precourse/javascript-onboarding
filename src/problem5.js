const KIND_OF_MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const answer = KIND_OF_MONEY.slice(0).reduce((acc, curMoney, i, arr) => {
    acc[i] = Math.floor(money / curMoney);
    money %= curMoney;
    if (money <= 0) {
      arr.splice(1);
    }

    return acc;
  }, new Array(KIND_OF_MONEY.length).fill(0));

  return answer;
}

module.exports = problem5;
