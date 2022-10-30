const AlphaCase = {
  UPPER: "upper",
  LOWER: "lower",
  NOT: "not",
};

function getWordCase(word) {
  if (word >= "A" && word <= "Z") {
    return AlphaCase.UPPER;
  }
  if (word >= "a" && word <= "z") {
    return AlphaCase.LOWER;
  }
  return AlphaCase.NOT;
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
