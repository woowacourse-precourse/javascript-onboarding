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

const problem5 = (money) => {
  const answer = new Array(9).fill(0);

  const moneyKinds = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; // 화폐 종류
  let moneyKindIndexToUse = 0; // 화폐 종류 포인터
  let moneyLeft = money; // 처리해야 할 돈

  while (!isMoneyLeftZero(moneyLeft)) {
    // 해당 화폐가 사용 가능하다면
    if (
      isPossibleToUseSelectedMoneyKind(
        moneyLeft,
        moneyKinds[moneyKindIndexToUse]
      )
    ) {
      moneyLeft -= moneyKinds[moneyKindIndexToUse];
      answer[moneyKindIndexToUse]++;
      continue;
    }

    // 화폐 종류 번경 (포인터 변경)
    moneyKindIndexToUse++;
  }

  return answer;
}

module.exports = problem5;
