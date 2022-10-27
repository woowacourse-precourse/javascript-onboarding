function problem4(word) {
  var answer;
  for (x of word) {
    let letter = x;
    if (65 <= x.charCodeAt(0) && x.charCodeAt(0) <= 90) {
      letter = String.fromCharCode(155 - x.charCodeAt(0));
    } else if (97 <= x.charCodeAt(0) && x.charCodeAt(0) <= 122) {
      letter = String.fromCharCode(219 - x.charCodeAt(0));
    }
  }
  return answer;
}

module.exports = problem4;
