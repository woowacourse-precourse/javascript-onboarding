// 문자를 유니코드로 변환하는 기능
function convertUnicode(splitedWord) {
  const result = splitedWord.map((char) => char.charCodeAt());
  return result;
}

// solution
function solution(word) {
  const splitedWord = word.split("");
  const unicodeWord = convertUnicode(splitedWord);
  console.log(unicodeWord);
}

function problem4(word) {
  var answer;
  return answer;
}

solution("ab cd");

module.exports = problem4;
