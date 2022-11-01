function problem2(cryptogram) {}

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
function findStartingNestedChar(cryptogram) {
  for (let i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) return i;
  }
  return -1;
}

module.exports = problem2;
