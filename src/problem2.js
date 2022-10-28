function problem2(cryptogram) {
  let answer = cryptogram;
  // 1) 반복되는 문자열을 빈 문자열로 바꾸는 과정
  const REPEAT = /([a-z])\1+/g;
  answer = answer.replace(REPEAT, "");
  return answer;
}

module.exports = problem2;
