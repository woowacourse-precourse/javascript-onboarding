// @ts-check

const ASCII = Object.freeze({
  UPPER_MIN: 65,
  UPPER_MAX: 90,
  UPPER_GAP: 155,
  LOWER_MIN: 97,
  LOWER_MAX: 122,
  LOWER_GAP: 219,
});

/**
 * @param {string} word
 * @returns {string}
 */
function problem4(word) {
  let res = "";

  // 아스키코드 - 10진수로 변환하고 연산 후 다시 문자로 변환
  for (let i = 0; i < word.length; i++) {
    let code = word.charCodeAt(i);
    if (ASCII.UPPER_MIN <= code && code <= ASCII.UPPER_MAX) {
      code = ASCII.UPPER_GAP - code;
    } else if (ASCII.LOWER_MIN <= code && code <= ASCII.LOWER_MAX) {
      code = ASCII.LOWER_GAP - code;
    }
    res += String.fromCharCode(code);
  }
  return res;
}

console.log(problem4("I love you")); // "R olev blf"

module.exports = problem4;
