function problem2(cryptogram) {
  let checked = true;
  while (checked) {
    checked = false;
    for (let i = 0; i < cryptogram.length - 1; i++) {
      if (cryptogram[i] === cryptogram[i + 1]) {
        cryptogram = cryptogram.slice(0, i) + cryptogram.slice(i + 2);
        i--;
        checked = true;
      }
    }
  }
  return cryptogram;
}

module.exports = problem2;
