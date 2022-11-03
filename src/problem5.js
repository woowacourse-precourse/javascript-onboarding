const MESSAGES = Object.freeze({
  ERROR_RANGE: '금액은 1 이상 1,000,000 이하의 자연수여야 합니다.',
});
const MAX_MONEY_RANGE = 1_000_000;
const MONEY_UNIT = [50_000, 10_000, 5_000, 1_000, 500, 100, 50, 10, 1];

function problem5(money = 0) {
  const result = [];
  if (money < 1 || money > MAX_MONEY_RANGE) return MESSAGES.ERROR_RANGE;

  MONEY_UNIT.forEach((unit) => {
    result.push(parseInt(money / unit));
    money = money % unit;
  });
  return result;
}

module.exports = problem5;
