function decrypt(cryptogram) {
  let result = "";

  for (let i = 0; i < cryptogram.length; i++) {
    const leftChar = cryptogram[i];

    let pointer = i + 1;
    let rightChar = cryptogram[pointer];

    while (leftChar === rightChar) {
      rightChar = cryptogram[++pointer];
    }

    if (pointer !== i + 1) {
      i = pointer - 1;
      continue;
    }

    result += leftChar;
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

console.log(problem2("browoanoommnaon"));
console.log(problem2("zyelleyz"));

module.exports = problem2;
