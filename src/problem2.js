function problem2(cryptogram) {
  let answer = cryptogram;
  while (answer.match(/(.)\1+/g)) answer = answer.replace(/(.)\1+/g, '');
  return answer;
}

module.exports = problem2;
