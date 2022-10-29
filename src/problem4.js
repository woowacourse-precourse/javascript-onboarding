function problem4(word) {
  // 대문자, 소문자 알파벳 배열을 만든다.
  const upperCaseArr = [
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
  const lowerCaseArr = upperCaseArr.join("").toLowerCase().split("");
  const reversedUpperCaseArr = upperCaseArr.slice().reverse();
  const reversedLowerCaseArr = lowerCaseArr.slice().reverse();
  // word를 순회하며 알파벳의 경우 배열의 인덱스를 이용해 청개구리의 말로 바꾸어 반환한다.
}

module.exports = problem4;
