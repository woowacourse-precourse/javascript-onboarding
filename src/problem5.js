const CURRENCY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let answer;

  answer = CURRENCY.map((currency) => {
    const count = Math.floor(money / currency);
    money -= count * currency;
    return count;
  });

  return answer;
}

console.log(problem5(50237));

module.exports = problem5;
