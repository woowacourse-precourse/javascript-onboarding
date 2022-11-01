/* 
 * Features
 * 1. 연속하는 중복 문자들을 삭제한 결과를 return
 *  
 * Exceptions
 * 1. cryptogram은 길이가 1 이상 1000 이하인 문자열이다
 * 2. cryptogram은 알파벳 소문자로만 이루어져 있다.
 */

const isOutOfRange = inputLength => !(inputLength >= 1 && inputLength <= 1000)
const isLowerCase = char => char === char.toLowerCase()

function problem2(cryptogram) {
  let answer = cryptogram.split("");
  let i = 0;
  if (isOutOfRange(cryptogram.length)) {
    throw "Input range error"
  }
  if (!isLowerCase(cryptogram)) {
    throw "Input must be small letter"
  }
  while (i !== answer.length) {
    if(answer[i]  === answer[i + 1]) {
      answer.splice(i, 2);
      i = 0;
    } else {
      i += 1;
    }
  }

  return answer.join("");
}

module.exports = problem2;
