function problem2(cryptogram) {
  let decryptedString = "";

  for (let i = 0; i < cryptogram.length; i++) {
    const currentChar = cryptogram[i];

    let pointer = i + 1;
    let comparedChar = cryptogram[pointer];

    while (currentChar === comparedChar) {
      comparedChar = cryptogram[++pointer];
    }

    if (pointer !== i + 1) {
      i = pointer - 1;
      continue;
    }

    decryptedString += currentChar;
  }

  if (decryptedString !== cryptogram) {
    decryptedString = problem2(decryptedString);
  }

  return decryptedString;
}

module.exports = problem2;
