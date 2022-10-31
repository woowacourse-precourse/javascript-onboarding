function isAlphabet(letter) {
  let tester = /[a-zA-z]/;
  return tester.test(letter);
}

function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}

function problem4(word) {
  let answer = '';
  for (let i = 0; i < word.length; i++) {
    if (!isAlphabet(word[i])) {
      answer += word[i];
      continue;
    }
  }
  return answer;
}

module.exports = problem4;
