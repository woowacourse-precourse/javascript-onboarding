function problem2(cryptogram) {
  let answer;

  const arrayCryptogram = cryptogram.split("");

  let iteratorValue = 0;

  while (iteratorValue !== arrayCryptogram.length) {
    if (arrayCryptogram[iteratorValue] === arrayCryptogram[iteratorValue + 1]) {
      arrayCryptogram.splice(iteratorValue, 2);
      iteratorValue = 0;
    } else iteratorValue++;
  }

  answer = arrayCryptogram.join("");
  return answer;
}

module.exports = problem2;
