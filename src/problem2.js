function problem2(cryptogram) {
  return solveCrypto(cryptogram);
}

function solveCrypto(cryptogram) {
  while (true) {
    const cryptogramArr = cryptogram.split("");
    let newCrypto = deduplication(cryptogramArr).join("");
    if (cryptogram != newCrypto) {
      cryptogram = newCrypto;
    } else break;
  }
  return cryptogram;
}

function deduplication(cryptogramArr) {
  let progress;
  for (let i = cryptogramArr.length - 1; i >= 0; i--) {
    if (cryptogramArr[i] === cryptogramArr[i + 1]) {
      progress = cryptogramArr[i];
      cryptogramArr[i] = "";
      cryptogramArr[i + 1] = "";
    } else if (progress === cryptogramArr[i]) {
      cryptogramArr[i] = "";
    } else {
      progress = "";
    }
  }
  return cryptogramArr;
}

module.exports = problem2;
