const isUpperCase = (letter) =>
  letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
const isLowerCase = (letter) =>
  letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;

function isAlphabet(letter) {
  if (isUpperCase(letter) || isLowerCase(letter)) {
    return true;
  }

  return false;
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;

function test() {
  console.log(isAlphabet('A'));
  console.log(isAlphabet('a'));
  console.log(isAlphabet('/'));
  console.log(isAlphabet(' '));
}

test();
