function problem2(cryptogram) {
  let newCryptogram = deleteDuplicatedWord(cryptogram);
  while (!isUniqueWords(newCryptogram)) {
    newCryptogram = deleteDuplicatedWord(newCryptogram);
  }
  return newCryptogram;
}

function deleteDuplicatedWord(words) {
  let wordsArray = words.split("");
  let newWordsArray = wordsArray;

  wordsArray.map((word, index) => {
    if (word == wordsArray[index + 1]) {
      let repeat = 1;
      newWordsArray[index] = "";
      while (word == wordsArray[index + repeat]) {
        newWordsArray[index + repeat] = "";
        repeat++;
      }
    }
  });

  return newWordsArray.join("");
}

function isUniqueWords(words) {
  let isUnique = true;
  let wordsArray = words.split("");

  wordsArray.map((word, index) => {
    if (word == wordsArray[index + 1]) {
      isUnique = false;
    }
  });

  return isUnique;
}

module.exports = problem2;
