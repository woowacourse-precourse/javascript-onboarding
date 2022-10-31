// 기능 구현 목록
// - 알파벳 배열 생성
// - 거꾸로 된 알파벳 배열 생성
// - 알파벳&거꾸로 된 알파벳 객체 생성
// - 청개구리 사전에 따른 문자열

function problem4(word) {
  let originAlphabet = [];
  let reversedAlphabet = [];

  for (let i = 97; i <= 122; i++) {
    originAlphabet.push(String.fromCharCode(i));
  }

  for (let i = 122; i >= 97; i--) {
    reversedAlphabet.push(String.fromCharCode(i));
  }

  return answer;
}

module.exports = problem4;
