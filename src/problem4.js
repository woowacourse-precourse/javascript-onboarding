function problem4(word) {
  var answer;
  for (x of word) {
    if (65 <= x.charCodeAt(0) && x.charCodeAt(0) <= 90) {
    } else if (97 <= x.charCodeAt(0) && x.charCodeAt(0) <= 122) {
    } else continue;
  }
  return answer;
}

module.exports = problem4;
