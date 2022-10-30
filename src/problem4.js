const isUpper = (char) => /[A-Z]/.test(char);

function problem4(word) {
  const UPPER = 65;
  const LOWER = 97;

  const upperAlphas = getAlphasTypeOf(UPPER);
  const lowerAlphas = getAlphasTypeOf(LOWER);

  return [...word]
    .map((char) => {
      if (char === ' ') return char;

      const frogIndex = getFrogIndex(char);

      if (isUpper(char)) return upperAlphas[frogIndex];
      return lowerAlphas[frogIndex];
    })
    .join('');
}

module.exports = problem4;
