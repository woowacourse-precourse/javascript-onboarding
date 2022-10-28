function problem5(money) {
  var answer;
  answer = cal_money(money);
  return answer;
}

function cal_money(money) {
  const amount_list = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let money_list = [];
  for (let i = 0; i < 9; i++) {
    let amount = amount_list[i];
    let n = parseInt(money / amount);
    money = money % amount;
    money_list = [...money_list, n];
  }
  return money_list;
}

module.exports = problem5;
