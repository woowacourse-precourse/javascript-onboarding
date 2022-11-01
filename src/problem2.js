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
module.exports = problem2;
