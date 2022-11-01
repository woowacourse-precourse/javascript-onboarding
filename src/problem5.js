function problem5(money) {
  let answer = [];
  let tmp;
  const chage = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (i = 0; i < chage.length; i++) {
    tmp = parseInt(money / chage[i]);
    answer.push(tmp);
    if (tmp !== 0) {
      money = money - tmp * chage[i];
    }
  }
  return answer;
}

module.exports = problem5;
