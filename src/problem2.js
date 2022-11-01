const pushAvailable = (char, lastChar, preChar) =>
  char !== lastChar && char !== preChar;

const needPop = (char, lastChar) => char === lastChar;

const removeDuplication = (string) => {
  const stack = [];
  let preChar = '';

  for (const char of string) {
    const lastChar = stack[stack.length - 1];

    if (pushAvailable(char, lastChar, preChar)) {
      stack.push(char);
      preChar = char;
    } else if (needPop(char, lastChar)) {
      stack.pop();
    }
  }
  return stack.join('');
};

function problem2(cryptogram) {
  return removeDuplication(cryptogram);
}

module.exports = problem2;
