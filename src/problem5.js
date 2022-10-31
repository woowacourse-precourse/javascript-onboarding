function problem5(money) {
  var answer = setMoney(money);
  return answer;
}

const MONEY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function setMoney(money) {
  const result = [];

  for (let i = 0; i < MONEY_UNIT.length; i++) {
    const current = MONEY_UNIT[i];
    const setCnt = Math.floor(money / current); // Math.floor()는 소수점 이하를 버린다.

    result.push(setCnt);
    money -= current * setCnt;
  }

  return result;
}

module.exports = problem5;
