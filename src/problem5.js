function problem5(money) {
  var answer = Array.from({ length: 9 }, () => 0);
  var money_list = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < money_list.length; i++) {
    answer[i] = parseInt(money / money_list[i]);
    money %= money_list[i];
  }

  return answer;
}

module.exports = problem5;
