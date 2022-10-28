const reverseUpperCase = (str) => {
  const strAscii = str.charCodeAt(0);
  return String.fromCharCode(65+(90-strAscii));
}

const isUpperCase = (str) => {
  if(str === str.toUpperCase()) return true;
  return false;
}

const reverseLowerCase = (str) => {
  const strAscii = str.charCodeAt(0);
  return String.fromCharCode(97+(122-strAscii));
}

const isLowerCase = (str) => {
  if(str === str.toLowerCase()) return true;
  return false;
}

const alphaReverse = (str) => {
  if(!isAlpha(str)) return str;
  if(isUpperCase(str)) return reverseUpperCase(str);
  if(isLowerCase(str)) return reverseLowerCase(str);
}

const isAlpha = (str) => {
  if((str>='a'&&str<='z')||(str>='A'&&str<='Z')) return true;
  return false;
}

const strToArr = (word) => {
  const strArr = word.split('');
  return strArr;
}

const arrToStr = (arr) => {
  const arrStr = arr.join('');
  return arrStr;
}

function problem4(word) {
  const inputArr = strToArr(word);
  const answer = arrToStr(inputArr.map(alphaReverse));
  return answer;
}

module.exports = problem4;