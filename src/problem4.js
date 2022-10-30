function isValid(word) {
  if (typeof word !== 'string') {
    return false;
  }
  if (word.length < 1 || word.length > 1000) {
    return false;
  }
  return true;
}

function isAlpha(char) {
  // if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) return true;
  // return false;
  return ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) ? true : false;
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
  // if (isLowerCase(str)) return reverseCase(str, LOWER);
  // return reverseCase(str, UPPER);
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


// function isUpperCase(str) {
//   if(str === str.toUpperCase()) return true;
//   return false;
// }

// function reverseLowerCase(str) {
//   const strAscii = str.charCodeAt(0);
//   return String.fromCharCode(97+(122-strAscii));
// }

// function isLowerCase(str) {
//   if(str === str.toLowerCase()) return true;
//   return false;
// }

// function alphaReverse(str) {
//   if(!isAlpha(str)) return str;
//   if(isUpperCase(str)) return reverseUpperCase(str);
//   if(isLowerCase(str)) return reverseLowerCase(str);
// }