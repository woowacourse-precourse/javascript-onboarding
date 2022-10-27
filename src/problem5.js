/*
*요구사항
돈의 액수를 줄 수 있는 화폐로 나눈다.
이때, 화폐 개수의 총합이 최소가 되게 하여라.
1<= money <-1000000

*해결전략
50000부터 1원까지 차례로 나눠가면서 몫을 더해주고 나머지만 게속 남아가게 하자.
중간에 나머지가 0이 되면 종료.

*기술목록
1. 각 화페에 맞게 금액을 나눠서 나머지를 도출해나아가는 함수 => divideCurrency

*/

function problem5(money) {
  function divideCurrency(m) {
    const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    const currencyLen = currency.length;
    let currencyCnt = Array.from({ length: currencyLen }).fill(0);
    let MONEY = m;
    let [rest, idx] = [0, 0];
    while (idx < currencyLen) {
      let cnt = parseInt(MONEY / currency[idx]);
      currencyCnt[idx] = cnt;
      rest = MONEY % currency[idx];
      if (rest === 0) break;
      MONEY = rest;
      idx += 1;
    }
    return currencyCnt;
  }
}
module.exports = problem5;
