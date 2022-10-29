function problem4(word) {
  var answer;
  var changeword = [];
  for (let i = 0; i < word.split("").length; i++) {
    if (word.charCodeAt(i) <= 90 && word.charCodeAt(i) >= 65) {
      changeword.push(String.fromCharCode(155 - word.charCodeAt(i)));
    } else if (word.charCodeAt(i) <= 122 && word.charCodeAt(i) >= 97) {
      changeword.push(String.fromCharCode(219 - word.charCodeAt(i)));
    } else {
      changeword.push(word[i]);
    }
  }
  answer = changeword.join("");
  return answer;
}

module.exports = problem4;
