// @ts-check

/**
 * @param {string} word
 * @returns {string}
 */
function problem4(word) {
  let res = "";

  // 아스키코드 - 10진수로 변환하고 연산 후 다시 문자로 변환
  for (let i = 0; i < word.length; i++) {
    let ascii = word.charCodeAt(i);
    if (65 <= ascii && ascii <= 90) ascii = 155 - ascii;
    else if (97 <= ascii && ascii <= 122) ascii = 219 - ascii;
    res += String.fromCharCode(ascii);
  }
  return res;
}

console.log(problem4("I love you")); // "R olev blf"

module.exports = problem4;
