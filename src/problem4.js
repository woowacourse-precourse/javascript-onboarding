function problem4(word) {
  const reverseWordArray = [];
  for (const str of word) {
    if (isAlphabet(str)) {
      const reverseAlphabet = getReverseAlphabet(str);
      reverseWordArray.push(reverseAlphabet);
    } else {
      reverseWordArray.push(str);
    }
  }
  return reverseWordArray.join("");
}

const isAlphabet = (str) => {
  return /[a-zA-Z]/.test(str);
};

const getAlphabetArray = (size) => {
  if (size !== "large" && size !== "small")
    return new Error("사이즈는 'large'와 'small'만 전달할 수 있습니다.");

  const startUnicode = size === "large" ? 65 : 97;

  const upperCaseAlphabetArray = Array.from(Array(26), (_, idx) =>
    String.fromCharCode(idx + startUnicode)
  );

  return upperCaseAlphabetArray;
};

const getReverseAlphabet = (alphabet) => {
  const size = /[A-Z]/.test(alphabet) ? "large" : "small";
  const alphabetArray = getAlphabetArray(size);

  const alphabetIndex = alphabetArray.indexOf(alphabet);
  const reverseAlphabetArray = alphabetArray.reverse();
  return reverseAlphabetArray[alphabetIndex];
};

module.exports = problem4;
