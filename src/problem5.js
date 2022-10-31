/**
 * 입력된 돈(money)를 금액이 큰 화폐를 우선해서 받았을 경우 각 화폐의 단위 별 개수를 구하는 함수
 *
 * @param {number} money 1 이상 1,000,000 이하인 자연수
 * @returns 오만, 만, 오천, 천, 오백, 백, 오십, 십, 일원 동전들이
 *          각 몇개로 변환되는지 금액이 큰 순서대로 담긴 배열
 */
function problem5(money) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = new Array(currency.length).fill(0);

  currency.reduce((acc, cur, index) => {
    const count = Math.floor(acc / cur);
    answer[index] = count;

    return acc % cur;
  }, money);

  return answer;
}

module.exports = problem5;
