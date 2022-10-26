function problem5(money) {
  let answer = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  answer = answer.map(unit => {
    const result = withdraw(unit, money);
    money = result.change;
    return result.count;
    });
  return answer;
}

function withdraw(unit, money) {
  let count = 0;
  while(money >= unit) {
    money -= unit;
    count++;
  }
  return {change: money, count};
}
module.exports = problem5;
