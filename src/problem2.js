// 기능 목록
// 1. answer 마지막 글자랑 cryptogram의 n번째 글자랑 비교했을 때 다르면 answer에 cryptogram의 n번째 글자 추가하기
// 2. 같으면 answer의 마지막 글자 제거하기

function problem2(cryptogram) {
  let answer = "";

  for (let i = 0; i < cryptogram.length; i++) {
    if (answer[answer.length - 1] !== cryptogram[i]) answer += cryptogram[i];
    else answer = answer.slice(0, -1);
  }

  return answer;
}

module.exports = problem2;
