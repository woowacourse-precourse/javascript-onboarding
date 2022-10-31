function problem4(word) {
  let answer = '';
  let alphabet = /[a-zA-Z]/;

  const letterMap = new Map();

  for (let i = 0; i <= 25; i++) {
    letterMap.set(String.fromCharCode(65 + i), String.fromCharCode(90 - i));
    letterMap.set(String.fromCharCode(97 + i), String.fromCharCode(122 - i));
  }

  for (let char of word) {
    if (alphabet.test(char)) {
      answer += letterMap.get(char);
    } else answer += char;
  }

  return answer;
}

module.exports = problem4;
