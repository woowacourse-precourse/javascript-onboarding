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

  return result;
}

module.exports = problem2;
