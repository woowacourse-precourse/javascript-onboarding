// 문자를 유니코드로 변환하는 기능
function convertUnicode(splitedWord) {
  const result = splitedWord.map((char) => char.charCodeAt());
  return result;
}

// 알파벳 소문자 유니코드만 찾아 반대로 변환하는 기능
function reverseLowerCase(word) {
  const result = word.map((code) =>
    97 <= code && code <= 122 ? 219 - code : code
  );
  return result;
}

// solution
function solution(word) {
  const splitedWord = word.split("");
  const unicodeWord = convertUnicode(splitedWord);
  console.log(unicodeWord);
  console.log(reverseLowerCase(unicodeWord));
}

function problem4(word) {
  var answer;
  return answer;
}

solution("ab cd");

module.exports = problem4;
