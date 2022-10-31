function problem2(cryptogram) {
  return repeatDeleting(cryptogram);
}

function repeatDeleting(cryptogram) {
  let currentCryptogram = cryptogram;

  while (currentCryptogram) {
    let deletedCryptogram = deleteDuplicatedChars(currentCryptogram);

    if (deletedCryptogram === currentCryptogram) break;

    currentCryptogram = deletedCryptogram;
  }

  return currentCryptogram;
}

function deleteDuplicatedChars(cryptogram) {
  return cryptogram
    .split("")
    .filter(
      (ele, idx) => ele !== cryptogram[idx + 1] && ele !== cryptogram[idx - 1]
    )
    .join("");
}

module.exports = problem2;
