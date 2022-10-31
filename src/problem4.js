function problem4(word) {
  let answer = "";
  let alphabet = new Map();

  for (let i = 0; i < 26; i++) {
    alphabet.set(String.fromCharCode(65 + i), String.fromCodePoint(90 - i));
    alphabet.set(String.fromCharCode(97 + i), String.fromCodePoint(122 - i));
  }

  for (const i of word) {
    answer += alphabet.has(i) ? alphabet.get(i) : i;
  }

  return answer;
}

module.exports = problem4;
