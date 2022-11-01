function problem4(word) {
  const wordArr = word.split('');
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
  const dictionaryUpperReverse = [...dictionaryUpper].reverse();
  const dictionaryLower = dictionaryUpper.map((alphabet) =>
    alphabet.toLowerCase()
  );
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

console.log(problem4('I love you'));

module.exports = problem4;
