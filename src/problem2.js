// 0. 문자열 길이 검사
// 1. 문자열 알파벳 소문자인지 검사
// 2. 중복 문자열 검사 함수 구현
// 3. 중복 문자열 제거 함수 구현
// 4. 중복 문자열이 없을때까지 검사 후 반환값 리턴

function isLowerCase(value) {
  if (value < 97 || value > 122) {
    return -1;
  }
  return 0;
}

function validInputCheck(inputValue) {
  if (inputValue.length < 1 || inputValue.length > 1000) {
    return -1;
  }
  for (index = 0; index < inputValue.length; index++) {
    if (isLowerCase(inputValue.charCodeAt(index)) < 0) {
      return -1;
    }
  }
  return 0;
}

function getOverlapValueLength(value, index) {
  const overlapValue = value[index];
  let ret = 0;

  while (value[index] === overlapValue) {
    ret += 1;
    index += 1;
  }
  return ret;
}

function changeOverlapValue(value) {
  let index = 0;

  while (index < value.length) {
    if (value[index] === value[index + 1]) {
      value = value.replace(
        value.substr(index, getOverlapValueLength(value, index)),
        ""
      );
      continue;
    }
    index += 1;
  }
  return value;
}

function overlapCheck(value) {
  for (let index = 0; index < value.length; index++) {
    if (value[index] === value[index + 1]) {
      return true;
    }
  }
  return false;
}

function getResult(value) {
  while (overlapCheck(value)) {
    value = changeOverlapValue(value);
  }
  return value;
}

function problem2(cryptogram) {
  if (validInputCheck(cryptogram) < 0) {
    return "Argument Error";
  }
  var answer = getResult(cryptogram);

  return answer;
}

module.exports = problem2;
