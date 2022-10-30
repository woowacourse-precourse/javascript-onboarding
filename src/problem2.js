function problem2(cryptogram) {
  var answer = "";
  const len = cryptogram.length;

  for (let i = 0; i < len; i++) {
    const curChar = cryptogram[i];
    if (curChar === cryptogram[i + 1] || curChar === cryptogram[i - 1])
      continue;
    else answer += curChar;
  }
  if (answer === cryptogram) return answer;
  else return problem2(answer);
}

module.exports = problem2;
