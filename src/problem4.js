// 문자를 유니코드로 변환하는 기능
function convertUnicode(word) {
  const result = word.map((char) => char.charCodeAt());
  return result;
}

// 알파벳 소문자 유니코드만 찾아 반대로 변환하는 기능
function reverseLowerCase(word) {
  const result = word.map((code) =>
    97 <= code && code <= 122 ? 219 - code : code
  );
  return result;
}

// 알파벳 대문자 유니코드만 찾아 반대로 변환하는 기능
function reverseUpperCase(word) {
  const result = word.map((code) =>
    65 <= code && code <= 90 ? 155 - code : code
  );
  return result;
}

// 유니코드를 다시 문자로 변환하는 기능
function convertCharacter(word) {
  const result = word.map((code) => String.fromCharCode(code));
  return result;
}

// solution
function solution(word) {
  const splitedWord = word.split("");
  const unicodeWord = convertUnicode(splitedWord);
  let reversedWord = reverseLowerCase(unicodeWord);
  reversedWord = reverseUpperCase(reversedWord);
  const convertedWord = convertCharacter(reversedWord);
  const joinedWord = convertedWord.join("");
  console.log(joinedWord);
}

function problem4(word) {
  var answer;
  return answer;
}

solution("I love you");

module.exports = problem4;
