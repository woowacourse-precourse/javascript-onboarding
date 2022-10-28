function problem5(money) {
  var answer = [];

  let unitOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  unitOfMoney.map((unit) => {
    if (money >= unit) {
      let cnt = 0;
      cnt = Math.floor(money / unit);
      answer.push(cnt);
      money -= cnt * unit;
    } else {
      answer.push(0);
    }
  });

  return answer;
}

module.exports = problem5;
