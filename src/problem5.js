function problem5(money) {
  // 큰 금액의 화폐 순서의 오만 원권 ~ 일원 동전 (PROBLEM5.md 참조)
  const banknotes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return countsBanknotes(money, banknotes);
}

/**
 * 돈의 액수와 화폐의 종류를 입력받아 각 화폐가 몇개씩 필요한지 반환한다.
 * @param {number} money money는 1 이상 1,000,000 이하인 자연수이다.
 * @param {number[]} banknotes banknotes는 먼저 바꿀 순서로 정렬된 화폐권 목록 배열이다.
 * @returns {number[]}
 */
function countsBanknotes(money, banknotes) {
  const counts = [];
  let remain = money;
  for (let i = 0; i < banknotes.length; i++) {
    counts[i] = parseInt(remain / banknotes[i]);
    remain = remain % banknotes[i];
  }
  return counts;
}

module.exports = problem5;
