function problem2(cryptogram) {
  if (validateWord(cryptogram)) {
    return removeDuplicateWord(cryptogram);
  }
  return -1;
}

const removeDuplicateWord = (words) => {
  const stack = [];
  words.split('').forEach((word) => {
    const stackLastIndex = stack.length - 1;
    if (stack.length === 0) {
      stack.push(word);
    } else if (stack[stackLastIndex] !== word) {
      stack.push(word);
    } else if (stack[stackLastIndex] === word) {
      stack.pop();
    }
  });
  return stack.join('');
};

const validateWord = (word) => {
  const wordLength = word.legnth;
  if (wordLength === 0 || wordLength > 1000) {
    return false;
  }
  if (!/^[a-z]+$/.test(word)) {
    return false;
  }
  return true;
};

module.exports = problem2;
