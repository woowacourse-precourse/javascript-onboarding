function problem2(cryptogram) {
  let cryptoArray = cryptogram.split("");
  let duplicatedFlag = true;
  let duplicatedCount = 0;

  while (duplicatedFlag === true) {
    for (let i = 0; i < cryptoArray.length; i++) {
      if (cryptoArray[i] === cryptoArray[i + 1]) {
        cryptoArray.splice(i, 2);
        duplicatedCount++;
      }
    }
    if (duplicatedCount === 0) {
      duplicatedFlag = false;
    } else {
      duplicatedCount = 0;
    }
  }
  let answer = cryptoArray.join("");
  return answer;
}

module.exports = problem2;
