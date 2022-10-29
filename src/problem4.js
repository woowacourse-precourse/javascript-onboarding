const UPPERCASE_REVERSE_NUMBER = 155;
const LOWERCASE_REVERSE_NUMBER = 219;
function problem4(word) {
  var answer;
  if (!checkValidation(word)) throw new Error("입력값 오류입니다.");
  const wordArray = [...word];
  let index = 0;
  for (index = 0; index < wordArray.length; index++) {
    wordArray[index] = reverseChar(wordArray[index]);
  }
  answer = getString(wordArray);
  return answer;
}
function getAsciiFromString(char) {
  return char.charCodeAt(0);
}
function getStringFromString(ascii) {
  return String.fromCharCode(ascii);
}
function reverseChar(char) {
  const asciiNum = getAsciiFromString(char);
  let resultAscii = asciiNum;
  if (asciiNum >= 65 && asciiNum <= 90)
    resultAscii = UPPERCASE_REVERSE_NUMBER - asciiNum;
  if (asciiNum >= 97 && asciiNum <= 122)
    resultAscii = LOWERCASE_REVERSE_NUMBER - asciiNum;
  return getStringFromString(resultAscii);
}
function getString(array) {
  return array.join("");
}
function checkValidation(word) {
  return checkLengthOfWord(word);
}
function checkLengthOfWord(word) {
  if (word.length >= 1 && word.length <= 1000) return true;
  return false;
}
module.exports = problem4;
