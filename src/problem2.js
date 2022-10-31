function problem2(cryptogram) {
  let answer,
    end = false;

  while (true) {
    if (end) break;
    for (let i = 0; i < cryptogram.length - 1; i++) {
      if (cryptogram[i] === cryptogram[i + 1]) {
        cryptogram = cryptogram.substring(0, i) + cryptogram.substring(i + 2);
        break;
      } else if (i === cryptogram.length - 2) {
        end = true;
        break;
      }
    }
    if (cryptogram.length === 0) {
      break;
    }
  }

  answer = cryptogram;

  return answer;
}

module.exports = problem2;
