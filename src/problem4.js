function problem4(word) {
  const arrayedAlphabetLists = arrayAlphabet();
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

module.exports = problem4;
