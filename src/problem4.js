function problem4(word) {
  var answer = [];
  word = [...word];
  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt(0) > 64 && word[i].charCodeAt(0) < 91) {
      answer.push(String.fromCharCode(155 - word[i].charCodeAt(0)));
    } else if (word[i].charCodeAt(0) > 96 && word[i].charCodeAt(0) < 123) {
      answer.push(String.fromCharCode(219 - word[i].charCodeAt(0)));
    } else {
      answer.push(word[i]);
    }
  }
  answer = answer.join("");
  return answer;
}

module.exports = problem4;
