function problem2(cryptogram) {
  let answer;

  answer = decrypt(cryptogram);
  return answer;
}

function decrypt(cryptogram) {
  while (isCryptogram(cryptogram)) {
    cryptogram = deleteConsecutiveChar(cryptogram);
  }
  return cryptogram;
}

function isCryptogram(cryptogram) {
  for (let i = 1; i < cryptogram.length; i++) {
    if (cryptogram[i - 1] === cryptogram[i]) return true;
  }
  return false;
}

function deleteConsecutiveChar(cryptogram) {
  let result = "";

  for (let i = 0; i < cryptogram.length; i++) {
    if (
      cryptogram[i] === cryptogram[i + 1] ||
      cryptogram[i] === cryptogram[i - 1]
    ) {
      continue;
    }
    result += cryptogram[i];
  }
  return result;
}

module.exports = problem2;
