function problem3(number) {
  let totalClaps = 0;
  for (let currNum = 1; currNum <= number; currNum++) {
    totalClaps += countClaps(currNum);
  }
  return totalClaps;
}

/**
 * 해당 숫자에서 박수를 치는 횟수를 구하여 반환한다.
 * @param {number} number
 * @returns {number}
 */
function countClaps(number) {
  let count = 0;

  const numStr = number + "";
  for (let i = 0; i < numStr.length; i++) {
    if (isOneOf369(numStr[i])) {
      count += 1;
    }
  }

  return count;
}

/**
 * 입력받은 문자열이 '3', '6', '9' 중 하나인지 검사한다.
 * @param {string} char
 * @returns {boolean}
 */
function isOneOf369(char) {
  return char === "3" || char === "6" || char === "9";
}

module.exports = problem3;
