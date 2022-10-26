function decrypt(cryptogram) {
  let result = "";

  for (let i = 0; i < cryptogram.length; i++) {
    const currentChar = cryptogram[i];
    const nextChar = cryptogram[i + 1];

    if (currentChar === nextChar) {
      i++;
      continue;
    }

    result += currentChar;
  }

  return result;
}

function problem2(cryptogram) {
  let encryptedString = cryptogram;
  let decryptedString = "";
  let isNeedDecryption = true;

  while (isNeedDecryption) {
    decryptedString = decrypt(encryptedString);

    if (decryptedString === encryptedString) {
      return decryptedString;
    }

    encryptedString = decryptedString;
    decryptedString = "";
  }

  return decryptedString;
}

module.exports = problem2;
