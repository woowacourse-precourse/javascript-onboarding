function problem2(cryptogram) {
  var answer = [];
  const word = cryptogram.split('');

  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      answer.push(word[i]);
    } else {
      if (answer[answer.length - 1] !== word[i]) {
        answer.push(word[i]);
      } else {
        answer.pop();
      }
    }
  }

  return answer.join('');
}

module.exports = problem2;
