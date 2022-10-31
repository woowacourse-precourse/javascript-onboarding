function problem4(word) {
  let answer = "";
  for (i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) === 32) {
      answer += " ";
    } else if (64 < word.charCodeAt(i) && word.charCodeAt(i) < 91) {
      answer += String.fromCharCode(155 - word.charCodeAt(i));
    } else {
      answer += String.fromCharCode(219 - word.charCodeAt(i));
    }
  }
  return answer;
}

module.exports = problem4;
