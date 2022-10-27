const [MIN_UPPER_ASCII, MAX_UPPER_ASCII] = [65, 90];
const [MIN_LOWER_ASCII, MAX_LOWER_ASCII] = [97, 122];
const isUpperCase = (string) => string.charCodeAt(0) >= MIN_UPPER_ASCII && string.charCodeAt(0) <= MAX_UPPER_ASCII;
const isLowerCase = (string) => string.charCodeAt(0) >= MIN_LOWER_ASCII && string.charCodeAt(0) <= MAX_LOWER_ASCII;

const defineStringType = (string) => {
  if (isUpperCase(string)) return "upperCase";
  if (isLowerCase(string)) return "lowerCase";
  return "noAlphabet";
};

const defineASCIIRange = (stringType) => {
  const MIN_ASCII = stringType === "upperCase" ? MIN_UPPER_ASCII : MIN_LOWER_ASCII;
  const MAX_ASCII = stringType === "upperCase" ? MAX_UPPER_ASCII : MAX_LOWER_ASCII;
  return [MIN_ASCII, MAX_ASCII];
};

const reverseWord = (WORD_ASCII, MIN_ASCII, MAX_ASCII) => {
  const ASCII = MAX_ASCII - WORD_ASCII + MIN_ASCII;
  return String.fromCharCode(ASCII);
};

function problem4(word) {
  let result = "";

  for (const index in word) {
    const string = word[index];
    const stringType = defineStringType(string);

    if (stringType == "noAlphabet") {
      result += string;
      continue;
    }

    const WORD_ASCII = word.charCodeAt(index);
    const [MIN_ASCII, MAX_ASCII] = defineASCIIRange(stringType);
    result += reverseWord(WORD_ASCII, MIN_ASCII, MAX_ASCII);
  }

  return result;
}

module.exports = problem4;
