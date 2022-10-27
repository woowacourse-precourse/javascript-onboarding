function decrypt(cryptogram) {
  let result = "";

  for (let i = 0; i < cryptogram.length; i++) {
    const currentChar = cryptogram[i];
    let j = i + 1;
    let nextChar = cryptogram[j];

    while (currentChar === nextChar) {
      nextChar = cryptogram[++j];
    }

    if (i === j - 1) {
      result += currentChar;
    }

    i = j - 1;
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
