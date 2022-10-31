function problem4(word) {
  let invertCaseTable = setInvertCaseTable();

  return reverseWord(word, invertCaseTable);
}

function setInvertCaseTable() {
  let invertCaseTable = {}; // 문자열 변환표

  let gap = 25;
  let lowerCaseOffset = 32;

  for (let i = "A".codePointAt(0); i <= "Z".codePointAt(0); i++) {
    // 대문자
    invertCaseTable[String.fromCodePoint(i)] = String.fromCodePoint(i + gap);

    // 소문자
    invertCaseTable[String.fromCodePoint(i + lowerCaseOffset)] =
      String.fromCodePoint(i + lowerCaseOffset + gap);
    gap -= 2;
  }

  return invertCaseTable;
}

function reverseWord(word, invertCaseTable) {
  let reversedWord = "";
  for (let char of word) {
    char == " "
      ? (reversedWord += " ")
      : (reversedWord += invertCaseTable[char]);
  }

  answer = reversedWord;
  return answer;
}

module.exports = problem4;
