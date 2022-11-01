const MONETARY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  return MONETARY_UNIT.map((m) => {
    const count = Math.trunc(money / m);
    money = money % m; // 단위 지폐를 뺀 나머지 잔돈
    return count;
  });
}

module.exports = problem5;
