function problem2(cryptogram) {
  if (!checkValidCrypto(cryptogram)) return cryptogram;
  return spliceNestedChars(cryptogram);
}

function checkValidCrypto(cryptogram) {
  for (let i = 0; i < cryptogram.length; i++) {
    if (
      typeof cryptogram !== "string" ||
      cryptogram.charCodeAt(i) < 97 ||
      cryptogram.charCodeAt(i) > 122 ||
      cryptogram.length < 1 ||
      cryptogram.length > 1000
    )
      return false;
  }
  return true;
}
function findStartNestedChar(cryptogram) {
  for (let i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) return i;
  }
  return -1;
}
function findNestedCharsNum(cryptogram, startPoint) {
  let nestedCharsNum = 0;
  while (true) {
    if (cryptogram[startPoint] !== cryptogram[startPoint + nestedCharsNum])
      break;
    nestedCharsNum++;
  }

  return nestedCharsNum;
}
function spliceNestedChars(cryptogram) {
  while (true) {
    const startPoint = findStartNestedChar(cryptogram);
    if (startPoint === -1) break;
    const nestedCharsNum = findNestedCharsNum(cryptogram, startPoint);
    a = cryptogram.split("");
    a.splice(startPoint, nestedCharsNum);
    cryptogram = a.join("");
  }
  return cryptogram;
}

module.exports = problem2;
