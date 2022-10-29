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

  const letters = lettersCount.map((lettersCount) => {
    if (lettersCount[1] === 1) return lettersCount[0];
  });

  if (hasDuplicates) return problem2(letters.join(''));

  return letters.join('');
}

module.exports = problem2;
