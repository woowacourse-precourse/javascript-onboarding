function problem2(cryptogram) {
  const answer = cryptogram;

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === answer[i + 1]) {
      return problem2(answer.substring(0, i) + answer.substring(i + 2));
    }
  }

  return answer;
}

module.exports = problem2;
