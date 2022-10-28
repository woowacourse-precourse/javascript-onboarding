function problem2(cryptogram) {
  if (!inputValidCheck(cryptogram) && !inputValidCheck(cryptogram)) {
    return 'error'
  }
}

function minLengthCase(inputValue) {
  // 문자열의 길이가 1일땐 , 그 문자열 그대로 return
  if (inputValue.length !== 1) return false;
  return inputValue;
}

module.exports = problem2;