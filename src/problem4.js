function problem4(word) {
  var answer;

  const MINIMUM_NUMBER = 1;
  const MAXIMAL_NUMBER = 1000;

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

  // - [ ] 번역하기

  // - [ ] 알파벳 외의 문자는 변환하지 않는다.

  // - [ ] 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.

  return answer;
}

module.exports = problem4;
