function problem2(cryptogram) {
  const result = checkErrors(cryptogram);

  return result;

  function checkErrors(word) {
    const MINIMUM_LENGTH = 1;
    const MAXIMUM_LENGTH = 1000;
    const wordLength = word.length;

    if (wordLength < MINIMUM_LENGTH || wordLength > MAXIMUM_LENGTH) {
      return "문자열의 길이는 최소 1, 최대 1000입니다.";
    }

    return checkDuplicates(word);
  }

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
