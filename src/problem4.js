function convertCode(code) {
  if (code >= 65 && code <= 90) {
    return code + parseInt((77.5 - code) * 2);
  } else {
    return code + parseInt((109.5 - code) * 2);
  }
}
function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
