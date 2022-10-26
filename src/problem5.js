function problem5(money) {
  var answer = [];
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let moneyLeft = money;
  for(let i = 0; i < 9; i++){
    answer.push(parseInt(moneyLeft / coins[i]));
    moneyLeft %= coins[i];
  }
  return answer;
}

module.exports = problem5;
