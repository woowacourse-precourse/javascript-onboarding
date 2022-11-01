function problem2(cryptogram) {
  return cryptogramSolver(cryptogram);
}

function cryptogramSolver(cryptogram) {
  return removeDuplicateChar(cryptogram.split(""));
}

function removeDuplicateChar(createNumberCollection) {
  const nextCryptogramCollection = [];
  let beforeChar = createNumberCollection[0];
  let isBeforeDuplicate = false;
  let isDeleteStep = 0;

  for (let nowChar of createNumberCollection) {
    if (beforeChar === nowChar) {
      isBeforeDuplicate = true;
      isDeleteStep++;
    } else {
      isBeforeDuplicate ? (isBeforeDuplicate = false) : nextCryptogramCollection.push(beforeChar);
    }
    beforeChar = nowChar;
  }
  return isDeleteStep > 0 ? removeDuplicateChar(nextCryptogramCollection) : nextCryptogramCollection.join("");
}

module.exports = problem2;
