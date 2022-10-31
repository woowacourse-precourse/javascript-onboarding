const INPUT = {
  minLength: 1,
  maxLength: 1000,
  strType: 'string',
};

const RESULT = {
  invalidInput: -1,
};

function problem2(cryptogram) {
  if (!checkInput(cryptogram)) {
    return RESULT.invalidInput;
  }

  return solution(cryptogram);
}

function checkInput(input) {
  if (!checkValue(input)) {
    return false;
  }

  if (!checkType(typeof input, INPUT.strType)) {
    return false;
  }

  if (!checkLength(input.length, INPUT.minLength, INPUT.maxLength)) {
    return false;
  }

  if (!checkLowercase(input)) {
    return false;
  }

  return true;
}

function checkValue(v) {
  return Boolean(v);
}

function checkType(type, checker) {
  return type === checker;
}

function checkLength(length, minLength, maxLength) {
  return length >= minLength && length <= maxLength;
}

function checkLowercase(input) {
  return input === input.toLowerCase();
}

function solution(cryptogram) {
  const cryptogramArr = convertStringToArray(cryptogram);
  const clearTextArr = decodeCryptogram(cryptogramArr);
  const clearText = convertArrayToString(clearTextArr);

  return clearText;
}

function convertStringToArray(cryptogram) {
  return Array.from(cryptogram);
}

function decodeCryptogram(cryptogramArr) {
  const clearText = clearTextInit(cryptogramArr);

  while (isDiffLength(clearText.text.length, clearText.prevLength)) {
    clearText.prevLength = updatePrevLength(clearText.text.length);
    clearText.text = decode(clearText.text);
  }

  return clearText.text;
}

function clearTextInit(cryptogramArr) {
  return {
    text: decode(cryptogramArr),
    prevLength: 0,
  };
}

function decode(cryptogramArr) {
  return cryptogramArr.filter(removeDup, { sameElement: false });
}

function updatePrevLength(curLength) {
  return curLength;
}

function removeDup(v, i, arr) {
  if (isSameElement(v, arr[i + 1])) {
    this.sameElement = true;
    return false;
  }

  if (this.sameElement) {
    this.sameElement = false;
    return false;
  }

  return true;
}

function isSameElement(curElement, nextElement) {
  return curElement === nextElement;
}

function isDiffLength(curLength, prevLength) {
  return curLength !== prevLength;
}

function convertArrayToString(array) {
  return array.join('');
}

module.exports = problem2;
