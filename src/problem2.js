function problem2(cryptogram) {
  const lettersCount = [];
  let hasDuplicates = false;
  for (let i = 0; i < cryptogram.length; i++) {
    let count = 1;
    while (cryptogram[i] === cryptogram[i + 1]) {
      hasDuplicates = true;
      i += 1;
      count += 1;
    }
    lettersCount.push([cryptogram[i], count]);
  }

  const oneLetters = lettersCount.filter((letterCount) => letterCount[1] === 1);
  const letters = oneLetters.map((oneLetter) => oneLetter[0]);

  if (hasDuplicates) return problem2(letters.join(''));

  return letters.join('');
}

module.exports = problem2;
