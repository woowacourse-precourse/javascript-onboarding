function problem2(cryptogram) {
  let decryption = [];
  let popCrypto = "";

  [...cryptogram].forEach((crypto) => {
    (decryption[decryption.length - 1] === crypto) ? popCrypto = decryption.pop() : null;
    (!decryption || popCrypto !== crypto) ? decryption.push(crypto) : null;
  })

  return decryption.join("");
}

module.exports = problem2;
