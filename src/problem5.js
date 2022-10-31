/*
  ### 기능 목록

  1. 화폐 단위를 배열에 넣는다.
  2. 큰 화페 단위부터 접근하면서, money(0이상)에서 최대한 지불한다.(=뺀다.)
  3. 그리고 그 화폐 단위의 지불 횟수(뺀 횟수)를 반환한다.
*/

function problem5(money) {
  const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = won.map((e, i) => {
    let count = 0;
    while (money - e >= 0) {
      money = money - e;
      count++;
    }
    return count;
  });
  return answer;
}

module.exports = problem5;
