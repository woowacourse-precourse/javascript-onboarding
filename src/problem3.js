/**
 * 기능 정의
 *
 * - [ ] 3의 배수인지 판별하는 기능
 * - [ ] 입력받은 수를 통해 369 게임의 조건에 맞는 만큼 박수 횟수를 반환하는 기능
 * - [ ] 1부터 지정한 수 까지 369 게임의 맞게 박수 횟수 세기
 */

/**
 * 입력받은 수까지 369게임을 진행한다고 했을 때,
 * 손뼉을 몇 번 쳐야하는지 구하는 함수
 *
 * @param {number} number 1 이상 10,000 이하인 자연수
 * @returns 1부터 number까지 손뼉을 쳐야 하는 횟수
 */
function problem3(number) {
  var answer;
  return answer;
}

/**
 * multiple의 배수가 맞는 지 확인하는 함수
 *
 * @param {number} number 배수인지 확인할 숫자
 * @param {number} [multiple=3] 기준이되는 정수
 * @returns
 */
function isMultiple(number, multiple = 3) {
  return number !== 0 && number % multiple === 0;
}

module.exports = problem3;
