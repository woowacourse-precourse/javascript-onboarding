/*
기능 구현 목록
- [v] 돈을 큰 금액의 화폐 순으로 나누는 기능
- [ ] 화폐 별로 나눈 개수의 결과를 담는 기능
*/

function problem5(money) {
  let answer = 0;
  return answer;
}

function divideMoney(money) {
  const MONETARY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const _money = money;

  for (let i = 0; i < MONETARY_UNIT.length; i++) {
    _money %= MONETARY_UNIT[i];
  }

  return;
}

problem5(50237); // [1, 0, 0, 0, 0, 2, 0, 3, 7]
problem5(15000); // [0, 1, 1, 0, 0, 0, 0, 0, 0]

module.exports = problem5;
