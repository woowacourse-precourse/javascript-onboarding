function problem5(money) {
  const MONEYUNIT = [10000, 1000, 100, 10, 1]
  
  const answer = MONEYUNIT.map((unit, i) => {
    if(i === 4) return money;
    else {
      const Q = money / unit;
      money = money % unit
      return calculate(Q)
    } 
  })

  return answer.flat();
}

/**
 * @param {number} Q 숫자타입의 몫값 
 * @returns 현재 단위의 5배수와 나머지를 숫자 배열로 반환합니다.
 */
function calculate(Q) {
    return [parseInt(Q/5, 10), parseInt(Q%5, 10)];
}

module.exports = problem5;
