function problem4(word) {
  let answer;

  const AlphaCase = {
    UPPER: "UPPER",
    LOWER: "LOWER",
  };
  Object.freeze(AlphaCase);

  const upperDictionary = getDictionary(AlphaCase.UPPER);
  const lowerDictionary = getDictionary(AlphaCase.LOWER);

  const wholeDictionary = Object.assign(upperDictionary, lowerDictionary);

  answer = getFrogWord(wholeDictionary, word);

  return answer;
}

function getDictionary(alphaCase) {
  const numberOfAlpha = 26;
  const AlphaASCII = {
    UPPER: 65,
    LOWER: 97,
  };
  Object.freeze(AlphaASCII);

  const frogArr = Array.from(
    { length: numberOfAlpha },
    (_, index) => index + AlphaASCII[alphaCase]
  ).reverse();

  const dictionary = {};

  for (let i = 0; i < numberOfAlpha; i++) {
    const code = i + AlphaASCII[alphaCase];
    const keyAlpha = String.fromCharCode(code);
    const frogAlpha = String.fromCharCode(frogArr[i]);
    dictionary[keyAlpha] = frogAlpha;
  }

  return dictionary;
}

function getFrogWord(dictionary, word) {
  let frogWord = "";

  for (w of String(word)) {
    if (dictionary[w]) {
      frogWord += dictionary[w];
    } else {
      frogWord += w;
    }
  }

  return frogWord;
}

module.exports = problem4;
