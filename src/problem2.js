const VALIDITY = {
  minLength: 1,
  maxLength: 1000,
  string: 'string',
};

const RESULT = {
  exception: -1,
};

const DUPLICATION = true;

function getStringFromArray(array) {
  return array.join('');
}

function getArrayFromString(string) {
  return Array.from(string);
}

function isDupWithNextElement(curElement, nextElement) {
  return curElement === nextElement ? true : false;
}

function decode(cryptogramArr) {
  let isDuplicate = false;

  const res = cryptogramArr
    .map((v, i) => {
      if (isDupWithNextElement(v, cryptogramArr[i + 1])) {
        isDuplicate = true;
        return DUPLICATION;
      }

      if (isDuplicate && !isDupWithNextElement(v, cryptogramArr[i + 1])) {
        isDuplicate = false;
        return DUPLICATION;
      }

      return v;
    })
    .filter(v => v !== DUPLICATION);

  return res;
}

function decodeInit(cryptogramArr) {
  return {
    res: decode(cryptogramArr),
    prevLength: decode(cryptogramArr).length,
  };
}

function isCycleDone(decodeRes) {
  return decodeRes.res.length === decodeRes.prevLength ? true : false;
}

function decodeCycle(cryptogramArr) {
  const decodeRes = decodeInit(cryptogramArr);

  while (true) {
    decodeRes.res = decode(decodeRes.res);
    if (isCycleDone(decodeRes)) {
      break;
    }
    decodeRes.prevLength = decodeRes.res.length;
  }

  return decodeRes.res;
}

function decodeCryptogram(cryptogram) {
  const cryptogramArr = getArrayFromString(cryptogram);
  const res = decodeCycle(cryptogramArr);

  return getStringFromArray(res);
}

function isValidInput(input) {
  if (input.length < VALIDITY.minLength || input.length > VALIDITY.maxLength) {
    return false;
  }

  if (typeof input !== VALIDITY.string) {
    return false;
  }

  if (input === input.toUpperCase()) {
    return false;
  }

  return true;
}

function problem2(cryptogram) {
  if (!isValidInput(cryptogram)) {
    return RESULT.exception;
  }

  return decodeCryptogram(cryptogram);
}

module.exports = problem2;
