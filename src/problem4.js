const ALPHABET_ASCII_CODE = {
  A: 65,
  Z: 90,
  a: 97,
  z: 122,
};
const ALPHABET_COUNT = 25;
const middleUpperASCII = parseInt(
  (ALPHABET_ASCII_CODE.A + ALPHABET_ASCII_CODE.Z) / 2
);
const middleLowerASCII = parseInt(
  (ALPHABET_ASCII_CODE.a + ALPHABET_ASCII_CODE.z) / 2
);
console.log(middleUpperASCII);
console.log(middleLowerASCII);

const smaller = (currentASCII = 0, ASCII_CODE = 0) => {
  return String.fromCharCode(
    currentASCII + ALPHABET_COUNT - 2 * (currentASCII - ASCII_CODE)
  );
};
const bigger = (currentASCII = 0, ASCII_CODE) => {
  return String.fromCharCode(
    currentASCII - ALPHABET_COUNT + 2 * (ASCII_CODE - currentASCII)
  );
};
const calculateASCIICode = (currentASCII = 0) => {
  if (
    currentASCII >= ALPHABET_ASCII_CODE.A &&
    currentASCII <= ALPHABET_ASCII_CODE.Z
  ) {
    return currentASCII <= middleUpperASCII
      ? smaller(currentASCII, ALPHABET_ASCII_CODE.A)
      : bigger(currentASCII, ALPHABET_ASCII_CODE.Z);
  }
  if (
    currentASCII >= ALPHABET_ASCII_CODE.a &&
    currentASCII <= ALPHABET_ASCII_CODE.z
  ) {
    return currentASCII <= middleUpperASCII
      ? smaller(currentASCII, ALPHABET_ASCII_CODE.a)
      : bigger(currentASCII, ALPHABET_ASCII_CODE.z);
  } else return String.fromCharCode(currentASCII);
};

function problem4(word = '') {
  const splitWords = word.split('');
  const formattedWords = splitWords.reduce((acc, cur) => {
    return (acc = acc + calculateASCIICode(cur.charCodeAt(0)));
  }, '');

  return formattedWords;
}

module.exports = problem4;
