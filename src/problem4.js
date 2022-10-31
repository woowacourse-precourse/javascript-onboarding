function isValid(word) {
  return (
    typeof word !== 'string' ||
    word.length < 1 ||
    word.length > 1000
  ) ? false : true;
}

function isAlpha(char) {
  return (
    (char >= 'a' && char <= 'z') ||
    (char >= 'A' && char <= 'Z')
  ) ? true : false;
}

function strToArr(word) {
  return word.split('');
}

function arrToStr(arrWord) {
  return arrWord.join('');
}

function reverseCase(char, isCase) {
  const strAscii = char.charCodeAt(0);
  return String.fromCharCode(65 + (32 * isCase) + (90 + (32 * isCase) - strAscii));
}

function isLowerCase(char) {
  return char === char.toLowerCase();
}

function alphaReverse(char) {
  const UPPER = 0;
  const LOWER = 1;

  if (!isAlpha(char)) {
    return char;
  }
  return isLowerCase(char) ? reverseCase(char, LOWER) : reverseCase(char, UPPER);
}

function problem4(word) {
  if (!isValid(word)) {
    return word;
  }
  const wordArr = strToArr(word);
  return arrToStr(wordArr.map(alphaReverse));
}

module.exports = problem4;


console.log(problem4("I love you"));
