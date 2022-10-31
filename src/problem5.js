// 돈을 변환하여 각 금액의 개수를 반환하는 기능
function problem5(money) {
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let wallet = [];

  for (let coin of coins) {
    wallet.push(parseInt(money / coin));
    money %= coin;
  }
  
  return wallet;
}

module.exports = problem5;
