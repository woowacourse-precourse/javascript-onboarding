const isUpper = (char) => /[A-Z]/.test(char);

const getFrogIndex = (char) => {
  const ALPHA_SIZE = 25;
  const UPPER = 65;
  const LOWER = 97;

  return ALPHA_SIZE - (char.charCodeAt() - (isUpper(char) ? UPPER : LOWER));
};

const getAlphasTypeOf = (CODE) => {
  const ALPHA_SIZE = 25;

  return Array.from({ length: ALPHA_SIZE + 1 }, (_, index) =>
    String.fromCharCode(index + CODE)
  );
};

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
