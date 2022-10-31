const defineASCIIRange = (string) => {
  if (string.toUpperCase() === string) {
    return ["A".charCodeAt(), "Z".charCodeAt()];
  }
  return ["a".charCodeAt(), "z".charCodeAt()];
};

const reverseWord = (string) => {
  const [minASCII, maxASCII] = defineASCIIRange(string);
  const reverseASCII = maxASCII - string.charCodeAt() + minASCII;
  return String.fromCharCode(reverseASCII);
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
