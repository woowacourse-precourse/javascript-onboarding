function problem2(cryptogram) {
  // 변수 result에 전달인자 복사
  let result = cryptogram;

  // result의 글자수 만큼 반복하여
  for (let i = 0; i < result.length; i++) {
    // i번 째 글자와 i + 1번 째 글자가 중복 문자인 경우
    if (result[i] === result[i + 1])
      // 해당 두 문자열을 result에서 제외시킨다.
      return problem2(result.substring(0, i) + result.substring(i + 2));
  }
  return result;
}

module.exports = problem2;
