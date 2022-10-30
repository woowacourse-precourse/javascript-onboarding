/* 최대 25억까지 계산 가능 */
const SEARCH_ENDPOINT = 50000;
/* 화폐 단위를 담은 배열 생성 */
const baseAmonut = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let answer = withdraw(money);
  return answer;
}
/** 50000원 단위는 바이너리 서치로 최대로 출금할 수 있는 금액을 찾는다.
 * 이후 금액은 최대 5만원이므로 10000, 5000, 1000, .. 순서대로 최대 출금 금액을 찾아 나간다.
 * 현재는 최대 금액이 100만원이지만 이후 금액이 늘어났을때 어떻게 빠르게 구할 수 있을까를 생각하며
 * 접근해보았다.
 * 큰 화폐 단위부터 1번씩 금액에서 차감하며 찾으면 이후 금액이 크게 늘어났을때 빠르게 구할 수 없을
 * 것이라 판단하여 lower bound를 이용하였고, 현재 가장 큰 화폐보다 더큰 신권이 추가된다면
 * baseAmount의 가장 앞에 추가만 해주면 된다.
 */
/* 출금 함수 */
function withdraw(money) {
  const wallet = [];
  /* 금액 차례로 출금 */
  baseAmonut.forEach((base, idx) => {
    let cash = 0;
    if (idx === 0) { // 가장 큰 화폐 출금
      cash = lessThan(base, money);
    } else { // 나머지 화폐들 차례대로 출금
      cash = getProperCash(base, money);
    }
    wallet.push(cash);
    money -= base * cash;
  });
  return wallet;
}

/* 가장 큰 화폐 lower bound 함수 */
function lessThan(base, money) {
  if(money < base) return 0;
  
  let s = 1, e = SEARCH_ENDPOINT;
  while (s < e) {
    const mid = Math.floor((s + e) / 2);
    const total = mid * base;
    if (total >= money) e = mid;
    else if (total < money) s = mid + 1;
  }
  return s * base > money ? s - 1 : s;
}

/* 나머지 화폐 비교 함수 */
function getProperCash(base, money) {
  return parseInt(money/base);
}

module.exports = problem5;