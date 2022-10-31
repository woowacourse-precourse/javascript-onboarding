const MONEY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let numberPerUnit = MONEY_UNIT.map(unit => { 
    let num = Math.trunc(money / unit);
    money %= unit;
    return num;
  });
  return numberPerUnit;
}

module.exports = problem5;
