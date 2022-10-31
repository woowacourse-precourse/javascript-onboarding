function problem4(word) {
  let answer = "";
  const upperChar = 65 + 90;
  const lowerChar = 97 + 122;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      answer += word[i];
    } else {
      var changChar = word[i].charCodeAt(0);
      if (changChar < 97) {
        answer += String.fromCharCode(upperChar - changChar);
      } else {
        answer += String.fromCharCode(lowerChar - changChar);
      }
    }
  }
  return answer;
}
module.exports = problem4;
