function problem2(cryptogram) {
  let i = 0;
  while (i < cryptogram.length) {
    if (i + 1 < cryptogram.length && cryptogram[i] === cryptogram[i + 1]) {
      cryptogram = cryptogram.slice(0, i) + cryptogram.slice(i + 2, cryptogram.length);
    }
  }
}
module.exports = problem2;
