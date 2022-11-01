//기능 구현 목록
// - 새로운 배열 원소를 담을 stack 생성
// - 배열 중복 검사
// - 스택 문자열로 변환

function problem2(cryptogram) {
  let codeStack = [];
  let prevLetter;

  codeStack.push(cryptogram[0]);

  for (let i = 1; i < cryptogram.length; i++) {
    if (
      codeStack.length > 0 &&
      cryptogram[i] === codeStack[codeStack.length - 1]
    ) {
      codeStack.pop();
    } else {
      if (cryptogram[i] === prevLetter) {
        continue;
      }
      codeStack.push(cryptogram[i]);
    }
    prevLetter = cryptogram[i];
  }

  const answer = codeStack.join("");
  return answer;
}

module.exports = problem2;
