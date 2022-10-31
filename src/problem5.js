function calculate(money) {
  let dividedMoney = [];
  let kindOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50 , 10, 1];

  kindOfMoney.forEach(function(num) {
    dividedMoney.push(Math.floor(money / num));
    money = money % num;
  })
  return dividedMoney;
}

function problem5(money) {
  let answer = calculate(money);
  return answer;
}

module.exports = problem5;
