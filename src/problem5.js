function problem5(money) {
  var answer;
  answer = chargeChange(money);
  return answer;
}

function chargeChange(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const arr = [];

  unit.map((value) => {
    arr.push(Math.floor(money / value));
    money = money - Math.floor(money / value) * value;
  });
  return arr;
}

module.exports = problem5;
