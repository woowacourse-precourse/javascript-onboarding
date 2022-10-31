function problem2(cryptogram) {
  return solveCrypto(cryptogram);
}

function solveCrypto(cryptogram) {
  while (true) {
    const cryptogramArr = cryptogram.split("");
    let newCrypto = deduplication(cryptogramArr).join("");
    if (cryptogram != newCrypto){
    cryptogram = newCrypto;
    }else break;
  }
  return cryptogram;
}

function deduplication(cryptogram) {
  for (let i = cryptogram.length - 1; i >= 0; i--) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      cryptogram[i] = "";
      cryptogram[i + 1] = "";
    } else {
      cryptogram[i];
    }
  }
  return cryptogram;
}

console.log(problem2("browoanoommnaon"));


module.exports = problem2;
