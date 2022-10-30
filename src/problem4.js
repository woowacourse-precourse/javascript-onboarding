function isAlpha(char) {
  var upperRegExp = /[A-Z]/;
  var lowerRegExp = /[a-z]/;

  if (upperRegExp.test(char)) {
    return 2;
  }
  if (lowerRegExp.teset(char)) {
    return 1;
  }
  return 0;
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
