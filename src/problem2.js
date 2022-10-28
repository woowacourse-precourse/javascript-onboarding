function problem2(cryptogram) {
  let answer = cryptogram;
  // 1) 반복되는 문자열을 빈 문자열로 바꾸는 과정
  const REPEAT = /([a-z])\1+/g;
  // 2) 순차적으로 반복문자열이 없을때 까지 반복하는 과정
  while (REPEAT.test(answer)) {
    answer = answer.replace(REPEAT, "");
  }
  return answer;
}

module.exports = problem2;
