const MESSAGES = Object.freeze({
  ERROR_LENGTH: '암호문은 1자 이상 1,000자 이하의 문자열이여야 합니다.',
});

/** 파라미터 조건 확인 */
const isInvalidCryptogram = (separatedLetters = []) => {
  const lettersCount = separatedLetters.length;
  if (lettersCount < 1 || lettersCount > 1000)
    throw Error(MESSAGES.ERROR_LENGTH);
};

function problem2(cryptogram = '') {
  const result = [];
  const letterCounts = {};

  // 한 글자씩 분리
  const separatedLetters = cryptogram.toLowerCase().split('');

  // 입력 형식 확인
  try {
    isInvalidCryptogram(separatedLetters);
  } catch (e) {
    return e.message;
  }

  // 분리된 글자 수 계산
  separatedLetters.forEach((letter) => {
    letterCounts[letter] = (letterCounts[letter] ?? 0) + 1;
  });

  // 분리된 글자 수가 홀수라면 배열에 저장
  for (const [letter, count] of Object.entries(letterCounts)) {
    if (count % 2 === 1) result.push(letter);
  }

  return result.join('');
}

module.exports = problem2;
