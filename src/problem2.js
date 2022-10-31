/*
 * -- 기능 목록 --
 * 1. 반복된 문자열이 없을 때까지 반복 문자를 찾아, 제거한 해독문을 반환하는 함수 - decrypt(cryptogram)
 * 1-1. 두 번 이상 반복된 문자열과 매칭되는 정규표현식 - consecutiveRegExp
 */

function decrypt(cryptogram) {
  const consecutiveRegExp = /(\w)\1+/g;

  while (consecutiveRegExp.test(cryptogram)) {
    cryptogram = cryptogram.replace(consecutiveRegExp, "");
  }
  return cryptogram;
}

function problem2(cryptogram) {
  let answer = decrypt(cryptogram);
  return answer;
}

module.exports = problem2;
