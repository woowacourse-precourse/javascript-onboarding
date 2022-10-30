/* 
 * Features
 * 1. 연속하는 중복 문자들을 삭제한 결과를 return
 *  
 * Exceptions
 * 1. cryptogram은 길이가 1 이상 1000 이하인 문자열이다
 * 2. cryptogram은 알파벳 소문자로만 이루어져 있다.
 */

function problem2(cryptogram) {
  let answer;
  let i = 0;
  let arrFromCryptogram = cryptogram.split("")

  while (i !== arrFromCryptogram.length) {
    if(arrFromCryptogram[i]  === arrFromCryptogram[i + 1]) {
      arrFromCryptogram.splice(i, 2);
      i = 0;
    } else {
      i += 1;
    }
  }

  answer = arrFromCryptogram.join("")

  return answer;
}

module.exports = problem2;
