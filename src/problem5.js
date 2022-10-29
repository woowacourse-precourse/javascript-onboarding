function problem5(money) {
  var answer;
  let answer_list = [];
  const money_category = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (m of money_category) {
    let tmp = parseInt(money / m); //몫이 나옴.
    if (tmp == 0) {
      answer_list.push(tmp);
    } else {
      answer_list.push(tmp);
      money = money % m;
    }
  }
  return answer_list;
}

module.exports = problem5;
