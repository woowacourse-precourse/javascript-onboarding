function problem2(cryptogram) {
  if (!minLengthCase(cryptogram)) {
    return cryptogram
  }

  const compareArray = [];
  let cnt = 0;

  while (cnt < cryptogram.length) {
    if (compareArray[compareArray.length - 1] !== cryptogram[cnt]) {
      compareArray.push(cryptogram[cnt]);
    } else if (compareArray[compareArray.length - 1] === cryptogram[cnt]) {
      compareArray.pop();
    }
    cnt++;
  }
  return compareArray.join('');
}

function minLengthCase(inputValue) {
  if (inputValue.length !== 1) return true;
  return false;
}

module.exports = problem2;