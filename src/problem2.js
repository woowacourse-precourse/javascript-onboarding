function problem2(cryptogram) {
  var answer = [];

  let cur = 0;
  while (cur < cryptogram.length) {
    // 스택의 최상위 문자와 cryptogram[cur] 문자를 비교하며 연속된 중복 원소면 스택을 pop해주고 연속되지 않을 때까지 건너뛴다.
    if (answer.length == 0 || answer[answer.length - 1] != cryptogram[cur]) {
      // 문자가 연속되지 않을 때 문자를 push해준다
      answer.push(cryptogram[cur]);
      cur++;
    } else {
      // 문자가 연속될 때
      while (
        answer[answer.length - 1] == cryptogram[cur] &&
        cur < cryptogram.length
      ) {
        cur++;
      }
      answer.pop();
    }
  }

  answer = answer.join('');
  return answer;
}

module.exports = problem2;
