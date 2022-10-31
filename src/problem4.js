function problem4(word) {
  var answer = "";
  for (var i = 0; i < word.length; i++) {
    if (word[i] == " ") answer += " "; // 공백인 경우
    else if (word[i] === word[i].toUpperCase()) {
      // 대문자인 경우
      answer += String.fromCharCode(155 - word[i].charCodeAt(0));
    } else if (word[i] === word[i].toLowerCase()) {
      //소문자인 경우
      answer += String.fromCharCode(219 - word[i].charCodeAt(0));
    }
  }
  return answer;
}

module.exports = problem4;
