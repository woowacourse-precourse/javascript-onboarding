const defineASCIIRange = (string) => {
  const [MIN_UPPER_ASCII, MAX_UPPER_ASCII] = [65, 90];
  const [MIN_LOWER_ASCII, MAX_LOWER_ASCII] = [97, 122];
  const MIN_ASCII = string.toUpperCase() === string ? MIN_UPPER_ASCII : MIN_LOWER_ASCII;
  const MAX_ASCII = string.toUpperCase() === string ? MAX_UPPER_ASCII : MAX_LOWER_ASCII;
  return [MIN_ASCII, MAX_ASCII];
};

const reverseWord = (string) => {
  const [MIN_ASCII, MAX_ASCII] = defineASCIIRange(string);
  const WORD_ASCII = string.charCodeAt(0);
  const REVERSE_ASCII = MAX_ASCII - WORD_ASCII + MIN_ASCII;
  return String.fromCharCode(REVERSE_ASCII);
};

function problem4(word) {
  let result = "";
  const engReg = /^[a-zA-Z]*$/;

  for (const string of word) {
    if (!engReg.test(string)) {
      result += string;
      continue;
    }

    result += reverseWord(string);
  }

  return result;
}

module.exports = problem4;
