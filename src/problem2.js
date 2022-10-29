function problem2(cryptogram) {
  while (/([a-z])\1{1,}/.test(cryptogram)) {
    cryptogram = cryptogram.replace(/([a-z])\1{1,}/, "");
  }
  return cryptogram;
}

module.exports = problem2;

/*
1. 같은 글자가 2글자 이상 연속되면 삭제
  /([a-z])\1{2,}/.test(cryptogram) === true이면 replace("")
2. 없을 때까지 반복
*/
