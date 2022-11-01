const INPUT = {
  maxLength: 1000,
  minLength: 1,
}

const FROG = {
  upperDictionary: [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ],
  lowerDictionary: [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ],
  upperReverse: [
    'Z', 'Y', 'X', 'W', 'V', 'U',
    'T', 'S', 'R', 'Q', 'P', 'O',
    'N', 'M', 'L', 'K', 'J', 'I',
    'H', 'G', 'F', 'E', 'D', 'C',
    'B', 'A'
  ],
  lowerReverse: [
    'z', 'y', 'x', 'w', 'v', 'u',
    't', 's', 'r', 'q', 'p', 'o',
    'n', 'm', 'l', 'k', 'j', 'i',
    'h', 'g', 'f', 'e', 'd', 'c',
    'b', 'a'
  ],
};

// 예외상황
function exception (word) {
  if(word < INPUT.minLength || word > INPUT.maxLength) return true;
  return false;
}

// 대문자인지 소문자인지 판별
function checkAlphabet(word) {
  let result = "";
  const wordArr = Array.from(word);
  for(let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === " ") {
      result += " ";
    }
    else if (wordArr[i] === wordArr[i].toUpperCase()) {
      result += upperCase(wordArr[i]);
    }
    else if (wordArr[i] === wordArr[i].toLowerCase()) {
      result += lowerCase(wordArr[i]);
    }
  }
  return result;
}

// 대문자일 경우
function upperCase(word) {
  return FROG.upperReverse[FROG.upperDictionary.indexOf(word)];
}


// 소문자일 경우
function lowerCase(word) {
  return FROG.lowerReverse[FROG.lowerDictionary.indexOf(word)];
}

function problem4(word) {
  if(exception(word)) return false;

  return checkAlphabet(word);
}

module.exports = problem4;

// 기능들
// 1. 예외상황(길이는 1~1000, 알파벳인지 확인)
// 2. 대문자인지 소문자인지 판별
// 3. (소문자일경우) 소문자 청개구리 알파벳으로 변환
// 4. (대문자일경우) 대문자 청개구리 알파벳으로 변환