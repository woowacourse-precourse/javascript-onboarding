function isLower(cryptogram) {
  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i].toUpperCase()) {
      return false;
    }
  }

  return true;
}

function isValidCripto(cryptogram) {
  return (
    typeof cryptogram !== 'string' ||
    (cryptogram.length < 1 || cryptogram.length > 1000) ||
    !isLower(cryptogram)
  ) ? false : true;
}

function findStartIndex(cryptoArray) {
  for (let i = 0; i < cryptoArray.length - 1; i++) {
    if (cryptoArray[i] === cryptoArray[i + 1]) {
      return i;
    }
  }

  return -1;
}

function strToArr(cryptogram) {
  return cryptogram.split('');
}

function arrToStr(cryptoArray) {
  return cryptoArray.join('');
}

function findEndIndex(cryptoArray, startIndex) {
  let endIndex = 1;
  while (true) {
    if (cryptoArray[startIndex] !== cryptoArray[startIndex + endIndex]) {
      break;
    }
    endIndex++;
  }

  return endIndex;
}

function solveCripto(cryptoArray) {
  while (true) {
    const startIndex = findStartIndex(cryptoArray);
    if (startIndex === -1) {
      break;
    }
    const endIndex = findEndIndex(cryptoArray, startIndex);
    cryptoArray.splice(startIndex, endIndex);
  }

  return arrToStr(cryptoArray);
}

function problem2(cryptogram) {
  if (!isValidCripto(cryptogram)) {
    return cryptogram;
  }
  const cryptoArray = strToArr(cryptogram);

  return solveCripto(cryptoArray);
}

module.exports = problem2;
