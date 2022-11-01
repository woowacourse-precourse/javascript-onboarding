function problem2(cryptogram) {
  const answer = [cryptogram[0]];

  for (i = 1; i <= cryptogram.length; i++) {
    if (answer[answer.length - 1] === cryptogram[i]) answer.pop();
    else answer.push(cryptogram[i]);
  }

  return answer.join("");
}

module.exports = problem2;
