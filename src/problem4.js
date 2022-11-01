function isException(str) {
  return !(typeof str === 'string') || str.length > 1000 || str.length < 1;
}

function isUpper(charCode) {
  return charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0);
}

function isLower(charCode) {
  return charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0);
}

function upperConvert(charCode) {
  return String.fromCharCode(
    'A'.charCodeAt(0) + ('Z'.charCodeAt(0) - charCode),
  );
}

function lowerConvert(charCode) {
  return String.fromCharCode(
    'a'.charCodeAt(0) + ('z'.charCodeAt(0) - charCode),
  );
}

function problem4(word) {
  if (isException(word)) return;
}

module.exports = problem4;
