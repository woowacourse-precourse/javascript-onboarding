function problem2(cryptogram) {
  const rDuplication = /(\w+)\1/g;

  while((cryptogram.match(rDuplication) || 0).length > 0){
  cryptogram = cryptogram.replace(rDuplication,'');
  }
  return cryptogram;
}

module.exports = problem2;
