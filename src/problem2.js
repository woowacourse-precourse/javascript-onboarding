function problem2(cryptogram) {
  let answer;
  answer = decode(cryptogram);
  return answer;
}

function decode(cryptogram) {
  const cryptoStack = [];

  function checkChar(char, idx, arr) {
    switch (cryptoStack[cryptoStack.length - 1] === char) {
      case true:
        if (char === arr[idx + 1]) break;

        cryptoStack.pop();
        break;
      case false:
        cryptoStack.push(char);
        break;
    }
  }

  [...cryptogram].forEach(checkChar);

  return cryptoStack.join("");
}

module.exports = problem2;
