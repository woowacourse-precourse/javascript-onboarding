const AlphaCase = {
  UPPER: "upper",
  LOWER: "lower",
  NOT: "not",
};

const upperFristCode = "A".charCodeAt();
const upperLastCode = "Z".charCodeAt();
const lowerFristCode = "a".charCodeAt();
const lowerLastCode = "z".charCodeAt();

function getWordCase(word) {
  if (word >= "A" && word <= "Z") {
    return AlphaCase.UPPER;
  }
  if (word >= "a" && word <= "z") {
    return AlphaCase.LOWER;
  }
  return AlphaCase.NOT;
}

function covertByFrog(word, isUpper) {
  return isUpper
    ? String.fromCharCode(
        upperFristCode + upperLastCode - (word + "").charCodeAt()
      )
    : String.fromCharCode(
        lowerFristCode + lowerLastCode - (word + "").charCodeAt()
      );
}

function problem4(word) {
  let answer = word.split("");
  answer = answer.map((w) => {
    const wordCase = getWordCase(w);

    if (wordCase === AlphaCase.UPPER) return covertByFrog(w, true);
    if (wordCase === AlphaCase.LOWER) return covertByFrog(w, false);
    if (wordCase === AlphaCase.NOT) return w;
  });

  return answer.join("");
}

module.exports = problem4;
