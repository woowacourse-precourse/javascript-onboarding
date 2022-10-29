// @ts-check

/**
 * @param {string} word
 * @returns {string}
 */
function problem4(word) {
  let res = "";

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
