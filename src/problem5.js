function problem5(money) {
  const MONEY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = Array.from({ length: MONEY_UNIT.length }, () => 0);
  let rest = money;

  MONEY_UNIT.map((unit, idx) => {
    answer[idx] = Math.floor(rest / unit);
    rest %= unit;
  });
  return answer;
}

module.exports = problem5;
