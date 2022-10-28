/**
 * 기능 목록
 * 1. 숫자을 입력 받는다.
 * 2. 1부터 입력받은 숫자까지 배열에 추가한다.
 * 3. 배열을 순회한다.
 *   3-1. 배열 요소마다 3, 6, 9의 개수를 count해서 결과에 추가한다.
 * 4. 결과값을 return한다.
 */

/**
 * @param {string} char
 */
const check369Includes = (char) => ["3", "6", "9"].includes(char);

/**
 * @param {string} number
 */
const count369InNumber = (number) => {
  let cnt = 0;
  for (const char of number) {
    if (check369Includes(char)) {
      cnt++;
    }
  }
  return cnt;
};

/**
 * @param {number} number
 */
function createNumbers(number) {
  return new Array(number).fill().map((_, index) => (index + 1).toString());
}

/**
 * @param {number} number
 * @returns {number} result
 */
function problem3(number) {
  let result = 0;
  const numbers = createNumbers(number);
  numbers.forEach((element) => {
    result += count369InNumber(element);
  });
  return result;
}

module.exports = problem3;
