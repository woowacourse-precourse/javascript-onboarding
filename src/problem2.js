// 중복되는 문자들을 반복적으로 제거하는 기능
function deduplication(str, regex) {
  let result = str;
  while (regex.test(result)) {
    result = result.replace(regex, "");
  }
  return result;
}

// solution
function solution(cryptogram) {
  const regex = /([a-z])\1+/g;
  const result = deduplication(cryptogram, regex);
  return result;
}

function problem2(cryptogram) {
  const answer = solution(cryptogram);
  return answer;
}

module.exports = problem2;
