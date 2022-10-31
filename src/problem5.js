/*
  구현할 기능 목록
  [O] 큰 금액의 화폐단위부터 차례대로 확인하여, 각 화폐가 필요한 개수를 반환하는 기능
*/

function problem5(money) {
  const money_types = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const money_counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  money_types.forEach((money_type, idx) => {
    money_counts[idx] = Math.floor(money / money_type);
    money %= money_type;
  });
  return money_counts;
}

module.exports = problem5;
