function problem5(money) {
  let denominations = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  let answer = [];

  if (money > 0 && money < 1000001 && Number.isInteger(money) === true) {
    for (let i = 0; i < denominations.length; i++) {
      let quotient = Math.floor(money / denominations[i]);
      answer.push(quotient);
      money = money - (denominations[i] * quotient);
    }
    return answer;
  }
}

module.exports = problem5;
