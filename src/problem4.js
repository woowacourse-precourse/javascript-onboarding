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

  if (wordLength < 1 || wordLength > 1000) {
    return "입력값은 반드시 1 이상 1000 이하 문자열이어야 합니다.";
  }

  for (let wordIndex = 0; wordIndex < wordLength; wordIndex++) {
    const isAlphabet = checkAlphabetOrNot(correctWord[wordIndex]);
    const currentWord = changeFromLowercaseToUppercase(correctWord[wordIndex]);

    if (isAlphabet === "Not Alphabet") {
      changedWord[wordIndex] = correctWord[wordIndex];
      continue;
    }

    currentIndex = alphabetList.indexOf(currentWord);
    changedWord[wordIndex] = reversedAlphabetList[currentIndex];

    if (currentWord === correctWord[wordIndex]) {
      continue;
    }

    changedWord[wordIndex] = changeFromUppercaseToLowercase(
      changedWord[wordIndex]
    );
  }

  return changedWord.join("");
}

function checkAlphabetOrNot(word) {
  const START_ALPHABET_UPPER = 65;
  const LAST_ALPHABET_UPPER = 90;
  const START_ALPHABET_LOWER = 97;
  const LAST_ALPHABET_LOWER = 122;
  let wordNumber = word.charCodeAt(0);

  if (
    wordNumber < START_ALPHABET_UPPER ||
    (wordNumber > LAST_ALPHABET_UPPER && wordNumber < START_ALPHABET_LOWER) ||
    wordNumber > LAST_ALPHABET_LOWER
  ) {
    return "Not Alphabet";
  }

  return word;
}

function changeFromLowercaseToUppercase(alphabet) {
  const START_ALPHABET_UPPER = 65;
  const START_ALPHABET_LOWER = 97;
  const LAST_ALPHABET_LOWER = 122;
  const LOWER_MINUS_UPPER = START_ALPHABET_LOWER - START_ALPHABET_UPPER;
  let alphabetNumber = alphabet.charCodeAt(0);
  let changedAlphabet;

  if (
    alphabetNumber < START_ALPHABET_LOWER ||
    alphabetNumber > LAST_ALPHABET_LOWER
  ) {
    return alphabet;
  }

  changedAlphabet = String.fromCharCode(alphabetNumber - LOWER_MINUS_UPPER);

  return changedAlphabet;
}

function changeFromUppercaseToLowercase(alphabet) {
  const START_ALPHABET_UPPER = 65;
  const START_ALPHABET_LOWER = 97;
  const LOWER_MINUS_UPPER = START_ALPHABET_LOWER - START_ALPHABET_UPPER;
  let alphabetNumber = alphabet.charCodeAt(0);
  let changedAlphabet;

  changedAlphabet = String.fromCharCode(alphabetNumber + LOWER_MINUS_UPPER);

  return changedAlphabet;
}

module.exports = problem4;
