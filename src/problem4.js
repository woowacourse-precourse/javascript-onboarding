function problem4(word) {
  var answer;
  answer = "";

  function lowerUpper(idx) {
    let char = word.charCodeAt(idx);
    if ((char >= 65 && char <= 90)) {
      char = 155 - char;
    } else if (char >= 97 && char <= 122) {
        char = 219 - char;
      }
      return char
    }

  for (let idx = 0; idx < word.length; idx++) {
      answer += String.fromCharCode(lowerUpper(idx))
  }
  return answer;
}

module.exports = problem4;
