function problem2(cryptogram) {
  let answer = '';

  for (let i = 0; i < cryptogram.length; i++) {
    cryptogram[i] === cryptogram[i + 1] ? i++ : answer += cryptogram[i];
  }
  if (answer === cryptogram) {
    return answer;
  }
  return problem2(answer);
}

module.exports = problem2;
