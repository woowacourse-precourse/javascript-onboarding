function problem4(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      result += " ";
      continue;
    }
    let ascii = word.charCodeAt([i]);
    let checkedCase = checkStringCase(ascii);
    result += reverseAscii(ascii, checkedCase);
  }
  return result;
}

// 아스키코드 조건을 확인해서, 소/대문자를 검사하는 함수 (특수문자는 return하지 않음)
function checkStringCase(ascii) {
  if (ascii >= 65 && ascii <= 90) {
    return 65;
  } else if (ascii >= 97 && ascii <= 122) {
    return 97;
  }
}

// 아스키코드 연산을 활용해 반대 문자로 변환해주는 함수
function reverseAscii(ascii, checkedCase) {
  let reversed = ascii + 25 - Math.abs(ascii - checkedCase) * 2;
  return String.fromCharCode(reversed);
}

module.exports = problem4;
