/*
 * -- 기능 목록 --
 * 1. 청개구리 사전에 매핑된 문자를 반환하는 함수 - findFrogDictionary(char)
 * 1.1 ASCII Code를 활용해 청개구리 사전의 역할을 하는 매핑이 필요 - switch 문으로 구현
 */

function findFrogDictionary(char) {
  switch (true) {
    case char == " ":
      return " ";

    case char >= "a":
      return String.fromCharCode(
        "a".charCodeAt() + "z".charCodeAt() - char.charCodeAt()
      );

    case char >= "A":
      return String.fromCharCode(
        "A".charCodeAt() + "Z".charCodeAt() - char.charCodeAt()
      );

    default:
      return char;
  }
}

function problem4(word) {
  let answer = "";

  for (char of word) {
    answer += findFrogDictionary(char);
  }

  return answer;
}

module.exports = problem4;
