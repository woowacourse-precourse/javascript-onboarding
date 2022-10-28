function problem4(word) {
  var answer = word
    .split("")
    .reduce((prev, cur) => prev + changeAlphabet(cur), "");
  return answer;
}

const changeAlphabet = (alphabet) => {
  if (alphabet.charCodeAt(0) > 96) {
    // 소문자
  } else {
    // 대문자
  }
};

module.exports = problem4;
