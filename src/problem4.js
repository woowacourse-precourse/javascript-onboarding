// 정규식에 매칭되는 문자만 유니코드로 변환하는 기능
function convertUnicode(regex, splitedWord) {
  const result = splitedWord.map((char) =>
    regex.test(char) ? char.charCodeAt() : char
  );
  return result;
}

// 유니코드만 반대로 변환하는 기능
function reverseUnicode(word) {
  const result = word.map((char) =>
    typeof char === "number" ? 155 - char : char
  );
  return result;
}
// solution
function solution(word) {
  const regex = /[a-zA-z]/;
  const splitedWord = word.split("");
  const unicodeWord = convertUnicode(regex, splitedWord);
  const reversedWord = reverseUnicode(unicodeWord);
  console.log(reversedWord);
}

function problem4(word) {
  var answer;
  return answer;
}

solution("ab cd");

module.exports = problem4;
