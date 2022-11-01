function problem2(cryptogram) {
  var answer;

  for (let i = 0; i < splitWord.length; i++) {
    if (splitWord[i] === splitWord[i + 1]) {
      splitWord.splice(i, 2);
      result = true;
    }
  }

  return answer;
}

module.exports = problem2;
