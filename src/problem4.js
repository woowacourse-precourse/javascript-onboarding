const UPPER_MIN = 65;
const UPPER_MAX = 90;
const LOWER_MIN = 97;
const LOWER_MAX = 122;
const ALPHABETS_LENGTH = 26;

function problem4(word) {
  if (!isInRange(word.length)) {
    return '문자열의 길이가 너무 깁니다.';
  }

  return [...word].map(convertToOpposite).join('');
}

function convertToOpposite(alphabet) {
  const cases = {
    uppercase: getOppositeUpperAlphabet,
    lowercase: getOppositeLowerAlphabet,
    default: () => alphabet,
  };
  const currentCase = getAlphabetCase(alphabet);

  return (cases[currentCase] ?? cases.default)(alphabet);
}

function getAlphabetCase(alphabet) {
  const charCode = alphabet.charCodeAt(0);

  if (!isUpperCase(charCode) && !isLowerCase(charCode)) return '';

  return isUpperCase(charCode) ? 'uppercase' : 'lowercase';
}

function getOppositeUpperAlphabet(alphabet) {
  return getOppositeAlphabet(alphabet, UPPER_MIN, UPPER_MAX);
}

function getOppositeLowerAlphabet(alphabet) {
  return getOppositeAlphabet(alphabet, LOWER_MIN, LOWER_MAX);
}

function getOppositeAlphabet(alphabet, min, max) {
  const charCode = alphabet.charCodeAt(0);
  const convertedCharCode = max - ((charCode - min) % ALPHABETS_LENGTH);

  return String.fromCharCode(convertedCharCode);
}

function isUpperCase(charCode) {
  return isInRange(charCode, UPPER_MIN, UPPER_MAX);
}

function isLowerCase(charCode) {
  return isInRange(charCode, LOWER_MIN, LOWER_MAX);
}

function isInRange(value, min = 1, max = 1000) {
  return min <= value && value <= max;
}

module.exports = problem4;
