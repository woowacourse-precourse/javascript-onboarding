const receiveMoney = (money) => {
  let priceArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let walletArr = [];

  for (let i = 0; i < priceArr.length; i++) {
    walletArr[i] = parseInt(money / priceArr[i]);
    money = money % priceArr[i];
  }
  return walletArr;
};

function problem5(money) {
  var answer;

  answer = receiveMoney(money);
  return answer;
}

module.exports = problem5;
