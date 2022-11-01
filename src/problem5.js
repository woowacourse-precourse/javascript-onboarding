/**
 * 돈 담을 지갑이 최대한 가볍도록 큰 금액의 화폐 위주로 받는다
 * @function problem5
 * @param {number} money 돈의 액수
 * @returns {string[]} result 금액이 큰 순서대로 화폐의 갯수를 배열에 담아 리턴
 *  */

function problem5(money) {
  const CURRENCIES = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = Array.from({ length: CURRENCIES.length }, () => 0);

  for (let i = 0; i < CURRENCIES.length; i++) {
    result[i] = Math.floor(money / CURRENCIES[i]);
    money = money % CURRENCIES[i];
    if (money === 0) break;
  }
  return result;
}

module.exports = problem5;
