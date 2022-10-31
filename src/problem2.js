function problem2(cryptogram = '') {
  const result = [];
  const letterCounts = {};
  const splitedLetters = cryptogram.split('');
  splitedLetters.forEach((letter) => {
    if (letterCounts[letter]) letterCounts[letter]++;
    else letterCounts[letter] = 1;
  });

  for (const [letter, count] of Object.entries(letterCounts)) {
    if (count % 2 === 1) result.push(letter);
  }

  return result.join('');
}

module.exports = problem2;
