function deleteDuplicatedWord(wordsArray) {
  let count = 1;
  let index = 0;
  let targetIndex = [];

  while (true) {
    if (wordsArray[index] == wordsArray[index + 1]) {
      while (wordsArray[index] == wordsArray[index + count]) {
        count++;
      }
      targetIndex.push(index, count);
      break;
    }
    index++;
  }
  wordsArray.splice(targetIndex[0], targetIndex[1]);

  return wordsArray;
}

function isUniqueWords(wordsArray) {
  let flag = true;
  wordsArray.map((words, index) => {
    if (wordsArray[index] == wordsArray[index + 1]) {
      flag = false;
    }
  });
  return flag;
}

module.exports = problem2;
