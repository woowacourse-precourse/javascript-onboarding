// 0. 예외처리
//  0.1 [ ] 문자열이 비었거나 하나의 문자만 있는 경우

// 1. 문자열 제거 로직
//  1.1 [ ] stack 사용
//  1.2 [ ] 문자열을 앞에서부터 하나씩 answer에 더한다
//    1.2.1. answer의 마지막 문자열과 cryptogram의 현재 문자가 같으면 answer에서 pop

// 2. 1번 로직 반복 기준
//  2.1 [ ] 연속으로 같은 문자열이 존재하지 않아야함 
//  2.2 [ ] flag로 연속으로 같은 문자열이 있는지 판별 
//  2.3 [ ] 연속되는 문자열이 있으면 true, 아니면 false
function problem2(cryptogram) {
  let answer = [];

  return answer.join("");
}

module.exports = problem2;
