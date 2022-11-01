/*
  기능 목록
  1. 연속하는 중복 문자들을 반복해서 삭제
*/

function problem2(cryptogram) {
  let regExp = new RegExp(/(.)\1+/);
  while (regExp.test(cryptogram)) {
    cryptogram = cryptogram.replace(regExp, "");
  }
  return cryptogram;
}

module.exports = problem2;
