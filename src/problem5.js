/**
 * @param {number} money 돈
 * @returns {number[]|[]}
 */
function problem5(money) {
  // 인풋으로 들어온 money를 let 변수에 할당한다.
  let totalMoney = money;
  // 화폐들
  const CURRENCIES = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // 화폐들의 종류의 개수만큼 0으로 초기화한 배열
  const result = new Array(CURRENCIES.length).fill(0);

  // 화폐들을 순회하면서
  CURRENCIES.forEach((CURRENCY, i) => {
    // 현재 화폐가 현재 총 금액 이하라면
    if (CURRENCY <= totalMoney) {
      // 현재 총 금액에 화폐가 몇 개 들어갈 수 있는지 계산해서
      const count = Math.floor(totalMoney / CURRENCY);
      console.log(count);
      // result에 현재 화폐의 개수만큼 담고
      result[i] = count;
      // 총 금액에서 그 금액만큼을 뺀다.
      totalMoney -= CURRENCY * count;
    }
  });

  return result;
}

module.exports = problem5;
