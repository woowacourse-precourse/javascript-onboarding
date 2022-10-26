function problem2(cryptogram) {
  return removeDuplicateWord(cryptogram);
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

module.exports = problem2;
