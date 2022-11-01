function problem2(cryptogram) {
  let cryptoArray = Array.from(cryptogram);
  const arrayLength = cryptoArray.length;

  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < cryptoArray.length - 1; j++) {
      console.log(cryptoArray);
      if (cryptoArray[j] == cryptoArray[j + 1]) {
        cryptoArray.splice(j, 2);
      }
    }
  }

  return cryptoArray.join('');
}

module.exports = problem2;
