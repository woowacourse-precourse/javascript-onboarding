function problem2(cryptogram) {
  var answer = cryptogram;

  while (true) {
    let [breakCondition, tempCryptogram] = overlapDelete(answer);
    answer = tempCryptogram;
    if (breakCondition) break;
  }

  return answer;
}

function overlapDelete(cryptogram) {
  let breakCondition = true;
  let tempCryptogram = "";

  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      breakCondition = false;
      i++;
    } else tempCryptogram += cryptogram[i];
  }

  return [breakCondition, tempCryptogram];
}

module.exports = problem2;
