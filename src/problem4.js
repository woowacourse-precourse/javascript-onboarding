function problem4(word) {
  var answer;
  return answer;
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

module.exports = problem4;
