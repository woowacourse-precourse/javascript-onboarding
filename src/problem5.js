/**
 * @name problem5
 * @description
 * 계좌에 들어있는 돈 일부를 은행에서 출금하고자 한다. 돈 담을 지갑이 최대한 가볍도록 큰 금액의 화폐 위주로 받는다.
 * 돈의 액수 money가 매개변수로 주어질 때,
 * 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전
 * 각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아 return 하도록 solution 메서드를 완성하라.
 * @param {number} [money]
 * @return {(number[])} 금액이 큰 순서대로 배열에 담아 return
 * 제한사항
 * @throws money는 1 이상 1,000,000 이하인 자연수이다.
 * 기능목록
 * @todo 1. 돈을 변환해주는 함수
 * @todo 2. 변환 후 나머지 돈을 주는 함수
 * @todo 3. 순회하면서 알맞은 금액을 변환해주고 답을 리턴
 */

function problem5(money) {
  const MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];
  MONEY.forEach((m) => {
    answer.push(getChangeMoney(money, m));
    money = setChangeMoney(money, m);
  });
  return answer;
}

function getChangeMoney(money, changeMoney) {
  return Math.floor(money / changeMoney);
}

function setChangeMoney(money, changeMoney) {
  return money % changeMoney;
}

module.exports = problem5;
