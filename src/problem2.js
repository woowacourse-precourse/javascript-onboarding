function problem2(cryptogram) {
  cryptogram = cryptogram.split("");

  function deCryptogram(cryptogram) {
    let isRemove = 0;
    const newCryptogram = new Array(cryptogram.lengt);
    const checkCryptogram = new Array(cryptogram.length).fill(0);

    for (let i = 1; i < cryptogram.length; i++) {
      if (cryptogram[i] == cryptogram[i - 1]) {
        checkCryptogram[i] = 1;
        checkCryptogram[i - 1] = 1;
        isRemove = 1;
      }
    }

    checkCryptogram.forEach((check, idx) => {
      if (!check) newCryptogram.push(cryptogram[idx]);
    });
    if (isRemove) return deCryptogram(newCryptogram);
    else return newCryptogram;
  }
  return deCryptogram(cryptogram).join("");
}

module.exports = problem2;
