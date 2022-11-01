function isAlphabet(letter) {
  let tester = /[a-zA-z]/;
  return tester.test(letter);
}

function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}

function convertAlphabet(letter) {
  if (isUpperCase(letter)) {
    min = 65;
    max = 90;
  } else {
    min = 97;
    max = 122;
  }
  letter = max - (letter.charCodeAt() - min);
  return String.fromCharCode(letter);
}

function problem4(word) {
  let answer = '';
  for (let i = 0; i < word.length; i++) {
    if (!isAlphabet(word[i])) {
      answer += word[i];
      continue;
    }
    answer += convertAlphabet(word[i]);
  }
  return answer;
}

module.exports = problem4;
