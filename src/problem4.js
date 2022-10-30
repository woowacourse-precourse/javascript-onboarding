function problem4(word) {
  let answer = "";
  let ascii;

  for (i = 0; i < word.length; i++) {
    ascii = word.charCodeAt(i);
    if (65 <= ascii && ascii <= 90) {
      answer += String.fromCharCode(65 + (90 - ascii));
    }
  }
  return answer;
}

module.exports = problem4;
