function problem2(cryptogram) {
  const removedAllResult = checkDuplicates(cryptogram);

  return removedAllResult;

  function checkDuplicates(word) {
    for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
      if (word[wordIndex] === word[wordIndex + 1]) {
        return removeDuplicates(word);
      }
    }
    return word;
  }

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

    return checkDuplicates(removedResult);
  }
}

module.exports = problem2;
