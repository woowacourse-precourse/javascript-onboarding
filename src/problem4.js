function isValid(word) {
  if (word.length < 1 || word.length > 1000) {
    throw "1 이상 1,000 이하인 문자열을 입력해주세요";
  }
}

function problem4(word) {
  let answer = "";

  isValid(word);
  return answer;
}

module.exports = problem4;
