/*
--기능 목록--
1. 주어진 문자열의 알파벳을 반대 순서대로 변환한다.(ex. A<->Z, B<->Y )
    - 알파벳이 아닌 문자는 변환하지 않는다.
    - 대문자는 대문자로, 소문자는 소문자로 변환한다.

2. 변환된 문자열을 하나의 문자열로 연결한다.
*/

function problem4(word) {
  var answer;
  return answer;
}

const isAlphabet = (chr) => {
  const regExp = /[a-z|A-Z]/;
  return regExp.test(chr);
};

const reverseAlphabet = (alphabet, cases, lastAsciiCode) => {
  return cases[lastAsciiCode - alphabet.charCodeAt(0)];
};

module.exports = problem4;
