function problem2(cryptogram) {
  for (let index = 0; index < cryptogram.length; index++) {
    if (cryptogram[index] === cryptogram[index + 1]) {
      cryptogram = cryptogram.slice(0, index) + cryptogram.slice(index + 2);
    }
  }

  return answer;
}

module.exports = problem2;
