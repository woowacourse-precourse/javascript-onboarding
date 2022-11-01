const MESSAGES = Object.freeze({
  ERROR_RANGE: '입력된 문자는 1 이상 1,000 이하의 문자열이여야 합니다.',
});
const ALPHABET_ASCII_CODE = Object.freeze({
  A: 65,
  Z: 90,
  a: 97,
  z: 122,
});
const ALPHABET_COUNT = 25;

// 각 알파벳의 중간 문자 확인
const middleUpperASCII = parseInt(
  (ALPHABET_ASCII_CODE.A + ALPHABET_ASCII_CODE.Z) / 2
);
const middleLowerASCII = parseInt(
  (ALPHABET_ASCII_CODE.a + ALPHABET_ASCII_CODE.z) / 2
);

function problem4(word = '') {
  const splitWords = word.split('');
  const wordsLength = splitWords.length;
  if (wordsLength < 1 || wordsLength > 1000) return MESSAGES.ERROR_RANGE;
  const formattedWords = splitWords.reduce((acc, cur) => {
    return (acc += convertByASCII(cur.charCodeAt(0)));
  }, '');

  return formattedWords;
}

/** 알파벳 시작 문자 ~ 중간 문자까지의 계산 */
const smaller = (currentASCII = 0, ASCII_CODE = 0) => {
  return String.fromCharCode(
    currentASCII + ALPHABET_COUNT - 2 * (currentASCII - ASCII_CODE)
  );
};
/** 알파벳 중간 문자 ~ 끝 문자까지의 계산 */
const bigger = (currentASCII = 0, ASCII_CODE) => {
  return String.fromCharCode(
    currentASCII - ALPHABET_COUNT + 2 * (ASCII_CODE - currentASCII)
  );
};

/** 청개구리 규칙에 맞게 아스키코드 반환 */
const convertByASCII = (currentASCII = 0) => {
  const isUpperCase =
    currentASCII >= ALPHABET_ASCII_CODE.A &&
    currentASCII <= ALPHABET_ASCII_CODE.Z;
  const isLowerCase =
    currentASCII >= ALPHABET_ASCII_CODE.a &&
    currentASCII <= ALPHABET_ASCII_CODE.z;

  if (isUpperCase) {
    return currentASCII <= middleUpperASCII
      ? smaller(currentASCII, ALPHABET_ASCII_CODE.A)
      : bigger(currentASCII, ALPHABET_ASCII_CODE.Z);
  }
  if (isLowerCase) {
    return currentASCII <= middleLowerASCII
      ? smaller(currentASCII, ALPHABET_ASCII_CODE.a)
      : bigger(currentASCII, ALPHABET_ASCII_CODE.z);
  }
  return String.fromCharCode(currentASCII);
};

module.exports = problem4;
