const decryption = (crypto) => {
  let regex = /(.)\1+/g;

  if (!regex.test(crypto)) return false;

  let decrypto = crypto.replace(regex, "");

  return decrypto;
};

function problem2(cryptogram) {
  let crypto = cryptogram;

  while (true) {
    if (crypto.length === 1) return crypto;

    crypto = decryption(crypto);

    if (decryption(crypto) === false) return crypto;
  }
}

module.exports = problem2;
