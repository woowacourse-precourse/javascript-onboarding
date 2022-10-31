/*
 * -- 기능 목록 --
 * 1. 출금 결과안 화폐의 배열을 반환하는 함수 - getWithdrawResult(money)
 * 2. 반복호출할 화폐 단위를 저장한 배열 - BILLS
 */

const BILLS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function getWithdrawResult(money) {
  let withdraw = [];

  BILLS.forEach((bill) => {
    withdraw.push(Math.floor(money / bill));
    money %= bill;
  });

  return withdraw;
}

function problem5(money) {
  let answer = getWithdrawResult(money);
  return answer;
}

module.exports = problem5;
