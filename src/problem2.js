function problem2(cryptogram) {
  if (!inputValidCheck(cryptogram) && !minLengthCase(cryptogram)) {
    return 'error'
  }

  // return 'checkValid success!'
}

function inputValidCheck(inputValue) {
  if (!overInRange(inputValue)) return false;
  if (!inputTypeError(inputValue)) return false;
  return true;
}

function minLengthCase(inputValue) {
  // 문자열의 길이가 1일땐 , 그 문자열 그대로 return
  if (inputValue.length !== 1) return false;
  return inputValue;
}

function overInRange(inputValue) {
  const minLength = 1;
  const maxLength = 1000;
  //  1~1000사이의 숫자일 경우 -> O / 아닐 경우 -> X
  if (inputValue.length >= minLength && inputValue.length <= maxLength) return true
  return false;
}

function inputTypeError(inputValue) {
  const inputValueEnglishLength = inputValue.replace(/[a-z]/g, '').length;

  if (inputValueEnglishLength === 0) return true
  return false;
}

module.exports = problem2;