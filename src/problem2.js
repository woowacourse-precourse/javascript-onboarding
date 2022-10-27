function problem2(cryptogram) {
  let answer = [];

  for (const letter of cryptogram) {
    if (answer[answer.length - 1] === letter) {
      answer.pop();
    } else {
      answer.push(letter);
    }
  }

  return answer.join('');
}

module.exports = problem2;
