function problem2(cryptogram) {
  var answer = cryptogram;
  let is_deleted; // 중복된 문자를 삭제했는지 확인하는 변수

  do {
    // 중복된 문자를 '모두' 제거 후 다시 중복된 문자가 있는지 확인한다.
    is_deleted = false;
    let temp = '';

    for (let i = 0; i < answer.length; i++) {
      const cur = answer[i];
      if (cur == answer[i + 1]) {
        is_deleted = true;
        while (cur == answer[i + 1]) {
          i++;
        }
      } else temp += answer[i];
    }
    answer = temp;
  } while (is_deleted);

  return answer;
}

function problem2_wrong(cryptogram) {
  // 앞에서부터 중복된 문자를 제거 후 바로 합친 뒤에 중복된 문자가 있는지 다시 확인하는 방법
  // 문제의 요구 사항은 중복된 문자를 '모두' 제거한 뒤에 합친 뒤 다시 확인해야함
  // 문제를 잘못 이해하여 푼 풀이지만 나중에 참고를 위해 남겨둠
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
