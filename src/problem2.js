const INPUT = {
  minLength: 1,
  maxLength: 1000,
  string: 'string',
};

const RESULT = {
  exception: -1,
};

const DUPLICATION = true;

function problem2(cryptogram) {
  if (isWrongInput(cryptogram)) {
    return RESULT.exception;
  }

  return decodeCryptogram(cryptogram);
}

function isWrongInput(input) {
  if (isWrongLength(input.length)) {
    return true;
  }

  if (isNotString(input)) {
    return true;
  }

  if (isUpperCase(input)) {
    return true;
  }

  return false;
}

function isWrongLength(length) {
  return length < INPUT.minLength || length > INPUT.maxLength;
}

function isNotString(input) {
  return typeof input !== INPUT.string;
}

function isUpperCase(input) {
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
    if (isCycleDone(decodeRes)) {
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

function isCycleDone(decodeRes) {
  return decodeRes.res.length === decodeRes.prevLength;
}

function getStringFromArray(array) {
  return array.join('');
}

module.exports = problem2;
