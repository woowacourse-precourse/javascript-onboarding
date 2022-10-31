function problem2(cryptogram) {
  let answer = cryptogram;
  const regex = /(.+)\1/;

  while (regex.test(answer)) {
    answer = answer.replace(regex, '');
  }

  return answer;
}

module.exports = problem2;
