function problem2(cryptogram) {
  let answer;
  answer = decode(cryptogram);
  return answer;
}

function decode(cryptogram) {
  const cryptoStack = [];

  [...cryptogram].forEach((char) => {
    switch (cryptoStack[cryptoStack.length - 1] === char) {
      case true:
        cryptoStack.pop();
        break;
      case false:
        cryptoStack.push(char);
        break;
    }
  });

  return cryptoStack.join("");
}

module.exports = problem2;
