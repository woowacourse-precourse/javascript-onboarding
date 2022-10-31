//기능 구현 목록
// - 새로운 배열 원소를 담을 stack 생성
// - 배열 중복 검사
// - 스택 문자열로 변환

function problem2(cryptogram) {
  let codeStack = [];

  codeStack.push(cryptogram[0]);

  for (let i = 1; i < cryptogram.length; i++) {
    if (cryptogram[i] === codeStack[codeStack.length - 1]) {
      codeStack.pop();
    } else {
      codeStack.push(cryptogram[i]);
    }
  }
  return answer;
}

module.exports = problem2;
