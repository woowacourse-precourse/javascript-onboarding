/**
 * 처리해야 할 액수가 0원인지 확인한다.
 * @param {number} moneyLeft - 처리해야 할 액수
 * @return {boolean}
 */
const isMoneyLeftZero = (moneyLeft) => {
  return !moneyLeft;
};

/**
 * 처리해야 할 액수가 현제 포인터로 지정된 화폐단위로 해결할 수 있는지 확인한다.
 * @param {number} moneyLeft - 처리해야 할 액수
 * @param {number} moneyKind - 사용 할 화폐단위
 * @return {boolean}
 */
const isPossibleToUseSelectedMoneyKind = (moneyLeft, moneyKind) => {
  return moneyLeft >= moneyKind;
};

function problem5(money) {
  var answer;
  return answer;
}

module.exports = problem5;
