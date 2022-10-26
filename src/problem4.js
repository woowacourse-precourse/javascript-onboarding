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

function reverseAlphabet(letter) {
  const letterAscii = letter.charCodeAt(0);
  let reversePoint = 0;
  let reverseAscii = 0;

  if (isUpperCase(letter)) {
    reversePoint = 155;
    reverseAscii = reversePoint - letterAscii;
    return String.fromCharCode(reverseAscii);
  }

  reversePoint = 219;
  reverseAscii = reversePoint - letterAscii;
  return String.fromCharCode(reverseAscii);
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

  console.log(reverseAlphabet('A'));
  console.log(reverseAlphabet('a'));
  console.log(reverseAlphabet('B'));
  console.log(reverseAlphabet('b'));
  console.log(reverseAlphabet('Z'));
  console.log(reverseAlphabet('z'));
}

test();
