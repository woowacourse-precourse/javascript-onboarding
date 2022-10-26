// 기능 요구 사항

// - [x] 2개 이상 잘라내는 정규식 patt 생성
// - [x] 정규식이 true일시 while문 유지
// - [x] while문이 유지될 때 2개 이상 연속 문자를 잘라내기
// - [x] 정규식이 false일시 answer값 return

function problem2(cryptogram) {
  const patt = /(.)\1+/;

  while (patt.test(cryptogram)) {
    cryptogram = cryptogram.replace(patt, "");
  }

  return cryptogram;
}

module.exports = problem2;
