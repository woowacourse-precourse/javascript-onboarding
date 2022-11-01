function problem2(cryptogram) {
  let reg = new RegExp(/(.)\1+/g);
  while (reg.test(cryptogram))
    cryptogram = cryptogram.replace(reg, "");
  return cryptogram;
}

module.exports = problem2;
