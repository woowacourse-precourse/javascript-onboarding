const INPUT = {
  minLength: 1,
  maxLength: 1000,
  stringType: 'string',
};

const RESULT = {
  exception: -1,
};

function problem2(cryptogram) {
  if (isWrongInput(cryptogram)) {
    return RESULT.exception;
  }

  return decodeCryptogram(cryptogram);
}

function isWrongInput(input) {
  if (isWrongInputValue(input)) {
    return true;
  }

  if (isWrongTypeOfInput(typeof input)) {
    return true;
  }

  if (isWrongLengthOfInput(input.length)) {
    return true;
  }

  if (isWrongFormatOfInput(input)) {
    return true;
  }

  return false;
}

function isWrongInputValue(input) {
  return !input;
}

function isWrongTypeOfInput(type) {
  return type !== INPUT.stringType;
}

function isWrongLengthOfInput(length) {
  return length < INPUT.minLength || length > INPUT.maxLength;
}

function isWrongFormatOfInput(input) {
  return input === input.toUpperCase();
}

function decodeCryptogram(cryptogram) {
  const cryptogramArr = getArrayFromString(cryptogram);
  const res = decodeCycle(cryptogramArr);

  return getStringFromArray(res);
}

function getArrayFromString(string) {
  return Array.from(string);
}

function decodeCycle(cryptogramArr) {
  const decodeRes = decodeInit(cryptogramArr);

  while (true) {
    decodeRes.res = decode(decodeRes.res);
    if (noChangeLength(decodeRes.res.length, decodeRes.prevLength)) {
      break;
    }
    recordLength(decodeRes);
  }

  return decodeRes.res;
}

function recordLength(decodeRes) {
  decodeRes.prevLength = decodeRes.res.length;
}

function decodeInit(cryptogramArr) {
  return {
    res: decode(cryptogramArr),
    prevLength: decode(cryptogramArr).length,
  };
}

function decode(cryptogramArr) {
  return cryptogramArr.filter(removeDup, { dupElement: false });
}

function removeDup(v, i, arr) {
  if (isDupWithNextElement(v, arr[i + 1])) {
    this.dupElement = true;
    return false;
  }

  if (this.dupElement) {
    this.dupElement = false;
    return false;
  }

  return true;
}

function isDupWithNextElement(curElement, nextElement) {
  return curElement === nextElement;
}

function noChangeLength(length, prevLength) {
  return length === prevLength;
}

function getStringFromArray(array) {
  return array.join('');
}

module.exports = problem2;
