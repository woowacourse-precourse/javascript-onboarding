function problem2(cryptogram) {
  let idx = [];
  let strCrypto;
  let arrCrypto = cryptogram.split("");
  let temp = cryptogram[0];
  for (let i = 1; i < arrCrypto.length; i++) {
    if (temp !== arrCrypto[i]) {
      temp = arrCrypto[i];
    } else {
      idx.push(i);
      idx.push(i - 1);
    }
  }
  if (idx.length === 0 || idx === null) return arrCrypto.join("");
  idx.sort((a, b) => {
    return a - b;
  });
  idx.forEach((e) => arrCrypto.splice(e, 1, ""));
  arrCrypto = arrCrypto.filter((i) => i !== "");
  strCrypto = arrCrypto.join("");
  return problem2(strCrypto);
}

module.exports = problem2;
