function problem4(word) {
  var answer = "";

  for (var i = 1; i <= word.length; ++i) {
    if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      answer += String.fromCharCode(155 - word.charCodeAt(i));
    } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
      answer += String.fromCharCode(219 - word.charCodeAt(i));
    } else {
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;
