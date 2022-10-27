/*
--기능목록--

1. 연속하는 중복 문자를 제거한다.
    - 더 이상 제거하지 못할 때 까지 제거 후 최종 문자열을 리턴한다.
*/

function problem2(cryptogram) {
  const regax = /([a-z])\1+/g;
  const removedCryptogram = cryptogram.replace(regax, "");
  if (cryptogram === removedCryptogram) return cryptogram;

  return problem2(removedCryptogram);
}

module.exports = problem2;
