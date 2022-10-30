const coinList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let answer = [];
  let leftMoney = money;

  for (coin of coinList) {
    if (leftMoney >= coin) {
      const usedCoinCount = Math.floor(leftMoney / coin);
      answer.push(usedCoinCount);
      leftMoney = leftMoney - coin * usedCoinCount;
    } else answer.push(0);
  }

  return answer;
}

const wallet = [50237, 15000];
for (money of wallet) {
  console.log(problem5(money));
}

module.exports = problem5;
