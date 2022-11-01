function problem4(word) {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      answer += word[i];
      continue;
    }
    let ascii = word[i].charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      answer += String.fromCharCode(155 - ascii);
    } else if (ascii >= 97 && ascii <= 122) {
      answer += String.fromCharCode(219 - ascii);
    }
  }
  return answer;
}

module.exports = problem4;
