function problem3(number) {
  var answer = count369(number);
  return answer;
}

/**
 * 1부터 number까지 숫자를 이어 문자열을 만든다
 * @param {number} number - 입력값
 * @returns {string} 1부터 number까지 이어진 문자열
 */
const makeNumberWord = (number) => {
  return Array.from({ length: number }, (_, index) => index + 1).join("");
};

/**
 * 369를 제외한 숫자는 없앤다
 * @param {string} word - 1부터 number까지 이어진 문자열
 * @returns {string} 369만 남은 문자열
 */
const makeOnly369 = (word) => {
  return word.replace(/[0124578]/gi, "");
};

/**
 * 숫자를 이어만든 뒤, 369만 남기고, 해당 문자열 길이를 구한다
 * @param {number} word - 입력값
 * @returns {number} 369만 남은 문자열의 길이
 */
const count369 = (number) => {
  return makeOnly369(makeNumberWord(number)).length;
};

module.exports = problem3;
