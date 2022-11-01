function problem4(word) {
  const wordArr = word.split('');
  // 알파벳 대문자 사전
  const dictionaryUpper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  // 알파벳 대문자 사전 뒤집기
  const dictionaryUpperReverse = [...dictionaryUpper].reverse();
  // 알파벳 소문자 사전
  const dictionaryLower = dictionaryUpper.map((alphabet) =>
    alphabet.toLowerCase()
  );
  // 알파벳 소문자 사전 뒤집기
  const dictionaryLowerReverse = [...dictionaryLower].reverse();
  wordArr.map((alphabet, index) => {
    // word의 특정 값이 대문자인 경우
    if (alphabet.charCodeAt(0) >= 65 && alphabet.charCodeAt(0) <= 90) {
      const idx = dictionaryUpper.indexOf(alphabet);
      wordArr[index] = dictionaryUpperReverse[idx];
    }
    // word의 특정 값이 소문자인 경우
    if (alphabet.charCodeAt(0) >= 97 && alphabet.charCodeAt(0) <= 122) {
      const idx = dictionaryLower.indexOf(alphabet);
      wordArr[index] = dictionaryLowerReverse[idx];
    }
  });
  return wordArr.join('');
}

module.exports = problem4;
