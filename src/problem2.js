function problem2(cryptogram) {
  // 정규식 선언
  const reg = /(.)\1+/;

  // 연속된 문자를 찾는다.
  // 없다면 문자 반환
  if(!reg.test(cryptogram)) {
    return cryptogram;
  } else {
    // 있다면 replace를 통해 연속된 문자들을 공백으로 변경한다.
    const newCryptogram = cryptogram.replace(reg, "");
    // 재귀함수를 호출하여 해당 내용을 반복한다.
    return problem2(newCryptogram);
  }
}

module.exports = problem2;
