//입력받은 문자들 중 연속되는 문자를 소거해주는 함수
function decoding(text) {
  if (text === "") return text;
  let testCase = true;
  let result = text.match(/([a-z])\1+|(.)/g);
  result = result.filter((v) => {
    if (v.length != 1) {
      testCase = false;
      return 0;
    } else {
      return 1;
    }
  });
  result = result.join("");
  return testCase ? result : decoding(result);
}

function problem2(cryptogram) {
  let answer = decoding(cryptogram);
  return answer;
}

module.exports = problem2;
