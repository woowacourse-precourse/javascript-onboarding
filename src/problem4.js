function problem4(word) {
  let answer = "";

  for (let i = 0; i < word.length; i++) {
    let ascii = word.charCodeAt(i);
    answer += inverseAlphabet(ascii);
  }

  return answer;
}

function inverseAlphabet(ascii) {
  if (ascii >= 65 && ascii <= 90) return String.fromCharCode(65 + 90 - ascii);
  else if (ascii >= 97 && ascii <= 122)
    return String.fromCharCode(97 + 122 - ascii);
  else return String.fromCharCode(ascii);
}

module.exports = problem4;
