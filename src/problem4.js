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
  if (isException(word)) return 'isException';
  let answer = '';
  let charCode;

  for (let i = 0; i < word.length; ++i) {
    charCode = word.charCodeAt(i);
    if (isUpper(charCode)) answer += upperConvert(charCode);
    else if (isLower(charCode)) answer += lowerConvert(charCode);
    else answer += word.charAt(i);
  }
  return answer;
}

module.exports = problem4;
