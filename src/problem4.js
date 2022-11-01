function problem4(word) {
  const FIRST_ALPHABET = "A".charCodeAt(0);
  const LAST_ALPHABET = "Z".charCodeAt(0);
  const FIRST_ALPHABET_LOWER = "a".charCodeAt(0);
  const LAST_ALPHABET_LOWER = "z".charCodeAt(0);
  const alphabets = { first: FIRST_ALPHABET, last: LAST_ALPHABET, firstLower: FIRST_ALPHABET_LOWER, lastLower: LAST_ALPHABET_LOWER}
  const arrayedAlphabetLists = arrayAlphabet(alphabets);
  const result = reverseWord(word, arrayedAlphabetLists, alphabets);

  return result;
}

function arrayAlphabet(alphabets) {
  const TOTAL_ALPHABET = 26;
  let alphabetList = new Array(TOTAL_ALPHABET);
  let reversedAlphabetList = new Array(TOTAL_ALPHABET);

  for (let alphabetIndex = 0; alphabetIndex < TOTAL_ALPHABET; alphabetIndex++) {

    alphabetList[alphabetIndex] = String.fromCharCode(
      alphabets.first + alphabetIndex
    );
    reversedAlphabetList[alphabetIndex] = String.fromCharCode(
      alphabets.last - alphabetIndex
    );
  }

  return [alphabetList, reversedAlphabetList];
}

function reverseWord(correctWord, lists, alphabets) {
  const wordLength = correctWord.length;
  const alphabetList = lists[0];
  const reversedAlphabetList = lists[1];
  let changedWord = new Array(wordLength);

  if (wordLength < 1 || wordLength > 1000) {
    return "입력값은 반드시 1 이상 1000 이하 문자열이어야 합니다.";
  }

  for (let wordIndex = 0; wordIndex < wordLength; wordIndex++) {
    const isAlphabet = checkAlphabetOrNot(correctWord[wordIndex], alphabets);
    const currentWord = changeFromLowercaseToUppercase(correctWord[wordIndex], alphabets);

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
      changedWord[wordIndex], alphabets
    );
  }

  return changedWord.join("");
}

function checkAlphabetOrNot(word, alphabets) {
  let wordNumber = word.charCodeAt(0);

  if (
    wordNumber < alphabets.first||
    (wordNumber > alphabets.last && wordNumber < alphabets.first) ||
    wordNumber > alphabets.lastLower
  ) {
    return "Not Alphabet";
  }

  return word;
}

function changeFromLowercaseToUppercase(alphabet, alphabets) {
  const LOWER_MINUS_UPPER = alphabets.firstLower - alphabets.first;
  let alphabetNumber = alphabet.charCodeAt(0);
  let changedAlphabet;

  if (
    alphabetNumber < alphabets.firstLower ||
    alphabetNumber > alphabets.lastLower
  ) {
    return alphabet;
  }

  changedAlphabet = String.fromCharCode(alphabetNumber - LOWER_MINUS_UPPER);

  return changedAlphabet;
}

function changeFromUppercaseToLowercase(alphabet, alphabets) {
  const LOWER_MINUS_UPPER = alphabets.firstLower - alphabets.first;
  let alphabetNumber = alphabet.charCodeAt(0);
  let changedAlphabet;

  changedAlphabet = String.fromCharCode(alphabetNumber + LOWER_MINUS_UPPER);

  return changedAlphabet;
}

module.exports = problem4;
