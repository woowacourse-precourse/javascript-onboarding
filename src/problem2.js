function problem2(cryptogram) {
  let answer;
  const regExp = /(\w)\1+/g;
  while (cryptogram !== cryptogram.replace(regExp, ''))
    cryptogram = cryptogram.replace(regExp, '');

  return (answer = cryptogram);
}

module.exports = problem2;
