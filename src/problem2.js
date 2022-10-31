function problem2(cryptogram) {
  let answer = cryptogram;
  const regex = /(.+)\1/;

  answer = answer.replace(regex, '');

  return answer;
}

module.exports = problem2;
