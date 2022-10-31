function problem5(money) {
  var answer;
  answer = cal_money(money);
  return answer;
}

function cal_money(money) {
  const amount_list = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let count_converted_money = [];
  for (let i = 0; i < 9; i++) {
    let amount = amount_list[i];
    let n = parseInt(money / amount);
    money = money % amount;
    count_converted_money = [...count_converted_money, n];
  }
  return count_converted_money;
}

module.exports = problem5;
