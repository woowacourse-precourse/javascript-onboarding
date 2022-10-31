function problem4(word) {
  newWord = word.split("");

  answer = [];
  newWord.forEach(function (changeWord) {
    ascii = changeWord.charCodeAt(0);
    if (ascii <= 90 && ascii >= 65) {
      answer += String.fromCharCode(155 - ascii);
    } else if (ascii >= 97 && ascii <= 122) {
      answer += String.fromCharCode(219 - ascii);
    } else {
      answer += changeWord;
    }
  });
  return answer;
}

module.exports = problem4;
