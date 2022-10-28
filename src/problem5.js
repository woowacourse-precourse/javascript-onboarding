const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function withDraw(money) {
  let wallet = [];
  units.forEach((unit) => {
    wallet.push(parseInt(money/unit));
    money = money%unit;
  });

  return wallet;
}

function problem5(money) {
  var answer;
  answer = withDraw(money);
  return answer;
}

module.exports = problem5;
