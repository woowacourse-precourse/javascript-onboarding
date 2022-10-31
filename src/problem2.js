function problem2(cryptogram) {
  var answer;
  let result = "";

  // 중복 문자를 하나씩 비교해서 같다면 그 문자를 삭제
  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] === result[result.length - 1]) {
      result = result.slice(0, -1);
      continue;
    }

    result += cryptogram[i];
  }
  answer = result;
  return answer;
}

module.exports = problem2;
