function problem2(cryptogram) {
  const check = (cryptogram) => {
    const lowerCaseStr = cryptogram.toLowerCase();
    if (cryptogram.length < 1 ) return false;
    if (cryptogram.length > 1000) return false;
    if (cryptogram !== lowerCaseStr) return false;
    return true;
  }
}

module.exports = problem2;
