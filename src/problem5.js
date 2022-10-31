/* 문제 분석
1. 계좌에 들어있는 돈이 주어진다.
2. 돈을 5만원, 1만원, 5000원, 1000원, 500원 100원, 50원, 10원으로 변환한다.
3. 금액이 큰 순서대로 배열에 담는다.
 */
/* 테스트 케이스 분석
tc1. 50237
5만원 1개 - 잔액 237
100원 2개 - 잔액 37
10원 3개 - 잔액 7
1원 7개 - 잔액 0

tc2. 15000
1만원 1개 - 잔액 5000원
5000원 1개 = 잔액 0원
 */

// main
function problem5(money) {
  var answer = [];

  // 나누는 금액의 종류
  const deviders = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  // 돈을 나누는 금액으로 하나씩 나누면서, 몫을 정답배열에 push
  // 나머지 돈은 다음 루프에서 다음 나눌 금액으로 나눈다.
  for (let devider of deviders) {
    answer.push(parseInt(money / devider));
    money = money % devider;
  }
  return answer;
}

module.exports = problem5;
