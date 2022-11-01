function problem2(cryptogram) {
  let answer = cryptogram;
  const REGEX = /([a-z])\1+/g;

  while (REGEX.test(answer)) {
    answer = String(answer).replace(REGEX, "");
  }

  return answer;
}

module.exports = problem2;
