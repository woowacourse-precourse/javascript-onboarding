function problem2(cryptogram) {
  let answer = cryptogram;
  const regex = /(\w)\1+/g;
  while (regex.test(answer)) {
    answer = answer.replaceAll(regex, "");
  }
  return answer;
}

module.exports = problem2;
