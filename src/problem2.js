const regex = /([a-z])\1+/g;

function problem2(cryptogram) {
  while (cryptogram.match(regex)) {
    cryptogram = cryptogram.replace(regex, "");
  }

  return cryptogram;
}

module.exports = problem2;
