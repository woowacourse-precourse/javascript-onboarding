function convertCode(code) {
  if (code >= 65 && code <= 90) {
    return code + (77.5 - code) * 2;
  } else if (code >= 97 && code <= 122) {
    return code + (109.5 - code) * 2;
  }
}
function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
