function isValid(word) {
  if (typeof word !== 'string') return false;
  if (word.length < 1 || word.length > 1000) return false;
  return true;
}

function strToArr(word) {
  return word.split('');
}

function arrToStr(arrWord) {
  return arrWord.join('');
}
function reverseUpperCase(str) {
  const strAscii = str.charCodeAt(0);
  return String.fromCharCode(65+(90-strAscii));
}

function isUpperCase(str) {
  if(str === str.toUpperCase()) return true;
  return false;
}

function reverseLowerCase(str) {
  const strAscii = str.charCodeAt(0);
  return String.fromCharCode(97+(122-strAscii));
}

function isLowerCase(str) {
  if(str === str.toLowerCase()) return true;
  return false;
}

function alphaReverse(str) {
  if (!isAlpha(str)) return str;
  if (isUpperCase(str)) return reverseUpperCase(str);
  if (isLowerCase(str)) return reverseLowerCase(str);
}

function isAlpha(str) {
  if ((str >= 'a' && str <= 'z') || (str >= 'A' && str <= 'Z')) return true;
  return false;
}

function problem4(word) {
  if (!isValid(word)) return word;
  const inputArr = strToArr(word);
  return arrToStr(inputArr.map(alphaReverse));
}

module.exports = problem4;


console.log(problem4("I love you"));
