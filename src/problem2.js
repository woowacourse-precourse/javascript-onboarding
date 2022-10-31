function decrypt(cryptogram) {
  const decrypted = [];

  [...cryptogram].forEach((char, index) => {
    if (cryptogram[index - 1] === char || cryptogram[index + 1] === char) {
      return;
    }
    decrypted.push(char);
  });

  return decrypted.join("");
}

function problem2(cryptogram) {
  let prevDecrypted = cryptogram;
  let decrypted = decrypt(cryptogram);

  while (prevDecrypted !== decrypted) {
    prevDecrypted = decrypted;
    decrypted = decrypt(decrypted);
  }

  return decrypted;
}

module.exports = problem2;
