/** 기능 목록
 * 1. 숫자에서 몇개의 3, 6, 9가 있는지를 반환하는 count369 함수 작성
 * 2. 파라미터로 입력받은 숫자만큼 1부터 n까지 count369 함수를 호출하여
 *    손뼉의 횟수를 반환한다.
 */

/**
 * 숫자에서 몇개의 3, 6, 9가 포함되어 있는지 반환하는 함수
 * @param {number} number 3,6,9 개수를 확인할 숫자
 * @returns {number} 3, 6, 9의 개수
 */
const count369 = (number) => {
  let result = number.toString();
  let regExp = /[369]/g;
  if ((match369 = result.match(regExp))) {
    return match369.length;
  }
  return 0;
};

function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    count += count369(i);
  }
  return count;
}

module.exports = problem3;
