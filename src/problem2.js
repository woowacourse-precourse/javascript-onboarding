function problem2(cryptogram) {
  let str = cryptogram;

  for (let i = 0; i < str.length * 2; i++) {
    str = str.replace(/(.)\1+/, "");
  }

  return str;
}

module.exports = problem2;
