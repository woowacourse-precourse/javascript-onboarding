function problem2(cryptogram) {
  const checkedErrors = checkErrors(cryptogram);

  if (checkedErrors === "Not Error") {
    const result = removeDuplicates(cryptogram);

    return result;
  }

  return checkedErrors;
}

function checkErrors(word) {
  const MINIMUM_LENGTH = 1;
  const MAXIMUM_LENGTH = 1000;
  const MINIMUM_ALPHABET = "a";
  const MAXIMUM_ALPHABET = "z";
  const wordLength = word.length;

  if (wordLength < MINIMUM_LENGTH || wordLength > MAXIMUM_LENGTH) {
    return "문자열의 길이는 최소 1, 최대 1000입니다.";
  }

  for (let wordIndex = 0; wordIndex < wordLength; wordIndex++) {
    if (
      word[wordIndex] < MINIMUM_ALPHABET ||
      word[wordIndex] > MAXIMUM_ALPHABET
    ) {
      return "문자열은 소문자 알파벳으로만 이루어져야 합니다.";
    }
  }

  return "Not Error";
}

function removeDuplicates(word) {
  const wordLength = word.length;
  let removedResult = "";
  let duplicateAlphabet = "";
  let changedHistory = false;

  for (let wordIndex = 0; wordIndex < wordLength; wordIndex++) {
    if (word[wordIndex] === word[wordIndex + 1]) {
      changedHistory = true;
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

  if (changedHistory === false) {
    return removedResult;
  }

  return removeDuplicates(removedResult);
}
module.exports = problem2;
