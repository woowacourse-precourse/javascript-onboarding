function problem5(money) {
  let moneyWithdraw = money;
  let moneyCountArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];

  for (let moneyCount of moneyCountArray) {
    let eachCount = parseInt(moneyWithdraw / moneyCount);
    moneyWithdraw = moneyWithdraw - eachCount * moneyCount;
    answer.push(eachCount);
  }

  console.log(answer);
  return answer;
}

module.exports = problem5;
