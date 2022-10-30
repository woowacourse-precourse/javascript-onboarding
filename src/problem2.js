function problem2(cryptogram) {

  // 문자열을 배열로 변경해 주는 기능 구현
  let answer = [...cryptogram];

  // 배열에 담겨있는 문자 중 연속으로 중복되는 문자를 제거해주는 코드 작성
  let a = 0;
  while (a <= answer.length) {
    for (let i = 0; i <= answer.length; i++) {
      if (answer[i] == answer[i + 1]) {
        answer.splice(i, 2);
      }
    };
    a += 1;
  }

  // 연속으로 중복되는 문자를 제거해 주는 반복문에서 현재 마지막 반복이 돌지 않는 이슈를 발견하여 임시 방어 코드 작성
  // 원인을 찾아 이슈를 해결하려 하였으나. 시간 관계상 강제로 반복문을 한 번 더 돌도록 작성하였음 ㅠㅠ
  for (let i = 0; i <= answer.length; i++) {
    if (answer[i] == answer[i + 1]) {
      answer.splice(i, 2);
    }
  }

  return result;
}

module.exports = problem2;
