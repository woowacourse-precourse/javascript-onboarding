const MONETARY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const answer = MONETARY_UNIT.map((monetaryUnit) => {
    const count = Math.floor(money / monetaryUnit); // TODO: 변수명 변경
    money = money % monetaryUnit;
    return count;
  });
  return answer;
}

module.exports = problem5;
