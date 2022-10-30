function problem4(word) {
  var answer = "";
  for (let x of word) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
      answer += String.fromCharCode(155 - x.charCodeAt());
    } else if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
      answer += String.fromCharCode(219 - x.charCodeAt());
    } else {
      answer += x;
    }
  }
  return answer;
}

module.exports = problem4;
