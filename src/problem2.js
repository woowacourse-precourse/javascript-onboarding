// 01:21 ~
function problem2(cryptogram) {
  let currentCryptogram = cryptogram;
  while (currentCryptogram) {
    let deletedCryptogram = deleteRepeatedChars(currentCryptogram);
    if (deletedCryptogram === currentCryptogram) break;
    currentCryptogram = deletedCryptogram;
  }
  return currentCryptogram;
}

function deleteRepeatedChars(cryptogram) {
  return cryptogram
    .split("")
    .filter(
      (ele, idx) => ele !== cryptogram[idx + 1] && ele !== cryptogram[idx - 1]
    )
    .join("");
}

module.exports = problem2;
