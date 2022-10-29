/**
 * 숫자의 각 자릿수 중 하나가 주어지면 손뼉을 쳐야하는지 여부를 반환한다.
 * @param {number} i 숫자의 각 자릿수 중 하나
 * @returns {boolean} 손뼉을 쳐야하는지 여부
 */
function shouldClap(i) {
  return i === 3 || i === 6 || i === 9;
}

/**
 * 주어진 숫자에서 손뼉을 몇 번 쳐야하는지 계산하는 함수
 * @param {number} n 손뼉 횟수를 계산할 숫자
 * @returns {number} 손뼉을 칠 횟수
 */
function getClapCount(n) {
  let clapCount = 0;
  for (let i of String(n).split('').map(Number)) {
    clapCount += +shouldClap(i);
  }
  return clapCount;
}

/**
 * 문제 2번의 입력인, 369게임의 마지막 숫자가 주어지면
 * 1부터 해당 숫자까지 몇 번 손뼉을 치게 되는지 구한 후 반환한다.
 * @param {number} number 369게임의 마지막 숫자
 * @returns {number} 손뼉 횟수
 */
function problem3(number) {
  let clapCount = 0;
  for (let n = 1; n <= number; n++) {
    clapCount += getClapCount(n);
  }
  return clapCount;
}

module.exports = problem3;
