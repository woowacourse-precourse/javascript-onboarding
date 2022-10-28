function problem2(cryptogram) {
  cryptogram = cryptogram.split("");
  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      cryptogram.splice(i, 2);
      console.log(i, cryptogram, cryptogram.length);
      i = -1;
    }
  }

  return cryptogram.join("");
}

module.exports = problem2;
