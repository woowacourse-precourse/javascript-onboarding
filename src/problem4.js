function problem4(word) {
  let answer;

  const MINIMUM_NUMBER = 1;
  const MAXIMAL_NUMBER = 1000;

  const UPPER_CASE_RANGE_UTF16_CODE = [65, 90];
  const LOWER_CASE_RANGE_UTF16_CODE = [97, 122];
  const EMPTY_STRING_UTF16_CODE = 32;

  // - [x] 사전 구현
  const dictionary = {
    A: 'Z',
    B: 'Y',
    C: 'X',
    D: 'W',
    E: 'V',
    F: 'U',
    G: 'T',
    H: 'S',
    I: 'R',
    J: 'Q',
    K: 'P',
    L: 'O',
    M: 'N',
    N: 'M',
    O: 'L',
    P: 'K',
    Q: 'J',
    R: 'I',
    S: 'H',
    T: 'G',
    U: 'F',
    V: 'E',
    W: 'D',
    X: 'C',
    Y: 'B',
    Z: 'A',
  };

  // - [x] word는 길이가 1 이상 1,000 이하인 문자열이다.
  const isAllowNumberRange = (word, min, max) => {
    if (!typeof word === 'string') {
      return false;
    }
    const length = word.length;
    return length >= min && length <= max;
  };

  if (!isAllowNumberRange(word, MINIMUM_NUMBER, MAXIMAL_NUMBER)) {
    throw new Error('word는 1 이상 1,000 이하인 문자열이다.');
  }

  // - [x] 번역하기
  //  - [x] 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.
  //  - [x] 알파벳 외의 문자는 변환하지 않는다.
  const isUpperCase = (_code) =>
    _code >= UPPER_CASE_RANGE_UTF16_CODE[0] &&
    _code <= UPPER_CASE_RANGE_UTF16_CODE[1];
  const isLowerCase = (_code) =>
    _code >= LOWER_CASE_RANGE_UTF16_CODE[0] &&
    _code <= LOWER_CASE_RANGE_UTF16_CODE[1];
  const isEmptyString = (_code) => _code === EMPTY_STRING_UTF16_CODE;

  const translateWord = (_word) => {
    let result = [];
    for (const oneLetter of _word) {
      const code = oneLetter.charCodeAt();

      if (isUpperCase(code)) {
        const translateLetter = dictionary[oneLetter];
        result.push(translateLetter.toUpperCase());
        continue;
      }

      if (isLowerCase(code)) {
        const translateLetter = dictionary[oneLetter.toUpperCase()];
        result.push(translateLetter.toLowerCase());
        continue;
      }

      if (isEmptyString(code)) {
        result.push(' ');
        continue;
      }

      result.push(oneLetter);
    }
    return result.join('');
  };

  answer = translateWord(word);
  return answer;
}

module.exports = problem4;
