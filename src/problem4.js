const UNICODE_UPPERCASE_A = 65;
const UNICODE_UPPERCASE_Z = 90;
const UNICODE_LOWERCASE_A = 97;
const UNICODE_LOWERCASE_Z = 122;

function problem4(word) {
  return treeFrogApp(word);
}

function treeFrogApp(word) {
  const eachCharCollection = createStringSplit(word);
  for (let idx = 0; idx < eachCharCollection.length; idx++) {
    eachCharCollection[idx] = convertTreeFrogChar(
      convertUTF16(eachCharCollection[idx]),
    );
  }
  return convertString(eachCharCollection);
}

function createStringSplit(word) {
  return word.split('');
}

function convertTreeFrogChar(uniCode) {
  return checkAlphabet(uniCode)
    ? convertChar(convertReverseCode(uniCode))
    : convertChar(uniCode);
}

function convertUTF16(char) {
  return char.charCodeAt(0);
}

function convertReverseCode(uniCode) {
  return checkLowerCase(uniCode)
    ? UNICODE_LOWERCASE_A + UNICODE_LOWERCASE_Z - uniCode
    : UNICODE_UPPERCASE_A + UNICODE_UPPERCASE_Z - uniCode;
}

function convertChar(uniCode) {
  return String.fromCharCode(uniCode);
}

function checkAlphabet(uniCode) {
  return (
    (UNICODE_UPPERCASE_A <= uniCode && uniCode <= UNICODE_UPPERCASE_Z) ||
    (UNICODE_LOWERCASE_A <= uniCode && uniCode <= UNICODE_LOWERCASE_Z)
  );
}

function convertString(eachCharCollection) {
  return eachCharCollection.join('');
}

function checkLowerCase(uniCode) {
  return UNICODE_LOWERCASE_A <= uniCode;
}

module.exports = problem4;
