function problem2(cryptogram) {
  let splitCryptogram = cryptogram.split("");
  let answer;

  while (true) {
    let done = true;
    for (let i = 0; i < splitCryptogram.length - 1; i++) {
      if (splitCryptogram[i] == splitCryptogram[i + 1]) {
        splitCryptogram.splice(i, 2);
        done = false;
      }
    }
    if (done) break;
  }

  answer = splitCryptogram.join("");
  return answer;
}

module.exports = problem2;
