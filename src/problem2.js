function problem2(cryptogram) {
  const duplicateCharacterList = cryptogram.match(/([a-z])\1+/g);
  if (duplicateCharacterList === null) return cryptogram;
}

module.exports = problem2;
