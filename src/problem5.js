function problem5(money) {
  var answer = [];
  const money_unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let curr = 0;

  while (curr < money_unit.length) {
    answer.push(parseInt(money / money_unit[curr]));
    money = money % money_unit[curr];
    curr++;
  }

  return answer;
}

module.exports = problem5;
