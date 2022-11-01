/* 
  기능 목록
  1. 청개구리 사전을 토대로 알파벳 변환(알파벳만 변환, 대문자 -> 대문자, 소문자 -> 소문자)
*/

function problem4(word) {
  const dictArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const regex = /^[a-z|A-Z]+$/;
  const answer = word.split("").map((element) => {
    if (regex.test(element)) {
      if (element === element.toLowerCase()) {
        return dictArr[
          dictArr.length - 1 - dictArr.indexOf(element.toUpperCase())
        ].toLowerCase();
      } else if (element === element.toUpperCase()) {
        return dictArr[dictArr.length - 1 - dictArr.indexOf(element)];
      }
    } else {
      return element;
    }
  });
  return answer.join("");
}

module.exports = problem4;
