// @ts-check

/**
 * @param {string} cryptogram
 * @returns {string}
 */
function problem2(cryptogram) {
  const stack = [cryptogram[0]];
  let temp;

  // 연속하는 중복 문자를 스택에 담아서 제거
  for (let i = 1; i < cryptogram.length; i++) {
    const last = stack[stack.length - 1];
    if (cryptogram[i] !== last && cryptogram[i] !== temp) {
      stack.push(cryptogram[i]);
      temp = "";
    } else if (cryptogram[i] === last) temp = stack.pop();
  }
  return stack.join("");
}

console.log(problem2("browoanoommnaon")); // "brown"
console.log(problem2("zyelleyz")); // ""

module.exports = problem2;
