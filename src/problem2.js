function problem2(cryptogram) {
  const splitWord = cryptogram.split("");

  let result = true;

  while (result) {
    result = false;
    for (let i = 0; i < splitWord.length; i++) {
      if (splitWord[i] === splitWord[i + 1]) {
        splitWord.splice(i, 2);
        result = true;
      }
    }
  }

  return splitWord.join("");
}

module.exports = problem2;
