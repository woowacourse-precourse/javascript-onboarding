function problem5(money) {
  var answer;
  let cnt = [];

  let pay = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let amount of pay) {
    cnt.push(Math.floor(money/amount)); 
    money = money - amount * Math.floor(money/amount);
  }
  answer = cnt;
  return answer;
}

module.exports = problem5;
