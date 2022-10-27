function problem4(word) {
  const arrayedAlphabetLists = arrayAlphabet();
  const result = reverseWord(word, arrayedAlphabetLists);

  return result;
}

function arrayAlphabet() {
  const TOTAL_ALPHABET = 26;
  let alphabetList = new Array(TOTAL_ALPHABET);
  let reversedAlphabetList = new Array(TOTAL_ALPHABET);

  for (let alphabetIndex = 0; alphabetIndex < TOTAL_ALPHABET; alphabetIndex++) {
    const START_ALPHABET_A = 65;
    const LAST_ALPHABET_Z = 90;

    alphabetList[alphabetIndex] = String.fromCharCode(
      START_ALPHABET_A + alphabetIndex
    );
    reversedAlphabetList[alphabetIndex] = String.fromCharCode(
      LAST_ALPHABET_Z - alphabetIndex
    );
  }

  return [alphabetList, reversedAlphabetList];
}

function reverseWord(correctWord, lists) {
  const wordLength = correctWord.length;
  const alphabetList = lists[0];
  const reversedAlphabetList = lists[1];
  let changedWord = new Array(wordLength);

  for (let wordIndex = 0; wordIndex < wordLength; wordIndex++) {
    currentIndex = alphabetList.indexOf(correctWord[wordIndex]);
    changedWord[wordIndex] = reversedAlphabetList[currentIndex];
  }

  return changedWord.join("");
}

module.exports = problem4;
