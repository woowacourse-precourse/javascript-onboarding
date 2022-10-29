function problem4(word) {
  var answer;
  return answer;
}

function checkLetter(word) {
  const reversedArray = []
  for (let i = 0; i < word.length; i++) {
    if (word[i] == " ") {
      reversedArray.push(" ");
    }
    else
      reversedArray.push(reverseLetter(word[i]));
  }

  return reversedArray;
}

function reverseLetter(letter) {
  const letterASCII = letter.charCodeAt();
  if (97 <= letterASCII && letterASCII <= 122) return reverseLower(letter);
  return reverseUpper(letter);
}

function reverseLower(letter) {
  // 영어 소문자 ASCII : 97 ~ 122
  const index = 97 - letter.charCodeAt();
  return String.fromCharCode(122 + index);
}

function reverseUpper(letter) {
  // 영어 대문자 ASCII 65 ~ 90
  const index = 65 - letter.charCodeAt();
  return String.fromCharCode(90 + index);
}

function validRange(word) {
  return 1 <= word.length && word.length <= 1000;
}

module.exports = problem4;
