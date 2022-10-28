const UPPERCASE_REVERSE_NUMBER = 155;
const LOWERCASE_REVERSE_NUMBER = 219;
function problem4(word) {
  const wordArray = [...word];
  let index = 0;
  for (index = 0; index < wordArray.length; index++) {
    wordArray[index] = reverseChar(wordArray);
  }
  var answer;
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
module.exports = problem4;
