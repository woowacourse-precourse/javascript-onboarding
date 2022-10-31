function problem4(word) {
  let answer = "";
  for (let i = 0; i < word.length; ++i) {
    if (word[i] >= "a" && word[i] <= "z") {
      const tmp = 219 - word[i].charCodeAt(0);
      answer += String.fromCharCode(tmp);
    } else if (word[i] >= "A" && word[i] <= "Z") {
      const tmp = 155 - word[i].charCodeAt(0);
      answer += String.fromCharCode(tmp);
    } else answer += word[i];
  }
  return answer;
}

module.exports = problem4;
