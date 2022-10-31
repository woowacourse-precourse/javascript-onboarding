function problem2(cryptogram) {

  let confirm = true;
  const word = /([a-z])\1+/g;

  while (confirm) {
    const Length = cryptogram.length;
    cryptogram = cryptogram.replace(word, '');
    if (Length === cryptogram.length) {
      break
    }
  }
  return cryptogram;
}


module.exports = problem2;
