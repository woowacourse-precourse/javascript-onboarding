/*
### 기능 목록
1. 중복된 문자를 탐지할 정규식 작성한다.
2. 중복된 문자가 없을때까지('regax.test(answer)->false'), 중복된 문자열을 찾아 제거한다. 
*/

function problem2(cryptogram) {
  const regex = new RegExp("([a-z])\\1+", "g");
  let answer = cryptogram;

  while (regex.test(answer)) {
    answer = answer.replace(regex, "");
  }
  return answer;
}

module.exports = problem2;
