function problem2(cryptogram) {
  const removedCyptogram = removeDuplicates(cryptogram);
  return removedCyptogram;

  function removeDuplicates(word) {
    const wordLength = word.length;
    let removedResult = "";
    let duplicateAlphabet = "";

    for (let wordIndex = 0; wordIndex < wordLength; wordIndex++) {
      if (word[wordIndex] === word[wordIndex + 1]) {
        duplicateAlphabet = word[wordIndex];
        wordIndex++;
        continue;
      }

      if (duplicateAlphabet[wordIndex] === duplicateAlphabet) {
        duplicateAlphabet = "";
        wordIndex++;
        continue;
      }

      removedResult += word[wordIndex];
    }

    return removedResult;
  }
}

module.exports = problem2;
