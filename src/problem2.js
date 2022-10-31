function problem2(cryptogram) {
  //입력: 문자열
  //출력: 문자열
  //해야할 일: 연속하여 나오는 문자를 제거 => 연속하는 문자가 없을 때 까지 반복 => 재귀...?
  let answer = cryptogram;
  if (deduplication(answer) === answer) {
    return answer;
  } else {
    return problem2(deduplication(answer));
  }
}

function deduplication(str) {
  str = str + " ";
  let count = 1;
  let result = "";
  let before = str[0];
  for (let i = 1; i < str.length; i++) {
    if (before === str[i]) {
      count++;
    } else {
      if (count >= 2) {
        result = result;
      } else {
        result = result + before;
      }
      count = 1;
      before = str[i];
    }
  }
  return result;
}

module.exports = problem2;
