// 기능 목록
// 1. 연속하는 중복 문자열 모두 제거

function problem2(cryptogram) {
  let answer = cryptogram[0];

  for (let i = 1; i < cryptogram.length; i++) {
    let top = answer[answer.length - 1];

    if (top !== cryptogram[i]) answer += cryptogram[i];
    else answer = answer.slice(0, -1);
  }

  return answer;
}

module.exports = problem2;
