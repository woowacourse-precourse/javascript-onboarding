function problem2(cryptogram) {
  const cryp = Array.from(cryptogram);
  for(let i = 0; i < cryp.length; i++) {
    if (cryp[i] === cryp[i-1]) {
      cryp.splice(i-1, 2);
      i = 0;
    }
  }
  return cryp.join("");
}

module.exports = problem2;
