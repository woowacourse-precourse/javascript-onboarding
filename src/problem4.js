function problem4(word) {
  var answer = "";
  
  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt() == 32) {
      answer += word[i];
    } else if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) {
      answer += String.fromCharCode(155 - word[i].charCodeAt());
    } else if (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122) {
      answer += String.fromCharCode(219 - word[i].charCodeAt());
    }
  }
  return answer;
}

module.exports = problem4;
