const MONEY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let answer = MONEY_UNIT.map(unit => { 
    let num = Math.trunc(money / unit);
    money %= unit;
    return num;
  });
  return answer;
}

module.exports = problem5;
