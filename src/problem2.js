function problem2(cryptogram) {
  var answer;
  const minimumLength = 1;
  const maximalLength = 1000;

  // - [x] cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
  const checkStringLength = (_cryptogram, min, max) => {
    if (!typeof _cryptogram === 'string') {
      return false;
    }
    const length = _cryptogram.length;
    return length >= min && length <= max;
  };

  if (!checkStringLength(cryptogram, minimumLength, maximalLength)) {
    throw new Error('cryptogram은 길이가 1 이상 1000 이하인 문자열입니다.');
  }

  // - [ ] cryptogram은 알파벳 소문자로만 이루어져 있다.

  // - [ ] 연속하는 중복 문자 삭제하기
  // - [ ] 배열 문자열로 바꾸기

  return answer;
}

module.exports = problem2;
