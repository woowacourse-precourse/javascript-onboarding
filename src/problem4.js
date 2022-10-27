const [MIN_UPPER_ASCII, MAX_UPPER_ASCII] = [65, 90];
const [MIN_LOWER_ASCII, MAX_LOWER_ASCII] = [97, 122];
const isUpperCase = (string) => string.charCodeAt(0) >= MIN_UPPER_ASCII && string.charCodeAt(0) <= MAX_UPPER_ASCII;
const isLowerCase = (string) => string.charCodeAt(0) >= MIN_LOWER_ASCII && string.charCodeAt(0) <= MAX_LOWER_ASCII;

const defineStringType = (string) => {
  if (isUpperCase(string)) return "upperCase";
  if (isLowerCase(string)) return "lowerCase";
  return "noAlphabet";
};

function problem4(word) {
  let result = "";

  for (const index in word) {
    const string = word[index];
    const stringType = defineStringType(string);
    }

  return result;
}

module.exports = problem4;
