function problem2(cryptogram) {
  var answer;
  let unlockWord = [];

  for (let i = 0; i < cryptogram.length; i++) {
    if (unlockWord[unlockWord.length - 1] === cryptogram[i]) {
      unlockWord.pop()
    } else {
      unlockWord.push(cryptogram[i])
    }
  }
  answer = unlockWord.join('');
  return answer;
}

module.exports = problem2;