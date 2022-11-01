// 중복되는 문자들을 반복적으로 제거하는 기능
const deduplication = (str) => {
  const regex = /([a-z])\1+/g;
  let result = str;
  while (regex.test(result)) {
    result = result.replace(regex, "");
  }
  return result;
};

// solution
const solution = (cryptogram) => {
  const result = deduplication(cryptogram);
  return result;
};

function problem2(cryptogram) {
  const answer = solution(cryptogram);
  return answer;
}

module.exports = problem2;
