function problem5(money) {
  let answer = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  answer = answer.map(unit => {
    const result = withdraw(unit, money);
    money = result.balance;
    return result.sheets;
  });
  return answer;
}

function withdraw(unit, money) {
  let sheets = 0;
  while(money >= unit) {
    money -= unit;
    sheets++;
  }
  return {balance: money, sheets};
}
module.exports = problem5;
