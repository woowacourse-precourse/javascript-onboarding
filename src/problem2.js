function deleteDuplicatedWord(wordsArray) {
  let count = 1;
  let index = 0;
  let targetIndex = [];

  while (index < wordsArray.length) {
    if (wordsArray[index] == wordsArray[index + 1]) {
      while (wordsArray[index] == wordsArray[index + count]) {
        count++;
      }
      targetIndex.push(wordsArray[index].repeat(count));
    }
    index++;
  }

  let newWord = wordsArray.join("");

  targetIndex.map((target) => {
    newWord = newWord.replace(target, "");
  });

  return newWord.split("");
}

function isUniqueWords(wordsArray) {
  let flag = true;
  wordsArray.map((word, index) => {
    if (word == wordsArray[index + 1]) {
      flag = false;
    }
  });
  return flag;
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
