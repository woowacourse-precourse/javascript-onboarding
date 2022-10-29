// 정규식에 매칭되는 문자만 유니코드로 변환하는 기능
function convertUnicode(regex, splitedWord) {
  const result = splitedWord.map((char) =>
    regex.test(char) ? char.charCodeAt() : char
  );
  return result;
}

// solution
function solution(word) {
  const regex = /[a-zA-z]/;
  const splitedWord = word.split("");
  const unicodeWord = convertUnicode(regex, splitedWord);
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
