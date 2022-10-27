function problem2(cryptogram) {
  let answer = isContinuous(cryptogram);
  return answer;
}

//문자 연속 판별 기능
function isContinuous(cryptogram) {
  //연속문자 제거
  let newCryptogram = continuousRemoval(cryptogram);
  // 더이상 문자가 연속되지 않는 경우

  // 아직 이웃하는 문자가 연속될 경우 (Recursion)
}

// 연속문자 제거 기능
function continuousRemoval(code) {
  let newCode = "";
  let continuousAlphabet = "";
  for (let i = 0; i < code.length; i++) {
    // 현재 문자가 연속될 경우
    if (code[i] === code[i + 1] || continuousAlphabet === code[i]) {
      continuousAlphabet = code[i];
      continue;
    }

    // 현재 문자가 연속되지 않는 경우
    continuousAlphabet = "";
    newCode += code[i];
  }

  return newCode;
}

module.exports = problem2;
