const MONEY_UNIT_ARY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let answer = Array.from({ length: MONEY_UNIT_ARY.length }, () => 0);
  let remain = money;
  MONEY_UNIT_ARY.map((unit, i) => {
    answer[i] = parseInt(remain / unit);
    remain = remain % unit;
  });
  return answer;
}

module.exports = problem5;
