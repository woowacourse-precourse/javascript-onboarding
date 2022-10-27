const BIG_START = 65;
const BIG_END = 90;
const SMALL_START = 97;
const SMALL_END = 122;

// word 길이 체크
const checkInputError = (word) => word.length < 1 || word.length > 1000;
// 알파벳 체크
const checkAlpha = (alpha) => {
  const ascii = alpha.charCodeAt(0);
  return (
    (BIG_START <= ascii && BIG_END <= ascii) ||
    (SMALL_START <= ascii && ascii <= SMALL_END)
  );
};
// 알파벳 변환
const transAlpha = (alpha) => {};

exports.checkInputError = checkInputError;
exports.checkAlpha = checkAlpha;
exports.transAlpha = transAlpha;
