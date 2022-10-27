const BIG_START = 65;
const BIG_END = 90;
const SMALL_START = 97;
const SMALL_END = 122;

// word 길이 체크
const checkInputError = (word) => word.length < 1 || word.length > 1000;

// 소문자 체크
const isSmall = (alpha) => {
  const ascii = alpha.charCodeAt(0);
  return SMALL_START <= ascii && ascii <= SMALL_END;
};

// 대문자 체크
const isBig = (alpha) => {
  const ascii = alpha.charCodeAt(0);
  return BIG_START <= ascii && ascii <= BIG_END;
};

// 알파벳 체크
const checkAlpha = (alpha) => isSmall(alpha) || isBig(alpha);

// 알파벳 변환
const transAlpha = (alpha) => {};

exports.checkInputError = checkInputError;
exports.checkAlpha = checkAlpha;
exports.transAlpha = transAlpha;
exports.isSmall = isSmall;
exports.isBig = isBig;
