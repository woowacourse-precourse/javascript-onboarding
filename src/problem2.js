function deleteDuplicatedWord(wordsArray) {
  let count = 1;
  let targetIndex = [];

  wordsArray.map((word, index) => {
    if (word == wordsArray[index + 1]) {
      while (word == wordsArray[index + count]) {
        count++;
      }
      targetIndex.push(word.repeat(count));
    }
  });

  let newWord = wordsArray.join("");

  targetIndex.map((target) => {
    newWord = newWord.replace(target, "");
  });

  return newWord.split("");
}

function isUniqueWords(wordsArray) {
  let isUnique = true;

  wordsArray.map((word, index) => {
    if (word == wordsArray[index + 1]) {
      isUnique = false;
    }
  });
  return isUnique;
}

function problem2(cryptogram) {
  let cryptogramArray = cryptogram.split("");
  let newCryptogramArray = deleteDuplicatedWord(cryptogramArray);

  while (!isUniqueWords(newCryptogramArray)) {
    newCryptogramArray = deleteDuplicatedWord(newCryptogramArray);
  }

  return newCryptogramArray.join("");
}

module.exports = problem2;
