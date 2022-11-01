const BILL = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

/**
 * @param {number} unit 지폐 or 동전
 * @param {number} money
 * @returns {number} 변환 가능 횟수
 */
const getMaxUnitCnt = (unit, money) => {
  return parseInt(money / unit);
};

/**
 * @param {number} unit 지폐 or 동전
 * @param {number} money
 * @returns {number} 변환 루 남은 돈
 */
const getUnitRest = (unit, money) => {
  return money % unit;
};

function problem5(money) {
  const answer = [];
  let n = money;

  for (const unit of BILL) {
    const maxUnitCnt = getMaxUnitCnt(unit, n);
    const rest = getUnitRest(unit, n);
    answer.push(maxUnitCnt);
    n = rest;
  }

  return answer;
}

module.exports = problem5;
