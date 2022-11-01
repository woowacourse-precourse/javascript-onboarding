function problem4(word) {
  var answer = "";

  for (let letter of word) {
    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      answer += String.fromCharCode(90 - (letter.charCodeAt() - 65))
    } else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
      answer += String.fromCharCode(122 - (letter.charCodeAt() - 97))
    } else {
      answer += letter
    }
  }
  return answer;
}

module.exports = problem4;
