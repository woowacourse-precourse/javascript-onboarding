/* 
  예외처리
  0. [x] 문자열이 비었거나 하나의 문자만 있는 경우

  로직
  1. [x] stack에 문자를 하나씩 넣는다
  2. [x] cryptogram의 글자를 하나씩 stack에 넣는다
  3. [x] stack의 마지막 요소가 cryptogram과 일치하면 stack의 요소를 빼낸다
*/

/**
 * main function - remove overlap characters
 * @param {string} cryptogram - string
 * @returns {string} answer - remove overlap characters from cryptogram
 */
function problem2(cryptogram) {
  let answer = [];

  if (cryptogram.length === 0 || cryptogram.length === 1) return cryptogram;

  for (let i=0; i<cryptogram.length; i++) {
    if (answer[answer.length - 1] === cryptogram[i]) {
      answer.pop();
    } else {
      answer.push(cryptogram[i]);
    }
  }

  return answer.join("");
}

module.exports = problem2;
