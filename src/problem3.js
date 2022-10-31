/**
 * 기능 정의
 *
 * - [x] 3의 배수인지 판별하는 기능
 * - [x] 입력받은 수를 통해 369 게임의 조건에 맞는 만큼 박수 횟수를 반환하는 기능
 * - [x] 1부터 지정한 수 까지 369 게임의 맞게 박수 횟수 세기
 */

/**
 * 입력받은 수까지 369게임을 진행한다고 했을 때,
 * 손뼉을 몇 번 쳐야하는지 구하는 함수
 *
 * @param {number} number 1 이상 10,000 이하인 자연수
 * @returns {number} 1부터 number까지 손뼉을 쳐야 하는 횟수
 */
function problem3(number) {
  const clapCount = getCount(1, number, 0, countClap);

  return clapCount;
}

/**
 * start부터 end까지 callback에 의한 count값을 세는 함수
 *
 * @param {number} start 시작 값 및 콜백에 전달된 현재 숫자
 * @param {number} end 종료 값
 * @param {number} count callback에 의해 증가된 count
 * @param {getCountCallback} callback 입력받은 수가 3,6,9의 조건에 맞는 만큼 박수 횟수를 반환하는 함수
 * @returns {number} start부터 end까지 콜백에 의해 변경된 count값
 */
function getCount(start, end, count, callback) {
  if (start > end) {
    return count;
  }

  const currentCount = callback(start) + count;
  return getCount(start + 1, end, currentCount, callback);
}

/**
 * 숫자를 각 자릿수로 분할한 후에 369 조건에 맞는다면 박수 수를 늘리는 함수
 *
 * @callback getCountCallback
 * @param {number} number 박수를 쳐야하는지 생각해야할 정수
 * @returns {number} 입력받은 수가 369에 조건에 맞는 만큼 박수를 친 횟수
 */
function countClap(number) {
  const digits = number.toString().split("").map(Number);
  const clapCount = digits.filter((digit) => isMultiple(digit)).length;

  return clapCount;
}

/**
 * multiple의 배수가 맞는 지 확인하는 함수
 *
 * @param {number} number 배수인지 확인할 숫자
 * @param {number} [multiple=3] 기준이되는 정수
 * @returns {boolean} 지정한 배수가 맞다면 true, 아니면 false
 */
function isMultiple(number, multiple = 3) {
  return number !== 0 && number % multiple === 0;
}

module.exports = problem3;
