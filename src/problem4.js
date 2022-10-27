function problem4(word) {
  var answer = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) {
      let unicode = 155 - word[i].charCodeAt();
      answer += String.fromCharCode(unicode);
      continue;
    }
    if (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122) {
      let unicode = 219 - word[i].charCodeAt();
      answer += String.fromCharCode(unicode);
      continue;
    }
    answer += word[i];
  }
  return answer;
}

module.exports = problem4;
